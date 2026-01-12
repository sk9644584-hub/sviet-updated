import { Sidebar } from "./Sidebar"

function ResearchLayout({
    aboutDepartment,
}) {


    const resultsData = [
        {
            results: [
                { name: "Dr. Neeraj Kumar", department: "Business Administration", designation: "Research Coordinator" },
                { name: "Dr. Indu Batra", department: "Applied Sciences", designation: "Member" },
                { name: "Dr. Manpreet Kaur", department: "Business Administration", designation: "Member" },
                { name: "Mr. Kaushik Bharti", department: "Mechanical Engineering", designation: "Member" },
                { name: "Mr. Manish", department: "Computer Applications", designation: "Member" },
                { name: "Ms. Suvidha", department: "Computer Science & Engineering", designation: "Member" },

            ]
        },

    ]

    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* About Department Section */}
                                <div
                                    id="overview"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Overview
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        {aboutDepartment.length > 0 && aboutDepartment.map((about, index) => (
                                            <p key={index} className="text-justify">
                                                {about}
                                            </p>
                                        ))}

                                    </div>
                                </div>
                                {/* Research & Development Committee */}
                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Research & Development Committee
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        <p className="text-justify">
                                            The  Research  &  Development  Committee  is  the  strategic  backbone  of  our  institution’s innovation  journey.  Comprising  experienced  faculty  members  from  diverse  disciplines,  the committee’s  role  is  to  plan,  monitor,  and  enhance  the  overall  research  and  development activities within the campus.
                                        </p>

                                    </div>
                                    <div className="bg-white mt-5 rounded-lg shadow-sm">
                                        {resultsData.map((result, idx) => (
                                            <div key={idx} className="overflow-x-auto">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="bg-gray-50 border-b border-gray-200">
                                                            <th className="sm:px-6 p-2 sm:py-3 text-left text-sm font-semibold text-[#003366] md:w-24 ">Sr. No.</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Name	</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Department</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Designation</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {result.results.map((result, index) => (
                                                            <tr key={index}
                                                                className={`border-b border-gray-100 
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                          hover:bg-gray-100 transition-colors`}>
                                                                <td className="md:text-center p-2 sm:px-6 sm:py-4 text-sm text-gray-700">{index + 1}</td>
                                                                <td className="px-6 py-4 text-sm text-gray-700">{result.name}</td>
                                                                <td className="px-6 py-4 text-sm text-gray-700">{result.department}</td>
                                                                <td className="px-6 py-4 text-sm text-gray-700">{result.designation}</td>

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* Left Sidebar - Navigation */}
                        <Sidebar />
                    </div>
                </div>
            </main>

        </div>
    )
}

export {
    ResearchLayout
}