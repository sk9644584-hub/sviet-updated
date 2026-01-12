import { GraduationCap, Rocket, Sparkles, Target } from 'lucide-react';
import React from 'react';

// An internal component for the feature cards for cleaner code
const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="text-center p-6 bg-zinc-50 rounded-xl border border-zinc-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                <Icon className="h-7 w-7 text-orange-500" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-zinc-800">{title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

// Data for the feature cards, now including icons
const features = [
    {
        icon: Sparkles,
        title: 'Tailored Enrichment Modules',
        description: 'The Super 60 Batch offers specially curated learning modules designed to unleash the potential of each student. From advanced technical skills to soft skills development, every aspect is meticulously crafted to enhance their capabilities.',
    },
    {
        icon: GraduationCap,
        title: 'Rigorous Academic and Extracurricular Activities',
        description: 'Beyond the conventional curriculum, students in the Super 60 Batch engage in rigorous academic challenges and a wide array of extracurricular activities. This holistic approach ensures a well-rounded development.',
    },
    {
        icon: Target,
        title: 'Focused Skill Enhancement',
        description: `Students undergo intensive training in reasoning, quantitative skills, communication skills, and personality development. These focused sessions equip them with the essential skills required to thrive in today's competitive world.`,
    },
    {
        icon: Rocket,
        title: 'Exposure to Latest Technologies',
        description: 'The Super 60 Batch stays ahead of the curve by immersing students in the latest software and manufacturing techniques. This exposure prepares them to adapt to the evolving technological landscape with ease.',
    },
];

const OverviewSection = () => {
    return (
        <section className="w-full bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-600">
                        Overview
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        What is Super60?
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                        Super60 is a special batch of 30 to 60 students, chosen every year from the first year students of CSE Branch, in order to make them ready to face challenges beyond their prescribed curriculum. They are provided with enriched learning modules based on their potential and put through rigorous academic as well as co and extra curricular activities included reasoning, Quantative skills, Communication Skills, Personality developmnent and over & above latest softwares and manufacturing techniques as latest trend, so that these students can make the best version of themselves and assure 100% placement in the campus placement drive.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;