
"use client";

import { useState, useRef, useEffect } from "react";
declare global {
    interface Window {
        google: any;
    }
}

import { Header } from "@/components/landing/header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DeliveryPage() {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapInstance, setMapInstance] = useState<any>(null);
    const [marker, setMarker] = useState<any>(null);

    // Load Google Maps script
    useEffect(() => {
        if (typeof window !== "undefined" && !mapLoaded) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            script.onload = () => setMapLoaded(true);
            document.body.appendChild(script);
        }
    }, [mapLoaded]);

    // Initialize map when loaded
        useEffect(() => {
            if (mapLoaded && mapRef.current) {
                // Default center (India)
                const defaultLatLng = latLng || { lat: 22.9734, lng: 78.6569 };
                // @ts-ignore
                const map = new window.google.maps.Map(mapRef.current, {
                    center: defaultLatLng,
                    zoom: 5,
                });
                setMapInstance(map);

                // Place initial blue geolocator marker
                placeOrMoveMarker(defaultLatLng, map, true);
                reverseGeocode(defaultLatLng);

                // Add click event to map
                // @ts-ignore
                window.google.maps.event.addListener(map, "click", async (event: any) => {
                    const clickedLatLng = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    };
                    setLatLng(clickedLatLng);
                    placeOrMoveMarker(clickedLatLng, map, false);
                    await reverseGeocode(clickedLatLng);
                });
            }
            // eslint-disable-next-line
        }, [mapLoaded]);

        // Place or move marker on map using AdvancedMarkerElement
        const placeOrMoveMarker = (position: { lat: number; lng: number }, map: any, isInitial = false) => {
            if (marker) {
                marker.map = null;
            }
            // @ts-ignore
            const { AdvancedMarkerElement } = window.google.maps.marker;
            const newMarker = new AdvancedMarkerElement({
                map,
                position,
                content: (() => {
                    const div = document.createElement('div');
                    div.style.width = '40px';
                    div.style.height = '40px';
                    div.style.background = 'none';
                    div.innerHTML = isInitial
                        ? `<img src="https://maps.gstatic.com/mapfiles/ms2/micons/blue.png" style="width:40px;height:40px;" />`
                        : `<img src="https://maps.gstatic.com/mapfiles/ms2/micons/man.png" style="width:40px;height:40px;" />`;
                    return div;
                })(),
            });
            setMarker(newMarker);

            // Add drag logic for AdvancedMarkerElement
            let isDragging = false;
            newMarker.content.addEventListener('mousedown', (e: MouseEvent) => {
                isDragging = true;
                e.preventDefault();
            });
            map.addListener('mousemove', (e: any) => {
                if (isDragging) {
                    newMarker.position = e.latLng;
                }
            });
            map.addListener('mouseup', async (e: any) => {
                if (isDragging) {
                    isDragging = false;
                    const dragLatLng = {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                    };
                    setLatLng(dragLatLng);
                    await reverseGeocode(dragLatLng);
                }
            });
        };

    // Reverse geocode to get address
    const reverseGeocode = async (latLngObj: { lat: number; lng: number }) => {
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLngObj.lat},${latLngObj.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        const res = await fetch(geocodeUrl);
        const data = await res.json();
        if (data.results && data.results.length > 0) {
            const result = data.results[0];
            setAddress(result.formatted_address || "");
            // Try to extract city and pincode
            let cityVal = "";
            let pincodeVal = "";
            result.address_components.forEach((comp: any) => {
                if (comp.types.includes("locality")) cityVal = comp.long_name;
                if (comp.types.includes("postal_code")) pincodeVal = comp.long_name;
            });
            setCity(cityVal);
            setPincode(pincodeVal);
        }
    };

        // Get current location and autofill address
        const handleUseLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setLatLng({ lat, lng });
                    if (mapInstance) {
                        mapInstance.setCenter({ lat, lng });
                        mapInstance.setZoom(15);
                        placeOrMoveMarker({ lat, lng }, mapInstance, false);
                    }
                    await reverseGeocode({ lat, lng });
                });
            }
        };

    return (
        <>
            <Header />
            <div className="container py-24 max-w-2xl mx-auto">
                <Card className="p-8 shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center">Delivery Details</h1>
                    <div className="mb-8">
                        <div ref={mapRef} className="w-full h-64 bg-muted/30 rounded-lg mb-4" />
                        <Button className="w-full mb-4" variant="default" onClick={handleUseLocation}>
                            Use My Current Location
                        </Button>
                    </div>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Pincode"
                            value={pincode}
                            onChange={e => setPincode(e.target.value)}
                            required
                        />
                        <Button className="w-full mt-4" variant="default" type="submit">
                            Confirm Delivery
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    );
}
