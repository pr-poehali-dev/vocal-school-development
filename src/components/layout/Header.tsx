
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VocalArt
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-slate-700 hover:text-purple-600 transition-colors">
            О школе
          </Link>
          <Link to="/services" className="text-slate-700 hover:text-purple-600 transition-colors">
            Направления
          </Link>
          <Link to="/teachers" className="text-slate-700 hover:text-purple-600 transition-colors">
            Преподаватели
          </Link>
          <Link to="/pricing" className="text-slate-700 hover:text-purple-600 transition-colors">
            Цены
          </Link>
          <Link to="/exercises" className="text-slate-700 hover:text-purple-600 transition-colors">
            Распевки
          </Link>
          <Link to="/contacts" className="text-slate-700 hover:text-purple-600 transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0077FF] transition-colors">
              <Icon name="VK" size={20} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0088cc] transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#25D366] transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
          
          <Button asChild className="bg-purple-600 hover:bg-purple-700 hidden md:flex">
            <Link to="/login">Личный кабинет</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden text-slate-700">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
