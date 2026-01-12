import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card" // Import Card components
import { Separator } from "@/components/ui/separator" // Import Separator
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Links } from "./Links"
export const metadata = {
    title:"IQAC"
}

export default function IqacPage() {
    const coreFunctions = [
        "Develop and apply quality benchmarks for academic and administrative activities.",
        "Promote a learner-centric environment that encourages innovation, skill development, and effective teaching practices.",
        "Collect and analyze feedback from students, parents, alumni, and stakeholders to improve institutional performance.",
        "Share information on various quality standards and best practices in higher education.",
        "Organize workshops, seminars, and awareness programs on quality-related themes.",
        "Document key institutional activities to support academic growth and strategic planning.",
        "Act as a central coordinator for quality initiatives and foster a culture of continuous improvement.",
        "Maintain a comprehensive Management Information System (MIS) for data-driven decisions.",
        "Prepare and submit the Annual Quality Assurance Report (AQAR) to national agencies like NAAC, NBA, etc."
    ]

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
            <h1 className="mb-4 text-2xl font-extrabold text-[#003366] md:text-3xl">
                Internal Quality Assurance Cell (IQAC)
            </h1>
            <Links />


            <Separator className="my-8" />

            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Overview

                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                        <p className="text-justify">
                            At Swami Vivekanand Institute of Engineering & Technology (SVIET),
                            the Internal Quality Assurance Cell (IQAC) plays a key role in
                            maintaining and enhancing the quality of education and institutional
                            processes. In line with UGC guidelines under the XII Plan, the IQAC
                            is reconstituted to ensure that quality becomes a continuous and
                            integral part of the institution&apos;s functioning.
                            IQAC works as a central unit to promote a culture of quality
                            awareness and accountability across academics, administration, and
                            student services. It supports and monitors various initiatives
                            related to teaching, research, faculty development, student
                            feedback, and documentation to ensure that all standards of quality
                            education are consistently met.

                            The presence of a strong IQAC is essential for a successful NAAC
                            accreditation, as internal systems of quality are directly linked to
                            the outcomes of external assessment and recognition.       </p>
                    </div>



                </div>
            </div>


            <div className="max-w-5xl mt-6 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Core Functions of IQAC
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="flex items-start gap-3">

                        <ul className="space-y-3">
                            {coreFunctions.map((func, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#007bff]" />
                                    <span className="text-sm">{func}</span>
                                </li>
                            ))}
                        </ul>

                    </div>



                </div>
            </div>






            <div className="max-w-5xl mt-6 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Members of IQAC
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                        <p className="text-justify mb-4 text-gray-700">
                            The Internal Quality Assurance Cell comprises members from academic,
                            administrative, and student domains who collectively work to
                            strengthen and sustain quality practices. The team is committed to
                            building a culture of continuous improvement, ensuring that SVIET
                            evolves with time while delivering value to every learner.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">

                        <div className="block">
                            <Card className="shadow-lg pt-0 overflow-hidden ">
                                <CardContent className="p-0">
                                    <Table >
                                        <TableHeader>
                                            <TableRow className="bg-blue-50">

                                                <TableHead className="font-bold w-1  text-blue-900">
                                                    Sr. No
                                                </TableHead>

                                                <TableHead className="font-bold py-4 max-w-[200px] whitespace-normal break-words px-10 text-blue-900">
                                                    Position
                                                </TableHead>
                                                <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                    Name
                                                </TableHead>
                                                <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                    Designation
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">1</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Chairperson
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10">
                                                    Prof. (Dr.) Sanjeev Saini
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10">
                                                    Director Academics
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">2</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Teachers
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Dr. Vandana </div>
                                                    <div>Dr. Neeraj Kumar</div>
                                                    <div>Er. Jarnail Singh</div>
                                                    <div>Ms. Gurwinder Kaur</div>
                                                    <div>Dr. Indu Batra</div>
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>HOD, CSE</div>
                                                    <div>HOD, MBA</div>
                                                    <div>HOD, MCA</div>
                                                    <div>HOD, Applied Science</div>
                                                    <div>Associate Professor</div>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">3</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Management Member
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Er. Vishal Garg </div>

                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Director Secretarial & Administration</div>

                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">4</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Senior Administrative Officers
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Dr. Pertik Garg</div>
                                                    <div>Adv. Shubham Garg</div>
                                                    <div>Er. Ankur Gill </div>
                                                    <div>Mr. Sarabjeet Singh</div>
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Principal</div>
                                                    <div>Director Training & Placement</div>
                                                    <div>Director Operations</div>
                                                    <div>Dean, DSW</div>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">5</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Local Society, Students and Alumni
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Mr. Gaurav Garg </div>
                                                    <div>Mr. Neeraj Kumar </div>
                                                    <div>Ms. Vaishnavi Bajpai </div>
                                                    <div>Mr. Siddharth Miglani</div>
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Local Society</div>
                                                    <div>Student, B.Tech CSE</div>
                                                    <div>Student, B.Tech CSE</div>
                                                    <div>Alumnus, B.Tech CSE</div>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">6</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Nominee from Employers/ Industrialists/ Stakeholders
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Mr. Barjinder Singh Suri</div>
                                                    <div>Mr. Varun Garg</div>
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10 space-y-1">
                                                    <div>Managing Director, M/s Rise N Shine</div>
                                                    <div>Director, Appyez Financial Services</div>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow className="hover:bg-gray-50">
                                                <TableCell className="font-semibold px-4">7</TableCell>
                                                <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                    Coordinator
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10">
                                                    Er. Shivani Guleria
                                                </TableCell>
                                                <TableCell className="font-semibold py-4 px-10">
                                                    HOD, CIVIL
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>

                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
