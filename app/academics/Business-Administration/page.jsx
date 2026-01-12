import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `The Department of Business Administration offers a dynamic and comprehensive MBA
program designed to prepare students for leadership roles in an increasingly complex
global business environment. Established in 2006 with the aim of fostering managerial
excellence, the department integrates academic rigor with real-world relevance.
Accredited by NAAC, the department currently has an approved intake of 120 seats.
Over the years, our students have secured placements in both multinational corporations
(MNCs) and leading national companies, reflecting the strength and industry orientation
of the program.

`,
    `To further enhance students’ skills and professional readiness, the department has
established a variety of student-driven clubs and committees that provide platforms for
holistic development and experiential learning. These initiatives help bridge the gap
between theory and practice, cultivating essential soft skills and leadership qualities. The
department boasts a strong team of dedicated faculty members, including professors,
assistant professors, and industry experts, with diverse backgrounds in academia,
research, and consulting. Faculty members actively contribute to scholarly knowledge
through publications in reputed national and international journals and participate
regularly in global conferences and symposia. The department remains committed to
continuous improvement and innovation in business education, in alignment with
institutional quality standards and industry expectations.
.`
]
const profile = [
    `The Department of Business Administration at SVIET is dedicated to nurturing skilled and
future-ready professionals who can succeed in the modern business world. Since its
inception, the department has focused on academic excellence, practical learning, and strong
industry connections. With a team of experienced faculty from various management
disciplines, the department offers a well-rounded curriculum that covers core areas such as
marketing, finance, human resource management, operations, and strategic management. It
also includes modern subjects like data analytics, digital marketing, business intelligence,
financial technology, and sustainable business practices to keep pace with industry trends.
The department promotes a student-cantered learning environment through case studies, live projects, internships, industrial visits, entrepreneurship development programs, and regular
interactions with industry experts. With access to advanced infrastructure, business
simulation tools, and a supportive innovation ecosystem, students are prepared to become
capable business professionals, researchers, and entrepreneurs in a rapidly evolving global
economy. `,


]
const vision = [
    `To be a world class management institute focused at developing innovative and most
ethical leaders of the future by excelling in business education, research, and
entrepreneurship towards sustainable development and social change.


`
]
const mission = [
    `To enhance and disseminate knowledge of management through applied and
collaborative research.

`,
    `To develop experts who align with industry expectations in management,
problem-solving, and leadership.
`, `To cultivate entrepreneurship and innovation in collaboration with the
international business and academic communities.
`,
    `To educate students on ethics, social issues, and environmental concerns.`
]
export const metadata = {
    title: "Business Administration"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/mba.jpg'
                teacherName='Dr. Neeraj Kumar'
                Designation='Head'
                Department='Department of Business Administration'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Business Administration"}
                routeName={"Business-Administration"}
            />
        </>
    )
}

export default page