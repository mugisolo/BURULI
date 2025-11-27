import React from 'react';
import { Shield, Map, BookOpen, Crown } from 'lucide-react';

const InfoCards: React.FC = () => {
    const features = [
        {
            icon: <Crown className="w-8 h-8 text-buruli-gold" />,
            title: "The Isabaruuli",
            description: "Led by His Royal Highness Mwogezi Butamanya, the custodian of our cultural values and unity."
        },
        {
            icon: <Shield className="w-8 h-8 text-buruli-gold" />,
            title: "129 Clans",
            description: "A rich social fabric of over 129 clans, each with a unique totem and role in the kingdom."
        },
        {
            icon: <Map className="w-8 h-8 text-buruli-gold" />,
            title: "Lake Kyoga",
            description: "Dominating our northern border, the lake provides life, commerce, and natural beauty."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-buruli-gold" />,
            title: "Luruli Language",
            description: "Revitalizing our mother tongue, a dialect rich in proverbs and oral tradition."
        }
    ];

    return (
        <section className="relative -mt-20 z-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-buruli-gold hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-full bg-buruli-blue/5 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-buruli-blue mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoCards;