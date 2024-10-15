import Separator from './Separator';

export default function Contact(){

    return(
        <>
            <section id="contact" className="w-full px-16 pb-20 font-lora">
                <Separator/>

                {/* Tecnologias */}
                <div>
                    <div>
                        <h3 className="mt-4 mb-7 text-4xl uppercase font-bold font-playfair">Contacto</h3>
                    </div>
                    <ul className='flex flex-col gap-3 pl-1'>
                        <li>
                            <i class="fa-regular fa-envelope fa-lg text-neutral-700 mr-2"></i>
                            <p className='inline'>jacobuc08@gmail.com</p>
                        </li>

                        <li>
                            <a href='https://www.linkedin.com/in/jacob-uc-a70a3a1b8/'
                                target="_blank"
                                className='py-1 pr-1 text-neutral-700 hover:text-sky-500 duration-500'> 
                                <i class="fa-brands fa-linkedin fa-lg mr-2"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href='https://www.linkedin.com/in/jacob-uc-a70a3a1b8/'
                                target="_blank"
                                className='py-1 pr-1 text-neutral-700 hover:text-sky-500 duration-500'> 
                                <i class="fa-brands fa-github fa-lg mr-2"></i>
                                <span>GitHub</span> 
                            </a>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
}