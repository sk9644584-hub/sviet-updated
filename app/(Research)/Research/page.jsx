import { ResearchLayout } from '@/components/Research/ResearchLayout'
import React from 'react'
export const metadata = {
    title: "Research"
}
const about = [
    `At our college, research is not just an academic requirement—it is a way  of  thinking,  questioning,  and  innovating.  We  believe  that  true learning  extends  beyond  textbooks,  and  our  research  ecosystem empowers  both  students  and  faculty  to  explore,  experiment,  and excel.  Our  aim  is  to  develop  a  culture  where  ideas  are  nurtured, tested, and transformed into  meaningful outcomes that address real-world challenges.`,
    `Equipped  with  modern  facilities  and  open-access  interdisciplinary labs, the Research & Development Committee encourages creativity from  the  very  first  year  of  study.  These  innovation  spaces  are designed  to  break  the  boundaries  of  individual  disciplines,  allowing students  from  diverse  academic  backgrounds  to  work  together—transforming concepts into functional prototypes.`,
    `Our college serves as a hub where students and faculty collaborate to create solutions that address real-world challenges—from AI-driven applications   to   sustainable   engineering   practices.   Experienced faculty mentors and skilled technical staff  guide these teams through each stage of research, from idea generation and project planning to development and testing.`,
    `By combining intellectual curiosity with real-world applications, we strive to create solutions that contribute meaningfully to industry, society, and the academic community. Through the guidance  of  the  R&D  Committee,  we  remain  committed  to  fostering  innovation,  ethical research practices, and the pursuit of knowledge that benefits society at large.`
]
const page = () => {
    return (
        <ResearchLayout
            
            aboutDepartment={about}
        />
    )
}

export default page