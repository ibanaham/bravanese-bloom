
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      title: "Education Support",
      description:
        "Comprehensive tuition programs designed to help students excel in their studies and reach their academic potential.",
      icon: GraduationCap,
    },
    {
      title: "Mentoring",
      description:
        "One-on-one mentoring sessions connecting youth with experienced professionals from the Bravanese community.",
      icon: Users,
    },
    {
      title: "Recreational Activities",
      description:
        "Engaging activities that promote physical health, cultural awareness, and social connection within our community.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-wider">
            Our Programs
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-textDark">
            How We Support Our Community
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <program.icon className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl font-display">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-textDark/70">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
