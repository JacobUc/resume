// import App from "../App.css";
import { Typewriter } from 'react-simple-typewriter';
import '../App.css'

export default function Presentation(){


    return(
        // mt-16 -> Para cuando Navbar sea fixed
        <section id="home" className="w-full px-16 pt-4">
            <div>
                {/* Nombre y Rol */}
                <div>
                    <h2 id='name' className="mt-2 pb-1 text-5xl font-black font-playfair">
                        JACOB UC
                        <span className='ml-3 text-3xl font-medium font-poppins text-sky-500'>
                            <Typewriter 
                                words={['Estudiante de Ing. de Software', 'Desarrollador Web']}
                                loop={false}
                                cursor
                                typeSpeed={100}
                                deleteSpeed={60}
                            />
                        </span> 
                    </h2>
                </div>

                {/* Redes */}
                <div className='mt-4 flex gap-2 text-stone-600'>
                    <a href='https://www.linkedin.com/in/jacob-uc-a70a3a1b8/'
                        target="_blank"
                        className='py-1 pr-1'> 
                        <i class="fa-brands fa-linkedin fa-lg"></i>
                    </a>
                    <a href='https://github.com/JacobUc'
                        target="_blank"
                        className='py-1 px-1'> 
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href='#'
                        target="_blank"
                        className='py-1 px-1'> 
                        <i class="fa-regular fa-envelope fa-lg"></i>
                    </a>
                </div>

                {/* Descripcion */}
                <div className='mt-6'>
                    <p className='mb-4 text-justify text-red-600 font-lora text-lg leading-7'>Agregando cambios prueba despliegue</p>
                    <p className='text-justify font-lora text-lg leading-7'>
                        Cursando el último semestre de la licenciatura Ingeniería de Software en la Universidad Autónoma de Yucatán. Disfruto crear soluciones eficientes y creativas, siguiendo procesos bien definidos y organizados. Busco aplicar mis conocimientos en un entorno profesional donde pueda aprender, crecer y aportar en proyectos significativos. Estoy comprometido con la mejora continua y la innovación en cada desafío que enfrento.
                    </p>
                </div>
            </div>
        </section>
    );
}

// export default Presentation;