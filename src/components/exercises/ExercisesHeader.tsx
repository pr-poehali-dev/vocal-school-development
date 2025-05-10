
interface ExercisesHeaderProps {
  title: string;
  description: string;
}

const ExercisesHeader = ({ title, description }: ExercisesHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-xl text-slate-600 max-w-[800px]">
        {description}
      </p>
    </div>
  );
};

export default ExercisesHeader;
