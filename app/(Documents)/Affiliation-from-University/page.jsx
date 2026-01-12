import { AicteLayout } from '@/components/Documents/AicteLayout'
export const metadata = {
    title: "Affiliation from University"
}
const resultsData = [
    {
        results: [
            {
                description: "SVIET- AFFILIATION  LETTER 2021-22",
                downloadUrl: "https://static.shubhampf.cloud/Documents/Letters/4.pdf"
            },
            {
                description: "SVIET- AFFILIATION LETTER  2022-23",
                downloadUrl: "https://static.shubhampf.cloud/Documents/Letters/5.pdf"
            },
            { id: 1, description: "SVIET- AFFILIATION LETTER 2023-24", downloadUrl: "https://static.shubhampf.cloud/Documents/Letters/1.pdf" },
            { id: 2, description: "SVIET- AFFILIATION LETTER 2024-25", downloadUrl: "https://static.shubhampf.cloud/Documents/Letters/2.pdf" },
            {
                description: "SVIET- AFFILIATION LETTER 2025-26", downloadUrl: "https://static.shubhampf.cloud/Documents/Letters/3.pdf"
            },


        ]
    },



]

const page = () => {
    return (
        <AicteLayout
            resultsData={resultsData}
            heading={"Affiliation from University"}
        />
    )
}

export default page