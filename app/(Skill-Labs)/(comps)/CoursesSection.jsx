import React from 'react';
import {
    Code2,
    Component,
    Paintbrush,
    Users,
    PlusCircle,
    TrendingUp,
} from 'lucide-react';

// Data for the courses, making it easy to add, remove, or edit items
const coursesData = [
    {
        icon: Code2,
        iconBgClass: 'bg-red-500',
        title: 'Backend with Java',
        description: 'Master the art of backend development using Java, a versatile and widely-used programming language.',
    },
    {
        icon: Component,
        iconBgClass: 'bg-blue-500',
        title: 'Frontend Development',
        description: 'Learn modern frontend development techniques and frameworks to build interactive and responsive web applications.',
    },
    {
        icon: Paintbrush,
        iconBgClass: 'bg-purple-500',
        title: 'Graphic Designing',
        description: 'Unleash your creativity and express yourself visually through graphic design. Learn essential design principles, tools, and software.',
    },
    {
        icon: Users,
        iconBgClass: 'bg-green-500',
        title: 'Soft Skills',
        description: 'Develop essential soft skills such as communication, teamwork, leadership, and problem-solving to excel in your career and personal life.',
    },
    {
        icon: PlusCircle,
        iconBgClass: 'bg-indigo-500',
        title: 'C++ Programming',
        description: 'Expand your programming skills with C++, a powerful and efficient language used in game development, system programming, and more.',
    },
    {
        icon: TrendingUp,
        iconBgClass: 'bg-yellow-500',
        title: 'Digital Marketing',
        description: 'Learn the ins and outs of digital marketing strategies, including SEO, SEM, social media marketing, and analytics, to boost your online presence.',
    },
];

const CoursesSection = () => {
    return (
        <section className="bg-slate-900 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Our Courses
                    </h2>
                    <div className="flex items-center mt-4">
                        <span className="block w-1 h-6 bg-orange-500 mr-4"></span>
                        <p className="text-lg text-slate-300">
                            Bridging the gap between Industry and Academics
                        </p>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <div
                            key={course.title}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-slate-700/50 hover:-translate-y-2 transition-all duration-300 flex items-start space-x-6"
                        >
                            <div className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full ${course.iconBgClass}`}>
                                <course.icon className="h-7 w-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{course.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoursesSection;