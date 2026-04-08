import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xs">R</span>
              </div>
              <span className="font-heading font-bold text-foreground">
                Rate<span className="text-primary">It</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The professional standard for consumer feedback and real-time product intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              {["Mobile App", "Enterprise", "Security"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "API Docs", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 RateIt Interface. Built for high-performance feedback.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
