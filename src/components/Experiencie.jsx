import img from '../img/separator.png';

export default function Experience(){

    return(
        <section id="experience" className="w-full px-16">
            <img
                src={img}
                className='mb-10 w-20'
                alt='Separator'
            />

            {/* Proyectos */}
            <div className='mt-14 mb-14'>
                <div>
                    <h3 className="mt-4 mb-5 text-4xl font-bold font-playfair">Proyectos </h3>
                </div>
                <div>
                    <p>2024</p>
                    <p>
                        Practicas Profesionales como Desarrollador
                    </p>
                    <p>Web Developer</p>
                </div>
            </div>

            {/* Experiencia Laboral */}
            <div className='mt-14 mb-14'>
                <div>
                    <h3 className="mt-4 mb-5 text-4xl font-bold font-playfair">Experiencia <br></br> Laboral </h3>
                </div>
                <div>
                    <p>2024</p>
                    <p>
                        Practicas Profesionales como Desarrollador
                    </p>
                    <p>Web Developer</p>
                </div>
            </div>

            {/* Estudios */}
            <div className='mt-14 mb-14'>
                <div>
                    <h3 className="mt-4 mb-5 text-4xl font-bold font-playfair">Estudios</h3>
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
    );
}