import { FacilitiesLayout } from '@/components/facilities/layout/facilitylayout'
import React from 'react'

const facilitiesData = [

    {
        content: [`The  college  has  a  rich  and  resourceful  library  that  serves  as  the  knowledge  hub  of  the campus.  It  provides  a  peaceful  and  academic  atmosphere  for  reading  and  learning.  The library houses a wide collection of national and international books, journals, periodicals, magazines, and research publications across all disciplines.`, `A  digital  library  facility  is  also  available,  giving  students  access  to  e-books,  e-journals, and  online  databases.  Students  and  faculty  can  make  use  of  the  reading  hall,  reference section, and computer terminals for research and project work.`],
        title: "Library",
        slug: "library",
        images: ["https://static.shubhampf.cloud/pics/Library/WhatsApp%20Image%202025-04-22%20at%2010.24.59%20AM.jpeg", "https://static.shubhampf.cloud/pics/Library/DSC01576.JPG", "https://static.shubhampf.cloud/pics/Library/WhatsApp%20Image%202025-04-22%20at%2010.24.57%20AM.jpeg", "https://static.shubhampf.cloud/pics/Library/WhatsApp%20Image%202025-04-22%20at%2010.24.58%20AM%20(1).jpeg", "https://static.shubhampf.cloud/pics/Library/WhatsApp%20Image%202025-04-22%20at%2010.24.58%20AM.jpeg", "https://static.shubhampf.cloud/pics/Library/WhatsApp%20Image%202025-04-22%20at%2010.24.59%20AM%20(1).jpeg"]
    },
    {
        content: [`Separate, secure, and well-maintained hostels are available for both boys and girls within the  campus  premises.  Each  hostel  is  equipped  with  essential  amenities  such  as  Wi-Fi,mess facility, hot water,  and laundry services to ensure a comfortable stay. Wardens are appointed  to  look  after  the  well-being,  discipline,  and  safety  of  the  residents.  Regular checks,  cleanliness  drives,  and  recreational  activities  are  organized  to  create  a  homely and healthy living environment for the students.`],
        title: "Hostel Accomodation",
        slug: "hostel-accomodation",
        images: ["https://static.shubhampf.cloud/pics/hostels/boys-hostel-scaled.jpg", "https://static.shubhampf.cloud/pics/hostels/girls%20hostel1.JPG", "https://static.shubhampf.cloud/pics/hostels/girls%20hostel2.png",]
    },
    {
        images: ["https://static.shubhampf.cloud/pics/auditorium/373A7556.JPG", "https://static.shubhampf.cloud/pics/auditorium/audi2.png", "https://static.shubhampf.cloud/pics/auditorium/audi.JPG", "https://static.shubhampf.cloud/pics/auditorium/auditorium-scaled.jpg"],
        content: [`The  college  has  a  fully  air-conditioned  and  spacious  auditorium,  designed  to  host  a variety   of   academic   and   cultural   programs.   It   serves   as   the   venue   for   seminars, conferences,  workshops,  expert  lectures,   and   college   functions.  The  auditorium  is equipped  with  advanced  sound  systems,  stage  lighting,  and  multimedia  projection facilities  that  enhance  the  overall  experience  of  every  event.  It  provides  a  common platform  for  students  to  showcase  their  creativity,  talent,  and  leadership  skills  through different activities organized throughout the year.`],
        title: "Auditorium",
        slug: "auditorium"
    },
    {
        title: "Sports",
        slug: "sports",
        content: [`SVIET encourages all-round development by promoting sports and physical activities on campus. The college provides both indoor and outdoor sports facilities including grounds for  cricket,  football,  volleyball,  basketball  and  badminton.  Students  regularly  participate in inter-departmental and inter-college tournaments organized by the institute.`],
        images: ["https://static.shubhampf.cloud/pics/Sports/pic%201.jpeg", "https://static.shubhampf.cloud/pics/Sports/volleyball.JPG", "https://static.shubhampf.cloud/pics/Sports/WhatsApp%20Image%202025-07-03%20at%2012.30.30%20AM%20(1).jpeg", "https://static.shubhampf.cloud/pics/Sports/WhatsApp%20Image%202025-10-11%20at%204.23.53%20PM.jpeg"]
    },
    {
        title: "Gymnasium",
        slug: "gymnasium",
        images: ["https://static.shubhampf.cloud/pics/gym/gym%201.png", "https://static.shubhampf.cloud/pics/gym/gym%202.png", "https://static.shubhampf.cloud/pics/gym/gym%203.png",]
        , content: [`The campus has a modern, fully equipped  gymnasium is available for students and staff to promote health and fitness. Certified trainers guide individuals in their fitness routines, encouraging   a  balanced  lifestyle   alongside  academic  pursuits.It  has  basic  fitness machines and equipment for regular workouts to maintain good health and fitness.`],
    },
    {
        images: ["https://static.shubhampf.cloud/pics/Cafeteria/IMG_7384.jpg", "https://static.shubhampf.cloud/pics/Cafeteria/WhatsApp%20Image%202025-06-10%20at%2011.59.04%20PM%20(2).jpeg", "https://static.shubhampf.cloud/pics/Cafeteria/WhatsApp%20Image%202025-07-03%20at%2012.30.37%20AM%20(1).jpeg",],
        content: [`The  campus  cafeteria  offers  a  variety  of  hygienic  and  nutritious  meals,  snacks,  and beverages at affordable rates. Special care is taken to maintain cleanliness and hygiene in food preparation.  The  cafeteria  provides  a  comfortable  and  friendly  environment  where students can unwind and spend time with their peers during breaks.`],
        title: "Cafeteria",
        slug: "cafeteria"
    },
    {
        title: "Transportation",
        slug: "transportation",
        content: [`The  institute  operates  a well-maintained fleet  of  buses that  connect  the  campus  with nearby  cities  and  towns. The  buses  are  safe,  comfortable,  and  run  on  time  to  ensure smooth  travel  to  and  from  the  campus.Each  bus  is  equipped  with  safety  measures  for reliability and comfort.`],
        images: ["https://static.shubhampf.cloud/pics/Transport/DSC00533.jpg", "https://static.shubhampf.cloud/pics/Transport/transport.jpg", "https://static.shubhampf.cloud/pics/Transport/transport-3.jpg",]
    },
    {
        title: "Counselling Centre",
        slug: "counselling-centre",
        content: ["The  Counseling  Centre  at  SVIET  supports  students  in  their  personal,  emotional,  and academic growth.  It provides a friendly and confidential space where students can share their  concerns  and  receive  professional  guidance.  Trained  counselors  help  students  cope with stress, improve study habits, and make informed career decisions."],
        images: ["https://static.shubhampf.cloud/pics/counseling/b472b649-4de0-4fa5-924e-ce3c92b86e71.jpg", "https://static.shubhampf.cloud/pics/counseling/2ec97a7f-b6f5-43b8-9916-f55a423f9c22.jpg", "https://static.shubhampf.cloud/pics/counseling/ee5bfbad-0a05-4a11-b429-12f07ed1da88.jpg"]
    },
    {
        title: "ATM Facility",
        slug: "atm-facility",
        content: [`To  meet  the  daily  banking  and  financial  needs  of  students  and  staff,  an  ATM  facility  is available  on  the  campus  premises.  It  allows  easy  access  to  cash  withdrawals  andother basic transactions without leaving the campus.`],
        images: ["https://static.shubhampf.cloud/pics/atm/IMG-20251013-WA0012.jpg", "https://static.shubhampf.cloud/pics/atm/WhatsApp%20Image%202025-10-13%20at%203.42.55%20PM.jpeg"]

    }
]



export async function generateMetadata({ params }) {
    // Example: dynamic title based on params or query
    const facilityName = params?.facilityname || "Facilities";
    const title = facilitiesData.filter(data => data.slug === facilityName)[0]
    return {
        title: `${title.title}`,
        description: `Details and features of ${facilityName}.`,
    };
}
const page = async ({ params }) => {
    const param = params?.facilityname
    const data = facilitiesData.filter(data => data.slug === param)[0]

    return (
        <FacilitiesLayout
            slug={param}
            aboutFacility={data}
        />
    )
}

export default page