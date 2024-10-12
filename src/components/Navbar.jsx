import { useState, useEffect } from "react";

export default function Navbar(){

    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const sections =['home', 'experience', 'techskills', 'contact'];
        const offsets = sections.map( section => document.getElementById(section).offsetTop );
        
        const scrollPosition = window.pageYOffset + 160;
    
        for( let i = sections.length - 1; i >= 0; i-- ){
            if(scrollPosition >= offsets[i] ){
                setActiveSection(sections[i]);
                break;
            }
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        // fixed z-10
        <header className="py-5 px-48 top-0 flex justify-end items-center bg-neutral-100 shadow-sm">
            <nav className="w-4/12 mr-10">
                <ul className="flex justify-between font-normal font-poppins text-base">
                    <li> 
                        <a href="#home" className={`px-.5 py-.5 duration-300 hover:text-sky-500 ${activeSection === 'home' ? 'text-sky-500' : ''}`}>Inicio</a> 
                    </li>
                    <li> 
                        <a href="#experience" className={`px-.5 py-.5 duration-300 hover:text-sky-500 ${activeSection === 'experience' ? 'text-sky-400' : ''}`}>Experiencia</a> 
                    </li>
                    <li> 
                        <a href="#techskills" className={`px-.5 py-.5 duration-300 hover:text-sky-500 ${activeSection === 'techskills' ? 'text-sky-400' : ''}`}>Tecnologías</a> 
                    </li>
                    <li> 
                        <a href="#contact" className={`px-.5 py-.5 duration-300 hover:text-sky-500 ${activeSection === 'contact' ? 'text-sky-400' : ''}`}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}