import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Free Courses</h1>
            </div>
            <p className="text-muted-foreground">
              Personalized course recommendations based on your learning journey
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Recommended Courses</CardTitle>
                <CardDescription>
                  AI-curated free courses from top universities and companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <GraduationCap className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">No courses yet</p>
                  <p className="text-sm">
                    Complete your profile setup and generate study materials to receive personalized course recommendations
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                  >
                    Complete Profile Setup
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Your Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Tell us about your course/major and interests
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Generate Study Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Create quizzes, flashcards, or simplified explanations from your notes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive curated free courses from reputable sources based on your topics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
