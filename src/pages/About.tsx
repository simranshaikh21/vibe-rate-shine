import { Users, Target, Zap, Globe, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const About = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-16">
       <div className="container mx-auto px-6 pt-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16"> 
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            <span className="text-foreground">About </span>
            <span className="gradient-text">RateIt</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            We're building the future of consumer feedback — one vibe at a time. RateIt was born from the belief that product ratings should feel as premium as the products themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { icon: Target, title: "Our Mission", desc: "To democratize product feedback by making every consumer's voice count through beautiful, intuitive interfaces." },
            { icon: Users, title: "Our Team", desc: "A diverse group of designers, engineers, and product thinkers united by the passion for vibe-driven development." },
            { icon: Zap, title: "Our Tech", desc: "Built on cutting-edge frameworks with GPU-accelerated animations, ensuring sub-millisecond response times." },
            { icon: Globe, title: "Our Reach", desc: "Serving feedback networks across 40+ countries with localized experiences and real-time sync." },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
