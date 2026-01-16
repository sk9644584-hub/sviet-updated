import React from 'react'

export const internationalComplaintData = [
    {
        srNo: 1,
        position: "Presiding Officer",
        name: "Dr. Khushboo Bansal",
        Designation: "Professor (AI)",
        contact: "7837556661"
    },
    {
        srNo: 2,
        position: "Member (Teaching Faculty Representatives)",
        name:
            "Er. Jarnail Singh\n\nEr. Shivani Guleria",
        contact: "8437391235\n\n6239138362",
        Designation: "Associate Professor (CSE)\n\nAssociate Professor (CE)"
    },
    {
        srNo: 3,
        Designation: "Admission Counsellor\n\nHR Manager",
        position: "Member (Non-Teaching Faculty Representatives)",
        name:
            "Ms. Rupinder Kaur\n\nMs. Jyotsna Duggal",
        contact: "7087421722\n\n7888744295"
    },
    {
        srNo: 4,
        position: "Member (Non-Govt. Organization)",
        name: "Mr. Manpreet Singh Brar",
        contact: "9417431947",
        Designation: "Abroad Educare, Zirakpur"
    },
    {
        srNo: 5,
        position: "Member (Student Representatives)",
        name:
            "Ms. Swikrty Biswas\n\nMr. Gaurav",
        contact: "9836214958\n\n7876680378",
        Designation: "Student (B.TECH-CSD)\n\nStudent (B.TECH-ECE)"
    }
]

const InternalComplaintCell = () => {
    return (
        <>



            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Committee                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Position in ICC</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation of Member</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {internationalComplaintData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 w-14 min-w-14 max-w-14 py-3 align-top">{item.srNo}</td>
                                            <td className="border border-gray-300 px-4 py-3 w-80 max-w-80 min-w-80 align-top">{item.position}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line w-60 min-w-60 max-w-72">{item.name}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line w-72 min-w-72 max-w-96">{item.Designation}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line">{item.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default InternalComplaintCell