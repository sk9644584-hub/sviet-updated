import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [
  {
    title: "Under Graduation",
    data: {
      courseName: "B.Tech in Civil Engineering",
      level: "UG (Intake: 30)",
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
      "<strong>PEO 1:</strong> Graduates will establish a strong foundation in mathematics, science, and core Civil Engineering principles to solve real-world problems and pursue advanced studies or professional growth.",
      "<strong>PEO 2:</strong> Graduates will engage in successful careers in civil engineering and related fields, demonstrating technical expertise, leadership, and ethical responsibility.",
      "<strong>PEO 3:</strong> Graduates will contribute to the sustainable development of society by designing and implementing civil infrastructure with environmental, economic, and social considerations.",
      "<strong>PEO 4:</strong> Graduates will adapt to evolving technologies through life-long learning, innovation, and active participation in professional societies or higher education."
    ],
    psos: [
      "<strong>PSO1:</strong> Apply concepts of structural analysis, geotechnical, transportation, water resources, and environmental engineering to design safe and efficient civil engineering systems.",
      "<strong>PSO2:</strong> Use modern software tools like AutoCAD, STAAD Pro, ETABS, Primavera, GIS, and remote sensing techniques to analyze, plan, and manage civil engineering projects.",
      "<strong>PSO3:</strong> Demonstrate practical skills and knowledge through fieldwork, surveys, material testing, and project-based learning to solve contemporary civil engineering problems."
    ]

  },
  {
    title: "Post Graduation",
    data: {
      courseName: "M.Tech in Civil Engineering",
      level: "PG (Intake: 18)",
      "Year of Approval": "2024",

    },
    pos: [
      "<strong>PO1:</strong> Apply advanced mathematics, scientific methods, and engineering fundamentals to solve complex civil engineering problems.",
      "<strong>PO2:</strong> Identify, formulate, and analyze complex engineering problems using research literature and engineering principles.",
      "<strong>PO3:</strong> Design comprehensive systems/components that meet specified needs while ensuring public safety, and considering environmental and societal aspects.",
      "<strong>PO4:</strong> Conduct investigative experiments, analyze data, and interpret results to draw sound, research-supported conclusions.",
      "<strong>PO5:</strong> Employ modern engineering tools and IT methods—including modeling and simulations—with an awareness of their constraints.",
      "<strong>PO6:</strong> Demonstrate professional responsibility and ethical reasoning within societal, health, safety, legal, and cultural contexts.",
      "<strong>PO7:</strong> Understand the impact of engineering solutions on the environment and promote sustainable infrastructure and development.",
      "<strong>PO8:</strong> Uphold ethical standards and professional practices throughout engineering practice.",
      "<strong>PO9:</strong> Function effectively both as individuals and as team members or leaders in diverse, multidisciplinary settings.",
      "<strong>PO10:</strong> Communicate engineering concepts effectively through reports, documentation, and presentations to diverse audiences.",
      "<strong>PO11:</strong> Apply engineering and management principles for project planning, financial decisions, and leadership in multidisciplinary teams.",
      "<strong>PO12:</strong>  Engage in continuous, independent, lifelong learning to remain current amid technological advancement",
    ],
    peos: ["<strong>PEO 1:</strong> Utilize advanced civil engineering methodologies and cutting-edge technologies in academic and professional assignments.",
      "<strong>PEO 2:</strong> Pursue research-oriented careers and contribute solutions addressing societal and environmental challenges through innovation.",
      "<strong>PEO 3:</strong> Cultivate lifelong learning, ethical professional behavior, interpersonal skills, and teamwork abilities to thrive in dynamic multidisciplinary environments."],
    psos: [
      "<strong>PSO 1:</strong> Develop high value research through analytical rigor and contribute ethically and sustainably to society.",
      "<strong>PSO 2:</strong> Demonstrate entrepreneurial and design skills as civil engineering practitioners or quality control professionals.",
      "<strong>PSO 3:</strong> Address complex problems in construction and infrastructure through strong analytical skills and strategic solution design."
    ]

  },
]
const page = () => {
  return (
    <Programmeslayout
      programmes={programmes}
      routeName={'Civil-Engineering'}
      departmentNameForNav={"Civil Engineering"}
    />
  )
}

export default page