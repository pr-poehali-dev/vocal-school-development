
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VocalArt
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Школа вокала для всех, кто мечтает петь. Раскройте свой голос вместе с нами!
            </p>
            <div className="flex space-x-4">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="VK" size={20} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#academic" className="text-slate-400 hover:text-white transition-colors">
                  Академический вокал
                </Link>
              </li>
              <li>
                <Link to="/services#pop" className="text-slate-400 hover:text-white transition-colors">
                  Эстрадный вокал
                </Link>
              </li>
              <li>
                <Link to="/services#jazz" className="text-slate-400 hover:text-white transition-colors">
                  Джазовый вокал
                </Link>
              </li>
              <li>
                <Link to="/services#children" className="text-slate-400 hover:text-white transition-colors">
                  Детское обучение
                </Link>
              </li>
              <li>
                <Link to="/services#group" className="text-slate-400 hover:text-white transition-colors">
                  Групповые занятия
                </Link>
              </li>
              <li>
                <Link to="/services#online" className="text-slate-400 hover:text-white transition-colors">
                  Онлайн обучение
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  О школе
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-slate-400 hover:text-white transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="text-slate-400 hover:text-white transition-colors">
                  Распевки
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Блог о вокале
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-purple-400 mt-1 shrink-0" size={18} />
                <span>г. Москва, ул. Музыкальная, д. 42<br />5 мин. от м. Арбатская</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="text-purple-400 shrink-0" size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="text-purple-400 shrink-0" size={18} />
                <span>info@vocalart.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="text-purple-400 shrink-0" size={18} />
                <span>10:00 – 21:00, ежедневно</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 VocalArt. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
