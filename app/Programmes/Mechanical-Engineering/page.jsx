import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [
    {
        title: "Under Graduation",
        data: {
            courseName: "B.Tech in Mechanical Engineering",
            level: "UG (Intake: 30)",
            "Year of Approval": "2004",

        },
        pos: [
            "<strong>PO1: Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
            "<strong>PO2: Problem analysis:</strong> Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
            "<strong>PO3: Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.",
            "<strong>PO4: Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including the design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
            "<strong>PO5: Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction, and modeling to complex engineering activities with an understanding of their limitations.",
            "<strong>PO6: The engineer and society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
            "<strong>PO7: Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of, and need for sustainable development.",
            "<strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
            "<strong>PO9: Individual and team work:</strong> Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.",
            "<strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society at large, such as, by comprehending and writing effective reports and design documentation, making effective presentations, and giving and receiving clear instructions.",
            "<strong>PO11: Project management and finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply them to one’s own work – as a member and leader in a team – to manage projects and in multidisciplinary environments.",
            "<strong>PO12: Life-Long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change."

        ],
        peos: [
            "<strong>PEO1:</strong> Establish successful careers in mechanical engineering and related fields, applying technical competence and professionalism.",
            "<strong>PEO2:</strong> Engage in higher studies, research, innovation, or entrepreneurship to contribute to technological development.",
            "<strong>PEO3:</strong> Demonstrate effective communication, leadership, ethical conduct, and a commitment to lifelong learning in a global context.",
            "<strong>PEO4:</strong> Contribute to sustainable societal development by applying engineering solutions to real-world challenges."
        ],
        psos: [
            "<strong>PSO1:</strong> Apply the concepts of design, thermal, manufacturing, and industrial engineering to solve real-life mechanical engineering problems.",
            "<strong>PSO2:</strong> Use modern tools and technologies like CAD/CAM, computational methods, and automation systems in the analysis and design of mechanical systems.",
            "<strong>PSO3:</strong> Exhibit professional skills in multidisciplinary areas such as automotive, energy, robotics, and materials with consideration for ethics and sustainability."
        ]

    },

    {
        title: "Post Graduation",
        data: {
            courseName: "M.Tech in Mechanical Engineering",
            level: "PG (Intake: 12)",
            "Year of Approval": "2012",

        },
        pos: [
            "<strong>PO1: Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
            "<strong>PO2: Problem analysis:</strong> Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
            "<strong>PO3: Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.",
            "<strong>PO4: Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including the design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
            "<strong>PO5: Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction, and modeling to complex engineering activities with an understanding of their limitations.",
            "<strong>PO6: The engineer and society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
            "<strong>PO7: Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of, and need for sustainable development.",
            "<strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
            "<strong>PO9: Individual and team work:</strong> Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.",
            "<strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society at large, such as, by comprehending and writing effective reports and design documentation, making effective presentations, and giving and receiving clear instructions.",
            "<strong>PO11: Project management and finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply them to one’s own work – as a member and leader in a team – to manage projects and in multidisciplinary environments.",
            "<strong>PO12: Life-Long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change."

        ],

        peos: [
            "<strong>PSO-1:</strong> Develop and analyze thermal-fluids, machine-design, and manufacturing systems using advanced analytical and simulation tools.",
            "<strong>PSO-2:</strong> Apply computational modeling software (e.g. CFD, FEA, CAD/CAM) to design and optimize mechanical systems with ethical, economic, and environmental considerations.",
            "<strong>PSO-3:</strong> Engage in interdisciplinary research and apply sustainable engineering practices in real-world projects."
        ],
        psos: [
            "<strong>PSO-1:</strong> Develop and analyze thermal-fluids, machine-design, and manufacturing systems using advanced analytical and simulation tools.",
            "<strong>PSO-2:</strong> Apply computational modeling software (e.g. CFD, FEA, CAD/CAM) to design and optimize mechanical systems with ethical, economic, and environmental considerations.",
            "<strong>PSO-3:</strong> Engage in interdisciplinary research and apply sustainable engineering practices in real-world projects."
        ]


    },
]
const page = () => {
    return (
        <Programmeslayout
            programmes={programmes}
            departmentNameForNav={"Mechanical Engineering"}
            routeName={"Mechanical-Engineering"}
        />
    )
}

export default page