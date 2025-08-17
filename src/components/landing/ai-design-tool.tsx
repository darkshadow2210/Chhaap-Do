'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { generateDesignSuggestions } from '@/ai/flows/generate-design-suggestions';
import { useToast } from "@/hooks/use-toast"
import { Loader2, Wand2 } from 'lucide-react';

export function AiDesignTool() {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [preferences, setPreferences] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setFilePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload a file.",
      });
      return;
    }

    setIsLoading(true);
    setSuggestions([]);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const contentDataUri = reader.result as string;
        const result = await generateDesignSuggestions({
          contentDataUri,
          userPreferences: preferences,
        });
        setSuggestions(result.designSuggestions);
      };
      reader.onerror = () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to read the file.",
        });
      };
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while generating suggestions.",
      });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-design-tool" className="container py-24 sm:py-32">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold">Your Design Studio</CardTitle>
          <CardDescription>Bring your ideas to life. Upload your content and get instant design inspiration.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>1. Upload Content</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <Input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
                  {filePreview && (
                    <div className="mt-4 border rounded-lg p-2">
                       <Image src={filePreview} alt="File preview" width={200} height={200} className="rounded-md mx-auto" />
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Describe Your Vision (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="e.g., 'a vibrant, modern style for a birthday t-shirt', 'use blue and yellow'"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </CardContent>
              </Card>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Ideas...</>
                ) : (
                  <><Wand2 className="mr-2 h-4 w-4" /> Spark Creativity</>
                )}
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Design Ideas</h3>
              {isLoading ? (
                 <div className="space-y-2">
                    <div className="h-10 bg-muted rounded-md animate-pulse" />
                    <div className="h-10 bg-muted rounded-md animate-pulse w-5/6" />
                    <div className="h-10 bg-muted rounded-md animate-pulse w-4/6" />
                 </div>
              ) : suggestions.length > 0 ? (
                <ul className="space-y-2 list-disc list-inside bg-card p-4 rounded-lg border">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-muted-foreground">{suggestion}</li>
                  ))}
                </ul>
              ) : (
                <div className="text-muted-foreground text-center p-8 border rounded-lg">
                  Your design ideas will appear here.
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
