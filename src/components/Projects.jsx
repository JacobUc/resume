import Separator from "./Separator";

export default function Projects(){
    return(
        <section id="projects" className="w-full px-16 font-lora text-lg">
            <Separator/>
            
            <div className='flex flex-col gap-7'>
                <div>
                    <h3 className="text-4xl uppercase font-bold font-playfair"> Proyectos <br/> Destacados </h3>
                </div>

                {/* !Template */}
                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Sistema e-commerce de componentes de computadoras</p>
                    <div className="w-[30rem] border-b-2 border-neutral-400"></div>

                    <p className='py-0.5 mt-1'>
                        Proyecto desarrollado en equipo como parte de una asignatura. El sistema permite a los usuarios buscar, filtrar y comprar productos en línea, e incluye un panel administrativo para gestionar usuarios y pedidos.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías:</span> Laravel, Tailwind CSS, MySQL</p>
                    <div>
                        <p className='font-semibold'>Responsablidades:</p>
                        <ul className='list-disc pl-7'>
                            <li>Participación en la recopilación y análisis de requisitos.</li>
                            <li>Participación en el diseño de la arquitectura del sistema y base de datos.</li>
                            <li>Participación en el desarrollo de prototipos de la interfaz de usuario (UI) en Figma para validar la experiencia de usuario (UX).</li>
                            <li>Implementación de la autenticación de usuarios utilizando Laravel Breeze.</li>
                            <li>Contribución al desarrollo del panel de administración para la gestión de productos, usuarios y pedidos.</li>
                            <li>Diseño e integración del sistema de reseñas para productos.</li>
                            <li>Participación en la ejecución de pruebas funcionales.</li>
                        </ul>
                    </div>
                </div>

                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Sistema de cotizaciones para persianas</p>
                    <div className="w-[21rem] border-b-2 border-neutral-400"></div>
                    
                    <p className='py-0.5 mt-1'>
                        Como parte de mis prácticas profesionales, contribuí al desarrollo de un sistema para gestionar cotizaciones de persianas, incluyendo un panel de administración para pedidos y cotizaciones.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías:</span> HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, MySQL</p>
                    <div>
                        <p className='font-semibold'>Responsablidades:</p>
                        <ul className='list-disc pl-7'>
                            <li>Participación en reuniones con el equipo y stakeholders para entender las necesidades del proyecto.</li>
                            <li>Creación de wireframes y mockups para la interfaz de usuario.</li>
                            <li>Desarrollo de funcionalidades para la creación, edición y seguimiento de cotizaciones y pedidos.</li>
                            <li>Creación de reportes sobre cotizaciones y pedidos.</li>
                            <li>Uso de Git y GitHub para control de versiones y colaboración con el equipo.</li>
                        </ul>
                    </div>
                </div>

                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Landing page Mandata & Gallo</p>
                    <div className="w-[16.2rem] border-b-2 border-neutral-400"></div>
                    
                    <p className='py-0.5 mt-1'>
                        Proyecto final del curso <span className='font-semibold text-neutral-900'>HTML y CSS en detalle</span> de Meta, ofertado en Coursera. Consistió en desarrollar una landing page para una joyería, con un diseño acorde al negocio y responsive. Este proyecto me ayudó a reforzar mis conocimientos en HTML y CSS, incluyendo el uso de cuadrículas y cajas flexibles, y la exploración de animaciones avanzadas.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías: </span>HTML, CSS</p>
                </div>

                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Calculadora Básica React</p>
                    <div className="w-[13.3rem] border-b-2 border-neutral-400"></div>
                    
                    <p className='py-0.5 mt-1'>
                        Proyecto personal que desarrollé para comprender y aplicar el uso de los hooks useState y useRef en React. La calculadora realiza operaciones básicas como suma, resta, multiplicación y división.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías:</span> HTML, CSS, JavaScript, React</p>
                </div>

                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Portfolio</p>
                    <div className="w-[4.7rem] border-b-2 border-neutral-400"></div>
                    
                    <p className='py-0.5 mt-1'>
                        Proyecto final del curso <span className='font-semibold text-neutral-900'>React avanzado</span> de Meta, ofertado en Coursera. Consistió en desarrollar una página de portafolio personal para mostrar proyectos, utilizando tecnologías avanzadas de React y bibliotecas adicionales.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías: </span>HTML, CSS, JavaScript, React, Chakra UI, Formik</p>
                </div>

                <div className='text-base text-justify'>
                    <p className='pb-0.5 font-semibold text-lg'>Prototipo para un sistema de reserva de un restaurante</p>
                    <div className="w-[29.5rem] border-b-2 border-neutral-400"></div>
                    
                    <p className='py-0.5 mt-1'>
                        Proyecto final del curso <span className='font-semibold text-neutral-900'>Principios de diseño UX/UI</span> de Meta, ofertado en Coursera. Consistió en aplicar procesos de UI/UX para mejorar la experiencia de usuario y la funcionalidad del sistema de reservación de mesas en el sitio web de un restaurante.
                    </p>
                    <p className='py-0.5'> <span className='font-semibold'>Tecnologías: </span>Figma</p>
                </div>

            </div>
        </section>
    );
}