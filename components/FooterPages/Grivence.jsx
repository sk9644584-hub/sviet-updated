import React from 'react'

const data = [
    {
        srNo: 1,
        composition: "Chairperson",
        members: ["Er. Tarandeep Singh"],
        designation: ["Coordinator (Student Welfare)"]
    },
    {
        srNo: 2,
        composition: "Senior Faculty Members",
        members: [
            "Dr. Neeraj Kumar",
            "Dr. Indu Batra",
            "Ms. Gurwinder Kaur"
        ],
        designation: [

            "Professor (MBA)",
            "Professor (ECE)"
            , "Associate Professor (CE)"
        ]
    },
    {
        srNo: 3,
        composition: "Students as Members",
        members: [
            "Ms. Shital Kumari",
            "Mr. Bibek Kumar Yadav"
        ],
        designation: [
            "Student (B.TECH-CSE)",
            "Student (B.TECH-CE)"
        ]
    }
]
const Grivence = () => {
    return (
        <>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            GRIEVANCE REDRESSAL COMMITTEE

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <p className='text-justify'>
                                    Students Grievance Redressal Committee (SGRC) is established to listen to the grievances of student as well as to resolve it immediately based on the sensitivity of the problem. Students can express their grievance by Contact Us. They can meet the Chairman of the Redressal committee in person if they want to. The committee will take action immediately and assures the grievance within a week.                             </p>
                            </div>



                        </div>
                    </div>
                </div>
            </section>




            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Grievance Redressal Committee Members:
                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 w-32 max-w-32 text-left font-semibold">
                                            Composition of SGRC
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 w-14 max-w-14 px-4 py-3 align-top">
                                                {item.srNo}
                                            </td>
                                            <td className="border border-gray-300 w-80 max-w-80 px-4 py-3 align-top">
                                                {item.composition}
                                            </td>
                                            <td className="border w-52 max-w-52 border-gray-300 px-4 py-3">
                                                <ul className="">
                                                    {item.members.map((member, idx) => (
                                                        <li className='mb-7 md:mb-10.5' key={idx}>{member}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <ul className="">
                                                    {item.designation.map((des, idx) => (
                                                        <li className='mb-3 md:mb-8 sm:mb-6' key={idx}>{des}</li>
                                                    ))}
                                                </ul>
                                            </td>
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

export default Grivence

