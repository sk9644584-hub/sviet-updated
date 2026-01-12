import React from 'react'
import { ChevronRight } from 'lucide-react';
const qualityAssuranceActivities
    = [{
        id: 1,
        text: "Preparing and publishing examination schedules well in advance."
    },
    {
        id: 2,
        text: "Coordinating   with   faculty   and   departments   for   smooth   conduct   of   internal assessments."
    },
    {
        id: 3,
        text: "Organizing   end-semester   and   university   examinations   with   strict   adherence   to protocols."
    },
    {
        id: 4,
        text: "Maintaining  confidentiality  and  security  in  handling  examination  papers  and  related records."
    },
    {
        text: "Processing and publishing results in a timely manner."
    },
    { text: "Addressing student queries related to examinations, results, and re-evaluation." }
    ]
const data = [
    { "name": "Ms. Gurwinder Kaur", "Designation": "Controller of Examination" },
    { "name": "Dr. Hartriptat Kaur", "Designation": "Assistant Controller of Examination" },
    { "name": "Er. Shivani Guleria", "Designation": "Superintendent" },
    { "name": "Er. Rupinder Kaur", "Designation": "Deputy Superintendent" },
    { "name": "Er. Anchal Goyal", "Designation": "Printing Cell Coordinator" },
    { "name": "Mr. Ranbir Singh", "Designation": "Helper Printing Cell" },
    { "name": "Ms. Rajwinder Kaur", "Designation": "Member (Clerk)" },
    { "name": "Ms. Sandeep Kaur", "Designation": "Member (Daftary)" }
]

const ExaminationCell = () => {
    return (
        <>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl uppercase font-bold text-gray-900 mb-8">
                            Examination Cell

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <p className='text-justify'>
                                    At  Swami  Vivekanand  Institute  of  Engineering  &  Technology  (SVIET),  the  Examination Cell plays a vital role and works in alignment with the guidelines of the affiliating university and regulatory bodies, upholding the highest standards of academic integrity.                         </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <p className='text-justify'>
                                    The Examination Cell is responsible for planning, organizing, and conducting all internal and external  examinations  in  a  systematic  and  fair  manner.It  ensures  proper  communication  of examination schedules received from the university, effective coordination with departments, and  strict  adherence  to  prescribed  rules  and  regulations.  The  cell  also  manages  the  secure handling   of   examination   materials,   evaluation   processes,   and   ensuring   smooth   and transparent conduct of all assessment activities.               </p>
                            </div>



                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Functions of the Examination Cell
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {qualityAssuranceActivities.map(item => (

                                <div key={item.id} className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <p className='text-justify'>
                                        {item.text}
                                    </p>
                                </div>))}


                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Examination Committee                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name of Employee
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {idx + 1}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {item.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {item.Designation}
                                            </td>


                                        </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExaminationCell