/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Play, 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  BarChart3, 
  Clock, 
  Plus, 
  Minus,
  MapPin,
  ShieldCheck,
  TrendingDown,
  LayoutGrid,
  Zap,
  Phone,
  Globe,
  Facebook,
  Youtube,
  Send,
  Search,
  Users2,
  Share2,
  AlertTriangle,
  UserX,
  Database,
  Frown,
  Coins,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import React from 'react';

// Pricing data
const PRICING_PLANS = [
  {
    id: 'uid',
    name: 'MKT UID',
    price: '2',
    unit: 'tr/ Năm',
    description: 'Công cụ quét Data số 1',
    features: ['Quét khách hàng trong Group BĐS', 'Quét người tương tác Fanpage đối thủ', 'Chuyển đổi UID sang Số điện thoại']
  },
  {
    id: 'zalo',
    name: 'MKT ZALO',
    price: '3',
    unit: 'tr/ Năm',
    description: 'Vua Marketing Zalo',
    features: ['Kết bạn hàng loạt đúng đối tượng', 'Gửi tin nhắn cá nhân hóa hàng loạt', 'Quản lý hàng trăm tài khoản Zalo']
  },
  {
    id: 'maps',
    name: 'MKT MAPS',
    price: '3',
    unit: 'tr/ Năm',
    description: 'Quét khách theo vị trí',
    features: ['Quét khách theo tọa độ khu vực', 'Thu thập data từ Google Business', 'Phân tích đối thủ cạnh tranh quanh khu vực']
  },
  {
    id: 'combo',
    name: 'COMBO BĐS',
    price: '9',
    unit: 'M',
    description: 'Trọn bộ 3 phần mềm & Bonus đặc biệt',
    highlight: true,
    features: [
      'Tặng khóa học Marketing BĐS',
      'Hỗ trợ 1-1 trọn đời'
    ]
  }
];

// FAQ data
const FAQS = [
  {
    question: "Phần mềm có dễ sử dụng không?",
    answer: "Cực kỳ dễ dàng! Chúng tôi đã tối ưu giao diện hoàn toàn bằng tiếng Việt. Ngoài ra, MKT Software cung cấp bộ video hướng dẫn chi tiết và đội ngũ kỹ thuật sẽ cài đặt trực tiếp qua UltraViewer cho bạn."
  },
  {
    question: "Có sợ bị khóa tài khoản Zalo không?",
    answer: "Phần mềm của chúng tôi mô phỏng thao tác như người dùng thật, có các cơ chế chống chặn và delay hợp lý giúp tài khoản của bạn luôn an toàn."
  },
  {
    question: "Phần mềm có dùng được trên điện thoại không?",
    answer: "Hiện tại các phần mềm chuyên sâu của MKT Software chạy tốt nhất trên môi trường Windows để đảm bảo hiệu suất xử lý dữ liệu lớn."
  },
  {
    question: "Chính sách bảo hành và cập nhật như thế nào?",
    answer: "Khách hàng được bảo hành trọn đời và cập nhật phiên bản mới hoàn toàn miễn phí khi có các thay đổi từ nền tảng (Zalo, Facebook, Google)."
  }
];

