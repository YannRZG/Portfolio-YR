import Experience from "./Experience.jsx";
import Project from "./Project.jsx";

const Section = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 px-4">
      <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
        {/* Utilisez des classes pour adapter les éléments à la taille de l'écran */}
        <div className="flex-1 min-w-0">
          <Experience />
        </div>
        <div className="flex-1 min-w-0">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Section;
