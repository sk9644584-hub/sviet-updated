import React from 'react'
import { currentInitiatives } from './CurrentInitiatives'
import { Card, CardContent } from '@/components/ui/card'
export const CurrentInitiative = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Current Initiatives & Achievements
                    </h2>
                    <p className="text-gray-600 text-[1.115rem]  max-w-3xl mx-auto">
                        Our  ongoing  initiatives  reflect  our  commitment  to  continuous  improvement  and  excellence  in  all aspects of education and student development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentInitiatives.map((initiative, index) => {
                        const Icon = initiative.icon
                        return (
                            <Card
                                key={index}
                                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className={`w-16 h-16 rounded-full ${initiative.color} flex items-center justify-center mx-auto mb-4`}
                                    >
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                                        {initiative.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {initiative.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CurrentInitiative
