import { Briefcase, TrendingUp, Users, Building2 } from "lucide-react";
import CountUp from "../Animations/CountUp";

export default function PlacementRecord() {
    const stats = [
        { id: 1, icon: <Briefcase className="w-8 h-8" />, value: "3000", label: "Placements" },
        { id: 2, icon: <TrendingUp className="w-8 h-8" />, value: "50", label: "Highest Package" },
        { id: 3, icon: <Users className="w-8 h-8" />, value: "12000", label: "Dreams Fulfilled" },
        { id: 4, icon: <Building2 className="w-8 h-8" />, value: "350", label: "Companies Visited" },
    ];

    return (
        <section className=" text-black/80 border-b ">
            <div className="text-left !pb-2 p-6">
                <h2 className="text-xl font-bold text-[#003366] mb-4">
                    Our Impeccable Placement Record
                </h2>
                {/* <p className="text-gray-200 mt-2 text-sm sm:text-base">
                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                        Numbers that speak volumes about our commitment to student success
                    </h2>
                </p> */}
            </div>

            <div className="grid grid-cols-1 !pb-6 sm:grid-cols-2 xl:grid-cols-4 px-6 sm:px-10 lg:px-16 gap-6">
                {stats.map((stat) => (
                    <div

                        key={stat.id}
                        className="flex border flex-col items-center justify-center bg-white text-[#003366] rounded-2xl py-6 p-5 shadow-md hover:shadow-lg transition"
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/90 text-[#003366] mb-4">
                            {stat.icon}
                        </div>
                        <h3 className="text-2xl font-bold">
                            <CountUp
                                from={0}
                                to={stat.value}
                                separator=","
                                direction="up"
                                duration={0.5}
                                className="count-up-text"
                            />
                            {stat.label === "Highest Package" ? " LPA" : " +"}
                        </h3>
                        <p className="text-sm font-medium mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
