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
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { user, isLoggedIn, logout } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  // Форматируем дату следующего занятия
  const formatNextLessonDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("ru-RU", options);
  };

  // Рассчитываем дни с момента регистрации
  const getDaysSinceJoined = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

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
            <>
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
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-medium text-white">
                      1
                    </span>
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
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setShowUserProfile(true)}>
                      <Icon name="User" className="mr-2 h-4 w-4" />
                      <span>Профиль</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/dashboard"
                        className="flex items-center w-full"
                      >
                        <Icon name="LayoutDashboard" className="mr-2 h-4 w-4" />
                        <span>Личный кабинет</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/my-lessons"
                        className="flex items-center w-full"
                      >
                        <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                        <span>Мои занятия</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/progress" className="flex items-center w-full">
                        <Icon name="BarChart" className="mr-2 h-4 w-4" />
                        <span>Мой прогресс</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/saved-exercises"
                        className="flex items-center w-full"
                      >
                        <Icon name="Bookmark" className="mr-2 h-4 w-4" />
                        <span>Сохраненные распевки</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="/settings" className="flex items-center w-full">
                        <Icon name="Settings" className="mr-2 h-4 w-4" />
                        <span>Настройки</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/help" className="flex items-center w-full">
                        <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
                        <span>Помощь</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-red-500 focus:text-red-500"
                  >
                    <Icon name="LogOut" className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Dialog open={showUserProfile} onOpenChange={setShowUserProfile}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Профиль пользователя</DialogTitle>
                    <DialogDescription>
                      Ваша информация и прогресс обучения
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-6 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback className="text-xl">
                          {user?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{user?.name}</h3>
                        <p className="text-sm text-slate-500">{user?.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-purple-600">
                            {user?.subscription}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            C нами {getDaysSinceJoined(user?.joinedAt)} дней
                          </span>
                        </div>
                      </div>

                      <Button asChild variant="outline" size="sm">
                        <Link to="/settings">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать
                        </Link>
                      </Button>
                    </div>

                    {user?.nextLesson && (
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Icon
                            name="Calendar"
                            className="mr-2 text-purple-600"
                            size={18}
                          />
                          Ближайшее занятие
                        </h4>
                        <p className="text-sm">
                          <span className="font-medium">
                            {formatNextLessonDate(user.nextLesson.date)}
                          </span>{" "}
                          —{user.nextLesson.type} с преподавателем{" "}
                          {user.nextLesson.teacherName}
                        </p>
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            Перенести
                          </Button>
                          <Button size="sm" variant="outline">
                            Отменить
                          </Button>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-medium mb-3">Ваш прогресс</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Дыхательная техника</span>
                            <span className="text-xs font-medium">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Артикуляция</span>
                            <span className="text-xs font-medium">45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Диапазон</span>
                            <span className="text-xs font-medium">60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-semibold text-purple-600">
                          14
                        </p>
                        <p className="text-sm text-slate-500">занятий</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-purple-600">
                          8
                        </p>
                        <p className="text-sm text-slate-500">часов практики</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-purple-600">
                          5
                        </p>
                        <p className="text-sm text-slate-500">
                          сохраненных распевок
                        </p>
                      </div>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowUserProfile(false)}
                    >
                      Закрыть
                    </Button>
                    <Button
                      asChild
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Link to="/dashboard">Перейти в личный кабинет</Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
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
                        className="text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50 flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon name="LayoutDashboard" className="mr-2 h-4 w-4" />
                        Личный кабинет
                      </Link>
                      <Link
                        to="/my-lessons"
                        className="text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50 flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                        Мои занятия
                      </Link>
                      <Link
                        to="/progress"
                        className="text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50 flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon name="BarChart" className="mr-2 h-4 w-4" />
                        Мой прогресс
                      </Link>
                      <Link
                        to="/settings"
                        className="text-purple-600 px-3 py-2 rounded-md hover:bg-purple-50 flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon name="Settings" className="mr-2 h-4 w-4" />
                        Настройки
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="text-red-500 px-3 py-2 rounded-md hover:bg-red-50 text-left flex items-center"
                      >
                        <Icon name="LogOut" className="mr-2 h-4 w-4" />
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
