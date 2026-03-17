import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap } from "lucide-react";

const founders = [
  {
    name: "Lê Thị Phương Anh",
    role: "Trưởng nhóm dự án",
    class: "Lớp Dược K13A – Trường CĐ Y tế Thanh Hóa",
    skills: "Lãnh đạo, lập kế hoạch, điều phối",
    goal: "Phát triển dịch vụ chăm sóc sức khỏe mới",
    image: "/founders/phuong-anh.jpg"
  },
  {
    name: "Trương Thị Huyền",
    role: "Phụ trách Tài chính & Kinh doanh",
    class: "Lớp Dược K13A – Trường CĐ Y tế Thanh Hóa",
    skills: "Quan hệ khách hàng, Marketing, Bán hàng",
    goal: "Xây dựng mô hình kinh doanh xã hội bền vững",
    image: "/founders/huyen.jpg"
  },
  {
    name: "Trần Trọng Thành",
    role: "Phụ trách Nghiên cứu Pháp lý",
    class: "Lớp Y sĩ K2B – Trường CĐ Y tế Thanh Hóa",
    skills: "Lắng nghe, nghiên cứu chuyên sâu",
    goal: "Áp dụng kiến thức giúp đỡ cộng đồng",
    image: "/founders/thanh.jpg"
  },
  {
    name: "Nguyễn Thị Thu Nga",
    role: "Phụ trách Kỹ thuật & Media",
    class: "Lớp Dược K13A – Trường CĐ Y tế Thanh Hóa",
    skills: "Giao tiếp, quay và chỉnh sửa video",
    goal: "Mang đến trải nghiệm tuyệt vời cho khách hàng",
    image: "/founders/ha-my.jpg"
  },
  {
    name: "Viên Đình Dũng",
    role: "Marketing & Phát triển Web/App",
    class: "Lớp Y sĩ K2B – Trường CĐ Y tế Thanh Hóa",
    skills: "Dựng web, Content Marketing",
    goal: "Phát triển sản phẩm số vì cộng đồng",
    image: "/founders/dinh-dung.jpg"
  }
];

const advisors = [
  {
    name: "Vũ Thị Thu Hường",
    role: "Giảng viên hướng dẫn chuyên môn",
    org: "Trường CĐ Y tế Thanh Hóa"
  },
  {
    name: "Thạc sĩ Nguyễn Văn Hinh",
    role: "Cố vấn Công nghệ & Chuyển đổi số",
    org: "Viện KH Công nghệ & Đào tạo nguồn nhân lực"
  }
];

const FounderSection = () => (
  <section className="py-20 bg-background" id="team">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">Đội ngũ sáng lập</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto italic">
          "Chạm để cân bằng giữa đời chênh vênh" — Những con người tâm huyết đứng sau sứ mệnh phụng sự xã hội của SoulMate.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
        {founders.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-soul border border-border p-6 soul-shadow flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden border-2 border-primary/20">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" 
                   onError={(e) => (e.currentTarget.src = "https://ui-avatars.com/api/?name=" + person.name)} />
            </div>
            <h3 className="font-semibold text-secondary text-sm mb-1">{person.name}</h3>
            <p className="text-primary text-xs font-medium mb-3">{person.role}</p>
            <div className="text-[10px] text-muted-foreground space-y-2">
              <p><strong>Lớp:</strong> {person.class}</p>
              <p><strong>Kỹ năng:</strong> {person.skills}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-3xl p-8 border border-border">
        <h3 className="text-xl font-medium text-secondary mb-6 text-center">Chuyên gia hỗ trợ</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {advisors.map((adv) => (
            <div key={adv.name} className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">{adv.name}</h4>
                <p className="text-sm text-primary mb-1">{adv.role}</p>
                <p className="text-xs text-muted-foreground">{adv.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;