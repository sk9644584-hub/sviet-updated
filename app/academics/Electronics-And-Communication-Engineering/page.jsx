import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `The Department of Electronics and Communication Engineering is a dynamic and forwardlooking department committed to providing high-quality education and fostering innovation
in the fields of electronics, communication, and embedded systems. With a blend of strong
theoretical foundations and practical exposure, the department equips students to meet the
challenges of modern technological advancements.
`,
    `Offering undergraduate and postgraduate the department emphasizes research, industry
collaboration, and skill development. It focuses on core areas such as VLSI, embedded
systems, wireless communication, and IoT, preparing students for careers in industry,
research, and entrepreneurship.`
]
const profile = [
    `The Electronics and Communication Engineering Department is committed to excellence in
teaching, research, and innovation in the field of electronics, communication systems, and
related technologies. Established with the vision to develop competent engineers who can
contribute effectively to the global technology landscape, the department offers
comprehensive undergraduate and postgraduate programs. The curriculum is designed to
provide a strong foundation in core electronics, digital communication, signal processing,
microprocessors, embedded systems, and VLSI design, along with emerging areas such as
IoT, wireless communication, and robotics. The department is equipped with state-of-the-art
laboratories and research facilities to foster hands-on learning and experimentation.
`, `Our faculty members are highly qualified and actively engaged in research, publishing in
reputed journals and collaborating with industry and academic institutions. The department
encourages students to participate in workshops, seminars, internships, and projects that
enhance practical skills and industry readiness.
`, `With a focus on innovation, ethical engineering practices, and lifelong learning, the
Electronics and Communication Engineering Department strives to prepare students to meet
the challenges of a rapidly evolving technological world and contribute to societal
development.`
]
const vision = [
    `To impart knowledge and skill of Electronics and Communication engineering to develop and
sustain a culture of research while promoting values, innovation, entrepreneurship, ethics and
professionalism to fulfill the demand of industry and society.

`
]
const mission = [
    `To govern the electronics and communication engineering program with hands on
experience, establishing new knowledge and enhancing the ability to precede toward
the research orientations and encourage the academic growth.
`,
    `To upgrade creative thinking and inventions by the students and faculty.
`, `To develop significant industry–academia relationship.
`,
    `To encourage students and engrain professional norms, human virtues and supportive
attitude in the students.`
]

export const metadata = {
    title: "Electronics & Communication Engineering"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/ece.png'
                teacherName='Dr. Sudhakar Panday'
                Designation='Head'
                Department='Department of Electronics & Communication Engineering'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Electronics & Communication Engineering"}
                routeName={"Electronics-And-Communication-Engineering"}
            />
        </>
    )
}

export default page