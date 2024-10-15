import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar(){

    return (
        // fixed z-10
        <header className="py-5 px-48 top-0 flex justify-end items-center bg-neutral-100 shadow-sm">
            <nav className="w-4/12 mr-10">
                <ul className="flex justify-between font-normal font-poppins text-sm">
                    <li>
                        <Link to="experience"
                            spy={true}
                            smooth={true}
                            className="px-.5 py-.5 duration-300 hover:text-sky-500 cursor-pointer">
                            Experiencia
                        </Link>
                        {/* <a href="#home" className='px-.5 py-.5 duration-300 hover:text-sky-500'>Inicio</a>  */}
                    </li>
                    <li>
                        <Link to="projects"
                            spy={true}
                            smooth={true}
                            className="px-.5 py-.5 duration-300 hover:text-sky-500 cursor-pointer">
                            Proyectos
                        </Link>
                        {/* <a href="#experience" className={`px-.5 py-.5 duration-300 hover:text-sky-500 ${activeSection === 'experience' ? 'text-sky-400' : ''}`}>Experiencia</a>  */}
                    </li>
                    <li>
                        <Link to="education"
                            spy={true}
                            smooth={true}
                            duration={1800}
                            className="px-.5 py-.5 duration-300 hover:text-sky-500 cursor-pointer">
                            Educación
                        </Link>
                    </li>
                    <li>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={2000}
                            className="px-.5 py-.5 duration-300 hover:text-sky-500 cursor-pointer">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}