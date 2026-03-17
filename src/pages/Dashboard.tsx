import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Stethoscope, Search, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const ServiceCard = ({ title, desc, icon, cta, to }: { title: string; desc: string; icon: React.ReactNode; cta: string; to: string }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.15 }}
    className="bg-card p-8 rounded-soul border border-border soul-shadow flex flex-col justify-between h-64"
  >
    <div>
      <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h2 className="text-xl font-medium text-secondary mb-2">{title}</h2>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[28ch]">{desc}</p>
    </div>
    <Link
      to={to}
      className="w-full py-3 bg-secondary text-secondary-foreground rounded-soul font-medium hover:opacity-90 transition-opacity text-center block"
    >
      {cta}
    </Link>
  </motion.div>
);

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
          >
            <h1 className="text-3xl font-medium text-secondary">Chào mừng bạn quay lại</h1>
            <p className="text-muted-foreground mt-1">Hiện tại bạn đang cảm thấy thế nào?</p>
          </motion.div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-full text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Tìm chủ đề hoặc chuyên gia..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Tâm sự cùng người lạ"
            desc="Giải tỏa cảm xúc tức thì cùng người đồng hành trong không gian ẩn danh."
            icon={<MessageCircle className="w-6 h-6 text-primary" />}
            cta="Tìm người đồng hành"
            to="/chat"
          />
          <ServiceCard
            title="Chuyên gia tư vấn"
            desc="Nhận sự hướng dẫn chuyên sâu từ đội ngũ bác sĩ và chuyên gia tâm lý."
            icon={<Stethoscope className="w-6 h-6 text-secondary" />}
            cta="Đặt lịch hẹn"
            to="/chat"
          />
          <ServiceCard
            title="Trải nghiệm cùng nhau"
            desc="Kết nối thực tế thông qua các hoạt động mua sắm và hẹn hò văn minh."
            icon={<Heart className="w-6 h-6 text-accent" />}
            cta="Khám phá ngay"
            to="/chat"
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;