import { Academicslayout } from '@/components/Academics'
import React from 'react'
// academics-teachers

const about = [
    `Department of Computer Science and Engineering is dedicated to providing quality
education, research, and innovation in the field of computing and technology. It focuses on
equipping students with a strong foundation in computer. The science principles,
programming, software development, data management, networking, and emerging
technologies such as artificial intelligence, machine learning, and cloud computing.
`,
    `In addition to academic activities, the department organizes workshops, seminars,
hackathons, and industry collaborations to foster innovation and real-world problem-solving
skills. With a vision to create competent professionals and researchers, the department strives
to prepare students for successful careers in software development, data science, cyber
security, and other advanced technology domains.`
]
const profile = [
    `The Department of Computer Science and Engineering (CSE) is a center of academic
excellence and innovation committed to nurturing skilled professionals and researchers in the
ever-evolving domain of computing. Established with the vision of providing high-quality
education, the department integrates strong theoretical foundations with extensive hands-on
experience.`, `The department offers undergraduate and postgraduate programs designed to equip students
with expertise in programming, software development, database systems, computer networks,
artificial intelligence, machine learning, cloud computing, cyber security, and other cuttingedge technologies.
`, `With a strong focus on innovation and problem-solving, the department encourages students
to participate in research activities, technical competitions, and entrepreneurial ventures.
Graduates of the department are well-prepared for successful careers in software engineering,
data science, artificial intelligence, networking, cyber security, and academia.`
]
const vision = [
    `To be a leading computer science department that nurtures innovation, technical excellence,
and ethical responsibility, producing skilled engineers and entrepreneurs who positively
impact society.
`
]
const mission = [`Deliver a comprehensive curriculum with state-of-the-art technology and experienced faculty, ensuring students acquire both foundational knowledge and specialized skills in Computer
Science and Engineering.`, `Encourage a strong sense of ethics, integrity, and professional conduct. Emphasize the
importance of ethical decision-making and social responsibility in technology-driven
careers.`, `Regularly update the curriculum to reflect the latest technological advancements and
industry best practices, ensuring that students are prepared to meet the demands of a
dynamic and evolving tech landscape.`, `Focus on hands-on learning, real-world projects, and industry collaborations to equip students
with practical skills. Promote internships, hackathons, and team-based problem-solving to
enhance their readiness for the workforce.`, `Build strong partnerships with leading technology companies and cultivate active alumni
networks to create mentoring, internship, and employment opportunities for students.`, `Support students in their career aspirations, whether in tech companies, research institutions,
or entrepreneurial ventures. Provide resources for career guidance, advanced studies, and
ongoing professional development.`]
export const metadata = {
    title: "Computer Science & Engineering"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/cse.jpeg'
                teacherName='Dr. Vandana'
                Designation='Head'
                Department='Department of Computer Science & Engineering'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Computer Science & Engineering"}
                routeName={"Computer-Science-And-Engineering"}
            />
        </>
    )
}

export default page