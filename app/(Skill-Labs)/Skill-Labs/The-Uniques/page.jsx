import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { FileText, Code, MessagesSquare, CheckCircle2, Users, Briefcase, Handshake, Rocket, Award, Cpu, BadgeCheck, Lightbulb, Star, Globe, Sparkles } from 'lucide-react';

export const metadata = {
    title: "The Uniques"
}

// --- Main Page Component ---
export default function TheUniquesPage() {
    return (
        <div className="bg-white text-gray-800">
            <HeroSection />
            <main className="container mx-auto px-4 py-16">
                <AboutSection />
                <SelectionSection />
                <NurturingTalentSection />
                <WhyAndTrainingSection />
                <BenefitsSection />
                <EmpoweringEntrepreneursSection />
                <FeatureSection
                    title="Innovative Business Strategies"
                    description="Explore the latest trends and strategies in entrepreneurship. Learn how to build successful startups, attract investors, and navigate the challenges of the business world."
                    imageUrl="https://static.shubhampf.cloud/Collegeoverview/startups.JPG"
                    imagePosition="left"
                />
                <FeatureSection
                    title="Delivering Exceptional Customer Experience"
                    description="Discover proven techniques for improving client satisfaction and loyalty. From personalized services to efficient communication, ensure your clients receive top-notch experiences."
                    imageUrl="https://static.shubhampf.cloud/Collegeoverview/super60.JPG"
                    imagePosition="right"
                />
                <FeatureSection
                    title="Unlocking Your Creative Potential"
                    description="Unleash your creativity with innovative ideas and inspirational techniques. Learn how to think outside the box, overcome creative blocks, and turn your imagination into reality."
                    imageUrl="https://static.shubhampf.cloud/placement.webp"
                    imagePosition="left"
                />
                <GDSCSection />
            </main>
        </div>
    );
}

// --- Individual Section Components ---

const HeroSection = () => (
    <section className="relative  w-full h-[50vh] md:h-[64vh] text-white">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG')" }}
        ></div>
        <div className="absolute inset-0 bg-black/80 opacity-60"></div>
        <div className="relative h-full flex flex-col justify-end items-center text-center p-4">
            <h1 className="text-4xl  font-extrabold tracking-tight uppercase">
                Creating a Difference <span className='text-red-700'>from</span> College to Corporate
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl opacity-80 text-gray-200">
                Transforming Remarkable Business Concepts Into Tangible Reality
            </p>
        </div>
    </section>
);

const AboutSection = () => (
    <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About The Uniques</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-justify text-gray-600 text-lg">
            <p>The Uniques Batch offers an exceptional development course aimed at transforming you into a skilled business consultant and entrepreneur. Founded in 2022 with 14 initial students, this program imparts various valuable skills that empower you to confidently navigate today's competitive landscape.</p>
            <p>The  Uniques  is  not  just  a  batch, it’s  a  prestigious  learning  community  that  represents excellence, innovation, and ambition at SVIET. This initiative is designed to groom students into future-ready professionals and provide them with exclusive access to expert mentorship, industry collaborations, and hands-on project experiences. </p>
            <p>
                Here,  students  go  beyond  classrooms  to  solve  real-world  problems,  engage  with  emerging technologies, and develop the confidence to lead. Being a part of The Uniques is a matter of pride, as it sets students apart as pioneers and problem-solvers of tomorrow.
            </p>
        </div>
    </section>
);

