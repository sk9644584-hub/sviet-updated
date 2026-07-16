import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [

    {
        title: "Post Graduation",
        data: {
            courseName: "Master of Computer Application",
            level: "PG (Intake: 60)",
            "Year of Approval": "2006",

        },
        pos: [
            "<strong>PO1:</strong> Computational Knowledge: Apply knowledge of computing fundamentals, computing specialization, mathematics, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.",
            "<strong>PO2:</strong> Problem Analysis: Identify, formulate, research literature, and solve complex computing problems to reach substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.",
            "<strong>PO3:</strong> Design /Development of Solutions: Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.",
            "<strong>PO4:</strong> Conduct investigations of complex Computing problems: Use search-based knowledge and research methods including the design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
            "<strong>PO5:</strong> Modern Tool Usage: Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations.",
            "<strong>PO6:</strong> Professional Ethics: Understand and commit to professional ethics and cyber regulations, responsibilities, and norms of professional computing practices.",
            "<strong>PO7:</strong> Life-long Learning: Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional.",
            "<strong>PO8:</strong> Project management and finance: Demonstrate knowledge and understanding of computing and management principles, and apply these to one’s own work—as a member and leader—to manage projects and in multidisciplinary environments.",
            "<strong>PO9:</strong> Communication Efficacy: Communicate effectively with the computing community, and with society at large, about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.",
            "<strong>PO10:</strong> Societal and Environmental Concern: Understand and assess societal, environmental, health, safety, legal, and cultural issues within local and global contexts, and the consequential responsibilities relevant to professional computing practices.",
            "<strong>PO11:</strong> Individual and Team Work: Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary environments.",
            "<strong>PO12:</strong> Innovation and Entrepreneurship: Identify timely opportunities and use innovation to create value and wealth for the betterment of the individual and society at large."
        ],

        peos: [
            "<strong>PEO1:</strong> To provide foundational theoretical and practical knowledge in Computer Applications, enabling students to excel in industries, pursue advanced studies, or embark on entrepreneurial ventures.",
            "<strong>PEO2:</strong> To build skills in critical thinking, analysis problems, and designing software solutions.",
            "<strong>PEO3:</strong> To encourage lifelong learning, instill ethical values, raise awareness of environmental issues, and highlight social responsibilities as software developers."
        ]
        ,
        psos: [
            "<strong>PSO1:</strong> Apply hands-on experience with emerging technologies and develop skills necessary to become effective software developer.",
            "<strong>PSO2:</strong> Able to evaluate the hardware and software components needed to develop application software."
        ]


    },
    {
        title: "Post Graduation Diploma",
        data: {
            courseName: "Post Graduate Diploma in Computer Application",
            level: "PGD (Intake: 30)",
            "Year of Approval": "2015",

        },
        pos: [
            "<strong>PO1:</strong> Fundamental Knowledge: Develop a strong foundation in Computer Science and Information Technology to understand, design, and develop software solutions for real-world applications.",
            "<strong>PO2:</strong> Critical Thinking and Problem Solving: Analyze problems logically, think critically, and apply appropriate computing techniques to develop effective and innovative solutions.",
            "<strong>PO3:</strong> Emerging Technologies: Gain knowledge of the latest technologies, tools, and industry trends to adapt to the rapidly changing IT environment.",
            "<strong>PO4:</strong> Modern Tools and Technologies: Use modern programming languages, software tools, databases, and development platforms to build efficient and reliable applications.",
            "<strong>PO5:</strong> Project Planning and Management: Plan, design, implement, and manage software projects by applying project management principles, documentation, and quality standards.",
            "<strong>PO6:</strong> Practical and Industry-Oriented Skills: Develop hands-on experience through laboratory work, case studies, and real-world projects to improve technical competence and employability.",
            "<strong>PO7:</strong> Teamwork, Leadership, and Professional Ethics: Work effectively as an individual or team member, demonstrate leadership qualities, communicate professionally, and follow ethical practices in the IT profession."
        ],

        peos: [
            "<strong>PEO1:</strong> Professional Knowledge: Apply fundamental knowledge of Computer Applications, Information Technology, and programming to develop effective software solutions for real-world problems.",
            "<strong>PEO2:</strong> Technical Competence: Use modern computing tools, programming languages, databases, and software development techniques to design, develop, and maintain IT applications.",
            "<strong>PEO3:</strong> Career Development and Lifelong Learning: Pursue successful careers, higher education, professional certifications, and continuously upgrade skills to meet the demands of emerging technologies.",
            "<strong>PEO4:</strong> Innovation and Problem Solving: Analyze complex computing problems, think critically, and develop innovative, efficient, and sustainable technology-based solutions.",
            "<strong>PEO5:</strong> Professional Ethics and Social Responsibility: Demonstrate ethical values, effective communication, teamwork, leadership, and social responsibility while working in diverse professional environments."
        ],

        psos: [
            "<strong>PSO1:</strong> Software Development and Programming Skills: Apply programming concepts, algorithms, and software development methodologies to design, develop, test, and maintain efficient software applications using modern programming languages and development tools.",
            "<strong>PSO2:</strong> Database and Web Technologies: Design, implement, and manage database systems and develop dynamic web-based applications using appropriate database management systems, web technologies, and frameworks.",
            "<strong>PSO3:</strong> Emerging Computing Technologies and Professional Competence: Utilize current computing technologies, networking concepts, cloud services, cyber security practices, and emerging IT tools to solve real-world problems while demonstrating professional ethics, teamwork, communication, and lifelong learning."
        ]


    },

]
const page = () => {
    return (
        <Programmeslayout
            programmes={programmes}
            departmentNameForNav={"Computer Applications"}
            routeName={"Computer-Applications"}
        />
    )
}

export default page