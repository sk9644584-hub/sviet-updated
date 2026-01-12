import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [
    {
        title: "Under Graduation",
        data: {
            courseName: "B.Tech in Electronic and Communication Engineering",
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
            "<strong>PEO 1:</strong> To allocate solid foundation in electronics and communication engineering as well as good communication and entrepreneurship skills for approaching social issues.",
            "<strong>PEO 2:</strong> To convey students with scientific and engineering knowledge in order to examine, design and create narrative products for nurturing practical solutions for real life problems.",
            "<strong>PEO 3:</strong> - To make engineers with sound technical knowledge for covering all sorts of challenges in industry or in pursuance of higher studies.",
            "<strong>PEO 4:</strong> - To encourage students acquire aptitude for lifelong learning together with leadership skills, team spirit and ethical values so that they upgrade themselves with the latest trends in the field of engineering in order to serve the society."
        ],
        psos: [
            "<strong>PSO1: Working with Instruments : </strong> Appreciate working of electronic equipment/systems guided by practical experience and theoretical fundamental knowledge of Electronics & Communication Engineering.",
            "<strong>PSO2: Extrapolating Domain Knowledge : </strong> Ability to provide solutions to real-world problems in the field of Electronics & Communication Engineering by extrapolating the fundamental knowledge of electronic devices, circuits, embedded & communication systems.",
            "<strong>PSO3: Innovation and Design Ability : </strong> Innovative thinking and ability to design and/or improve products and/or systems for the society and industry for better utilization, human safety and reduced cost."
        ]

    },

    {
        title: "Post Graduation",
        data: {
            courseName: "M.Tech in Electronics and Communication Engineering",
            level: "PG (Intake: 12)",
            "Year of Approval": "2012",

        },
        pos: [
            "<strong>PO1:</strong> Ability to apply the knowledge of science, mathematics, and engineering principles for developing problem solving attitude.",
            "<strong>PO2:</strong> Ability to identify, formulate and solve engineering problems in the broad areas like Systems Design using communication and networking platforms and tools. Explore recent developments in areas like optical communication, satellite communication, wireless communication, networking, RF-microwave, antennas, measurements and standards in communication.",
            "<strong>PO3:</strong> Ability to understand and use different software tools for Design, Analysis and Verification in the domain of communication and networking. System results are obtained through progressive steps such as Design entry, Synthesis, Functional and Timing Simulation.",
            "<strong>PO4:</strong> Ability to design and conduct experiments, analyze and interpret data, imbibe programming skills for development of simulation experiments.",
            "<strong>PO5:</strong> Ability to function as a member of a multidisciplinary team with sense of ethics, integrity and social responsibility."
        ],

        peos: [
            "<strong>PEO1:</strong> Graduates shall be capable of building their career in related industries, R&D establishments as well as in teaching with their scholarly knowledge with respect to advanced topics in applied electronics and VLSI Engineering.",
            "<strong>PEO2:</strong> Graduates shall be capable of conceptualizing and analyzing engineering problems of societal importance related to embedded systems, VLSI and signal processing, conduct independent Research leading to technology solutions and communicate the outcomes through verbal and written mechanisms.",
            "<strong>PEO3:</strong> Graduates shall be able to collaborate, manage and execute projects in teams using appropriate tools/technologies with utmost professionalism and acceptable good practices."
        ],
        psos: []


    },
]
const page = () => {
    return (
        <Programmeslayout
            programmes={programmes}
            departmentNameForNav={"Electronics & Communication Engineering"}
            routeName={"Electronics-And-Communication-Engineering"}
        />
    )
}

export default page