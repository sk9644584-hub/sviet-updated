
"use client"
import React, { useState, useMemo } from 'react'
import { Search, FastForward, StepForward, StepBack } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { publicationData } from './publicationData'

const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [searchTerm, setSearchTerm] = useState("")

    // Filter and sort data
    const filteredData = useMemo(() => {
        return publicationData.filter((item) => {
            const searchLower = searchTerm.toLowerCase()
            return (
                item["Title of Paper"].toLowerCase().includes(searchLower) ||
                item["Name of the Author(s)"].toLowerCase().includes(searchLower) ||
                item["ISSN Number"].toLowerCase().includes(searchLower)
            )
        })
    }, [searchTerm])

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum)
        }
    }

    // Reset to first page when search or items per page changes
    const handleSearchChange = (value) => {
        setSearchTerm(value)
        setCurrentPage(1)
    }

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(Number.parseInt(value))
        setCurrentPage(1)
    }
    return (
        <main className="flex-1 ">
            {/* Header Section */}
            <div className=" p-6 ">
                <h1 className="text-4xl font-bold text-[#003366] mb-4">Publications</h1>

            </div>

            {/* Search and Filter Controls */}
            <div className="bg-white  pb-6 px-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Search Field */}
                    <div className="md:col-span-2 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            placeholder="Search by title, author, or ISSN..."
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Items per page moved here */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Show:</span>
                        <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                            <SelectTrigger className="w-20">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                        <span className="text-sm text-gray-600">per page</span>
                    </div>
                </div>


            </div>

            {/* Publications Table */}

            <div className="overflow-x-auto rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-blue-50">
                            <TableHead className="font-bold py-4 px-6 text-[#003366] max-w-[44px] w-[44px] min-w-[44px]">Sr. No</TableHead>
                            <TableHead className="font-bold py-4 px-6 text-[#003366] min-w-[300px] w-[300px] max-w-[300px]">
                                Title of Paper
                            </TableHead>
                            <TableHead className="font-bold py-4 px-6 text-[#003366] w-[200px] max-w-[200px] min-w-[200px]">
                                Name of the Author(s)
                            </TableHead>
                            <TableHead className="font-bold py-4 px-6 text-[#003366] min-w-[80px]">Year</TableHead>
                            <TableHead className="font-bold py-4 px-6 text-[#003366] min-w-[120px]">
                                ISSN Number
                            </TableHead>
                            {/* <TableHead className="font-bold py-4 px-6 text-[#003366] min-w-[100px]">
                                Link for Papers 
                            </TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentData.map((item, index) => (
                            <TableRow key={item.id} className="hover:bg-gray-50">
                                <TableCell className="max-w-[44px] w-[44px] min-w-[44px] font-semibold py-4 px-6">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </TableCell>
                                <TableCell className="py-4 break-words whitespace-normal min-w-[300px] w-[300px] max-w-[300px] px-6 font-medium">
                                    {item["Title of Paper"]}
                                </TableCell>
                                <TableCell className="font-semibold  break-words whitespace-normal w-[200px] max-w-[200px] min-w-[200px]  py-4 px-6">
                                    {item["Name of the Author(s)"]}

                                </TableCell>
                                <TableCell className="font-semibold py-4 px-6">{item["Year "]}</TableCell>
                                <TableCell className="font-semibold py-4 px-6">{item["ISSN Number"]}</TableCell>
                                {/* <TableCell className="text-center py-4 px-6">
                                    <Button
                                        variant="link"
                                        className="text-[#007bff] hover:text-[#0056b3] p-0"
                                        onClick={() => window.open(item["Link for Papers"], "_blank")}
                                    >
                                        View
                                    </Button>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


            {/* Pagination Controls */}
            <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3 text-center lg:text-left">
                    👉 Scroll left or right if the table is cut off on your screen.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4">
                    <div className="flex gap-2 flex-wrap">
                        <Button
                            onClick={() => goToPage(1)}
                            variant="ghost"
                            disabled={currentPage === 1}
                            className="disabled:cursor-not-allowed"
                        >
                            <FastForward className="rotate-180 h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="disabled:cursor-not-allowed"
                        >
                            <StepBack className="h-4 w-4" />
                        </Button>

                        <Badge variant="outline" className="px-3 py-1">
                            {currentPage} of {totalPages}
                        </Badge>

                        <Button
                            variant="ghost"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="disabled:cursor-not-allowed"
                        >
                            <StepForward className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => goToPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="disabled:cursor-not-allowed"
                        >
                            <FastForward className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export {

    DataTable
}