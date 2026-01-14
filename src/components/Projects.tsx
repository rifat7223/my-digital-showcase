import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-featured online shopping platform with cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    shortDescription: "A collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    shortDescription: "An AI-powered tool that helps create blog posts, social media content, and more.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["React", "OpenAI API", "Express", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    shortDescription: "A property listing and management platform with advanced search and filtering.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and the impact I've made
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/project/${project.id}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
