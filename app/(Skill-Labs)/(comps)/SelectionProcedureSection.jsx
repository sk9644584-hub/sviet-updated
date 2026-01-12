import React from 'react';
import { FileText, Laptop, Users } from 'lucide-react'; // Using Lucide icons for visual steps

// Data for the selection steps
const selectionSteps = [
    {
        icon: FileText,
        title: 'Written Exam',
        description: 'Written Exam comprising of logical reasoning, aptitude and a lot more',
    },
    {
        icon: Laptop,
        title: 'Technical Round',
        description: 'Technical round consiting of basic programming knowledge.',
    },
    {
        icon: Users,
        title: 'Interview Round',
        description: 'Final round with the management itself. Gear up, Be a part of something greater.',
    },
];

const SelectionProcedureSection = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Selection Procedure
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        Be A Part of Super60 and Be a Cut Above
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {selectionSteps.map((step, index) => (
                        <div key={index} className="text-center md:text-left">
                            {/* Icon Container */}
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 border border-orange-200">
                                    <step.icon className="h-6 w-6 text-orange-500" />
                                </div>
                            </div>

                            {/* Title and Description */}
                            <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SelectionProcedureSection;