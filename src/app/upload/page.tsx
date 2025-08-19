"use client";

import { Header } from "@/components/landing/header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { UploadCloud, Printer, CheckCircle2 } from "lucide-react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploaded(false);
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploaded(true);
      setTimeout(() => {
        router.push("/delivery");
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <div className="container py-24 max-w-2xl mx-auto">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4 mb-8">
            <UploadCloud className="h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold">Upload & Print</h1>
            <p className="text-muted-foreground text-center text-lg">
              Easily upload your documents or designs and get them printed with Chhaap Do.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.svg,.ppt,.pptx,.xls,.xlsx"
              onChange={handleFileChange}
              className="w-full"
              disabled={uploaded}
            />
            <Button
              className="w-full"
              variant="default"
              onClick={handleUpload}
              disabled={!file || uploaded}
            >
              {uploaded ? "Uploaded! Redirecting..." : "Upload & Print"}
            </Button>
            {uploaded && (
              <div className="flex flex-col items-center gap-2 mt-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <span className="text-green-600 font-semibold">File uploaded successfully!</span>
                <span className="text-muted-foreground">Redirecting to delivery details...</span>
              </div>
            )}
          </div>
        </Card>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">How It Works</h2>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Upload your document or design</li>
              <li>Choose your print options</li>
              <li>Get matched with the best local printer</li>
              <li>Receive your prints at your doorstep</li>
            </ul>
          </Card>
          <Card className="p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Why Chhaap Do?</h2>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Fast, smart, and affordable printing</li>
              <li>Quality assurance and personalization</li>
              <li>Secure online payments</li>
              <li>Business-friendly features</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
