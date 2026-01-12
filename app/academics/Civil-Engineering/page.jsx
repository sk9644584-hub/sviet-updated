import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `The Civil Engineering Department is a leading academic unit that integrates foundational engineering
principles with contemporary technological advancements to prepare students for future challenges in
infrastructure development and sustainability. With a robust academic framework, the department
offers a comprehensive curriculum that balances theoretical learning with hands-on experience
through laboratories, fieldwork, design studios, and industry-grade simulation tools.
Our accomplished faculty—recognized for their research, consultancy, and field expertise—mentor
students across a spectrum of specialized domains, including structural engineering, geotechnical
engineering, transportation systems, environmental engineering, and construction management.
Active collaborations with top construction firms, government agencies, research organizations, and
academic institutions provide students with practical exposure through internships, live projects, and
community-based assignments.
`,
    `The department takes pride in its students' achievements in national technical competitions, research
publications, and successful placements across sectors such as infrastructure development,
consultancy services, public works, and smart city planning. Through a commitment to academic
excellence, innovation, and sustainable development, the department continues to shape civil
engineers capable of addressing the complex infrastructural needs of a rapidly evolving world.`
]
const profile = [
    `The Department of Civil Engineering at SVIET is a vibrant and forward-thinking academic entity that
combines time-tested engineering values with emerging innovations in infrastructure and urban
development. Since its inception, the department has been committed to delivering quality education,
fostering advanced research, and preparing students to excel in various professional fields such as
construction, consultancy, government services, and entrepreneurship.
With a team of highly qualified and experienced faculty members, the department offers a curriculum
aligned with modern industry requirements and global engineering standards. The program builds a
strong foundation in key civil engineering areas such as structural analysis, construction materials,
fluid mechanics, geotechnical engineering, transportation planning, and environmental engineering. In addition to these core subjects, the curriculum is enriched with contemporary topics such as Building
Information Modeling (BIM), sustainable urban planning, disaster risk reduction, and smart
infrastructure technologies.`, `Through rigorous field training, project-based learning, software exposure (e.g., AutoCAD, STAAD
Pro, ETABS), and academic-industry collaborations, students are equipped to think critically, design
innovatively, and implement practical solutions to real-world civil engineering problems. The
department's emphasis on holistic development and practical competence ensures that graduates are
ready to lead and contribute meaningfully in the ever-evolving civil engineering landscape.`
]
const vision = [
    `To emerge as a department offering skilled technical engineers with technical competency, and
employability, and to foster graduates with entrepreneurial skills and ethics.
`
]
const mission = [`To impart quality education to students with technical expertise, critical thinking and problem
solving`, `To inculcate a strong sense of ethics, responsibility, and professionalism in students and
faculty`, `To encourage innovation and entrepreneurship by integrating entrepreneurship training,
projects and mentorship into the program. `]
export const metadata = {
    title: "Civil Engineering"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/IMG_20251013_122122.png'
                teacherName='Dr. Sanjay Goel'
                Designation='Head'
                Department='Department of Civil Engineering'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Civil Engineering"}
                routeName={"Civil-Engineering"}
            />
        </>
    )
}

export default page
