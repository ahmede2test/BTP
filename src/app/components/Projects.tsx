import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export function ProjectCard({ title, category, imageUrl, description }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 text-xs bg-blue-500/80 text-white rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Metro Line Expansion",
      category: "Infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1724118135465-edeef6acf221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGJyaWRnZSUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MDI4NjY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "23km underground metro system connecting major districts"
    },
    {
      title: "Industrial Complex",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzAzNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "500,000 sq ft manufacturing and distribution center"
    },
    {
      title: "Highway Renovation",
      category: "Infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1708358131308-c2dad0046a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwMzg3NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete overhaul of 50km interstate highway system"
    },
    {
      title: "Steel Framework Tower",
      category: "Structural",
      imageUrl: "https://images.unsplash.com/photo-1635282760019-66a3ef07344b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwMzg3NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Advanced steel structure engineering for modern architecture"
    },
    {
      title: "Urban Development",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1669045161348-e73b82e6381e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDM4Mzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Mixed-use development with residential and commercial spaces"
    },
    {
      title: "Industrial Modernization",
      category: "Industrial",
      imageUrl: "https://images.unsplash.com/photo-1751205850573-efccb412bde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MDM4NzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Facility upgrade with state-of-the-art safety systems"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our portfolio of groundbreaking construction achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
