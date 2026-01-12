
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Download } from 'lucide-react'
import { Sidebar } from "@/components/Academics/Sidebar"

export function SyllabusLayout({ departmentNameForNav, routeName, resultsData }) {




    return (
        <div className="flex min-h-screen flex-col">


            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-[#003366]">Syllabus</h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                <Accordion type="multiple" collapsible className="w-full" defaultValue={resultsData.map((_, index) => _.title + index)}>
                                    {resultsData.map((section, index) => (
                                        <AccordionItem key={section.title + index} value={section.title + index} className="border-b border-gray-200">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left bg-blue-50 hover:bg-blue-100 transition-colors">
                                                <span className="text-lg font-semibold text-[#003366]">{section.title}  {section.courseName && " - " + section.courseName}</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-0 py-0">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr className="bg-gray-50 border-b border-gray-200">
                                                                <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366] w-16">S.No</th>
                                                                <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Description</th>
                                                                <th className="px-6 py-3 text-center text-sm font-semibold text-[#003366] w-32">Download</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {section.results.map((result, index) => (
                                                                <tr key={result.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                                                                    <td className="px-6 py-4 text-sm text-gray-700">{result.id}</td>
                                                                    <td className="px-6 py-4 text-sm text-gray-700">{result.description}</td>
                                                                    <td className="px-6 py-4 text-center">
                                                                        <Button
                                                                            size="sm"
                                                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs"
                                                                            asChild
                                                                        >
                                                                            <Link href={result.downloadUrl}>
                                                                                <Download className="h-3 w-3 mr-1" />
                                                                                Download
                                                                            </Link>
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        <Sidebar activeRoute={5} departmentNameForNav={departmentNameForNav} routeName={routeName} />
                    </div>
                </div>
            </main>

        </div>
    )
}
