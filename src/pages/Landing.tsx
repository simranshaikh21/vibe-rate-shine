import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, CheckCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        {/* Subtle floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-bounce-slow" />
        
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8 font-section animate-bounce-slow">
              <Sparkles size={14} className="animate-wiggle" />
              #1 Product Feedback Interface
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display leading-tight mb-6 animate-fade-up">
            <span className="text-foreground">Master Your</span>
            <br />
            <span className="gradient-text">Product Vibe.</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-up-delay font-section">
            Capture lightning-fast ratings with an interface designed for the next
            generation of consumers. Sleek, fast, and undeniably modern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <Link
              to="/feed"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-primary to-rateit-blue text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 font-section"
            >
              Launch Experience <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-all hover:scale-105 active:scale-95 font-section"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-display mb-8">
              <span className="text-foreground">Built for Speed.</span>
              <br />
              <span className="text-foreground">Styled for Impact.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 hover-lift rounded-xl p-3 -ml-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 animate-wiggle">
                  <Zap size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Micro-Interactions</h3>
                  <p className="text-sm text-muted-foreground font-section">
                    Every tap, hover, and scroll triggers a meaningful visual response, creating an addictive UX.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 hover-lift rounded-xl p-3 -ml-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 animate-bounce-slow">
                  <CheckCircle size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Instant Gratification</h3>
                  <p className="text-sm text-muted-foreground font-section">
                    Animated toasts and feedback animations provide immediate confirmation to user actions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="glow-border rounded-2xl p-8 w-72 flex flex-col items-center gap-6 animate-tilt animate-glow-pulse">
              <div className="w-20 h-20 text-rateit-cream animate-float">
                <Star size={80} className="fill-rateit-cream/20 text-rateit-cream/40" />
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-rateit-cream animate-pulse-slow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium font-section animate-bounce-slow">
                +42% Engagement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy / About Bottom Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Privacy Policy", desc: "Your data is encrypted end-to-end. We never sell or share your personal information with third parties." },
            { title: "Terms of Service", desc: "Fair and transparent terms that protect both users and product creators in the feedback ecosystem." },
            { title: "Data Security", desc: "SOC 2 compliant infrastructure with 99.9% uptime guarantee and real-time threat monitoring." },
          ].map((item, i) => (
            <div key={item.title} className="glass-card p-6 hover-tilt hover-lift" style={{ animationDelay: `${i * 0.15}s` }}>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-section">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
