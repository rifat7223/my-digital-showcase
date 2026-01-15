import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "Advocate" },
  { icon: Palette, label: "UI/UX", value: "Enthusiast" },
  { icon: Lightbulb, label: "Problem Solving", value: "Expert" },
  { icon: Coffee, label: "Coffee Consumed", value: "∞" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, passions, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                  alt="Working on code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">My programming journey</span> began 
                in college when I built my first website. What started as curiosity quickly became 
                a passion. I spent countless nights learning HTML, CSS, and JavaScript, eventually 
                diving deep into modern frameworks and backend technologies.
              </p>
              <p>
                Today, I specialize in building <span className="text-primary">MERN stack web applications</span> using 
                MongoDB, Express.js, React, and Node.js, along with modern tools like Next.js and cloud services. 
                I love tackling complex problems and transforming ideas into elegant, user-friendly solutions.
              </p>
              <p>
                <span className="text-foreground font-semibold">Beyond coding,</span> I'm an avid 
                reader and enjoy exploring topics ranging from philosophy to cutting-edge technology. 
                I play basketball on weekends to stay active and find that physical activity helps 
                me think more clearly when debugging tricky issues. I also enjoy photography and 
                occasionally capture urban landscapes during my travels.
              </p>
              <p>
                I believe in continuous learning and regularly contribute to open-source projects. 
                My goal is to create software that not only works flawlessly but also makes a 
                positive impact on users' lives.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 rounded-xl p-4 border border-border/50"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
