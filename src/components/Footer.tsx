import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
  src="/LOGO.jpg" 
  alt="Soulmate Logo" 
  className="w-8 h-8 object-contain" 
/>
            <span className="font-semibold">SOULMATE</span>
          </div>
          <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">
            Một nơi tĩnh lặng cho tâm hồn xao động. Kết nối bạn với những người đồng hành và chuyên gia luôn sẵn lòng lắng nghe.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Nền tảng</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/60">
            <li>Cách thức hoạt động</li>
            <li>Tìm người đồng hành</li>
            <li>Đặt lịch chuyên gia</li>
            <li>An toàn & Bảo mật</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Liên hệ</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/60">
            <li>hoangcm7a@gmail.com</li>
            <li>0917025861</li>
            <li>Đại học Hồng Đức, Thanh Hóa</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/40">
        © 2026 SOULMATE - Phát triển bởi Đặng Huy Hoàng. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;