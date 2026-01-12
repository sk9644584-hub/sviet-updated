import { AicteLayout } from '@/components/Documents/AicteLayout'
export const metadata = {
    title: "AICTE"
}
const resultsData = [
    {
        results: [
            { id: 3, description: "EOA Report 2021-22 SVIET", downloadUrl: "https://static.shubhampf.cloud/Documents/AICTE/3.pdf" },
            { id: 4, description: "EOA Report 2022-23 SVIET", downloadUrl: "https://static.shubhampf.cloud/Documents/AICTE/4.pdf" },
            { id: 5, description: "EOA Report 2023-24 SVIET", downloadUrl: "https://static.shubhampf.cloud/Documents/AICTE/5.pdf" },
            { id: 1, description: "EOA Report 2024-25 SVIET", downloadUrl: "https://static.shubhampf.cloud/Documents/AICTE/1.PDF" },
            { id: 2, description: "EOA Report 2025-26 SVIET", downloadUrl: "https://static.shubhampf.cloud/Documents/AICTE/2.PDF" },

        ]
    },



]
const page = () => {
    return (
        <AicteLayout
            resultsData={resultsData}
            heading={"AICTE"}
        />
    )
}

export default page