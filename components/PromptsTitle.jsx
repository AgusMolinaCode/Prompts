import Image from 'next/image'
import React from 'react'

const PromptsTitle = () => {
    return (
        <div>
            <div className='px-2'>

                <h1 className='font-outfit text-3xl px-1 text-center'>
                    "La importancia de los prompts: Desbloqueando el potencial de <span className='blue_gradient font-bold'>Chat GPT</span> & <span className='font-bold green_gradient'>BARD AI</span> "
                </h1>

                <div>
                    <div className='mt-10 px-2'>

                        <div className=''>
                            <p className='font-outfit text-lg'>
                                Los prompts desempeñan un papel fundamental al interactuar con Chat GPT y Bard, ya que actúan como instrucciones o estímulos para que el modelo genere una respuesta. Un prompt bien redactado tiene el poder de guiar a la inteligencia artificial hacia la dirección deseada y desbloquear su verdadero potencial.
                            </p>

                        </div>

                    </div>

                    <div className='rounded-3xl mt-10 mb-10'>
                        <Image src='/assets/images/bardGPT.jpeg' className='w-full lg:h-[32rem] px-1 lg:px-[10rem]' width={500} height={500} alt='Bard & Caht GPT Logo' />
                    </div>

                    <div className='max-w-[950px] flex-col justify-center mx-auto'>
                        <p className='font-outfit font-light text-xl mt-5'>
                            La claridad en la redacción del prompt es esencial. Debe ser conciso y fácil de entender, transmitiendo de manera precisa la información o la pregunta que se desea plantear. Proporcionar contexto relevante también es importante, ya que ayuda al modelo a comprender mejor la situación y generar respuestas coherentes.
                        </p>
                        <div className='flex justify-end'>
                            <div className='mt-5  border-r-4 max-w-[700px] border-indigo-500 border-collapse'>
                                <p className='font-outfit text-xl mr-10'>
                                    La especificidad es otro aspecto crucial al escribir prompts. Cuanto más específico sea el prompt, más precisa y relevante será la respuesta del Chat. Es importante ser claro acerca de los detalles necesarios para evitar respuestas ambiguas o genéricas.
                                </p>
                            </div>
                        </div>
                        <p className='font-outfit text-xl mt-5 font-light'>
                            Además, el primer enunciado del prompt juega un papel crucial para captar la atención de la IA (inteligencia artificial). Debe ser cautivador y atractivo, estableciendo el tono y el contexto adecuados para la respuesta esperada. Un enunciado poderoso ayuda a enfocar al modelo en el objetivo principal y a generar una respuesta acorde.
                        </p>
                        <div className='mt-5 max-w-[700px] border-l-4 border-indigo-500 border-collapse'>
                            <p className='font-outfit text-xl ml-10'>
                                "Al utilizar prompts ingeniosos y creativos, se puede estimular la capacidad de Chat GPT y Bard para generar ideas sorprendentes. Presentar un enfoque único o una perspectiva inusual en el prompt puede inspirar respuestas fascinantes y fuera de lo común."
                            </p>  
                        </div>
                        <p className='font-outfit text-xl mt-5 font-light'>
                            En resumen, <span className='text-indigo-500 font-medium'>"los prompts bien redactados son esenciales para obtener respuestas significativas y útiles de Chat GPT"</span> . La claridad, la especificidad, el contexto relevante y la creatividad en la redacción son elementos clave para desbloquear el potencial completo del modelo. Al dominar el arte de escribir prompts efectivos, se puede aprovechar al máximo la capacidad de Chat GPT y Bard para brindar respuestas coherentes, relevantes y satisfactorias.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptsTitle