import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `The Department of Electrical Engineering is committed to delivering quality education and
fostering innovation in the field of electrical and electronics engineering. With a focus on
academic excellence, practical skills, and research, the department prepares students to meet
the evolving demands of industry and society.

`,
    `It offers undergraduate, postgraduate programs supported by well-equipped laboratories and
experienced faculty. The department also encourages interdisciplinary research, industry collaboration, and student-driven initiatives to nurture well-rounded, future-ready engineers.`
]
const profile = [
    `The Department of Electrical Engineering is a dynamic and integral part of the institute,
dedicated to producing skilled and competent electrical engineers. With a strong focus on
academic excellence, hands-on training, and research, the department offers diploma,
undergraduate, postgraduate programs. `,
    `Supported by experienced faculty and modern laboratories, the department prepares students
to meet the challenges of the evolving electrical and electronics industry while contributing to
innovation and sustainable development.
`
]
const vision = [
    `To impart knowledge, develop skills and prepare graduates in achieving global excellence in
Electrical Engineering education, industry and research.

`
]
const mission = [
    `To prepare engineering graduates with deep understanding of fundamentals of
Electrical Engineering.

`,
    `To prepare professionals with good technical skills, positive attitude and ethical
values.
`, `To collaborate with industry, research organisations and academia to encourage
creativity and innovation.
`,
    `To provide them a platform for developing new products and systems that can help
industry and society as a whole.`
]
export const metadata = {
    title: "Electrical Engineering"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/navneet.jpeg'
                teacherName='Er. Navneet Kumar'
                Designation='Head'
                Department='Department of Electrical Engineering'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Electrical Engineering"}
                routeName={"Electrical-Engineering"}
            />
        </>
    )
}

export default page
