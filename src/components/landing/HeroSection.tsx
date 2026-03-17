import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">An toàn & Bảo mật tuyệt đối</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-tight mb-6">
            Một nơi tĩnh lặng cho tâm hồn xao động.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
            Kết nối với những Người đồng hành chuyên nghiệp để được hỗ trợ cảm xúc ẩn danh, hoặc tham vấn các chuyên gia tâm lý — tất cả trong một không gian an toàn, không phán xét.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-soul font-medium hover:opacity-90 transition-opacity"
            >
              Bắt đầu ngay <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-soul font-medium text-secondary hover:bg-muted transition-colors"
            >
              Tìm hiểu thêm
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            Hơn 12,480 người đã tìm thấy sự bình yên trong tháng này.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.32, 0, 0.67, 0] }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-soul border border-border soul-shadow-lg p-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-primary">S</span>
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-none p-4 text-sm text-foreground leading-relaxed">
                  Tôi luôn ở đây để lắng nghe. Bất cứ khi nào bạn sẵn sàng, hãy chia sẻ điều đang đè nặng trong lòng bạn nhé.
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-secondary">H</span>
                </div>
                <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tr-none p-4 text-sm leading-relaxed">
                  Dạo gần đây mình cảm thấy rất áp lực và mệt mỏi. Thực sự mình cần một ai đó để nói chuyện.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-primary">S</span>
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-none p-4 text-sm text-foreground leading-relaxed">
                  Để nói ra được điều này cần rất nhiều dũng khí. Bạn đang ở trong một không gian an toàn rồi, cứ từ từ nhé. 💚
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;