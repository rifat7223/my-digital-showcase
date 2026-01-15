import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 93 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Netlify", level: 85 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 80 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="font-medium">{skill.name}</span>
      <span className="text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        className="h-full bg-gradient-primary rounded-full"
      />
    </div>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-display text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
