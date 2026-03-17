import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
      className="max-w-3xl mx-auto px-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
        Bạn không việc gì phải chịu đựng một mình.
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
        Bắt đầu hành trình tìm lại sự bình yên ngay hôm nay — chỉ mất chưa đầy một phút để đăng ký.
      </p>
      <Link
        to="/signup"
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-soul font-medium text-lg hover:opacity-90 transition-opacity"
      >
        Tham gia SOULMATE ngay <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  </section>
);

export default CTASection;