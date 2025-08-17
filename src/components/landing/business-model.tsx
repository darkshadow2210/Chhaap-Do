import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BusinessModel() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Business Model</h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          A flexible and scalable model designed for growth and customer value.
        </p>
      </div>
      <Tabs defaultValue="b2c-b2b" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="b2c-b2b" className="py-2">B2C/B2B Orders</TabsTrigger>
          <TabsTrigger value="subscriptions" className="py-2">Subscriptions & Wallets</TabsTrigger>
          <TabsTrigger value="print-on-demand" className="py-2">Print-on-Demand</TabsTrigger>
          <TabsTrigger value="marketplace" className="py-2">Commission Marketplace</TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <TabsContent value="b2c-b2b">
            <Card>
              <CardHeader>
                <CardTitle>B2C/B2B One-Time Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Catering to both individual students and businesses for their one-off printing needs. From assignments to marketing materials, we handle it all with transparent pricing and reliable service.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subscriptions">
            <Card>
              <CardHeader>
                <CardTitle>Subscriptions & Wallets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>For our frequent users like college societies, coaching centers, and corporates. Our subscription plans and wallet system offer bulk discounts, priority service, and streamlined billing.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="print-on-demand">
            <Card>
              <CardHeader>
                <CardTitle>Print-on-Demand (POD)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Empowering creators and brands to sell custom merchandise without inventory. We handle the printing and shipping, you focus on creating. Perfect for t-shirts, mugs, posters, and more.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="marketplace">
            <Card>
              <CardHeader>
                <CardTitle>Commission Marketplace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>We operate a marketplace model, taking a small commission from the print shops on our platform for every successful order. This ensures a win-win for both our partners and customers.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
