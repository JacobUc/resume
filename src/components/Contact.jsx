import img from '../img/separator.png';
import Separator from './Separator';

export default function Contact(){

    return(
        <>
            <section id="contact" className="w-full px-16">
                <Separator/>

                {/* Tecnologias */}
                <div className='mb-12'>
                    <div>
                        <h3 className="mt-4 mb-5 text-4xl uppercase font-bold font-playfair">Contacto</h3>
                    </div>
                    <div>
                        <p>2024</p>
                        <p>
                            Practicas Profesionales como Desarrollador
                        </p>
                        <p>Web Developer</p>
                    </div>
                </div>

            </section>
        </>
    );
}