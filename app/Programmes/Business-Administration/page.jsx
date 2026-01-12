import { Programmeslayout } from '@/components/programmes'
import React from 'react'
const programmes = [

    {
        title: "Post Graduation",
        data: {
            courseName: "Master of Business Administration",
            level: "PG (Intake: 120)",
            "Year of Approval": "2006",

        },
        pos: [
            "<strong>PO1:</strong> Business Environment and Domain Knowledge: Economic, legal and social environment of Indian business. Graduates are able to improve their awareness and knowledge about functioning of local and global business environment and society. This helps in recognizing the functioning of businesses, identifying potential business opportunities, evolvement of business enterprises and exploring the entrepreneurial opportunities.",
            "<strong>PO2:</strong> Critical thinking, Business Analysis, Problem Solving and Innovative Solutions: Competencies in quantitative and qualitative techniques. Graduates are expected to develop skills on analyzing the business data, application of relevant analysis, and problem solving in other functional areas such as marketing, business strategy and human resources.",
            "<strong>PO3:</strong> Global Exposure and Cross-Cultural Understanding: Demonstrate a global outlook with the ability to identify aspects of the global business and Cross Cultural Understanding.",
            "<strong>PO4:</strong> Social Responsiveness and Ethics: Developing responsiveness to contextual social issues/problems and exploring solutions, understanding business ethics and resolving ethical dilemmas. Graduates are expected to identify the contemporary social problems, explore the opportunities for social entrepreneurship, design business solutions and demonstrate ethical standards in organizational decision making. Demonstrate awareness of ethical issues and can distinguish ethical and unethical behaviours.",
            "<strong>PO5:</strong> Effective Communication: Usage of various forms of business communication, supported by effective use of appropriate technology, logical reasoning, articulation of ideas. Graduates are expected to develop effective oral and written communication especially in business applications, with the use of appropriate technology (business presentations, digital communication, social network platforms and so on).",
            "<strong>PO6:</strong> Leadership and Teamwork: Understanding leadership roles at various levels of the organization and leading teams. Graduates are expected to collaborate and lead teams across organizational boundaries and demonstrate leadership qualities, maximize the usage of diverse skills of team members in the related context."
        ],
        peos: [
            "<strong>PEO1:</strong> To inculcate knowledge in students with experiential learning and prepare them for advance study and lifelong learning.",
            "<strong>PEO2:</strong> To develop strategic understanding of fundamental principles of business and competencies in the area of accounts, marketing, interpersonal skills, human resource management and entrepreneurship.",
            "<strong>PEO3:</strong> To train the students for dynamic business environment and apply their perspectives through innovation and creativity.",
            "<strong>PEO4:</strong> To develop competencies in qualitative and quantitative techniques to analyze the business data as well as developing an understanding of economic, legal and social environment of Indian business.",
            "<strong>PEO5:</strong> To inculcate leadership skills, professionalism, effective communication skills, interpersonal skills and team work in students so as to enable them to manage and collaborate in diverse work environments.",
            "<strong>PEO6:</strong> To develop responsiveness to social issues and ability to identify business solutions to address the same. Students will also be able to understand the issues of business ethics."
        ],
        psos: [
            "<strong>PSO1:</strong> Industry-Oriented Managerial Competence: Graduates will develop strategic, analytical, and leadership skills in marketing, finance, and HRM to meet industry expectations and drive business growth.",
            "<strong>PSO2:</strong> Analytical & Entrepreneurial Problem-Solving: This will enable the students to apply quantitative and management techniques to analyze business challenges, craft strategies, and optimize resources for organizational and social impact."
        ]

    },
]
const page = () => {
    return (
        <Programmeslayout
            programmes={programmes}
            departmentNameForNav={"Business Administration"}
            routeName={"Business-Administration"}
        />
    )
}

export default page