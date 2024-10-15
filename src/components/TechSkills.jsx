import Separator from "./Separator";

export default function TechSkills(){

    return(
        <>
            <section id="techskills" className="w-full px-16 font-lora text-lg">
                <Separator />

                {/* Tecnologias */}
                <div className=''>
                    <div>
                        <h3 className="mt-4 mb-5 text-4xl uppercase font-bold font-playfair"> Habilidades <br/> Técnicas </h3>
                    </div>
                    <div className="mt-10">
                        <ul className="flex flex-wrap gap-x-5 gap-y-4 items-center text-center">
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">HTML 5</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">CSS 3</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">Bootstrap</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">Tailwind CSS</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">JavaScript (ES6+)</li>

                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">Git y GitHub</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">Linux (Ubuntu)</li>

                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">PHP</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">Laravel</li>
                            <li className="px-2 py-1.5 rounded-lg bg-gray-300 hover:bg-neutral-700 hover:text-white duration-700 border border-neutral-300 shadow">MySQL</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}