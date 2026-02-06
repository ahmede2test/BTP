import { Building2, Wrench, HardHat, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "Commercial Construction",
      description: "Large-scale commercial projects from office buildings to retail complexes, delivered with precision and excellence."
    },
    {
      icon: <Wrench size={40} />,
      title: "Infrastructure Development",
      description: "Building the foundations of modern society with roads, bridges, and essential infrastructure projects."
    },
    {
      icon: <HardHat size={40} />,
      title: "Industrial Facilities",
      description: "Specialized construction for manufacturing plants, warehouses, and industrial complexes with cutting-edge technology."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timely delivery, budget adherence, and quality standards."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive construction solutions for every industrial need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
