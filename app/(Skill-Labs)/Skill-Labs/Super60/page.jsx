export const metadata = {
    title:"Super 60"
}

import { AdvantageSection } from "../../(comps)/AdvantageSection";
import { AlumniSection } from "../../(comps)/AlumniSection";
import CoursesSection from "../../(comps)/CoursesSection";
import HeroSection from "../../(comps)/HeroSection";
import OverviewSection from "../../(comps)/OverviewSection";
import SelectionProcedureSection from "../../(comps)/SelectionProcedureSection";
import SuccessSection from "../../(comps)/SuccessSection";
export default function Home() {
    return (
        <main>
            <HeroSection />
            <OverviewSection />
            <CoursesSection />
            <AdvantageSection />
            <SuccessSection/>
            <SelectionProcedureSection />
            <AlumniSection/>
        </main>
    );
}