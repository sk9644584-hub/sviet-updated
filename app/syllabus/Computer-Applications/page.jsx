import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [


    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus 2021", downloadUrl: "/syllabus/mca/MCA-2021.pdf" },
            { id: 2, description: "PG Syllabus 2020", downloadUrl: "/syllabus/mca/MCA-2020.pdf" },
            { id: 3, description: "PG Syllabus 2019", downloadUrl: "/syllabus/mca/MCA-2019.pdf" },
            { id: 4, description: "PG Syllabus 2015", downloadUrl: "/syllabus/mca/MCA-2015.pdf" },
            { id: 5, description: "PG Syllabus 2012", downloadUrl: "/syllabus/mca/MCA-2012.pdf" },
            { id: 6, description: "PG Syllabus 2003", downloadUrl: "/syllabus/mca/MCA-2003.pdf" },

        ]
    },



]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            departmentNameForNav={"Computer Applications"}
            routeName={"Computer-Applications"} />
    )
}

export default page