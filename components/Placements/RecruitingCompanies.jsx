import React from 'react'
import { PlacementsSidebar } from './PlacementsSidebar'
import { Recruter } from '../Home'
const RecruitingCompanies = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* <div className='w-full bg-black/50 text-white p-4 sm:py-5 md:px-8 lg:py-6 lg:px-16 '>
                <h3 className='text-lg font-semibold md:text-2xl'>
                    Placements & Career Development
                </h3>
            </div> */}


            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">

                                <div
                                    id="overview"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Recruiting Companies
                                    </h2>
                                    <h3 className='text-center mb-3 font-bold'>
                                        Companies Visited-2024
                                    </h3>
                                    <div className="space-y-4 ">
                                        <TableOfCompanies />
                                    </div>
                                </div>
                                <div
                                    id="overview"
                                    className="p-6 !py-0 border-b border-gray-200"
                                >
                                    <div className="space-y-4 ">
                                        <Recruter />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Left Sidebar - Navigation */}
                        <PlacementsSidebar />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default RecruitingCompanies






const TableOfCompanies = () => {
    return (<div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-700 w-full text-sm text-black/90">
            <tbody>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">360 Circle Info tech Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">Corizo Edutech</td>
                    <td className="border border-gray-600 px-4 py-2">Escalon Business Services Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">Havells India Limited</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">75way Technologies PVT. LTD.</td>
                    <td className="border border-gray-600 px-4 py-2">Cvent</td>
                    <td className="border border-gray-600 px-4 py-2">Frisco Technologies Private Limited</td>
                    <td className="border border-gray-600 px-4 py-2">Hoping Minds</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Acxiom Consulting Private Limited</td>
                    <td className="border border-gray-600 px-4 py-2">De facto InfoTech</td>
                    <td className="border border-gray-600 px-4 py-2">Grappus</td>
                    <td className="border border-gray-600 px-4 py-2">ITExpertUS Inc.</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Aloha Technologies Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">DECATHLON</td>
                    <td className="border border-gray-600 px-4 py-2">Grazitti Interactive</td>
                    <td className="border border-gray-600 px-4 py-2">Kandhari Beverages</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Alphanumeric Ideas Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">EasyEcom</td>
                    <td className="border border-gray-600 px-4 py-2">Grepx Infotech Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">MAMSYS</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Altruist Technologies Private Limited</td>
                    <td className="border border-gray-600 px-4 py-2">Eclerx</td>
                    <td className="border border-gray-600 px-4 py-2">Growupp</td>
                    <td className="border border-gray-600 px-4 py-2">Omninos Solutions</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Amber Enterprises India Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">Education Culture Pvt Ltd!</td>
                    <td className="border border-gray-600 px-4 py-2">GSR STRATEGY</td>
                    <td className="border border-gray-600 px-4 py-2">Planet Spark</td>
                </tr>
                <tr>
                    <td className="border border-gray-600 px-4 py-2">Anviam Solutions Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">Ellocent Labs IT Solutions Pvt. Ltd.</td>
                    <td className="border border-gray-600 px-4 py-2">Hindustan Unilever Limited</td>
                    <td className="border border-gray-600 px-4 py-2">Realty Smartz Pvt. Ltd</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
