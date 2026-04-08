import { Star, Shield, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const Services = () => {
  const navigate = useNavigate();
  return (
    <Button 
  variant="ghost" 
  onClick={() => navigate(-1)} 
  className="flex items-center gap-2 mb-6"
>
  <ArrowLeft className="w-4 h-4" />
  Back
</Button>
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-display leading-tight mb-8">
              <span className="text-foreground">A Culture of</span>
              <br />
              <span className="gradient-text">High-Performance.</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-4">
              RateIt isn't just a rating app; it's a high-performance feedback engine built for the age of "Vibe Coding."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that consumer data should be as beautiful as the products it represents. Our interface leverages GPU-accelerated animations and an adaptive design language to ensure maximum user retention.
            </p>

            <div className="flex gap-4 mb-10">
              <div className="stat-card">
                <div className="text-2xl font-heading font-bold text-rateit-cream">0ms</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">UI Blocking</div>
              </div>
              <div className="stat-card">
                <div className="text-2xl font-heading font-bold text-foreground">∞</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Scalability</div>
              </div>
            </div>
          </div>

          {/* Animated Star Card */}
          <div className="flex justify-center">
            <div className="glow-border rounded-2xl p-10 w-72 flex flex-col items-center gap-4 animate-tilt animate-glow-pulse relative">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-medium animate-pulse-slow">
                INTERNAL ENGINE V3.4
              </div>
              <Star size={80} className="text-primary/50 fill-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Secure Protocols */}
      <section className="container mx-auto px-6 pb-20">
        <div className="glass-card p-6 max-w-2xl">
          <div className="flex items-start gap-3">
            <Shield size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Secure Protocols</h3>
              <p className="text-sm text-muted-foreground">
                Every feedback submission is cryptographically signed and verified for authenticity before reaching the analytics pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
