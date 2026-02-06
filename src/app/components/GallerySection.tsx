/**
 * Project Gallery Section
 * Features:
 * - Grid layout for project images
 * - Glass overlay on hover with project details
 * - Smooth Motion animations
 * - Lightbox-style interaction
 */

import { motion } from 'framer-motion';
import { Container } from './Container';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category: string;
  delay?: number;
}

function GalleryItem({ imageUrl, title, category, delay = 0 }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
      {/* Image */}
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#004A99] text-white rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      {/* Subtle border */}
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none" />
    </motion.div>
  );
}

export function GallerySection() {
  const galleryItems = [
    {
      imageUrl: "/images/admin-night-view.jpg",
      title: "Administrative Hub",
      category: "Operations"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1635282760019-66a3ef07344b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwMzg3NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Steel Framework Systems",
      category: "Construction"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1669045161348-e73b82e6381e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDM4Mzk3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Construction Progress",
      category: "Development"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzAzNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Site Operations",
      category: "Operations"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1708358131308-c2dad0046a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwMzg3NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Pipeline Network",
      category: "Infrastructure"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1751205850573-efccb412bde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MDM4NzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Safety & Quality Control",
      category: "Operations"
    }
  ];

  return (
    <section id="overview" className="py-24 bg-black/10">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Project Overview
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-[1.7] font-normal">
            Visual documentation of construction and operational excellence
          </p>
        </motion.div>

        {/* Gallery Grid - 3 columns on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
