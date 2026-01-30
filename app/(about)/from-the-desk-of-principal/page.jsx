import { NewBoardOfManagement } from '@/components/Home/BoardOfManagement/NewBoardOfManagement'
import React from 'react'
export const metadata = {
    title: "From the Desk of Principal"
}

const managementTeam = [

    {
        name: "Dr. Pertik Garg",
        position: "Principal",
        image: "https://static.shubhampf.cloud/management/pertik.webp",
        message: [
            "At SVIET, we stand at the threshold of excellence, driven by the spirit of innovation, integrity, and inclusivity. As the Principal, I am honored to lead this esteemed institution, where we nurture the minds that shape the future.Our commitment to academic excellence, coupled with a holistic approach to education, empowers our students to become not just engineers and technologists but leaders of tomorrow. We believe in providing a conducive environment where creativity thrives, ideas flourish, and aspirations take flight. As we embark on this journey together, let us remember the words of Swami Vivekananda, “Arise, awake, and stop not till the goal is reached.” Let us strive for excellence in all our endeavors, embracing challenges as opportunities for growth and learning."]
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