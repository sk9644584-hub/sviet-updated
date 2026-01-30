import Image from "next/image"
import Link from "next/link"
export const metadata = {
    title: "Administration"
}

export default function AdministrationPage() {
    const adminMembers = [
        {
            name: "(Prof.) Dr. Sanjeev Saini",
            designation: "Director Academics",
            email: "director_academics@sviet.ac.in",
            imageQuery: "man in suit with glasses",
            imageUrl: "https://static.shubhampf.cloud/management/1.jpeg",
        },
        {
            name: "(Prof.) Dr. Pertik Garg",
            designation: "Principal",
            email: "principal@sviet.ac.in",
            imageQuery: "man in checkered shirt with glasses",
            imageUrl: "https://static.shubhampf.cloud/management/pertik.webp",
        },
        {
            name: "Mr. Himanshu",
            designation: "Registrar",
            email: "registrar@sviet.ac.in",
            imageQuery: "man with beard and black suit",
            imageUrl: "https://static.shubhampf.cloud/management/himanshu.jpeg",
        },
        {
            name: "Ms. Gurwinder Kaur",
            designation: "Controller of Examination",
            email: "coe@sviet.ac.in",
            imageQuery: "woman in blue and white traditional attire",
            imageUrl: "https://static.shubhampf.cloud/management/GurwinderMam.jpg",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <h1 className="text-center mb-12 text-3xl font-bold text-[#003366] md:text-4xl">
                Meet Our Administration
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:px-20 md:gap-20 ">
                {adminMembers.map((person, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col  items-center p-6">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#003366] shadow-sm mb-4">
                                <Image
                                    loading="lazy"
                                    src={person.imageUrl}
                                    alt={person.name}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 text-center">
                                {person.name}
                            </h2>
                            <p className="text-sm text-gray-600 text-center mb-2">
                                {person.designation}
                            </p>
                            <Link
                                href={`mailto:${person.email}`}
                                className="text-[#007bff] text-sm hover:underline break-all text-center"
                            >
                                {person.email}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
