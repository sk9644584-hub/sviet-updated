import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `The Department of Computer Applications focuses on providing quality education in the field
of Information Technology. It aims to prepare students for careers in software development,
data analytics, and other IT-related areas.
`,
    `In addition to academic activities, the department organizes workshops, seminars,
hackathons, and collaborates with industry partners to foster innovation and real-world
problem-solving skills. With a vision to create competent professionals and researchers, the
department strives to prepare students for successful careers in software development, data
science, cyber security, and other advanced technology domains.
`
]
const profile = [
    `The Department of Computer Applications is a center of academic excellence and innovation
committed to nurturing skilled professionals and researchers in the ever-evolving domain of
computing. Established with the vision of providing high-quality education, the department
integrates strong theoretical foundations with extensive hands-on experience.
    `,
    `
    The Department of Computer Applications is dedicated to providing high-quality education
in software development and information technology with a focuses on programming,
database management, web technologies, data analytics, and emerging technologies like
artificial intelligence and cloud computing.`,
    `With a strong emphasis on innovation and problem-solving, the department encourages
students to participate in research activities, technical competitions, and entrepreneurial
ventures. Graduates of the department are well-prepared for successful careers in software
engineering, data science, artificial intelligence, networking, cyber security, and academia.
`
]
const vision = [
    `To give students the necessary skills to meet industry needs and become responsible
engineers, entrepreneurs, and citizens.
`
]
const mission = [`
    To empower students in the field of Computer Applications with the knowledge of
constantly evolving technologies`, `To prepare students with the abilities to tackle real-world challenges and efficiently
apply emerging technologies.`,
    `To work with industries and professional groups for continuous growth and
improvement`,
    `To support students in building successful careers as entrepreneurs.`]
export const metadata = {
    title: "Computer Applications"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/mca.jpeg'
                teacherName='Er. Jarnail Singh'
                Designation='Head'
                Department='Department of Computer Applications'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Computer Applications"}
                routeName={"Computer-Applications"}
            />
        </>
    )
}

export default page