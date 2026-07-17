import { Academicslayout } from '@/components/Academics'
import React from 'react'

const about = [
    `The Department of Applied Sciences at Swami Vivekanand Institute of Engineering & Technology (SVIET) is dedicated to promoting excellence in scientific education, research, and innovation. The department offers postgraduate programmes in Physics and Mathematics, providing students with a strong foundation in scientific concepts, analytical thinking, computational techniques, and research methodologies. The curriculum is designed to meet contemporary academic and industry requirements while fostering critical thinking, problem-solving abilities, and professional competence.`,
    `The department emphasizes experiential and research-oriented learning through classroom teaching, laboratory work, seminars, projects, workshops, and advanced computational training. Supported by highly qualified faculty members and modern infrastructure, the department strives to create an intellectually stimulating environment that encourages innovation, interdisciplinary collaboration, ethical values, and lifelong learning.`
]
const profile = [
    `The Department of Applied Sciences offers postgraduate programmes that equip students with advanced knowledge and research skills in the disciplines of Physics and Mathematics. The department focuses on developing scientific temperament, analytical reasoning, and computational proficiency through a balanced blend of theoretical learning and practical applications.`,
    `Students are encouraged to participate in research activities, conferences, workshops, seminars, scientific competitions, and collaborative projects that enhance their academic and professional growth. The department is committed to quality education through Outcome-Based Education (OBE), continuous assessment, and industry-relevant learning practices.`,
    {
        heading: "The Department aims to:",
        points: [
            "Deliver quality education through Outcome-Based Education (OBE).",
            "Promote excellence in teaching, research, and innovation.",
            "Develop analytical, computational, and problem-solving skills.",
            "Encourage interdisciplinary and collaborative research.",
            "Foster ethical values, leadership qualities, and professional competence.",
            "Prepare graduates for successful careers in higher education, research, industry, entrepreneurship, and public service.",
        ],
    },


]
const vision = [
    `To be a centre of excellence in science education, research, and innovation by integrating fundamental sciences with emerging technologies and industry needs, thereby contributing to sustainable development and enhancing the quality of life.
`
]
const mission = [
    `To provide globally relevant, industry-oriented, research-driven, and technology-enabled education at postgraduate and research levels in various disciplines of science.`,
    `To nurture scientifically competent, ethically responsible, and socially committed professionals capable of addressing global scientific and technological challenges.`,
    `To promote lifelong learning through continuing education programmes that strengthens the knowledge base and problem-solving abilities of science graduates.`,
    `To establish strong collaborations with premier national and international academic, research, and industrial organizations for mutual academic growth and research excellence.`,
    `To foster innovation, interdisciplinary research, entrepreneurship, and scientific temper for the advancement of society.`
]
export const metadata = {
    title: "Applied Sciences"
}
const page = () => {
    return (
        <>
            <Academicslayout
                showFaculty={false}
                teacherPic='https://static.shubhampf.cloud/teachers/as.jpeg'
                teacherName='Prof. (Dr.) Manoj Bali'
                Designation='Dean'
                Department='Department of Applied Sciences'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Applied Sciences"}
                routeName={"Applied-Sciences"}
            />
        </>
    )
}

export default page