
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus("success");
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Запишитесь на пробное занятие
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Первый шаг к раскрытию вашего вокального потенциала — это пробное занятие с нашими преподавателями. Заполните форму, и мы свяжемся с вами для подтверждения даты и времени.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full mt-1">
                  <Icon name="MapPin" className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Наш адрес</h3>
                  <p className="text-slate-600">г. Москва, ул. Музыкальная, д. 42</p>
                  <p className="text-slate-600">Студия находится в 5 минутах ходьбы от м. Арбатская</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full mt-1">
                  <Icon name="Phone" className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Контактный телефон</h3>
                  <p className="text-slate-600">+7 (999) 123-45-67</p>
                  <p className="text-slate-600">Ежедневно с 10:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full mt-1">
                  <Icon name="Mail" className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Электронная почта</h3>
                  <p className="text-slate-600">info@vocalart.ru</p>
                  <p className="text-slate-600">Ответим в течение 24 часов</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-slate-900 mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="bg-[#0077FF] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <Icon name="VK" size={24} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <Icon name="Phone" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Запись на пробное занятие</CardTitle>
                <CardDescription>
                  Стоимость пробного занятия — 1000 ₽. Длительность — 60 минут.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus === "success" ? (
                  <div className="space-y-4 text-center py-8">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Заявка успешно отправлена!
                    </h3>
                    <p className="text-slate-600">
                      Мы свяжемся с вами в ближайшее время для подтверждения записи на пробное занятие.
                    </p>
                    <Button 
                      onClick={() => setFormStatus(null)} 
                      className="mt-4 bg-purple-600 hover:bg-purple-700"
                    >
                      Отправить еще одну заявку
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Имя</Label>
                        <Input id="first-name" placeholder="Ваше имя" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Фамилия</Label>
                        <Input id="last-name" placeholder="Ваша фамилия" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="direction">Направление вокала</Label>
                      <Select>
                        <SelectTrigger id="direction">
                          <SelectValue placeholder="Выберите направление" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Академический вокал</SelectItem>
                          <SelectItem value="pop">Эстрадный вокал</SelectItem>
                          <SelectItem value="jazz">Джазовый вокал</SelectItem>
                          <SelectItem value="rock">Рок-вокал</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Ваш опыт</Label>
                      <Select>
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Выберите уровень" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Новичок</SelectItem>
                          <SelectItem value="intermediate">Есть некоторый опыт</SelectItem>
                          <SelectItem value="advanced">Продвинутый</SelectItem>
                          <SelectItem value="professional">Профессионал</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Расскажите о ваших целях, пожеланиях или задайте вопрос" 
                        rows={4} 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Отправить заявку
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
