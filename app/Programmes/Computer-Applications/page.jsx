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