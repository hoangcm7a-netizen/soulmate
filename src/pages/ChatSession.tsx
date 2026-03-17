import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Flag, Star, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

type Message = { id: number; type: "incoming" | "outgoing"; text: string };

const initialMessages: Message[] = [
  { id: 1, type: "incoming", text: "Tôi luôn ở đây để lắng nghe. Bất cứ khi nào bạn sẵn sàng, hãy chia sẻ điều đang đè nặng trong lòng bạn nhé." },
];

const ChatSession = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [showReport, setShowReport] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), type: "outgoing", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    // Phản hồi giả lập từ Người đồng hành
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: "incoming", text: "Cảm ơn bạn đã tin tưởng chia sẻ. Để nói ra được điều này cần rất nhiều dũng khí. Hãy kể thêm cho mình về cảm giác của bạn lúc này nhé." },
      ]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 flex flex-col">
        {/* Điều hướng và Hành động */}
        <div className="flex items-center justify-between mb-4">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Quay lại Bảng điều khiển
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setShowReview(true)}
              className="text-xs font-medium text-primary hover:underline px-3 py-1"
            >
              Kết thúc & Đánh giá
            </button>
            <button
              onClick={() => setShowReport(true)}
              className="text-xs font-medium text-muted-foreground hover:text-destructive px-3 py-1 transition-colors"
            >
              <Flag className="w-3.5 h-3.5 inline mr-1" />Báo cáo
            </button>
          </div>
        </div>

        {/* Khung Chat */}
        <div className="flex-1 bg-card rounded-soul border border-border overflow-hidden flex flex-col soul-shadow">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            <span className="text-sm font-medium text-secondary">Phiên trò chuyện cùng Người đồng hành (Sarah)</span>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === "outgoing" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-4 text-sm leading-relaxed ${
                      msg.type === "outgoing"
                        ? "bg-secondary text-secondary-foreground rounded-2xl rounded-tr-none"
                        : "bg-muted text-foreground rounded-2xl rounded-tl-none border border-border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-muted border-none rounded-soul px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Trút bỏ gánh nặng lòng bạn tại đây..."
              />
              <button type="submit" className="bg-primary text-primary-foreground px-5 rounded-soul font-medium hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Modal Đánh giá (Review) */}
        <AnimatePresence>
          {showReview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card rounded-soul border border-border p-8 max-w-sm w-full soul-shadow-lg"
              >
                <h3 className="text-lg font-medium text-secondary mb-2">Trải nghiệm của bạn thế nào?</h3>
                <p className="text-sm text-muted-foreground mb-6">Phản hồi của bạn giúp SOULMATE nâng cao chất lượng thấu cảm[cite: 260].</p>
                <div className="flex gap-2 mb-6 justify-center">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button key={s} onClick={() => setRating(s)}>
                      <Star
                        className={`w-8 h-8 transition-colors ${s <= rating ? "text-accent fill-accent" : "text-border"}`}
                      />
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full bg-muted border-none rounded-soul px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none h-24 mb-4"
                  placeholder="Chia sẻ thêm cảm nhận của bạn (không bắt buộc)..."
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowReview(false)}
                    className="flex-1 py-2.5 border border-border rounded-soul text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Hủy
                  </button>
                  <Link
                    to="/dashboard"
                    className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-soul text-sm font-medium text-center hover:opacity-90 transition-opacity"
                  >
                    Gửi đánh giá
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Báo cáo (Report) */}
        <AnimatePresence>
          {showReport && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card rounded-soul border border-border p-8 max-w-sm w-full soul-shadow-lg"
              >
                <h3 className="text-lg font-medium text-secondary mb-2">Báo cáo sự cố</h3>
                <p className="text-sm text-muted-foreground mb-6">Sự an toàn của bạn là ưu tiên hàng đầu. Vui lòng mô tả vấn đề gặp phải[cite: 138, 278].</p>
                <textarea
                  className="w-full bg-muted border-none rounded-soul px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none h-28 mb-4"
                  placeholder="Mô tả chi tiết sự việc..."
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowReport(false)}
                    className="flex-1 py-2.5 border border-border rounded-soul text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={() => setShowReport(false)}
                    className="flex-1 py-2.5 bg-destructive text-destructive-foreground rounded-soul text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Gửi báo cáo
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatSession;