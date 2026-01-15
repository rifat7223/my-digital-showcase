import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Arts (BA) in Political Science",
    institution: "7th College",
    location: "Dhaka, Bangladesh",
    period: "2021 - 2022 (Running)",
    description: "Currently pursuing graduation with a focus on Political Science.",
    achievements: [
      "Session: 2021-2022",
      "Active participation in academic activities",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Amirjan College",
    location: "Dhaka, Bangladesh",
    period: "Completed",
    description: "Successfully completed higher secondary education.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                <div className="md:ml-20 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  {edu.achievements && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
