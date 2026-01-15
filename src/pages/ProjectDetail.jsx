import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, AlertTriangle, Lightbulb, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/components/Projects";

const projectDetails = {
  "food-delivery-app": {
    id: "food-delivery-app",
    title: "Food Delivery App",
    description: "A modern food delivery application built with the MERN stack. This platform provides a seamless food ordering experience with features like restaurant browsing, menu viewing, cart management, and order tracking.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=600&fit=crop",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Restaurant browsing and search",
      "Menu viewing with categories",
      "Shopping cart functionality",
      "User authentication",
      "Order history",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing real-time cart updates across components",
      "Building a scalable restaurant and menu management system",
      "Creating an intuitive user interface for food ordering",
      "Handling user authentication and session management",
    ],
    improvements: [
      "Add real-time order tracking with maps",
      "Implement payment gateway integration",
      "Add restaurant reviews and ratings",
      "Build admin dashboard for restaurant owners",
      "Add push notifications for order updates",
    ],
    liveUrl: "https://remarkable-kringle-e11bb1.netlify.app/",
    githubUrl: "https://github.com/rifat7223",
  },
  "portfolio-website": {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A clean and modern portfolio website showcasing projects and skills. Built with React and styled with Tailwind CSS, featuring smooth animations powered by Framer Motion.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    features: [
      "Modern and responsive design",
      "Smooth scroll animations",
      "Project showcase section",
      "Skills visualization",
      "Contact form",
      "Mobile-friendly navigation",
    ],
    challenges: [
      "Creating smooth and performant animations",
      "Ensuring consistent design across all devices",
      "Optimizing images for fast loading",
      "Building an accessible and SEO-friendly structure",
    ],
    improvements: [
      "Add dark/light theme toggle",
      "Implement blog section",
      "Add project filtering by technology",
      "Integrate with CMS for easy content updates",
      "Add multi-language support",
    ],
    liveUrl: "https://graceful-malasada-294a90.netlify.app/",
    githubUrl: "https://github.com/rifat7223",
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built from the ground up. This platform provides a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Order management and tracking",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing a robust cart system that persists across sessions",
      "Building secure user authentication with JWT",
      "Optimizing database queries for large product catalogs",
      "Creating responsive product grids that work on all devices",
    ],
    improvements: [
      "Add payment gateway integration",
      "Implement product recommendations",
      "Add wishlist feature",
      "Build admin dashboard for inventory management",
      "Add customer reviews and ratings",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rifat7223",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
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
