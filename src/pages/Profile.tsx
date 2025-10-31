import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [courseMajor, setCourseMajor] = useState("");
  const [interests, setInterests] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!courseMajor.trim() || !interests.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // TODO: Implement profile save and course recommendation after backend setup
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Backend Required",
        description: "Please enable Lovable Cloud to save profile and get course recommendations.",
        variant: "destructive",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Complete Your Profile</h1>
            </div>
            <p className="text-muted-foreground">
              Help us personalize your learning experience
            </p>
          </div>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Tell Us About Yourself</CardTitle>
              <CardDescription>
                We'll use this information to recommend relevant free courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="course">Course / Major</Label>
                  <Input
                    id="course"
                    placeholder="e.g., Computer Science, Biology, Business"
                    value={courseMajor}
                    onChange={(e) => setCourseMajor(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    What are you currently studying?
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Interested Topics</Label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., Machine Learning, Data Science, Web Development, Organic Chemistry"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    What topics would you like to learn more about? Separate multiple topics with commas.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Recommendations...
                      </>
                    ) : (
                      "Save & Get Course Recommendations"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                  >
                    Skip for Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="glass-card mt-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-lg">What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                ✨ We'll use AI with Google Search to find 5-7 free online courses from reputable sources
                (universities, major tech companies) that match your interests.
              </p>
              <p>
                📚 These recommendations will be saved to your profile and appear on the Free Courses page.
              </p>
              <p>
                🎯 As you generate study materials, we'll continue to suggest relevant courses based on your topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
