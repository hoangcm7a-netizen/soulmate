import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

// TÁCH BIỆT: Đưa Component Field ra ngoài để tránh bị render lại mất focus
const Field = ({ label, field, type = "text", placeholder, tooltip, value, onChange }: { 
  label: string; 
  field: string; 
  type?: string; 
  placeholder: string; 
  tooltip?: string;
  value: string;
  onChange: (field: string, value: string) => void;
}) => (
  <div>
    <div className="flex items-center gap-1.5 mb-1.5">
      <label className="block text-sm font-medium text-foreground">{label}</label>
      {tooltip && (
        <div className="group relative">
          <HelpCircle className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-secondary text-secondary-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-56 text-center z-10">
            {tooltip}
          </div>
        </div>
      )}
    </div>
    <input
      type={type}
      required
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      className="w-full px-4 py-3 bg-card border border-border rounded-soul text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      placeholder={placeholder}
    />
  </div>
);

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    cccd: "",
    phone: "",
    address: "",
  });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={2.5} />
          <h1 className="text-2xl font-semibold text-secondary mb-2">Hoàn thiện hồ sơ</h1>
          <p className="text-sm text-muted-foreground">Thông tin này giúp chúng tôi kết nối bạn với sự hỗ trợ an toàn và cá nhân hóa nhất[cite: 81, 90].</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field 
            label="Họ và tên" 
            field="name" 
            placeholder="Ví dụ: Nguyễn Văn A" 
            value={form.name} 
            onChange={update} 
          />
          <Field 
            label="Tuổi" 
            field="age" 
            type="number" 
            placeholder="Ví dụ: 25" 
            value={form.age} 
            onChange={update} 
          />
          <Field 
            label="Số Căn cước công dân (CCCD)" 
            field="cccd" 
            placeholder="0123456789XX" 
            tooltip="Xác thực danh tính bắt buộc qua CCCD để đảm bảo an toàn cho cả hai bên[cite: 135, 310]." 
            value={form.cccd} 
            onChange={update} 
          />
          <Field 
            label="Số điện thoại" 
            field="phone" 
            type="tel" 
            placeholder="09xx xxx xxx" 
            value={form.phone} 
            onChange={update} 
          />
          <Field 
            label="Địa chỉ thường trú" 
            field="address" 
            placeholder="Quận/Huyện, Tỉnh/Thành phố" 
            tooltip="Dùng để định vị và hỗ trợ trong các tình huống khẩn cấp tại địa phương[cite: 136, 148]." 
            value={form.address} 
            onChange={update} 
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-soul font-medium hover:opacity-90 transition-opacity mt-2"
          >
            Đến Bảng điều khiển
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfileSetup;