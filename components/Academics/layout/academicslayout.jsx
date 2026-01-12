import Image from "next/image"
import { Sidebar } from "../Sidebar"


function Academicslayout({
    teacherPic = "/placeholder.svg",
    teacherName = "John doe",
    Designation,
    Department,
    aboutDepartment,
    departmentProfile,
    vision,
    mission,
    departmentNameForNav,
    routeName,
}) {


    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* HOD Section */}
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex flex-col  items-center justify-center w-full gap-6">
                                        <div className="flex-shrink-0 ">
                                            <Image
                                                loading="lazy"
                                                src={teacherPic}
                                                alt={teacherName + "-picture"}
                                                width={250}
                                                height={250}
                                                className="rounded-lg  max-h-[250px]"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col w-full items-center justify-center">
                                            <h1 className="text-2xl font-bold text-[#003366] mb-2">
                                                {teacherName}
                                            </h1>
                                            <p className="text-lg text-gray-700 mb-4">
                                                {Designation} - {Department}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* About Department Section */}
                                <div
                                    id="about-department"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        About Department
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        {aboutDepartment.length > 0 && aboutDepartment.map((about, index) => (
                                            <p key={index} className="text-justify">
                                                {about}
                                            </p>
                                        ))}

                                    </div>
                                </div>

                                {/* Department Profile Section */}
                                <div
                                    id="department-profile"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Department Profile
                                    </h2>
                                    <div className="space-y-3 text-gray-700 text-sm">
                                        {/* <h3 className="font-semibold text-gray-900">
                                            Strengths of the Department
                                        </h3> */}
                                        <div className="space-y-2 ">
                                            {departmentProfile.length > 0 && departmentProfile.map((profile, index) => (
                                                <p key={index} className="text-justify">
                                                    {profile}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Vision Section */}
                                <div id="vision" className="p-6 border-b border-gray-200">
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Vision
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        {vision.length > 0 && vision.map((vis, index) => (
                                            <p key={index} className="text-justify">
                                                {vis}
                                            </p>
                                        ))}

                                    </div>
                                </div>

                                {/* Mission Section */}
                                <div id="mission" className="p-6">
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Mission
                                    </h2>
                                    <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                                        {mission.length > 0 && mission.map((mis, index) => (
                                            <li key={index} className="text-justify">
                                                • {mis}
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Left Sidebar - Navigation */}
                        <Sidebar departmentNameForNav={departmentNameForNav} routeName={routeName} />
                    </div>
                </div>
            </main>

        </div>
    )
}

export { Academicslayout }