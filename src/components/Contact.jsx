import Separator from './Separator';

export default function Contact(){

    return(
        <>
            <section id="contact" className="w-full px-16 pb-16 font-lora">
                <Separator/>

                {/* Tecnologias */}
                <div>
                    <div>
                        <h3 className="mt-4 mb-7 text-4xl uppercase font-bold font-playfair">Contacto</h3>
                    </div>
                    <div>
                        <p>jacobuc08@gmail.com</p>
                        <p>LinkedIn</p>
                        <p>GitHub</p>
                    </div>
                </div>

            </section>
        </>
    );
}