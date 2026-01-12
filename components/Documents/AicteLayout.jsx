import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const AicteLayout = ({ resultsData, heading }) => {
    return (
        <div className="mb-10">

            <div className="container mx-auto px-4 py-8 md:px-6 lg:px-28">
                <div div className="mb-8">
                    <h2 className="text-3xl md:text-4xl  font-bold text-blue-900 mb-2">
                        {heading}
                    </h2>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                    {resultsData.map((result, idx) => (
                        <div key={idx} className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="sm:px-6 p-2 sm:py-3 text-left text-sm font-semibold text-[#003366] md:w-24 ">Sr. No.</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Details	</th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-[#003366] w-32">Files/URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.results.map((result, index) => (
                                        <tr key={index}
                                            className={`border-b border-gray-100 
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                          hover:bg-gray-100 transition-colors`}>
                                            <td className="md:text-center p-2 sm:px-6 sm:py-4 text-sm text-gray-700">{index + 1}</td>
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
                    ))}
                </div>

            </div>
        </div>
    )
}

export { AicteLayout }