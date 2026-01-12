import { InternationalAdmissions } from '@/components/Admissions'
import React from 'react'
export const metadata = {
    title: "International Admissions"
}
const overviews = ["At Swami Vivekanand Institute of Engineering & Technology (SVIET), we take pride in being a preferred destination for students from around the world. The Department of International Affairs has been established to provide dedicated support and guidance to our international student community.", "Each  year,  over  800  international  students  choose  SVIET  for  their  academic  journey,  drawn  by  our commitment to quality education, multicultural environment, and student-friendly infrastructure.", "The Department of International Affairs serves as the single-point contact for all international students and assists them in  all  aspects  of  campus  life from  hostel  arrangements  and  amenities  to  documentation,  visa support, career counseling, and integration into Indian culture.", "Our aim is to ensure that every international student feels safe, welcomed, and fully supported during their stay in India.", "SVIET  offers  a holistic  and  globally  relevant  academic  experience,  where  students  gain  deep  subject knowledge,  practical  skills,  and  a  strong  industry  interface.  Our  programs  are  designed  to  help  students thrive in today’s competitive global landscape.", "With academic partnerships in 13+ countries and collaborations with 250+ Fortune 500 companies, SVIET provides a clear and promising path toward global career success."]
const page = () => {
    return (
        <InternationalAdmissions overviews={overviews} />
    )
}

export default page