const SelectionSection = () => (
    <section className="py-16 bg-gray-700 text-white rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 px-8">
            <div>
                <h2 className="text-4xl font-bold  mb-4">Who We Are?</h2>
                <p className=" text-justify text-lg">The Uniques is an exclusive talent development initiative at SVIET that identifies the most passionate learners and gives them the platform to excel. We are a community of achievers, mentored by industry leaders, working together to transform knowledge into real-world impact. Being  part  of  The  Uniques  is  not  just  about belonging   to   a   batch—it’s  about  joining  a  movement  of  innovation,  leadership,  and excellence.</p>
            </div>
            <div className="flex justify-center">
                <img src="https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FuniWhite.9a4ad8dc.png&w=384&q=75" alt="The Uniques Logo" className="w-64" loading="lazy"
                />
            </div>
        </div>

        <div className="text-center px-8">
            <h3 className="text-3xl font-bold ">Selection Procedure</h3>
            <p className="mt-2 ">Entry into The Uniques is highly competitive and involves a multi-stage evaluation.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <SelectionStepCard
                    icon={<FileText className="w-8 h-8 text-blue-600" />}
                    title="Written Exam"
                    description="An  assessment  designed  to evaluate   aptitude,   logical reasoning,    and    problem-solving abilities, ensuring a strong foundation of analytical skills. "
                />
                <SelectionStepCard
                    icon={<Code className="w-8 h-8 text-blue-600" />}
                    title="Technical Round"
                    description="A  focused  evaluation  of core   technical   concepts and   basic   programming knowledge, testing practical     understanding and application."
                />
                <SelectionStepCard
                    icon={<MessagesSquare className="w-8 h-8 text-blue-600" />}
                    title="Interview Round"
                    description="A final interaction to assess communication skills, confidence,     and     overall potential—the     step     that shapes  you  into  being  part of something greater. 
"
                />

            </div>
            <p className='mt-4 opacity-85'>
                Only those who show technical brilliance and leadership potential secure a place.
            </p>
        </div>
    </section>
);

const SelectionStepCard = ({ icon, title, description }) => (
    <Card className="text-center p-6 bg-gray-200">
        <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardContent><p className="text-gray-600">{description}</p></CardContent>
    </Card>
);
const talentData = [
    {
        title: "Transitioning from College to Corporate",
        description: "Embark on your journey from college to the corporate world with confidence. Learn essential skills such as professional communication, time management, and workplace etiquette to excel in your new role.",
        bgImage: "url('https://static.shubhampf.cloud/Collegeoverview/research.JPG')"
    },
    {
        title: "Navigating the Corporate Environment",
        description: "Discover the ins and outs of the corporate environment and how to thrive in it. From understanding company culture to building professional relationships, equip yourself with the knowledge and tools needed for success.",
        bgImage: "url('https://static.shubhampf.cloud/Collegeoverview/startups.JPG')"
    },
    {
        title: "Building a Successful Career Path",
        description: "Chart your course for a successful career by setting goals, honing your skills, and seizing opportunities for growth. With dedication and perseverance, you can turn your aspirations into achievements in the corporate world.",
        bgImage: "url('https://static.shubhampf.cloud/placement.webp')"
    }
];

