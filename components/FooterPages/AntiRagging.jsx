import React from 'react'
import { ChevronRight, CircleSmall, } from 'lucide-react';
const protocols = [{
    id: 1,
    text: "A formal complaint will be filed with the Anti-Ragging Committee, Chairman, member, or members of anti-ragging squads."
},
{
    id: 2,
    text: "The authenticity of the case will be examined by the members deputed by the Chairman."
},
{
    id: 3,
    text: "Initiation of the enquiry process will be carried out by the members deputed by the Chairman."
},
{
    id: 4,
    text: "After a formal enquiry, the report will be forwarded to the Head of the Institution."
},
{
    id: 5,
    text: "Appropriate penalty actions will be recommended to the Head of the Institution as per the law."
}

]
const minors = [{ id: 1, text: "Oral/Written Warning." }, { id: 2, text: "Fine" }, { id: 3, text: "Suspension from the class for a week." }]
const majors = [
    { id: 1, text: "Suspending from class for one month/semester." },
    { id: 2, text: "Fine" },
    { id: 3, text: "Prevention from appearing University Exams." },
    { id: 4, text: "Prevention form T & P facilities." },
    { id: 5, text: "Suspension from Hostel." },
    { id: 6, text: "Rustication from college." },
]



const data =
    [
        {
            srNo: 1,
            name: "Dr. Pertik Garg",
            designation: "Committee Convener"
        },
        {
            srNo: 2,
            name: "Dr. Ankur Gill",
            designation: "Committee Coordinator"
        },
        {
            srNo: 3,
            name: "Er. Jarnail Singh",
            designation: "Member"
        },
        {
            srNo: 4,
            name: "Dr. Hartripat Kaur",
            designation: "Member"
        },
        {
            srNo: 5,
            name: "Ms. Gurwinder Kaur",
            designation: "Member"
        },
        {
            srNo: 6,
            name: "Mr. Mani Ram",
            designation: "Member"
        },
        {
            srNo: 7,
            name: "Ms. Pushpa Goyal",
            designation: "Member"
        }
    ]
const AntiRagging = () => {
    return (
        <>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Anti Ragging Policy

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <p className='text-justify'>
                                    We, at Swami Vivekanand Institute of Engineering & Technology, strongly condemn any form of ragging. Our college campus is intended to foster meaningful friendships and create lasting memories. We prioritize the well-being of our students, particularly during the induction of new students into our institution. Ragging is defined as any disruptive behavior involving verbal or physical actions that include teasing, treating, or handling fellow students with rudeness. This includes engaging in unruly or undisciplined activities that result in annoyance, hardship, or psychological harm to junior students, causing feelings of shame and embarrassment. Such actions negatively impact the mental state of the affected individuals, and we are dedicated to maintaining a safe and respectful environment for everyone in our college community.                           </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Protocol To Be Followed In Case of Incidence of Ragging
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {protocols.map(item => (
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            Penalties The following are the penalties that may be imposed on a student.
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <section className="py-2 bg-gray-50">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-4xl mx-auto">
                                        <h2 className="text-2xl flex items-center font-bold text-gray-800 mb-8 gap-3">
                                            <CircleSmall className='h-3 w-3 text-black bg-black rounded-full' />  Minor Penalties
                                        </h2>
                                        <div className="space-y-4 text-gray-700">
                                            {minors.map(item => (
                                                <div key={item.id} className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>))}


                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="py-2 bg-gray-50">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-4xl mx-auto">
                                        <h2 className="text-2xl flex items-center font-bold text-gray-800 mb-8 gap-3">
                                            <CircleSmall className='h-3 w-3 text-black bg-black rounded-full' />  Major Penalties
                                        </h2>
                                        <div className="space-y-4 text-gray-700">
                                            {majors.map(item => (
                                                <div key={item.id} className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>))}


                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            COMPOSITION OF THE COMMITTEE:                     </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
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
                                    {data.map(item => (
                                        <tr key={item.srNo}>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {item.srNo}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {item.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {item.designation}
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

export default AntiRagging


