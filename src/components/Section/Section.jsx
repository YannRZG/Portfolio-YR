import Projects from "./Project.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";

const Section = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
      {/* Projects section */}
      {/* <div className="w-full h-full md:w-1/2 lg:w-1/3">
        <Projects />
      </div> */}
      
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 space-y-8">
        {/* Experience section */}
        <Experience />
        
        {/* Contact section */}
        <Contact />
      </div>
    </div>
  );
};

export default Section;
