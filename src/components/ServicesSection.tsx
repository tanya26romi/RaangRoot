import React, { useState } from "react";

type ServiceTitle =
  | "Birthday Bashes"
  | "Dream Weddings"
  | "Corporate Gatherings"
  | "Cultural Events"
  | "Graduation Parties"
  | "Baby Showers"
  | "Award Ceremonies";

interface ServiceCardProps {
  icon: string;
  title: ServiceTitle;
  description: string;
  iconColor: string;
  titleColor: string;
}

const services: ServiceCardProps[] = [
  {
    icon: "🎂",
    title: "Birthday Bashes",
    description:
      "Celebrate another year with our creative and fun birthday party designs for all ages.",
    iconColor: "text-red-800",
    titleColor: "text-red-900",
  },
  {
    icon: "💍",
    title: "Dream Weddings",
    description:
      "Your perfect day, meticulously planned and beautifully executed to perfection.",
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
  },
  {
    icon: "💼",
    title: "Corporate Gatherings",
    description:
      "Professional and engaging event management for your business needs.",
    iconColor: "text-green-800",
    titleColor: "text-green-900",
  },
  {
    icon: "🎉",
    title: "Cultural Events",
    description:
      "Experience vibrant cultural festivals, traditional gatherings, and themed celebrations with our expert planning.",
    iconColor: "text-yellow-700",
    titleColor: "text-yellow-900",
  },
  {
    icon: "🎓",
    title: "Graduation Parties",
    description:
      "Mark academic milestones with memorable graduation parties tailored to your achievements.",
    iconColor: "text-purple-700",
    titleColor: "text-purple-900",
  },
  {
    icon: "👶",
    title: "Baby Showers",
    description:
      "Celebrate new beginnings with creative and heartwarming baby showers for parents-to-be.",
    iconColor: "text-pink-700",
    titleColor: "text-pink-900",
  },
  {
    icon: "🏆",
    title: "Award Ceremonies",
    description:
      "Host elegant award ceremonies and recognition events that honor achievements in style.",
    iconColor: "text-orange-700",
    titleColor: "text-orange-900",
  },
];

// Service Card Component (reusable)
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  iconColor,
  titleColor,
}) => (
  <div className="bg-amber-50 bg-opacity-80 rounded-3xl shadow-lg p-10 w-96 h-96 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm">
    <div className={`text-6xl ${iconColor} mb-4`}>{icon}</div>
    <h3
      className={`text-3xl font-serif-display font-semibold ${titleColor} mb-3`}
    >
      {title}
    </h3>
    <p className="font-sans-body text-gray-600 text-lg mb-2">{description}</p>
  </div>
);

// Services Section Component
const ServicesSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const majorServices = services.slice(0, 3);
  const additionalServices = services.slice(3);

  return (
    <div className="border-2 border-white/30 rounded-3xl p-6 md:p-10 mx-auto w-full max-w-7xl backdrop-blur-sm">
      <section className="flex flex-row gap-12 mt-12 mb-8 justify-center items-stretch">
        {majorServices.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </section>
      {!showMore && additionalServices.length > 0 && (
        <div className="flex justify-center">
          <button
            className="bg-stone-700 hover:bg-stone-800 text-amber-50 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-opacity-75"
            onClick={() => setShowMore(true)}
          >
            Show More Services
          </button>
        </div>
      )}
      {showMore && (
        <section className="flex flex-row gap-12 mb-20 mt-8 justify-start items-stretch overflow-x-auto scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-stone-100 w-full px-4">
          {additionalServices.map((service, idx) => (
            <ServiceCard key={idx + 3} {...service} />
          ))}
        </section>
      )}
    </div>
  );
};

export default ServicesSection;