const TESTIMONIALS = [
  {
    name: "Nguyễn Văn Hùng",
    role: "Giám đốc Sàn BĐS Sun Home",
    content: "Từ ngày dùng MKT Zalo, đội ngũ của tôi không còn phải đi spam dạo nữa. Khách hàng về đều đặn và quan trọng nhất là chi phí marketing giảm tới 60%.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&h=150",
    initial: "H"
  },
  {
    name: "Trần Thị Lan",
    role: "Môi giới tự do - Vinhomes",
    content: "Phần mềm MKT UID quét data cực chuẩn. Tôi dễ dàng tìm thấy các group cư dân và tiếp cận đúng đối tượng đang có nhu cầu mua nhà.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    initial: "L"
  },
  {
    name: "Lê Minh Tuấn",
    role: "Trưởng phòng Kinh doanh",
    content: "Hỗ trợ kỹ thuật của MKT cực kỳ nhiệt tình. Cài đặt trực tiếp và hướng dẫn tận tay cho đến khi tôi thành thạo. Rất đáng đầu tư!",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150&h=150",
    initial: "T"
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  key?: number | string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition-colors"
      >
        <span className="pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 text-slate-600 text-sm leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập họ và tên');
      return;
    }
    if (!phone.trim()) {
      setError('Vui lòng nhập số điện thoại');
      return;
    }
    // Simplistic Vietnamese phone validation (10 digits starting with 0 or +84)
    const normalizedPhone = phone.replace(/\s+/g, '').replace('+84', '0');
    if (!/^0[35789]\d{8}$/.test(normalizedPhone)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại!');
      return;
    }

    setError('');
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100 text-center flex flex-col items-center justify-center min-h-[350px]">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Đăng Ký Thành Công!</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
          Cảm ơn bạn <strong className="text-primary">{name}</strong> đã quan tâm. Chuyên viên tư vấn của MKT Software sẽ liên hệ sớm nhất trong vòng 15 phút qua số điện thoại <strong className="text-slate-800">{phone}</strong>.
        </p>
        <button 
          onClick={() => {
            setSuccess(false);
            setName('');
            setPhone('');
            setMessage('');
          }}
          className="mt-6 px-6 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors"
        >
          Đăng ký lại
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
      <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">Đăng ký tư vấn giải pháp</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Họ và tên <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nguyễn Văn A" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-slate-800 font-medium" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Số điện thoại (Zalo) <span className="text-red-500">*</span></label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09xx xxx xxx" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-slate-800 font-medium" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Lời nhắn</label>
          <textarea 
            rows={3} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tôi muốn tư vấn bộ combo BĐS..." 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none text-slate-800"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          GỬI YÊU CẦU NGAY
        </button>
      </form>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div>
        <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Đăng ký nhận tin</h4>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs leading-relaxed font-semibold">
          🎉 Đăng ký thành công! Hãy kiểm tra hòm thư của bạn để nhận cẩm nang Marketing 0đ nhé.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Đăng ký nhận tin</h4>
      <p className="text-xs mb-6 italic">Nhận ngay cẩm nang Marketing 0đ cho ngành BĐS.</p>
      <form onSubmit={handleSubscribe} className="flex overflow-hidden rounded-xl border border-white/10 focus-within:border-primary transition-colors bg-white/5 p-1 relative">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email của bạn" 
          className="flex-grow px-4 py-2 text-sm focus:outline-none bg-transparent text-white placeholder-slate-500" 
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-lg group">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-500 text-[11px] mt-2 font-medium">Vui lòng nhập địa chỉ email hợp lệ.</p>
      )}
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConversionModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left Side (Blue) */}
            <div className="md:w-1/2 bg-[#1A237E] p-10 text-white flex flex-col">
              <h2 className="text-4xl font-black italic tracking-tighter mb-8 leading-none">ĐỪNG BỎ LỠ!</h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  { text: 'Hỗ trợ 24/7, hướng dẫn TẬN TÌNH đến khi bạn thành thạo sử dụng công cụ' },
                  { text: 'Huấn luyện tư duy chiến lược với đội ngũ chuyên gia > 10 năm kinh nghiệm' },
                  { text: 'Bảo trì và cập nhật phần mềm trọn đời miễn phí' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm font-medium leading-tight">
                      {item.text.split('TẬN TÌNH').map((part, index) => (
                        index === 0 ? part : <span key={index} className="text-cyan-300 font-bold">TẬN TÌNH{part}</span>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
              
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
                <img 
                  src="/src/assets/images/modal_promotion_image_1779209305346.png" 
                  alt="Promotion" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-[#2196F3] py-2 px-6 rounded-lg text-center font-bold text-sm mb-8 inline-block mx-auto">
                +600.000 Khách hàng đã phục vụ
              </div>
              
              <div className="mt-auto grid grid-cols-3 gap-2">
                {['AGENCY', 'ACAC ACADEMY', 'ASANA'].map((brand) => (
                  <div key={brand} className="bg-white/10 rounded-lg py-2 text-[10px] font-bold text-center tracking-widest text-white/80">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side (White) */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <p className="text-xs font-bold text-[#A84803] uppercase tracking-widest mb-2">Hỗ trợ & tư vấn nhanh chóng</p>
                <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">LIÊN HỆ NGAY</h3>
                
                <div className="space-y-4 max-w-sm mx-auto">
                  <a 
                    href="https://t.me/thanhht_mkt" 
                    target="_blank" 
                    className="flex items-center gap-4 p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-left"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">Hỗ trợ Telegram</p>
                      <p className="text-lg font-bold">@thanhht_mkt</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://zalo.me/0824512799" 
                    target="_blank" 
                    className="flex items-center gap-4 p-4 bg-[#2196F3] text-white rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all text-left"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">Hỗ trợ Zalo</p>
                      <p className="text-lg font-bold">0824.512.799</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
      <ConversionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
              M
            </div>
            <span className="font-bold text-xl text-primary tracking-tight">MKT Software</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Trang chủ', 'Tính năng', 'Bảng giá', 'Hỗ trợ'].map((item) => (
              <a key={item} href={`#${item}`} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group py-2">
                {item === 'Bảng giá' ? 'Gói Giải Pháp' : item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all"
          >
            Đăng ký Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Trang chủ" className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              PHẦN MỀM MARKETING 0 ĐỒNG
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
              HỆ THỐNG <span className="text-primary italic">ZALO MARKETING</span> CHO MÔI GIỚI BẤT ĐỘNG SẢN
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Tìm khách hàng - Chăm sóc khách hàng - Gia tăng giao dịch tự động trên Zalo. Giải pháp tối ưu chi phí quảng cáo cho ngành BĐS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
              >
                Bắt đầu ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Play className="w-5 h-5 text-primary fill-current" /> Xem video giới thiệu
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl -z-10" />
            <img 
              src="/src/assets/images/mkt_zalo_real_estate_hero_1779209137036.png" 
              alt="MKT Zalo Real Estate Hero Illustration" 
              className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-red-600 tracking-tight">
            90% MÔI GIỚI ĐANG BỎ LỠ KHÁCH HÀNG TIỀM NĂNG
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Coins, title: 'Chi phí QC quá cao', desc: 'Chỉ hàng chục triệu cho Facebook, Google nhưng leads (khách hàng) về thưa thớt.' },
            { icon: UserX, title: 'Khách hàng "Ghosting"', desc: 'Khách hỏi xong im lặng, không thể kết nối lại do thiếu kênh tương tác trực tiếp.' },
            { icon: Database, title: 'Thất thoát Data', desc: 'Data khách hàng cũ không được khai thác lại, bị đối thủ "nâng tay trên".' },
            { icon: Clock, title: 'Tốn thời gian chăm thủ công', desc: 'Mỗi ngày mất 4-5 tiếng chỉ để gửi tin nhắn, kết bạn Zalo từng người một.' },
            { icon: Search, title: 'Thiếu công cụ tìm kiếm', desc: 'Không biết khách hàng tiềm năng đang ở đâu trong các hội nhóm, địa điểm BĐS.' },
            { icon: Frown, title: 'Tỷ lệ chốt thấp', desc: 'Do không xây dựng được niềm tin và cộng đồng khách hàng trung thành.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#f8f9ff] border border-slate-100 card-hover group"
            >
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section id="Tính năng" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary tracking-tight">
            BIẾN ZALO THÀNH KÊNH BÁN HÀNG CHỦ LỰC
          </h2>
          <p className="text-slate-500">Quy trình 4 bước tự động hóa toàn diện cho nhà môi giới 4.0</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="hidden lg:block absolute top-10 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-primary/20 -z-0" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { step: '1', title: 'Quét khách hàng', desc: 'Tự động lấy UID, số điện thoại khách hàng tiềm năng từ Group, Fanpage, Google Maps.' },
              { step: '2', title: 'Kết bạn tự động', desc: 'Kết bạn hàng loạt đúng đối tượng mục tiêu, vượt ngưỡng giới hạn Zalo thông thường.' },
              { step: '3', title: 'Xây cộng đồng', desc: 'Mời khách hàng vào Nhóm Zalo riêng để chia sẻ thông tin dự án, tư vấn tập trung.' },
              { step: '4', title: 'Chăm sóc tự động', desc: 'Gửi tin nhắn chúc mừng sinh nhật, thông báo tiến độ, ưu đãi hoàn toàn tự động.' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all">
                  {item.step}
                </div>
                <h3 className="font-bold mb-4 text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Pricing Section (Overhauled to single premium solution pack) */}
      <section id="Bảng giá" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
          <span className="text-xs font-black uppercase text-[#A84803] tracking-widest bg-[#A84803]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Đầu tư một lần - Sử dụng trọn đời
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            BẢNG GIÁ GÓI GIẢI PHÁP PREMIUM
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Sở hữu trọn bộ công cụ quét tệp khách hàng tiềm năng, chăm sóc Zalo tự động và quy trình chốt deal hoàn toàn khép kín cho lĩnh vực Bất động sản.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 35 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden grid lg:grid-cols-12"
          >
            {/* Left Column: Solution details (col-span-7) */}
            <div className="lg:col-span-7 p-8 lg:p-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                ZALO MARKETING REAL ESTATE
              </span>
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
                COMBO MARKETING BĐS PREMIUM
              </h3>
              
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Giải pháp toàn diện giúp từng môi giới cá nhân hay sàn giao dịch tự động hóa khâu tìm kiếm khách hàng giàu có, lọc số điện thoại nét căng, kết bạn & gửi tin nhắn giới thiệu sản phẩm liên tục 24/7.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    title: 'Phần mềm MKT Zalo (Bản quyền Vĩnh viễn)',
                    desc: 'Tự động kết bạn đúng tệp, gửi tin nhắn chào hàng hàng loạt, quản lý hàng trăm tài khoản chống checkpoint.',
                    price: 'Trị giá: 3.000.000đ'
                  },
                  { 
                    title: 'Phần mềm MKT UID (Bản quyền Vĩnh viễn)',
                    desc: 'Quét tự động thành viên Group, người dùng tương tác Fanpage đối thủ, chuyển đổi UID sang định dạng SĐT chuẩn.',
                    price: 'Trị giá: 2.000.000đ'
                  },
                  { 
                    title: 'Phần mềm MKT Maps (Bản quyền Vĩnh viễn)',
                    desc: 'Định vị quét tệp khách hàng, chủ nhà, môi giới xung quanh dự án hoặc địa chỉ Google Business bất kỳ.',
                    price: 'Trị giá: 3.000.000đ'
                  },
                  { 
                    title: 'Bộ quà tặng 1: Đào tạo Real Estate Marketing 1-1',
                    desc: 'Cầm tay chỉ việc thực chiến trọn đời từ chuyên gia 10 năm kinh nghiệm giúp bạn ra giao dịch nhanh nhất.',
                    price: 'Quà tặng độc quyền (Trị giá 5M)'
                  },
                  { 
                    title: 'Bộ quà tặng 2: Tệp dữ liệu 100K+ Hotline nét lọc sẵn',
                    desc: 'Danh bạ tệp khách hàng tiềm năng, phân khúc cao cấp đã lọc sạch, sẵn sàng khai thác.',
                    price: 'Quà tặng miễn phí'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base flex flex-wrap items-center gap-2">
                        {item.title}
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">
                          {item.price}
                        </span>
                      </h4>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing action call container (col-span-5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1A237E] to-[#0d165c] text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Background gradient graphics */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl -z-0" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0" />
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-block bg-[#A84803] text-white px-5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  BEST VALUE • LỰA CHỌN TỐI ƯU NHẤT
                </div>
                
                <p className="text-cyan-300 font-bold tracking-wider uppercase text-xs mb-1">
                  ĐẦU TƯ TRỌN GÓI GIẢI PHÁP
                </p>
                <h4 className="text-2xl font-black mb-6">SỞ HỮU TRỌN ĐỜI</h4>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-white/50 line-through block mb-1">
                    Trị giá thực tế: 13.000.000đ
                  </span>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="font-extrabold text-6xl tracking-tight text-white">8Tr</span>
                    <span className="text-xl font-bold text-cyan-300">/ Năm</span>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Không phát sinh thêm chi phí, không giới hạn tính năng, hỗ trợ kỹ thuật trọn đời 1-1 hoàn toàn miễn phí.
                </p>

                {/* Urgency indicators */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 mb-8">
                  <p className="text-xs font-bold text-cyan-200 uppercase tracking-widest mb-1.5 flex items-center justify-center lg:justify-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0" />
                    Chương trình ưu đãi có hạn
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed text-center lg:text-left font-medium">
                    Chỉ áp dụng mức giá <span className="font-bold text-white text-sm">8tr/năm</span> cho <span className="font-black text-amber-300 text-sm">3 khách hàng đầu tiên</span> đăng ký trong ngày hôm nay!
                  </p>
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#A84803] hover:bg-[#8B3D02] active:scale-95 text-white py-4 rounded-2xl font-black text-lg tracking-wider shadow-2xl transition-all uppercase"
                >
                  ĐĂNG KÝ SỞ HỮU NGAY
                </button>
                
                <p className="text-[11px] text-white/60 text-center">
                  Cam kết hoàn tiền 100% nếu phát sinh lỗi không khắc phục được
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 tracking-tight">
              TẠI SAO 100.000+ KHÁCH HÀNG TIN DÙNG MKT SOFTWARE?
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: '100K+', desc: 'Người dùng thường xuyên hàng tháng' },
                { title: '24/7', desc: 'Đội ngũ kỹ thuật hỗ trợ trực tuyến' },
                { title: '05+', desc: 'Năm kinh nghiệm trong lĩnh vực MarTech' },
                { title: '0$', desc: 'Chi phí quảng cáo phát sinh sau cài đặt' }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-bold text-primary mb-2 tracking-tighter group-hover:translate-x-2 transition-transform">{stat.title}</div>
                  <p className="text-slate-500 text-sm lg:text-base">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.5, scale: 0.9 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-10 bg-slate-100 rounded-full blur-3xl -z-10" />
            <img 
              src="/src/assets/images/mkt_software_illustration_1779208636135.png" 
              alt="MKT Software Suite" 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-video"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="Hỗ trợ" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <p className="text-slate-500">Mọi thắc mắc của bạn đều được chúng tôi giải đáp tận tâm</p>
        </div>
        <div className="max-w-3xl mx-auto px-6">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group transition-all hover:bg-white hover:shadow-xl hover:border-slate-200 duration-300"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-6 shadow-lg border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300 relative bg-primary/5">
                  {t.avatar ? (
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-bold text-2xl text-primary">{t.initial}</span>
                  )}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">{t.name}</h4>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-24 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
              Bắt đầu hành trình <br /><span className="text-primary italic">Thống lĩnh thị trường</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Hãy để lại thông tin, đội ngũ chuyên gia của MKT Software sẽ liên hệ và tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn trong vòng 15 phút.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Địa chỉ trụ sở', desc: 'Tầng 4 chung cư Stellar Garden, Số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội' },
                { icon: Phone, title: 'Hotline tư vấn', desc: '0824.512.799' },
                { icon: Send, title: 'Hỗ trợ kỹ thuật', desc: '@thanhht_mkt' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-300 text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-lg font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/95 -z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] -z-0 translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
            KHÁCH HÀNG KHÔNG TỰ TÌM ĐẾN BẠN
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hãy chủ động kết nối và chiếm lĩnh thị trường trước khi đối thủ của bạn làm điều đó. Đội ngũ chuyên gia MKT luôn sẵn sàng hỗ trợ bạn 24/7.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12 max-w-xl mx-auto">
            {[
              { icon: Send, label: '@thanhht_mkt' },
              { icon: Phone, label: '0824.512.799' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-semibold tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all"
          >
            NHẬN TƯ VẤN MIỄN PHÍ NGAY
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#060b1a] text-slate-400 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/20">
                M
              </div>
              <span className="font-bold text-xl text-white tracking-tight">MKT Software</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Hệ sinh thái phần mềm Marketing tự động số 1 Việt Nam. Giải pháp giúp doanh nghiệp và cá nhân kinh doanh tối ưu chi phí, đột phá doanh thu.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/hoangthanhchip1712' },
                { icon: Youtube, url: 'https://www.youtube.com/@hoangthanhmkt' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-all shadow-sm"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-xs tracking-widest">Thông tin công ty</h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span>Trụ sở: Tầng 4 chung cư Stellar Garden, Số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội.</span>
              </p>
              <p className="flex items-center gap-3">
                <Send className="w-4 h-4 text-primary shrink-0" />
                <span>Email: Hoangthanh17122003@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>Hotline: 0824.512.799</span>
              </p>
            </div>
          </div>
          
          <NewsletterForm />
        </div>
        
        <div className="text-center pt-10 border-t border-white/5">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-medium">
            © 2024 MKT SOFTWARE - GIẢI PHÁP MARKETING ĐỘT PHÁ - PHÁT TRIỂN BỞI TEAM MKT
          </p>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a href="tel:0824512799" className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce">
          <Phone className="w-6 h-6" />
        </a>
        <a href="https://zalo.me/0824512799" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
