import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Experience from "./components/Experiencie";
import TechSkills from "./components/TechSkills";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="">
      <Navbar/>

      {/* bg-zinc-200  w-7/12*/}
      <main className="w-[55rem] m-auto shadow-xl"> 
          {/* Home Section */}
          <Presentation/>

          {/* Experiencia */}
          <Experience />

          {/* Tecnologias */}
          <TechSkills/>

          {/* Contacto */}
          <Contact />
      </main>

    </div>
  );
}

export default App
