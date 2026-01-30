import { StudentTestimonials } from "@/components/Admissions";
import { BoardOfManagement, CollegeOverview, CurrentInitiative, DistinguishedLeaders, HeroSection, Highlights, NewsEvents, Recruter, } from "@/components/Home";
import axiosInstance from "@/lib/axiosInstance";
const keyHighlights = [

  {
    title: "Diverse Academic Portfolio",
    description:
      "We  offer  AICTE,  PCI,  and  NCTE-approved  programs  across  engineering,  pharmacy,  education,  business, and management—catering to the varied aspirations of students. ",
    imageQuery: "https://static.shubhampf.cloud/Collegeoverview/international.JPG"

  },
  {
    title: "A Trusted Name Since 2004",
    description:
      "SVIET is equipped with cutting-edge laboratories, digital classrooms, well-stocked libraries, innovation hubs, and research centers that foster creativity and hands-on learning.",
    imageQuery: "https://static.shubhampf.cloud/Collegeoverview/super60.JPG"
  },
  {
    title: "World-Class Infrastructure",
    description:
      "With two decades of educational excellence, SVIET has built a legacy of trust, quality, and student success across technical and professional domains.",
    imageQuery: "https://static.shubhampf.cloud/Herosection/11.jpeg"
  },
  {
    title: "Expert Faculty & Mentorship",
    description:
      "Our highly qualified faculty blend academic knowledge with real-world experience to mentor students and guide them towards innovation, research, and entrepreneurship.",
    imageQuery: "https://static.shubhampf.cloud/Herosection/8.JPG",
  },
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Courses are designed with active input from industry leaders to meet current market needs. We emphasize internships, live projects, and technical training to ensure employability.",
    imageQuery: "https://static.shubhampf.cloud/Collegeoverview/startups.JPG"
  },
  {
    title: "Strong Placement Ecosystem",
    description:
      "With dedicated placement support, resume-building workshops, mock interviews, and corporate tie-ups, we ensure our students secure positions in top national and international companies.",
    imageQuery: "https://static.shubhampf.cloud/placement.webp"
  },
  {
    title: "Sports Facilities",
    description:
      "Unleash your potential and stay fit at our world-class sports facilities, promoting holistic development and a healthy lifestyle for all students.",
    imageQuery: "https://static.shubhampf.cloud/Collegeoverview/sports.jpg"
  },
]
export const testimonials = [
  {
    id: 1,
    name: "Gaurav Sharma",
    designation: "SDE",
    review: "Great learning experience and the college provided me with the opportunities needed. Truly outstanding! and really really thankful for the support",
    image: "https://www.sviet.ac.in/_next/static/media/rahul.9757b907.webp"
  },
  {
    id: 2,
    name: "Yash Khandelwal",
    designation: "System Engineer",
    review: "It have broadened my horizons and helped me advance my career. The college and management is incredibly supportive towards their students and also providing great learning experience for all",
    image: "https://www.sviet.ac.in/_next/static/media/yash.cd160865.jpeg"
  },
  {
    id: 3,
    review: "The program provided me with the skills and knowledge needed to excel in the field of software development. Highly recommended!",
    name: "Adaeze Chukwu",
    designation: "Software Engineer",
    image: "https://utfs.io/f/979ff15a-0111-4efc-b054-824350b1a676-r8134k.jpg"
  },
  {
    id: 4,
    review: "The instructors are top-notch and the curriculum is well-structured. I feel well-prepared for my career in data science.",
    name: "Darnell Johnson",
    designation: "Software Developer",
    image: "https://utfs.io/f/f5babd37-91a1-4be7-adbb-198e79bbade5-r8134i.jpg"
  },
  {
    id: 5,
    review: "Studying at SVIET has been an enriching experience. The professors are knowledgeable and approachable, and the practical learning approach helped me gain valuable skills. The campus life is engaging with numerous clubs and activities that cater to various interests.",
    name: "Omolara Adebayo",
    designation: "Software Engineer",
    image: "https://utfs.io/f/a8b0ca85-b5f5-43db-a070-bb708ade5307-r8135c.jpg",
  },
  {
    id: 6,
    review: "SVIET offers a perfect blend of academic excellence and cultural diversity. The infrastructure is impressive, and the hands-on learning opportunities have prepared me well for my career. I appreciated the efforts of the international office in making my transition smooth.",
    name: "Kareem Thompson",
    designation: "Software Developer",
    image: 'https://utfs.io/f/5b43a844-2dfa-468a-b083-1f56a5a09f00-r8135f.jpg'
  }

]
export default async function HomePage() {
  let images = [];
  let news = [];
  let notifications = [];
  let coes = []
  try {
    const imagesRes = await axiosInstance.get('/hero-images');
    images = imagesRes.data;

    const newsRes = await axiosInstance.get("/news");
    news = newsRes.data

    const notificationsRes = await axiosInstance.get("/notifications");
    notifications = notificationsRes.data;

    const coesRes = await axiosInstance.get("/coes");
    coes = coesRes.data;


  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const managementTeam = [
    {
      name: "Mr. Ashwani Garg",
      position: "Chairman",
      image: "https://static.shubhampf.cloud/management/ashwiniGarg.jpg",
      message:
        "I welcome every aspiring achiever to the Swami Vivekanand Institute of Engineering & Technology. Today SVIET  has  become  a  dream  place  to  provide  valuable  educational  experience  to  students,  from  different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVIET have been making towards the overall success of students across the world. We have an interactivecurriculum  made  to  provide  definite  learning  solutions  in  the  field  of  Scientific  studies,  Business  & Engineering.  In this world known as a  global village, all boundaries and the national borders are  gradually becoming  more  transparent.  Our  international  collaborations  have  helped  students  to  form  unlimited opportunities of global exposure for our students, to excel in their careers. So join  your hands with  SVIET and be future-ready."
    },
    {
      name: "Mr. Ashok Garg",
      position: "President",
      image: "https://static.shubhampf.cloud/management/ashoksir.jpg",
      message:
        "SVIET  has  experienced  remarkable  growth  in  recent  years,  earning  widespread  acclaim  for  its rapid advancement.  Our  journey  from  inception  to  our  current  standing  is  a  testament  to  our  unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer  diverse  programs  affiliated  with  both  national  and  international  universities.  We  celebrate  the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVIET is dedicated   to   providing   practical   solutions   and   fostering   intellectual   brilliance   through   research   and development. Let's collaborate in building a skilled society together. "
    },
  ]
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <HeroSection images={images} />
        <NewsEvents newsItems={news} notifications={notifications} coes={coes} />

        <section className="py-12  md:py-16 bg-gray-100 lg:pb-10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-4 text-center text-2xl font-bold text-[#003366] md:text-3xl">
              Overview              </h2>
            <p className="mx-auto mb-10 max-w-4xl text-justify text-gray-700">
              Founded  in  2004,  <span className="font-medium italic">"Swami  Vivekanand  Institute  of  Engineering  &  Technology  (SVIET)"</span>  is  a  NAAC-accredited  institute  known  for  providing  quality  technical  education.  It  is  the  premier  institute  under  the Swami  Vivekanand  Group  of  Institutes  (SVGOI),  managed  by  the  Shri  Raghu  Nath  Rai  Memorial Educational  &  Charitable  Trust.  With  modern  facilities,  experienced  teachers,  and  a  career-focused approach, SVIET helps students grow into skilled and responsible professionals.
            </p>

          </div>
        </section>
        <CollegeOverview />
        <CurrentInitiative />
        <Highlights keyHighlights={keyHighlights} />
        <div className="py-5">

          <BoardOfManagement inleft={false} headingInceter={true} heading="Our Visionaries" managementTeam={managementTeam} />
        </div>
        <Recruter />
        <StudentTestimonials testimonials={testimonials} />
        <DistinguishedLeaders />
      </main>
    </div>
  )
}
