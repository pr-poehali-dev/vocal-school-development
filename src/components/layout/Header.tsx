import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const { user, isLoggedIn, logout } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link
            to="/about"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            О школе
          </Link>
          <Link
            to="/services"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            Направления
          </Link>
          <Link
            to="/teachers"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            Преподаватели
          </Link>
          <Link
            to="/pricing"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            Цены
          </Link>
          <Link
            to="/exercises"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            Распевки
          </Link>
          <Link
            to="/contacts"
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0077FF] transition-colors"
            >
              <Icon name="VK" size={20} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0088cc] transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#25D366] transition-colors"
            >
              <Icon name="Phone" size={20} />
            </a>
          </div>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex w-full">
                    Личный кабинет
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full">
                    Настройки профиля
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/my-lessons" className="flex w-full">
                    Мои занятия
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Выйти</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 hidden md:flex"
            >
              <Link to="/login">Личный кабинет</Link>
            </Button>
          )}

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-700"
              >
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/about"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О школе
                </Link>
                <Link
                  to="/services"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Направления
                </Link>
                <Link
                  to="/teachers"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Преподаватели
                </Link>
                <Link
                  to="/pricing"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Цены
                </Link>
                <Link
                  to="/exercises"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Распевки
                </Link>
                <Link
                  to="/contacts"
                  className="text-lg font-medium px-4 py-2 hover:bg-purple-50 rounded-l-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </Link>

                <div className="mt-4 px-4 flex gap-4">
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077FF] text-white p-2 rounded-full"
                  >
                    <Icon name="VK" size={20} />
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0088cc] text-white p-2 rounded-full"
                  >
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-2 rounded-full"
                  >
                    <Icon name="Phone" size={20} />
                  </a>
                </div>

                {isLoggedIn ? (
                  <div className="px-4 mt-4 pt-4 border-t">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-slate-500">{user?.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/dashboard"
                        className="text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Личный кабинет
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="text-red-500 px-3 py-2 rounded-md hover:bg-red-50 text-left"
                      >
                        Выйти
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 mt-4">
                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/login">Личный кабинет</Link>
                    </Button>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
