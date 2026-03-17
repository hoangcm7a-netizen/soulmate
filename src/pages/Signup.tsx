import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Eye, EyeOff, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }
    setError("");
    // Chuyển hướng sang thiết lập hồ sơ để xác thực CCCD [cite: 135]
    navigate("/profile-setup");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-primary" strokeWidth={2.5} />
            <span className="text-lg font-semibold text-secondary">SOULMATE</span>
          </Link>
          <h1 className="text-2xl font-semibold text-secondary mb-2">Bắt đầu hành trình</h1>
          <p className="text-sm text-muted-foreground">Tạo tài khoản để tìm thấy sự thấu cảm dành riêng cho bạn.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-card border border-border rounded-soul text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="email@vidu.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded-soul text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-10"
                placeholder="Ít nhất 8 ký tự"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Nhập lại mật khẩu</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-3 bg-card border ${error ? 'border-destructive' : 'border-border'} rounded-soul text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
              placeholder="Xác nhận lại mật khẩu"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-destructive text-xs mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-soul font-medium hover:opacity-90 transition-opacity"
          >
            Đăng ký
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Bạn đã có tài khoản?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Đăng nhập
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;