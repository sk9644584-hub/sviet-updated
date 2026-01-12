import { NaacImages } from "./NaacImages"

function NaacHome() {
    const images = [
        "https://static.shubhampf.cloud/Documents/NAAC/certificate1.jpg",
        "https://static.shubhampf.cloud/Documents/NAAC/certificate2.jpg"
    ]

    return (
        <div className="flex min-h-screen flex-col">

            <div className="container mx-auto px-4 py-8 md:px-6">

                <div className="p-6 flex w-full justify-center">

                    <div className=" flex-col md:flex-row flex gap-20">
                        {images.map((img, idx) =>

                            <NaacImages
                                idx={idx}
                                key={idx}
                                src={img}
                            />
                        )}

                    </div>

                </div>
            </div>

        </div>
    )
}

export { NaacHome }