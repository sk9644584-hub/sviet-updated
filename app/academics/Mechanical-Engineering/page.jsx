import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers
export const metadata = {
    title: "Mechanical Engineering"
}
const about = [
    `The Mechanical Engineering Department is a leading academic unit that blends foundational
engineering knowledge with modern technological advancements to prepare students for future
engineering challenges. With a robust academic framework, the department offers a well-rounded
curriculum that blends theoretical understanding with experiential learning through laboratories,
simulation tools, and workshops. Our accomplished faculty—renowned for their research
contributions and professional expertise—mentor students across a spectrum of specialized domains
including thermal systems, design, manufacturing, and sustainable technologies. Active collaborations
with leading industries, R&D organizations, and academic institutions enhance the practical exposure
of students, enabling them to participate in internships, projects, and other assignments. The
department takes pride in its students' consistent achievements in technical contests, scholarly
publications, and successful career placements across diverse sectors such as automotive, research,
and emerging technology-driven industries. Through its commitment to innovation, academic
excellence, and holistic skill development, the department continues to shape mechanical engineers
equipped to lead in a rapidly evolving global landscape.`
]
const profile = [
    `The Department of Mechanical Engineering at SVIET is a vibrant and forward-thinking academic unit
that harmoniously blends rich academic traditions with modern innovation. Since its inception, the
department has remained steadfast in its mission to deliver high-quality education, promote cuttingedge research, and equip students with the skills necessary to thrive in diverse professional domains,
including industry, academia, and entrepreneurship.
`, `With a team of highly qualified and experienced faculty members, the department offers a curriculum
that is rigorously aligned with contemporary industry standards and global technological
advancements. The academic program lays a robust foundation in fundamental mechanical
engineering domains such as thermodynamics, fluid mechanics, machine design, manufacturing
processes, and heat transfer. In addition to these core subjects, the curriculum is thoughtfully enriched
with modern topics such as computational modelling, 3D printing, and sustainable and renewable energy technologies. Through practical training, project-based learning, industrial collaborations, and
exposure to the latest tools and simulation software, students are not only encouraged to think
critically and innovatively but also empowered to become problem-solvers and leaders in a rapidly
evolving technological landscape.`,
]
const vision = [
    `To be known as a leading contributor to mechanical engineering education that equips graduates to
satisfy societal demands and build intellectually stimulating research facilities with cutting-edge
proficiency and world-class competency.


`
]
const mission = [
    `To provide the facilities and environment necessary for high-quality education in order to
pursue diverse careers and research opportunities in the field of mechanical engineering; to
educate, develop, and guide students to excel as professionals.
`,
    `To establish cutting-edge mechanical engineering research facilities so that educators and
pupils can learn, share, and develop new applications.
`, `To involve students in scholarly and academic pursuits that enhances the department's
standing in the global economy.
`,
]
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/ME.jpg'
                teacherName='Er. Vikrant'
                Designation='Head'
                Department='Department of Mechanical Engineering'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Mechanical Engineering"}
                routeName={"Mechanical-Engineering"}
            />
        </>
    )
}

export default page