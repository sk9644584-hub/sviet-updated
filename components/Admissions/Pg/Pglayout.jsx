"use client"
import Link from 'next/link'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const PgLayout = ({ title, programs }) => {
    const [openItems, setOpenItems] = React.useState(
        programs.flatMap(program =>
            program.eligibilityCriteria.map(item => `item-${item.id}`)
        )
    );
    const [openItems1, setOpenItems1] = React.useState(programs.map(item => `item-${item.id}`))

    const toggleItem = (id) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }
    const toggleItem1 = (id) => {
        setOpenItems1((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {title}

                    </h2>
                    <h2 className="text-sm font-medium text-red-600 mb-6">
                        Notice: Admissions are Commenced for Management Quota seats for First Year PG Courses (M.Tech, MBA & MCA) for 2025-26 at SVIET.

                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <h3 className='font-bold text-lg my-4'>
                            Two Years Full-Time PG programs in :
                        </h3>


                        <div className='max-w-5xl flex mx-auto'>
                            <Accordion type="multiple" defaultValue={openItems1} collapsible className="w-full space-y-3">
                                {programs.map((item) => {
                                    const isOpen = openItems1.includes(`item-${item.id}`);
                                    return (
                                        <AccordionItem
                                            key={item.id}
                                            value={`item-${item.id}`}
                                            className={` overflow-hidden rounded-md `}
                                        >
                                            <AccordionTrigger
                                                onClick={() => toggleItem1(`item-${item.id}`)}
                                                className={`px-4 py-3 text-left font-semibold text-sm w-full transition-all duration-200 ${isOpen
                                                    ? `text-white bg-gradient-to-r ${item.color}`
                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                    } rounded-none`}
                                            >
                                                {item.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="bg-white px-4 py-4 text-sm text-gray-700">

                                                <div className="space-y-4 text-gray-700 leading-relaxed">

                                                    {item.data.length > 0 && item.data.map((overv, index) => (
                                                        <div key={index} className="pl-5 flex text-sm items-start gap-3">

                                                            <span className='font-medium'>
                                                                {index + 1}
                                                            </span>
                                                            <Link href={overv.href} className='text-blue-400 hover:underline'>
                                                                {overv.name}
                                                            </Link>

                                                        </div>
                                                    ))}




                                                </div>


                                                <div className="container mx-auto mt-10">
                                                    <div className="max-w-5xl mx-auto">

                                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                                            Eligibility Criteria
                                                        </h2>
                                                        <h3 className='font-bold text-sm my-2'>
                                                            Multiple pathways to join our {item.title} Program

                                                        </h3>
                                                        <div className='max-w-5xl flex mx-auto'>
                                                            <Accordion type="multiple" defaultValue={openItems} collapsible className="w-full space-y-3">
                                                                {item.eligibilityCriteria.length > 0 && item.eligibilityCriteria.map((item) => {
                                                                    const isOpen = openItems.includes(`item-${item.id}`);
                                                                    return (
                                                                        <AccordionItem
                                                                            key={item.id}
                                                                            value={`item-${item.id}`}
                                                                            className={` overflow-hidden rounded-md `}
                                                                        >
                                                                            <AccordionTrigger
                                                                                onClick={() => toggleItem(`item-${item.id}`)}
                                                                                className={`px-4 py-3 text-left font-semibold text-sm w-full transition-all duration-200 ${isOpen
                                                                                    ? `text-white bg-gradient-to-r ${item.color}`
                                                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                                                    } rounded-none`}
                                                                            >
                                                                                {item.title}
                                                                            </AccordionTrigger>
                                                                            <AccordionContent className="bg-gray-50 px-4 py-4 text-sm text-gray-700">
                                                                                <p className="mb-3 text-gray-600">{item.description}</p>
                                                                                <ul className="list-disc list-inside space-y-1">
                                                                                    {item.requirements.map((req, idx) => (
                                                                                        <li key={idx}>{req}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </AccordionContent>
                                                                        </AccordionItem>
                                                                    )
                                                                })}
                                                            </Accordion>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="max-w-5xl mx-auto mt-10">

                                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                                        Mode of Admission

                                                    </h2>
                                                    <h2 className="text-sm font-medium text-gray-600 mb-6">
                                                        For admissions, visit the portal to register/login and proceed with the admission application.

                                                    </h2>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        </div>




                    </div>
                </div>
            </div>







            <div className="max-w-5xl mx-auto mt-10 px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">                    For Admission related information:
                </h2>

                <p className="text-gray-700 mb-2">
                    <span className="font-semibold mb-1">Please visit:</span><br />
                    <span><span className='font-semibold'>Head (Admissions)</span>, First Floor, Admin Block of SVIET Campus,</span><br />
                    <span>Chandigarh-Patiala National Highway, Village Ramnagar,</span><br />
                    <span>Near Banur, Tehsil Rajpura, District Patiala, Punjab</span>
                </p>

                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Counselling Timings:</span> Monday to Saturday – <span className="font-semibold">10:00 AM to 4:00 PM</span>
                </p>

                <p className="text-gray-700 mb-2">
                    Please note that <span className="font-semibold">Swami Vivekanand Institute of Engineering & Technology</span> and other Sister Institutes remain closed on <span className="font-semibold">Sundays, 2nd & 4th Saturdays</span> and on <span className="font-semibold">Government Holidays</span>.
                </p>

                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">E-Mail ID:</span>{' '}
                    <a href="mailto:admission@sviet.org.in" className="text-blue-600 hover:underline">
                        admission@sviet.org.in
                    </a>
                </p>

                <p className="text-gray-700">
                    <span className="font-semibold">Management Admission Contact No.:</span> +91-94652 33333
                </p>
            </div>


        </section>
    )
}

export { PgLayout }




