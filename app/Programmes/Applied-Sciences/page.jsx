import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [

    {
        title: "Post Graduation",
        data: {
            courseName: "M.Sc. Mathematics",
            level: "PG (Intake: 30)",
            "Year of Approval": "2014",

        },
        pos: [
            "<strong>PO1:</strong> Develop a strong foundation in pure and applied mathematics.",
            "<strong>PO2:</strong> Apply mathematical principles to solve complex scientific and real-world problems.",
            "<strong>PO3:</strong> Utilize modern computational tools and mathematical software effectively.",
            "<strong>PO4:</strong> Demonstrate analytical thinking, innovation, teamwork, and ethical responsibility.",
            "<strong>PO5:</strong> Apply mathematical modelling techniques to interdisciplinary domains.",
            "<strong>PO6:</strong> Pursue advanced research and lifelong learning in mathematics."
        ],
        peos: [
            "<strong>PEO1:</strong> Acquire advanced theoretical knowledge and strong conceptual foundations in mathematics.",
            "<strong>PEO2:</strong> Develop analytical, computational, and problem-solving abilities for higher studies, research, and industry.",
            "<strong>PEO3:</strong> Demonstrate research aptitude, innovation, ethical values, and lifelong learning."
        ],
        psos: [
            "<strong>PSO1:</strong> Apply mathematical concepts across interdisciplinary fields.",
            "<strong>PSO2:</strong> Analyse abstract mathematical structures and theories.",
            "<strong>PSO3:</strong> Formulate and solve real-world problems using mathematical models.",
            "<strong>PSO4:</strong> Conduct independent research in pure and applied mathematics.",
            "<strong>PSO5:</strong> Employ modern mathematical software for scientific investigations.",
            "<strong>PSO6:</strong> Demonstrate effective scientific communication through technical writing and presentations.",
            "<strong>PSO7:</strong> Prepare successfully for competitive examinations such as NET, GATE, and other national-level tests.",
            "<strong>PSO8:</strong> Promote mathematical knowledge and awareness in society."
        ]

    },
    {
        title: "Post Graduation",
        data: {
            courseName: "M.Sc. Physics",
            level: "PG (Intake: 30)",
            "Year of Approval": "2015",

        },
        pos: [
            "<strong>PO1:</strong> Apply advanced principles of physics to analyse complex scientific problems.",
            "<strong>PO2:</strong> Integrate theoretical, experimental, and computational approaches for scientific investigations.",
            "<strong>PO3:</strong> Design and conduct experiments using modern laboratory instruments and computational techniques.",
            "<strong>PO4:</strong> Analyse scientific data and interpret research findings effectively.",
            "<strong>PO5:</strong> Apply scientific knowledge responsibly while considering environmental, societal, legal, and ethical issues.",
            "<strong>PO6:</strong> Work independently and collaboratively in multidisciplinary environments.",
            "<strong>PO7:</strong> Communicate scientific knowledge through technical reports, presentations, and research publications.",
            "<strong>PO8:</strong> Demonstrate leadership, project management, professional ethics, and lifelong learning."
        ],
        peos: [
            "<strong>PEO1:</strong> Apply advanced concepts of physics to solve scientific and technological problems.",
            "<strong>PEO2:</strong> Develop expertise in theoretical, computational, and experimental physics for successful careers in research, higher education, and industry.",
            "<strong>PEO3:</strong> Pursue lifelong learning, professional excellence, innovation, and ethical scientific practice while adapting to emerging technologies."
        ],
        psos: [
            "<strong>PSO1:</strong> Demonstrate comprehensive knowledge of classical and modern physics.",
            "<strong>PSO2:</strong> Perform and analyse advanced experiments in electronics, atomic, nuclear, condensed matter, and computational physics.",
            "<strong>PSO3:</strong> Apply physics principles to research, renewable energy, materials science, industry, and interdisciplinary scientific applications."
        ]

    },

]
const page = () => {
    return (
        <Programmeslayout
            showFaculty={false}
            programmes={programmes}
            departmentNameForNav={"Applied Sciences"}
            routeName={"Applied-Sciences"}
        />
    )
}

export default page