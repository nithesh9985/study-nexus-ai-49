import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Sparkles, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Simplify = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setInputText(event.target?.result as string);
        toast({
          title: "File uploaded",
          description: "Your notes have been loaded successfully.",
        });
      };
      reader.readAsText(file);
    } else {
      toast({
        title: "PDF Support Coming Soon",
        description: "PDF parsing will be available after backend setup.",
        variant: "destructive",
      });
    }
  };

  const handleSimplify = async () => {
    if (!inputText.trim()) {
      toast({
        title: "No content",
        description: "Please paste or upload your notes first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // TODO: Implement AI simplification after backend setup
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Backend Required",
        description: "Please enable Lovable Cloud to use AI features.",
        variant: "destructive",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Simplify Concepts</h1>
            </div>
            <p className="text-muted-foreground">
              Get simple explanations for complex topics using easy-to-understand analogies
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Input Your Notes</CardTitle>
                <CardDescription>
                  Paste your notes or upload a text file to simplify complex concepts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Paste your notes here</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter your study material with complex concepts..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[200px]"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload a text file</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="file"
                      type="file"
                      accept=".txt,.pdf"
                      onChange={handleFileUpload}
                      className="cursor-pointer"
                    />
                    <Button variant="outline" size="icon">
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Supports .txt files (PDF support coming soon)
                  </p>
                </div>

                <Button
                  onClick={handleSimplify}
                  disabled={isLoading || !inputText.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Simplifying...
                    </>
                  ) : (
                    "Simplify This Concept"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplify;
