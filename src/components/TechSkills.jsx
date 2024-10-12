import img from '../img/separator.png';

export default function TechSkills(){

    return(
        <>
            <section id="techskills" className="w-full px-16 border-2">
                <img 
                    src={img}
                    className='mb-10 w-20'
                    alt='Separator'
                />

                {/* Tecnologias */}
                <div className='mb-12'>
                    <div>
                        <h3 className="mt-4 mb-5 text-4xl font-bold font-playfair">Tecnologias</h3>
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