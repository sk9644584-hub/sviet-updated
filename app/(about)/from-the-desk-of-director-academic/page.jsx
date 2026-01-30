import React from 'react'
import { NewBoardOfManagement } from '@/components/Home/BoardOfManagement/NewBoardOfManagement'

export const metadata = {
    title: "From the Desk of Director Academic"
}

const managementTeam = [

    {
        name: "Prof. (Dr.) Sanjeev Saini",
        position: "Director Academics",
        image: "https://static.shubhampf.cloud/management/1.jpeg",
        message: [
            `Modern education must go beyond preparing students for jobs—it should equip them for lifelong learning, leadership, and meaningful contributions to society. Guided by this belief, Swami Vivekanand Institute of Engineering & Technology (SVIET) has built an academic ecosystem where knowledge meets innovation, and values shape vision.`,
            `At Swami Vivekanand Institute of Engineering & Technology (SVIET), our vision goes beyond delivering academic content—we are committed to creating an environment where innovation, critical thinking, and lifelong learning flourish. Since our establishment in 2004, we have embraced the evolving demands of industry and society, designing academic programs that are practical, relevant, and future-ready.`,
            `Our academic philosophy places students at the heart of every initiative. Through well-structured curricula, outcome-based teaching, and the integration of modern technology, we equip our learners with the knowledge and skills needed to excel in a competitive global landscape. Our faculty members, serving as mentors and role models, guide students to cultivate professional competence alongside integrity and social responsibility.`,
            `We complement classroom learning with experiential opportunities—ranging from research projects and industrial training to seminars, cultural fests, and global collaborations—ensuring a well-rounded growth experience.`,
            `At SVIET, education is not merely about degrees; it is about transforming potential into achievement. We remain dedicated to producing graduates who are not only job-ready but also future leaders, innovators, and change-makers in their chosen fields.`
        ]
    },



]

const page = () => {
    return (
        <>
            <NewBoardOfManagement inleft={true} heading='Our Academic Leaders' managementTeam={managementTeam} />

        </>
    )
}

export default page