import { Sidebar } from "@/components/Research/Sidebar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata = {
    title: "Projects"
}
export default function ProjectsPage() {

    const projects = [
        {
            title: "ELECTRIC BIKE CREATED BY SVIET STUDENT",
            description:
                "We feel immense pleasure to announce that our student of Electrical Engg. 7th Sem. Mohd. Jawaad Khan. has launched the Prototype of his Company's first product 'ELECTRIC BIKE'. The product will very soon be available on PAYTM, FLIPKART & AMAZON. This is his second innovation after Electric Car 'SVIET VOLTA'. We wish him & his company All the Best for Future.",
            image: "/Recruiters/3182EE92-D91F-46F1-9AF4-4D57491D0C5F-1024x768.webp",
        },
        {
            title: "ELECTRIC CAR 'SVIET VOLTA'",
            description:
                "Student of B.Tech - Electrical Engineering 'Mohd. Jawaad' has conceptualized the innovation of an eco-friendly, Electric car 'SVIET VOLTA'. SVIET will be first college in region to directly participate as Seed funding agency and also act as Venture Capitalist in Launching student innovation. Our student made an Electric Car 'VOLTA' and made us proud as his achievement shines in all the leading Newspapers.",
            image: "/Recruiters/9D756B27-C642-46D8-8F74-6048E5B43827-1024x768.webp",
        },
        {
            title: "STUDENTS BAGGED 4th POSITION AT IIT ROPAR",
            description:
                "Students of Department of Civil Engineering participated in Project display during a Fest at IIT Ropar & bagged 4th position out of 30 participants Teams. The theme of the project was 'Green Buildings'.",
            image: "/Recruiters/4CA935FD-53C3-4F9F-96CD-36851B250109-1024x631.webp",
        },
        {
            title: "Auto Dispenser For Hand Sanitizer",
            description:
                `"Necessity is the mother of invention"
A problem encourages creative efforts to meet the need. Where everyone else is killing time at home, our future engineers are on work already. An "Auto Dispenser for Hand Sanitization" successfully made by a second year student at SVIET. We are proud of our students who are coming up to help our nation with what they are learning at SVIET.`,
            image: "/Recruiters/180A980D-2FB8-440B-91FD-7487945ED96C-e1707572230204-895x1024.webp",
        },
        {
            title: "MINI REFRIGERATOR",
            description: "Mini Refrigerator designed by Students of Mechanical Engineering",
            image: "/Recruiters/A9F396E2-DE1E-43F1-B306-05C7731C004D-1024x768.webp"
        },
        {
            title: "VOICE CONTROL ROBOT",
            description: "Voice Control Robot Designed by Students",
            image: "/Recruiters/288A6E40-8285-400F-A361-2C3A4FE92799-768x387.webp"
        }
        , {
            title: "MULTINOZZLE PESTICIDE SPRAYER",
            description: "Manually operated Multinozzle Pesticide Sprayer designed by students",
            image: "/Recruiters/5FE47CE8-C489-4FF3-89FE-25F13119D6AB-768x554.webp"
        }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Left Side - Overview and Projects */}
                        <div className="lg:col-span-3">
                            {/* Overview Section */}
                            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                                <h1 className="text-3xl font-bold text-[#003366] mb-6">Our Innovative Projects</h1>
                                <p className=" text-gray-700 text-justify leading-relaxed">
                                    Through  our  innovative  projects,  we  foster  creativity  and  teamwork,  turning  ideas  into impactful  solutions.  Each  initiative  is  designed  with  a  practical  mindset tackling  real-world problems while helping students develop skills that matter beyond the classroom.
                                </p>
                            </div>

                            {/* Projects Grid */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {projects.map((project, idx) => (
                                    <Card
                                        key={idx}
                                        className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="relative h-48 w-full">
                                            <Image
                                                loading="lazy"
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="px-6 py-3">
                                            <h3 className="text-lg font-semibold text-[#003366] mb-3 line-clamp-2">{project.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4 ">{project.description}</p>

                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar - keep existing sidebar code */}
                        <Sidebar activeRoute={2} />
                    </div>
                </div>
            </main>
        </div>
    )
}
