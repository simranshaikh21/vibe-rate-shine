import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isLogin ? "Welcome back! 🎉" : "Account created successfully!");
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-6">
      <div className="glass-card p-8 w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {isLogin ? "Sign in to continue your vibe." : "Join the feedback revolution."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-rateit-blue text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
