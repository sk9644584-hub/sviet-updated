import Image from "next/image"

export function DistinguishedLeaders() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#003366] md:text-4xl mb-4">
                        The Distinguished Leaders, <span className="text-yellow-600">Visionaries</span> and Changemakers
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        From business giants to education pioneers, our campus draws the best. Each visit strengthens our legacy—fueling dreams, inspiring excellence, and empowering every learner to lead with confidence.
                    </p>
                </div>

                <div className="relative">
                    <div className="w-full max-w-6xl mx-auto">
                        <Image
                            loading="lazy"
                            src="https://static.shubhampf.cloud/distinguished-personalities.jpg"
                            alt="Distinguished Leaders, Visionaries and Changemakers - A showcase of eminent personalities who have visited our institution including notable leaders, innovators, and changemakers who have inspired our students"
                            width={1200}
                            height={600}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

               
            </div>
        </section>
    )
}
