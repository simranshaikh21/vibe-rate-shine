import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Send, Headphones, Lightbulb, Watch } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const productData: Record<string, { name: string; category: string; specs: string[]; icon: React.ElementType }> = {
  "aerostream-x1": {
    name: "AeroStream X1",
    category: "Electronics",
    specs: ["Hi-Res Audio", "Bluetooth 5.3", "Water Resistant"],
    icon: Headphones,
  },
  "lumina-desk-lamp": {
    name: "Lumina Desk Lamp",
    category: "Home Office",
    specs: ["Eye Care Tech", "Voice Control", "Touch Dimming"],
    icon: Lightbulb,
  },
  "titan-watch-pro": {
    name: "Titan Watch Pro",
    category: "Wearables",
    specs: ["ECG Monitoring", "GPS Tracking", "30-Day Battery"],
    icon: Watch,
  },
  "ecoflask-2": {
    name: "EcoFlask 2.0",
    category: "Lifestyle",
    specs: ["BPA Free", "Leak Proof", "Recyclable"],
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-10 h-10">
        <path d="M8 2h8v4H8V2Z" />
        <path d="M7 6h10l1 16H6L7 6Z" />
      </svg>
    ),
  },
};

const SubmitVibe = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [notes, setNotes] = useState("");

  const product = productData[productId || ""] || productData["aerostream-x1"];
  const IconComponent = product.icon;

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting.");
      return;
    }
    toast.success("Vibe submitted successfully! 🎉");
    setTimeout(() => navigate("/feed"), 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/feed"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-10 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Product Card */}
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-xl text-foreground">{product.name}</h2>
            <p className="text-sm text-muted-foreground mb-6">{product.category}</p>

            <div className="w-full text-left">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                Specifications
              </h4>
              <ul className="space-y-2">
                {product.specs.map((spec) => (
                  <li key={spec} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rating Form */}
          <div className="glass-card p-8">
            <h2 className="font-heading font-bold text-xl text-foreground text-center mb-6">
              How was the vibe?
            </h2>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={36}
                    className={`transition-colors ${
                      star <= (hoverRating || rating)
                        ? "fill-rateit-cream text-rateit-cream"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Notes */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                Qualitative Notes
              </h4>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share the details behind your rating..."
                className="w-full h-28 px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-rateit-blue text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Submit Intel <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitVibe;
