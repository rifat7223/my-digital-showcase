import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experienceData: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    companyUrl: "https://example.com",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description: "Leading development of enterprise-level web applications and mentoring junior developers.",
    responsibilities: [
      "Architecting and implementing scalable React applications",
      "Building RESTful APIs with Node.js and Express",
      "Collaborating with design team on UI/UX improvements",
      "Code reviews and mentoring team members",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency XYZ",
    companyUrl: "https://example.com",
    period: "Jun 2022 - Dec 2022",
    type: "Full-time",
    description: "Developed responsive web interfaces for various client projects.",
    responsibilities: [
      "Built pixel-perfect UI components from Figma designs",
      "Optimized web performance and accessibility",
      "Integrated third-party APIs and services",
      "Participated in agile development processes",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "Web Development Intern",
    company: "StartUp Hub",
    period: "Jan 2022 - May 2022",
    type: "Internship",
    description: "Gained hands-on experience in full-stack development in a fast-paced environment.",
    responsibilities: [
      "Developed features for the company's main product",
      "Fixed bugs and improved code quality",
      "Learned best practices from senior developers",
    ],
    technologies: ["JavaScript", "React", "MongoDB", "Git"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:text-right">
                  <span className="inline-flex items-center gap-1 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
