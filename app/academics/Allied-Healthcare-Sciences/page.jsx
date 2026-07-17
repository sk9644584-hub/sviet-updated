import { Academicslayout } from '@/components/Academics'
import React from 'react'

const about = [
    `The Department of Allied and Healthcare Sciences at SVIET is dedicated to preparing skilled, ethical, and compassionate healthcare professionals capable of supporting modern healthcare systems through quality education and clinical excellence. Recognizing the growing demand for allied health professionals, the department strives to bridge the gap between academic learning and healthcare practice by fostering scientific knowledge, technical competence, and professional values.`,
    `The department promotes a learner-centric environment where students develop critical thinking, communication, teamwork, and problem-solving skills alongside technical expertise. Experienced faculty members mentor students through interactive teaching, practical demonstrations, research activities, and community engagement, ensuring their holistic academic and professional development.`,
    `To enrich learning, the department collaborates with hospitals, diagnostic centres, and healthcare institutions, enabling students to gain valuable exposure through clinical postings, internships, workshops, industrial visits, and expert lectures. By nurturing innovation, ethical practices, and a commitment to lifelong learning, the department aims to produce healthcare professionals who contribute meaningfully to patient care, public health, and the advancement of allied healthcare services.`
]
const profile = [
    `The Department of Allied and Healthcare Sciences offers undergraduate and postgraduate programmes in Medical Laboratory Sciences (MLS), Operation Theatre Technology (OTT), Cardiac Care Technology (CCT), and Radiology & Imaging Technology (RIT). The programmes are designed in accordance with contemporary healthcare requirements and emphasize competency-based learning through a balanced blend of theory and practical training.`,

    `The department is equipped with modern laboratories and advanced equipment that enable students to gain hands-on experience in diagnostic procedures, laboratory techniques, operation theatre practices, cardiac monitoring, medical imaging, infection control, and patient safety. The curriculum is supported by clinical training in reputed hospitals, allowing students to apply classroom knowledge in real healthcare settings.`,
    `With a strong focus on Outcome-Based Education (OBE), the department encourages research, innovation, professional ethics, and continuous skill development. Graduates are well-prepared for careers in hospitals, diagnostic laboratories, operation theatres, cardiac care units, radiology departments, research organizations, public health institutions, and higher education, making them valuable members of multidisciplinary healthcare teams.

`

]
const vision = [
    `To be a centre of excellence in Allied and Healthcare Sciences by nurturing competent, ethical, compassionate, and innovative healthcare professionals who contribute to quality patient care, research, community health, and the advancement of healthcare at national and global levels.
`
]
const mission = [
    `To provide quality education through an outcome-based curriculum integrating biomedical sciences, clinical skills, practical training, and modern healthcare technologies.`,
    `To develop technically competent healthcare professionals with critical thinking, analytical abilities, and problem-solving skills.`,
    `To promote ethical values, professionalism, patient safety, quality assurance, and lifelong learning.`,
    `To strengthen academic, clinical, and industrial collaborations through internships, clinical postings, research, and community outreach.`,
    `To encourage research, innovation, entrepreneurship, and the adoption of emerging healthcare technologies.`,
    `To prepare socially responsible healthcare professionals committed to excellence in patient care, diagnostic services, and continuous professional development.`
]
export const metadata = {
    title: "Allied and Healthcare Sciences"
}
const page = () => {
    return (
        <>
            <Academicslayout
                showFaculty={false}
                teacherPic='https://static.shubhampf.cloud/teachers/Dr.ManishGoswami.jpeg'
                teacherName='Dr. Manish Goswami'
                Designation='Dean'
                Department='Department of Allied and Healthcare Sciences'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Allied and Healthcare Sciences"}
                routeName={"Allied-Healthcare-Sciences"}
            />
        </>
    )
}

export default page