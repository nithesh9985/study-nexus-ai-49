import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, FileText, MessageSquare, Sparkles, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Practice Quiz",
      description: "Generate 4 multiple-choice questions from your notes",
      icon: Brain,
      path: "/quiz",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Flashcards",
      description: "Create 5-7 key terms and definitions",
      icon: BookOpen,
      path: "/flashcards",
      gradient: "from-secondary to-secondary/80",
    },
    {
      title: "Simplify",
      description: "Get simple explanations for complex concepts",
      icon: Sparkles,
      path: "/simplify",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Study Chat",
      description: "Ask questions about your notes",
      icon: MessageSquare,
      path: "/chat",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Free Courses",
      description: "Discover personalized learning resources",
      icon: GraduationCap,
      path: "/courses",
      gradient: "from-primary/80 to-secondary/80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">
              Choose a tool to transform your notes into interactive study materials
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card
                key={feature.path}
                className="cursor-pointer hover:scale-105 transition-transform glass-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Sessions */}
          <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Recent Study Sessions
              </CardTitle>
              <CardDescription>
                Your 5 most recent AI-generated study materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No study sessions yet. Start by uploading your notes!</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => navigate("/quiz")}
                >
                  Create Your First Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
