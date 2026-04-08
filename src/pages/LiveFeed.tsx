import { Link } from "react-router-dom";
import { Search, Star, ArrowRight, Headphones, Lightbulb, Watch, Plus } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const products = [
  {
    id: "aerostream-x1",
    name: "AeroStream X1",
    category: "Electronics",
    rating: 4.8,
    description: "Next-gen spatial audio with active noise cancellation and 48-hour battery life.",
    tags: ["Hi-Res Audio", "Bluetooth 5.3", "Water Resistant"],
    icon: Headphones,
    color: "text-primary",
  },
  {
    id: "lumina-desk-lamp",
    name: "Lumina Desk Lamp",
    category: "Home Office",
    rating: 4.5,
    description: "Smart LED lighting with adjustable color temperature and wireless charging base.",
    tags: ["Eye Care Tech", "Voice Control", "Touch Dimming"],
    icon: Lightbulb,
    color: "text-rateit-cream",
  },
  {
    id: "titan-watch-pro",
    name: "Titan Watch Pro",
    category: "Wearables",
    rating: 4.6,
    description: "Military-grade durability with advanced health tracking and sapphire glass.",
    tags: ["ECG Monitoring", "GPS Tracking", "30-Day Battery"],
    icon: Watch,
    color: "text-rateit-silver",
  },
  {
    id: "ecoflask-2",
    name: "EcoFlask 2.0",
    category: "Lifestyle",
    rating: 4.2,
    description: "Triple-insulated stainless steel that keeps beverages cold for up to 48 hours.",
    tags: ["BPA Free", "Leak Proof", "Recyclable"],
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-rateit-teal">
        <path d="M8 2h8v4H8V2Z" />
        <path d="M7 6h10l1 16H6L7 6Z" />
      </svg>
    ),
    color: "text-rateit-teal",
  },
];

const LiveFeed = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Live <span className="text-primary">Feed</span>
            </h1>
            <p className="text-sm text-accent mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
              Active monitoring across 4 catalog categories.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { value: "1.2k", label: "DAILY RATES" },
              { value: "4.8", label: "AVG SCORE" },
              { value: "94", label: "ONLINE", prefix: "" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card text-center min-w-[80px]">
                <div className="text-xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter by product name, category, or trend..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {filtered.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                    <IconComponent className={`w-8 h-8 ${product.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-wider text-primary font-medium">
                        {product.category}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                        <Star size={10} className="fill-accent" /> {product.rating}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-2.5 h-2.5 rounded-full bg-accent" />
                        ))}
                      </div>
                      <Link
                        to={`/submit/${product.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                      >
                        Submit Vibe <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Register Asset */}
        <div className="flex justify-center mb-16">
          <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center max-w-sm w-full hover:border-primary/60 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
              <Plus size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Register Asset</h3>
            <p className="text-xs text-muted-foreground">
              Connect your product to our global feedback network.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveFeed;
