export const navItems = [
    {
        name: "Home", href: "/"
    },
    {
        name: "ABOUT US",
        dropdown: [
            {
                title: "", // No title for the first column as per image
                links: [
                    { name: "About SVIET", href: "/About-Sviet" },
                    { name: "Governing Body", href: "/governing-body" },
                    { name: "From the Desk of Director Academic", href: "/from-the-desk-of-director-academic" },
                    { name: "From the Desk of Principal", href: "/from-the-desk-of-principal" },
                    { name: "Administration", href: "/administration" },
                    { name: "Statutory Committee", href: "/committee" },

                ]
            },

        ]
    },
    {
        name: "Academics", href: "",
        dropdown: [
            {
                links: [
                    { name: "COMPUTER SCIENCE AND ENGINEERING", href: "/academics/Computer-Science-And-Engineering" },
                    { name: "ELECTRONICS & COMMUNICATION ENGINEERING", href: "/academics/Electronics-And-Communication-Engineering" },
                    { name: "ELECTRICAL ENGINEERING", href: "/academics/Electrical-Engineering" },
                    { name: "MECHANICAL ENGINEERING", href: "/academics/Mechanical-Engineering" },
                    { name: "CIVIL ENGINEERING", href: "/academics/Civil-Engineering" },
                    { name: "COMPUTER APPLICATIONS", href: "/academics/Computer-Applications" },
                    { name: "BUSINESS ADMINISTRATION", href: "/academics/Business-Administration" },
                    { name: "HOTEL MANAGEMENT", href: "/academics/Hotel-Management" },
                    { name: "APPLIED SCIENCES", href: "/academics/Applied-Sciences" },
                ]
            },
        ]
    },
    {
        name: "Admissions",
        href: "",
        dropdown: [
            {
                links: [
                    { name: "Under Graduation", href: "/Under-Graduation" },
                    { name: "Post Graduation", href: "/Post-Graduation" },
                    { name: "International Admissions", href: "/International-Admissions" }
                ]
            },

        ]
    },
    { name: "IQAC", href: "/iqac" },
    { name: "RESEARCH", href: "/Research", dropdown: [] },
    { name: "PLACEMENTS", href: "/Placements", dropdown: [] },
    {
        name: "Skill Labs",
        dropdown: [
            {
                title: "",
                links: [
                    { name: "The Uniques", href: "/Skill-Labs/The-Uniques" },
                    { name: "Super60", href: "/Skill-Labs/Super60" },
                ]
            },

        ]
    },
    {
        name: "Facilities",
        href: "/facilities/library"
    },
    {
        name: "Documents", href: "", dropdown: [
            {
                links: [
                    {
                        name: "Affiliation from University",
                        href: "/Affiliation-from-University"
                    },
                    { name: "AICTE Approvals", href: "/AICTE" },
                    { name: "Autonomous", href: "https://static.shubhampf.cloud/SwamVivekanandInstituteofEngineeringandTechnology.pdf" },
                    {
                        name: "Ph.D. Course Work Approval (IKGPTU)",
                        href: "https://static.shubhampf.cloud/2298-2303-Conduct-of-Course-work-of-IKGPTU-Ph.D-Students-in-NAAC-NBA-accredited-affiliated-colleges.pdf"
                    },
                    { name: "NAAC Accreditation Certificate", href: "/NAAC" },

                    {
                        name: "UGC 2(f) Recognition Letter",
                        href: "https://static.shubhampf.cloud/2FRecognitionLetter591-2025.pdf"
                    },
                    {
                       name: "IKGPTU Course Merger Notification",
                       href:"https://static.shubhampf.cloud/Notification.pdf"},
                    {
                        name: "Annual Accounts",
                        href: "#",
                        subLinks: [
                            { name: "2024-25", href: "https://static.shubhampf.cloud/Documents/AnnualAccounts/BalanceSheet2024-25.pdf" },
                            { name: "2023-24", href: "https://static.shubhampf.cloud/Documents/AnnualAccounts/balancesheet2023-24.pdf" },
                            { name: "2022-23", href: "https://static.shubhampf.cloud/Documents/AnnualAccounts/balancesheet2022-23.pdf" },
                        ]
                    },
                    {
                        name: "Statutory Committees",
                        href: "#",
                        subLinks: [
                            { name: "Student Grievances Redressal Committee", href: "https://static.shubhampf.cloud/Committees/StudentGrievancesRedressalCommittee.pdf" },
                            { name: "SC,ST & OBC Committe", href: "https://static.shubhampf.cloud/Committees/SCSTOBCCommitte.pdf" },
                            { name: "Internal Complaint Committee", href: "https://static.shubhampf.cloud/Committees/InternalComplaintCommittee.pdf" },
                            { name: "Anti Ragging Committee", href: "http://static.shubhampf.cloud/Committees/AntiRaggingCommittee.pdf" },
                        ]
                    },
                    {
                        name: "Institutional Development Plan",
                        href: "https://static.shubhampf.cloud/Documents/InstitutionalDevelopmentPlan.pdf"
                    },

                ],
            }
        ]
    },
    { name: "HR MANUAL", href: "https://static.shubhampf.cloud/HR-Manual.pdf", dropdown: [] },
    {
        name: "Examination", href: "",
        dropdown: [
            {
                links: [
                    { name: "Examination Portal", href: "https://autono.in" },
                ]
            }
        ]
    },
    {
        name: "NIRF", href: "",
        dropdown: [
            {
                links: [
                    { name: "NIRF 2026", href: "https://static.shubhampf.cloud/SwamiVivekanandInstituteofEnggTechnologyRamnagar20260129.pdf" },
                ]
            }
        ]
    },
    { name: "CONTACT US", href: "/contact-us", dropdown: [] },
    { name: "Gallery", href: "/CollegeGallery", dropdown: [] },

]
