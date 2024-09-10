import Experience from "./Experience.jsx";
import Project from "./Project.jsx";

const Section = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4">

      
      <div className="flex flex-col sm:flex-row md:flex-row w-full mt-8">

        <Experience />
        <Project />
        

      </div>
    </div>
  );
};

export default Section;
