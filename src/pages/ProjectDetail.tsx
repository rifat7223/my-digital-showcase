import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, AlertTriangle, Lightbulb, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/components/Projects";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  improvements: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectDetails: Record<string, ProjectDetail> = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built from the ground up. This platform provides a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking. The admin panel allows store owners to manage products, orders, and customers efficiently.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "Tailwind CSS", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing a robust cart system that persists across sessions and handles edge cases like out-of-stock items",
      "Setting up Stripe payment integration with proper error handling and webhook processing",
      "Optimizing database queries for large product catalogs while maintaining fast search functionality",
      "Building a real-time inventory management system to prevent overselling",
    ],
    improvements: [
      "Add AI-powered product recommendations based on browsing history",
      "Implement a wishlist feature with price drop notifications",
      "Add multi-vendor support to transform it into a marketplace",
      "Integrate with more payment gateways for international support",
      "Add progressive web app (PWA) features for offline browsing",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "task-management-app": {
    id: "task-management-app",
    title: "Task Management App",
    description: "A powerful collaborative task management application designed for teams. Features real-time updates using WebSockets, drag-and-drop task organization, and comprehensive project analytics. Built with modern technologies to ensure a smooth and responsive user experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "NextAuth.js", "Tailwind CSS", "Zustand"],
    features: [
      "Real-time collaboration with WebSockets",
      "Drag-and-drop Kanban boards",
      "Project and team management",
      "Task assignment and due dates",
      "Comment threads and @mentions",
      "File attachments and sharing",
      "Analytics and productivity insights",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple clients without conflicts",
      "Building a performant drag-and-drop interface that works smoothly on all devices",
      "Designing a flexible permission system for different team roles",
      "Handling complex state management for nested project structures",
    ],
    improvements: [
      "Add time tracking and reporting features",
      "Implement calendar integration (Google Calendar, Outlook)",
      "Add automation rules for repetitive workflows",
      "Build mobile apps using React Native",
      "Add AI-powered task prioritization suggestions",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "ai-content-generator": {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "An intelligent content creation tool powered by OpenAI's GPT models. This application helps users generate high-quality blog posts, social media content, product descriptions, and more. Features include content templates, tone adjustment, and SEO optimization suggestions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "OpenAI API", "Express", "MongoDB", "Redis", "Tailwind CSS", "Framer Motion"],
    features: [
      "Multiple content type generation",
      "Customizable tone and style",
      "Content templates library",
      "SEO optimization suggestions",
      "Content history and favorites",
      "Export to multiple formats",
      "Usage analytics and limits",
    ],
    challenges: [
      "Managing API rate limits and implementing an efficient queuing system",
      "Building a caching layer to reduce API costs for similar requests",
      "Creating intuitive UI for adjusting AI parameters without overwhelming users",
      "Implementing streaming responses for better user experience on long content",
    ],
    improvements: [
      "Add support for image generation with DALL-E integration",
      "Implement multi-language content generation",
      "Add plagiarism checking integration",
      "Build a WordPress plugin for direct publishing",
      "Add team collaboration features with shared templates",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "real-estate-platform": {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "A comprehensive real estate listing and management platform. Features include property search with advanced filters, interactive maps, virtual tours, and a powerful agent dashboard. Built to handle thousands of listings while maintaining fast performance.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox", "Elasticsearch", "Redis", "AWS S3", "Tailwind CSS"],
    features: [
      "Advanced property search with filters",
      "Interactive map with clustering",
      "Virtual property tours",
      "Agent and agency profiles",
      "Favorites and saved searches",
      "Contact form with lead tracking",
      "Property comparison tool",
    ],
    challenges: [
      "Implementing efficient geospatial queries for map-based search",
      "Building a scalable image storage and optimization pipeline",
      "Creating an intuitive search experience with many filter options",
      "Handling high traffic during peak listing periods",
    ],
    improvements: [
      "Add AI-powered property valuation estimates",
      "Implement virtual staging for empty properties",
      "Add mortgage calculator with bank integrations",
      "Build neighborhood insights with crime and school data",
      "Add AR features for viewing furniture placement",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button variant="hero" asChild>
            <Link to="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button variant="hero" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-elevated border border-border"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">Key Features</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="font-display text-2xl font-bold">Challenges Faced</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Future Improvements */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">Future Improvements</h2>
            </div>
            <ul className="space-y-4">
              {project.improvements.map((improvement) => (
                <li key={improvement} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-secondary/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Interested in this project?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Feel free to check out the live demo or source code. I'm always happy to discuss the technical details!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/#projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
