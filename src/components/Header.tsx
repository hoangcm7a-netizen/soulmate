import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/LOGO.jpg" 
            alt="Soulmate Logo" 
            className="w-10 h-10 object-contain"/>
          <span className="text-lg font-semibold text-secondary">SOULMATE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {isLanding ? (
            <>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cách hoạt động
              </a>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Đăng nhập
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-primary text-primary-foreground rounded-soul text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Bắt đầu ngay
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bảng điều khiển
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Đăng xuất
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <nav className="flex flex-col gap-3 px-6 py-4">
              {isLanding ? (
                <>
                  <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Cách hoạt động</a>
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Đăng nhập</Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary">Bắt đầu ngay</Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Bảng điều khiển</Link>
                  <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Đăng xuất</Link>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;