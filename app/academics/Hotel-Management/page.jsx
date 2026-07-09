import { Academicslayout } from '@/components/Academics'
import React from 'react'

const about = [
    `The Department of Hotel Management is committed to delivering quality hospitality education through an industry-oriented curriculum, practical training, research, innovation, and professional development. The department offers academic flexibility to design contemporary curricula aligned with national and global hospitality industry standards. It emphasizes experiential learning in culinary excellence, food and beverage service, front office operations, housekeeping management, tourism, entrepreneurship, and sustainable hospitality practices, enabling students to meet the evolving demands of the global hospitality sector.
`
]
const profile = [
    `The Department offers undergraduate and postgraduate programmes designed to prepare students for leadership roles in hotels, resorts, airlines, cruise lines, event management, tourism, and hospitality entrepreneurship. Students gain hands-on experience through modern training kitchens, bakery and confectionery laboratories, food production and service laboratories, housekeeping and front office laboratories, industry internships, live projects, workshops, and expert mentorship. The Department also promotes research, innovation, skill development, and industry collaboration to produce competent, confident, and globally employable hospitality professionals.`,


]
const vision = [
    `To be a centre of excellence in hospitality education by producing competent, ethical, innovative, and globally employable hospitality professionals.
`
]
const mission = [
    `To provide quality hospitality education through academic excellence, practical training, and experiential learning.`,
    `To develop professional competence, leadership, entrepreneurial mindset, communication skills, and ethical values among students.`,
    `To promote research, innovation, sustainability, and strong industry collaboration.`,
    `To prepare graduates for lifelong learning and successful careers in the global hospitality industry.`
]
export const metadata = {
    title: "Hotel Management"
}
const page = () => {
    return (
        <>
            <Academicslayout
                teacherPic='https://static.shubhampf.cloud/teachers/HotelMngmnt.png'
                teacherName='Dr. (Chef) RichaVerma'
                Designation='Head'
                Department='Department of Hotel Management'
                aboutDepartment={about}
                departmentProfile={profile}
                vision={vision}
                mission={mission}
                departmentNameForNav={"Hotel Management"}
                routeName={"Hotel-Management"}
            />
        </>
    )
}

export default page