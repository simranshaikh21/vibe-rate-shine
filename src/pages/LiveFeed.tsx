import { Link } from "react-router-dom";
import { Search, Star, ArrowRight, ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import headphonesImg from "@/assets/headphones.png";
import deskLampImg from "@/assets/desk-lamp.png";
import smartwatchImg from "@/assets/smartwatch.png";
import waterBottleImg from "@/assets/water-bottle.png";

const products = [
  {
    id: "aerostream-x1",
    name: "AeroStream X1",
    category: "Electronics",
    rating: 4.8,
    description: "Next-gen spatial audio with active noise cancellation and 48-hour battery life.",
    tags: ["Hi-Res Audio", "Bluetooth 5.3", "Water Resistant"],
    image: headphonesImg,
    animDelay: "0s",
  },
  {
    id: "lumina-desk-lamp",
    name: "Lumina Desk Lamp",
    category: "Home Office",
    rating: 4.5,
    description: "Smart LED lighting with adjustable color temperature and wireless charging base.",
    tags: ["Eye Care Tech", "Voice Control", "Touch Dimming"],
    image: deskLampImg,
    animDelay: "0.1s",
  },
  {
    id: "titan-watch-pro",
    name: "Titan Watch Pro",
    category: "Wearables",
    rating: 4.6,
    description: "Military-grade durability with advanced health tracking and sapphire glass.",
    tags: ["ECG Monitoring", "GPS Tracking", "30-Day Battery"],
    image: smartwatchImg,
    animDelay: "0.2s",
  },
  {
    id: "ecoflask-2",
    name: "EcoFlask 2.0",
    category: "Lifestyle",
    rating: 4.2,
    description: "Triple-insulated stainless steel that keeps beverages cold for up to 48 hours.",
    tags: ["BPA Free", "Leak Proof", "Recyclable"],
    image: waterBottleImg,
    animDelay: "0.3s",
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
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:underline transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl font-display">
              Live <span className="gradient-text">Feed</span>
            </h1>
            <p className="text-sm text-accent mt-2 flex items-center gap-1.5 font-section">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
              Active monitoring across 4 catalog categories.
            </p>
          </div>

          <div className="flex gap-4 animate-slide-in-right">
            {[
              { value: "1.2k", label: "DAILY RATES" },
              { value: "4.8", label: "AVG SCORE" },
              { value: "94", label: "ONLINE" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card text-center min-w-[80px] animate-scale-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-section">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-10 animate-fade-up">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter by product name, category, or trend..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-section"
          />
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="glass-card p-6 hover-tilt hover-lift group animate-glow-pulse"
              style={{
                animationDelay: product.animDelay,
              }}
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-muted/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="w-16 h-16 object-contain product-img-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-semibold font-section">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      <Star size={10} className="fill-accent" /> {product.rating}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-section">{product.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium font-section"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-slow"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      ))}
                    </div>
                    <Link
                      to={`/submit/${product.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 font-section"
                    >
                      Submit Vibe <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Register Asset */}
        <div className="flex justify-center mb-16">
          <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center max-w-sm w-full hover:border-primary/60 transition-all cursor-pointer animate-bounce-slow hover:scale-105">
            <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 animate-wiggle">
              <Plus size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-foreground mb-1">Register Asset</h3>
            <p className="text-xs text-muted-foreground font-section">
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
