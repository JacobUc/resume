import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Experience from "./components/Experiencie";
import TechSkills from "./components/TechSkills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {

  return (
    <div className="">
      <Navbar/>

      {/* bg-zinc-200  w-7/12*/}
      <main className="w-[55rem] m-auto shadow-xl"> 
          {/* Presentacion */}
          <Presentation/>

          {/* Experiencia Profesional */}
          <Experience />

          {/* Proyectos destacados */}
          <Projects/>

          {/* Educacion y Certificaciones */}
          <Education/>

          {/* Tecnologias */}
          <TechSkills/>

          {/* Contacto */}
          <Contact />
      </main>

    </div>
  );
}

export default App
