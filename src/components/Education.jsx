import Separator from "./Separator";

export default function Education(){
    return(
        <section id="education" className="w-full px-16 font-lora text-lg">
            <Separator/>

            {/* Estudios y Certificaciones*/}
            <div className='flex flex-col gap-5'>
                <div className='mb-1'>
                    <h3 className="text-4xl uppercase font-bold font-playfair"> Educación &<br /> Certificaciones</h3>
                </div>

                <div>
                    <p className='font-semibold'>
                        Licenciatura en Ingeniería de Software
                    </p>
                    <p className='font-medium text-neutral-600'>Universidad Autónoma de Yucatán</p>
                    <p className='text-base text-neutral-500'>2020 - Actualidad </p>
                </div>
                <div>
                    <a href='https://coursera.org/share/d53da41fa7e59cee1edafecdb960c8ae' 
                        target="_blank" 
                        className='py-1 font-semibold duration-500 hover:text-sky-500'>
                        Hands-on Introduction to Linux Commands and Shell Scripting
                    </a>
                    <p className='font-medium text-neutral-600'>Coursera</p>
                    <p className='text-base text-neutral-500'>Marzo 2024</p>
                </div>
                <div>
                    <a href='https://coursera.org/share/d9902f88dc0274e0752be1761b074d4c' 
                        target="_blank" 
                        className='py-1 font-semibold duration-500 hover:text-sky-500'>
                        Introducción al desarrollo de front-end
                    </a>
                    <p className='font-medium text-neutral-600'>Coursera</p>
                    <p className='text-base text-neutral-500'>Mayo 2024</p>
                </div>
                <div>
                    <a href='https://coursera.org/share/afb42af2b78824423cb408c4815c4295' 
                        target="_blank" 
                        className='py-1 font-semibold duration-500 hover:text-sky-500'>
                        Programación con JavaScript
                    </a>
                    <p className='font-medium text-neutral-600'>Coursera</p>
                    <p className='text-base text-neutral-500'>Junio 2024</p>
                </div>
                <div>
                    <a href='https://coursera.org/share/3b8a23bbc7aa77423c6c08a45db16497' 
                        target="_blank" 
                        className='py-1 font-semibold duration-500 hover:text-sky-500'>
                        Conceptos básicos de React
                    </a>
                    <p className='font-medium text-neutral-600'>Coursera</p>
                    <p className='text-base text-neutral-500'>Julio 2024</p>
                </div>
                <div>
                    <a href='https://coursera.org/share/e195874948cba9a6b0492158e0f6be62' 
                        target="_blank" 
                        className='py-1 font-semibold duration-500 hover:text-sky-500'>
                        Principios de diseño UX/UI
                    </a>
                    <p className='font-medium text-neutral-600'>Coursera</p>
                    <p className='text-base text-neutral-500'>Agosto 2024</p>
                </div>
            </div>
        </section>
    );
}