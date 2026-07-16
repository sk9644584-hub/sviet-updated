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
    {
        title: "Post Graduation",
        data: {
            courseName: "Master of Commerce",
            level: "PG (Intake: 30)",
            "Year of Approval": "2014",

        },
        pos: [
            "<strong>PO1:</strong> Advanced Commerce Knowledge: Demonstrate advanced knowledge and understanding of commerce, accounting, finance, taxation, banking, marketing, economics, and business management to analyze and solve complex business problems.",
            "<strong>PO2:</strong> Critical Thinking and Problem Solving: Apply analytical, quantitative, and critical thinking skills to evaluate business situations, interpret financial and economic data, and develop effective solutions for organizational and societal challenges.",
            "<strong>PO3:</strong> Research and Innovation: Design and conduct research using appropriate methodologies, statistical tools, and digital technologies to generate meaningful insights and contribute to knowledge in commerce and business.",
            "<strong>PO4:</strong> Professional Ethics and Social Responsibility: Demonstrate ethical values, professional integrity, environmental consciousness, and social responsibility while making business and managerial decisions in diverse organizational contexts.",
            "<strong>PO5:</strong> Digital Competency and Lifelong Learning: Utilize modern information and communication technologies, accounting software, financial analytics tools, and digital business platforms while engaging in continuous learning to adapt to changing business environments.",
            "<strong>PO6:</strong> Leadership, Communication, and Entrepreneurship: Exhibit effective communication, leadership, teamwork, entrepreneurial mindset, and managerial competencies to lead organizations, manage resources, and create sustainable business opportunities."
        ],
        peos: [
            "<strong>PEO1:</strong> Professional Competence: Graduates will establish successful careers in commerce, accounting, finance, taxation, banking, insurance, marketing and related sectors by applying advanced knowledge and professional skills.",
            "<strong>PEO2:</strong> Higher Education and Research: Graduates will pursue higher studies, professional qualifications, research, and lifelong learning to enhance their academic and professional growth.",
            "<strong>PEO3:</strong> Leadership and Entrepreneurship: Graduates will demonstrate leadership, managerial, and entrepreneurial abilities to effectively manage organizations, create innovative business ventures, and contribute to economic development.",
            "<strong>PEO4:</strong> Ethical and Social Responsibility: Graduates will uphold ethical values, professional integrity, corporate governance, and social responsibility while addressing business, economic, and societal challenges.",
            "<strong>PEO5:</strong> Digital and Analytical Excellence: Graduates will effectively utilize modern digital technologies, analytical tools, and research methodologies to make informed business decisions in a dynamic global environment.",
            "<strong>PEO6:</strong> Global Perspective and Sustainable Development: Graduates will contribute to sustainable organizational and societal development by integrating global business perspectives, environmental consciousness, and inclusive economic practices into professional decision-making."
        ],
        psos: [
            "<strong>PSO1:</strong> Advanced Commerce and Financial Competency: Apply advanced concepts, principles, and practices of accounting, finance, taxation, auditing, banking, insurance, economics, and business management to analyze, interpret, and solve complex business and financial problems in diverse organizational settings.",
            "<strong>PSO2:</strong> Research, Digital Applications, and Strategic Decision-Making: Demonstrate proficiency in research methodology, statistical analysis, business analytics, and digital financial tools to conduct independent research, formulate evidence-based business strategies, and support sustainable organizational growth and entrepreneurial development."
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