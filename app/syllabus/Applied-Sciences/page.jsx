import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Post Graduation",
        courseName: "M.Sc. Mathematics",
        results: [
            { id: 1, description: "PG Syllabus 2022", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Math/M_Sc_%20Math%20batch-2022-onwards.pdf" },
            { id: 2, description: "PG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Math/M_Sc_%20Math%20batch%202018%20scheme%20&%20syllabus.pdf" },
            { id: 3, description: "PG Syllabus 2017", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Math/M_Sc_%20Math%20batch%202017%20syllabus%20and%20scheme.pdf" },
            { id: 4, description: "PG Syllabus 2012", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Math/M_Sc_%20Math%20batch%202012_syllabus.pdf" },
        ]
    },
    {
        title: "Post Graduation",
        courseName: "M.Sc. Physics",
        results: [
            { id: 1, description: "PG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Physics/M_Sc_Physics_2021.pdf" },
            { id: 2, description: "PG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Physics/M_Sc_Physics_2018.pdf" },
            { id: 3, description: "PG Syllabus 2012", downloadUrl: "https://static.shubhampf.cloud/syllabus/msc/M.Sc%20Physics/M_Sc_Physics_2012.pdf" },
        ]
    },
]
const page = () => {
    return (
        <SyllabusLayout
            showFaculty={false}
            resultsData={resultsData}
            departmentNameForNav={"Applied Sciences"}
            routeName={"Applied-Sciences"}
        />
    )
}

export default page