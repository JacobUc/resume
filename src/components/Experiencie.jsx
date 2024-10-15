import Separator from './Separator';

export default function Experience(){

    return(
        <section id="experience" className="w-full px-16 font-lora text-lg">

            <Separator />

            {/* Experiencia Laboral */}
            <div>
                <div className='mb-1'>
                    <h3 className="mt-4 mb-7 text-4xl uppercase font-bold font-playfair"> Experiencia <br/> Profesional </h3>
                </div>
                <div>
                    <p className='font-semibold'>
                        Desarrollador Web
                        <span className='font-medium'> - Prácticas Profesionales</span>
                    </p>
                    <p className='font-medium text-neutral-600'>Grupo Vahor</p>
                    <p className='text-base text-neutral-500'>Enero - Mayo 2024</p>
                </div>
            </div>
            
        </section>
    );
}