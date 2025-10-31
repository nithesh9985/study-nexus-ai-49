import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MessageSquare, Upload, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState("");
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

  const handleAskQuestion = async () => {
    if (!inputText.trim()) {
      toast({
        title: "No context",
        description: "Please upload your notes first to provide context.",
        variant: "destructive",
      });
      return;
    }

    if (!question.trim()) {
      toast({
        title: "No question",
        description: "Please enter a question to ask.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // TODO: Implement AI chat after backend setup
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Study Chat</h1>
            </div>
            <p className="text-muted-foreground">
              Ask questions about your notes and get AI-powered answers
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Upload Your Notes</CardTitle>
                <CardDescription>
                  Provide context for the AI by uploading your study material
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Paste your notes here</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter your study material..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[150px]"
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
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Ask a Question</CardTitle>
                <CardDescription>
                  The AI will answer based on your uploaded notes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="question">Your question</Label>
                  <div className="flex gap-2">
                    <Textarea
                      id="question"
                      placeholder="What would you like to know about your notes?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="min-h-[100px]"
                      disabled={!inputText.trim()}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleAskQuestion}
                  disabled={isLoading || !inputText.trim() || !question.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Thinking...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Ask Question
                    </>
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

export default Chat;