const NurturingTalentSection = () => (
    <section className="py-16 mt-3 text-center container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nurturing Talent, Fostering Creativity
        </h2>

        <div className="grid grid-cols-1 pt-3 md:grid-cols-3 gap-8">
            {talentData.map((card, index) => (
                <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-xl cursor-pointer h-96"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                        style={{ backgroundImage: card.bgImage }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Content wrapper */}
                    <div className="relative h-full flex flex-col justify-end text-left text-white p-6">

                        {/* Description - hidden by default, appears on hover */}
                        <p className="text-gray-200 text-base mb-3 opacity-0 
               transform translate-y-6 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                            {card.description}
                        </p>

                        {/* Title fixed at bottom */}
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const ListItem = ({ icon: Icons, children }) => {
    return (
        <li className="flex items-start">
            <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 mr-4">
                {Icons ? <Icons className="h-5 w-5 text-orange-600" /> : null}
            </div>
            <span className="pt-1 text-zinc-700">{children}</span>
        </li>
    )
}

const WhyAndTrainingSection = () => (
    <section className="bg-slate-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Centered Section Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                    Your Gateway to Excellence
                </h2>
                <p className="mt-4 text-lg text-zinc-600">
                    The Uniques program is meticulously designed to provide a holistic development experience, blending core advantages with targeted skill training.
                </p>
            </div>

            {/* Redesigned Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-20 max-w-5xl mx-auto">

                {/* Column 1: Why The Uniques? */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-zinc-800">Why The Uniques?</h3>
                    <ul className="space-y-5">
                        <ListItem icon={Users}>Expert Mentorship</ListItem>
                        <ListItem icon={Briefcase}>Live Project Experience</ListItem>
                        <ListItem icon={Handshake}>Networking Opportunities</ListItem>
                        <ListItem icon={Rocket}>Future-Ready Skills</ListItem>
                        <ListItem icon={Award}>Prestigious Recognition</ListItem>
                    </ul>
                </div>

                {/* Column 2: Training & Skill Development */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-zinc-800">Training & Skill Development</h3>
                    <ul className="space-y-5">
                        <ListItem icon={Cpu}>Advanced Tech Workshops</ListItem>
                        <ListItem icon={BadgeCheck}>Industry Certifications</ListItem>
                        <ListItem icon={Users}>Personality & Leadership Training</ListItem>
                        <ListItem icon={Lightbulb}>Hackathons & Innovation Challenges</ListItem>
                    </ul>
                </div>

            </div>
        </div>
    </section>
);


const benefitsData = [
    {
        icon: Briefcase,
        title: "Top-Tier Placements",
        description: "Secure coveted positions in reputed national and multinational organizations.",
    },
    {
        icon: Star,
        title: "Stellar Portfolios",
        description: "Build strong portfolios with published projects, research, and valuable industry certifications.",
    },
    {
        icon: Globe,
        title: "Global Opportunities",
        description: "Enhance your chances for international internships and admissions for higher education.",
    },
    {
        icon: Sparkles,
        title: "A Standout Reputation",
        description: "Be recognized as a confident innovator, setting you apart in interviews and beyond.",
    },
];
const BenefitsSection = () => (
    <section className="bg-slate-50 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Introduction */}
                <div className="space-y-6 text-center lg:text-left">
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto lg:mx-0"></div>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Tangible Career Benefits
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Graduates of The Uniques are recognized as campus leaders, consistently securing a distinct advantage in their professional journeys.
                    </p>
                </div>

                {/* Right Column: Benefits List */}
                <div className="space-y-8">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-5">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white shadow-md">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-zinc-800">{benefit.title}</h3>
                                <p className="mt-1 text-zinc-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
);
const EmpoweringEntrepreneursSection = () => (
    <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
                loading="lazy"

                src="https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FimageCover.51d6f474.jpeg&w=1920&q=75"
                alt="Interaction at U-Zone"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="space-y-4">
                <p className="text-sm font-semibold text-blue-600">ENTREPRENEURSHIP INSIGHTS</p>
                <h2 className="text-4xl font-bold text-gray-900">Empowering Entrepreneurs to Succeed</h2>
                <p className="text-gray-600">Entrepreneurship is about taking risks, pursuing passions, and turning ideas into reality. In today's fast-paced world, entrepreneurship is not just about starting a business; it's about creating value, solving problems, and making a difference. Whether you're a seasoned entrepreneur or just starting out, the journey is filled with challenges and opportunities. From crafting a compelling vision to building a strong team, entrepreneurship requires resilience, creativity, and dedication. Join us as we explore the exciting world of entrepreneurship and uncover the secrets to success.</p>
            </div>
        </div>
    </section>
);

const FeatureSection = ({ title, description, imageUrl, imagePosition }) => {
    const isImageLeft = imagePosition === 'left';
    return (
        <section className="py-16">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                <div className={`order-2 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={imageUrl} alt={title}
                        loading="lazy"
                        className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className={`order-1 ${isImageLeft ? 'md:order-2' : 'md:order-1'} space-y-3`}>
                    <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-600 text-lg">{description}</p>
                </div>
            </div>
        </section>
    );
};

const GDSCSection = () => (
    <section className="text-center bg-gray-50 rounded-lg p-8 md:p-16 mt-16">
        <img
            loading="lazy"

            src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/chapter_banners/gdsc%25201.0%2520copy.jpg"
            alt="Google Developer Student Club Banner"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-md mb-8"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Google Developer's Student Club</h2>
        <p className="max-w-3xl text-justify mx-auto text-gray-600 mb-8">
            We at GDSC-SVIET are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.
        </p>
        <p className="max-w-3xl text-justify mx-auto text-gray-600 mb-8">
            Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
        </p>

    </section>
);