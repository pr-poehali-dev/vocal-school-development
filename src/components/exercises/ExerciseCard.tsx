
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/exercises";

interface ExerciseCardProps {
  exercise: Exercise;
}

const getLevelStyles = (level: Exercise["level"]) => {
  switch (level) {
    case "Начальный":
      return "bg-green-100 text-green-700";
    case "Средний":
      return "bg-yellow-100 text-yellow-700";
    case "Продвинутый":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const levelStyles = getLevelStyles(exercise.level);
  
  return (
    <Card className="border-slate-200 transition-all hover:shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              {exercise.title}
              <span className={`text-xs px-2 py-0.5 rounded-full ${levelStyles}`}>
                {exercise.level}
              </span>
            </CardTitle>
            <CardDescription className="text-slate-600">
              {exercise.description}
            </CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-purple-600"
            aria-label={isExpanded ? "Свернуть" : "Развернуть"}
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-md">
              <h4 className="text-sm font-medium mb-2 text-slate-700">Инструкция:</h4>
              <p className="text-sm text-slate-600">{exercise.instruction}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" className="gap-2">
                <Icon name="Play" size={16} />
                Послушать пример
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 gap-1">
                Сохранить <Icon name="Bookmark" size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ExerciseCard;
