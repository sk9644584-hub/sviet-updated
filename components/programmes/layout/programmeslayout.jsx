
import { Sidebar } from "@/components/Academics/Sidebar"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

function Programmeslayout({ routeName, departmentNameForNav, programmes }) {

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-[#003366]">Programmes</h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                <Accordion
                                    type="multiple"
                                    collapsible
                                    className="w-full"
                                    defaultValue={programmes.map((_, i) => _.title + i)}

                                >
                                    {programmes.map((programme, index) => (
                                        <AccordionItem
                                            key={programme.title + index}
                                            value={programme.title + index}
                                            className="border-b border-gray-200"
                                        >
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left bg-blue-50 hover:bg-blue-100 transition-colors">
                                                <span className="text-lg font-semibold text-[#003366]">
                                                    {programme.title} - {programme.data.courseName}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <div className="space-y-6">
                                                    {/* Basic Information Table */}
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-200">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50 w-1/3">
                                                                        Course Name
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.courseName}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Level
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.level}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Year of Approval
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data["Year of Approval"]}
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>




                                                    {/* Programme Outcomes */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-[#003366] mb-4 border-b border-gray-200 pb-2">
                                                            Programme Outcomes (POs)
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {programme.pos.map((po, poIndex) => (
                                                                <div
                                                                    key={poIndex}
                                                                    className="flex items-start gap-3"
                                                                >

                                                                    <span dangerouslySetInnerHTML={{ __html: po }} className="text-gray-700 text-sm leading-relaxed">
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>


                                                    {/* Programme Educational Objectives */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-[#003366] mb-4 border-b border-gray-200 pb-2">
                                                            Programme Educational Objectives (PEOs)
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {programme.peos.map((peo, peoIndex) => (
                                                                <div
                                                                    key={peoIndex}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <span dangerouslySetInnerHTML={{ __html: peo }} className="text-gray-700 text-sm leading-relaxed" />

                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* Programme Specific Objectives (PSOs) */}
                                                    {programme.psos.length > 0 && <div>
                                                        <h3 className="text-lg font-semibold text-[#003366] mb-4 border-b border-gray-200 pb-2">
                                                            Programme Specific Objectives (PSOs)
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {programme.psos.map((pso, psoIndex) => (
                                                                <div
                                                                    key={psoIndex}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <span dangerouslySetInnerHTML={{ __html: pso }} className="text-gray-700 text-sm leading-relaxed" />

                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <Sidebar activeRoute={4} routeName={routeName} departmentNameForNav={departmentNameForNav} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export {
    Programmeslayout
}