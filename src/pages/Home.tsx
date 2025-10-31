import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-primary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Learning Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Study Smarter with <span className="text-secondary">AI</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your notes into interactive quizzes, flashcards, and simplified explanations. 
            Get personalized course recommendations powered by AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 animate-fade-in hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Quiz Generation</h3>
            <p className="text-white/80">
              Automatically create practice questions from your notes with detailed explanations.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Interactive Flashcards</h3>
            <p className="text-white/80">
              Generate key terms and definitions for efficient memorization and review.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Personalized Courses</h3>
            <p className="text-white/80">
              Discover free online courses tailored to your interests and learning goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
