import { motion } from "framer-motion";
import { UserPlus, MessageCircle, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Tạo hồ sơ cá nhân",
    desc: "Đăng ký và hoàn tất hồ sơ ngắn gọn, bảo mật để chúng tôi có thể kết nối bạn với sự hỗ trợ phù hợp nhất.",
  },
  {
    icon: MessageCircle,
    title: "Lựa chọn lộ trình",
    desc: "Trút bỏ tâm sự ẩn danh cùng Người đồng hành, hoặc đặt lịch tham vấn cùng các chuyên gia tâm lý có bằng cấp.",
  },
  {
    icon: Star,
    title: "Phát triển và Chữa lành",
    desc: "Đánh giá trải nghiệm, theo dõi tiến trình và quay lại bất cứ khi nào bạn cần một không gian an toàn.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-muted/50 py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">Cách thức hoạt động</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Ba bước đơn giản để tìm thấy sự hỗ trợ mà bạn xứng đáng có được.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.32, 0, 0.67, 0] }}
            className="bg-card rounded-soul border border-border p-8 soul-shadow text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-secondary mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;