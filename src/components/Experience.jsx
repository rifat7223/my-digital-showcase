import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experienceData = [
  {
    title: "MERN Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    type: "Self-employed",
    description: "Building modern web applications for various clients using the MERN stack.",
    responsibilities: [
      "Developing full-stack web applications with React and Node.js",
      "Building RESTful APIs with Express.js and MongoDB",
      "Deploying applications on Netlify and Vercel",
      "Collaborating with clients to understand requirements",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects",
    period: "2022 - 2023",
    type: "Learning",
    description: "Developed various personal projects to enhance frontend development skills.",
    responsibilities: [
      "Built responsive web interfaces using React",
      "Learned modern CSS frameworks like Tailwind CSS",
      "Integrated third-party APIs and services",
      "Practiced version control with Git and GitHub",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
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
