import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [


    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/mba/MBA-2021.pdf" },
            { id: 2, description: "PG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/mba/MBA-2018.pdf" },
            { id: 3, description: "PG Syllabus 2012", downloadUrl: "https://static.shubhampf.cloud/syllabus/mba/MBA-2012.pdf" },
            { id: 4, description: "PG Syllabus 2009", downloadUrl: "https://static.shubhampf.cloud/syllabus/mba/MBA-2009.pdf" },
            { id: 5, description: "PG Syllabus 2006", downloadUrl: "https://static.shubhampf.cloud/syllabus/mba/MBA-2004.pdf" },

        ]
    },



]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            departmentNameForNav={"Business Administration"}
            routeName={"Business-Administration"}
        />
    )
}

export default page