
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="text-center">
          <span className="inline-block animate-fade-in text-accent font-medium mb-4 tracking-wider">
            Supporting Our Community
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-textDark mb-6 animate-slide-up">
            Empowering Bravanese Communities Through Education
          </h1>
          <p className="text-lg md:text-xl text-textDark/80 max-w-2xl mx-auto mb-8 animate-fade-in">
            We provide tuition, mentoring, and recreational activities to support
            Bravanese people from disadvantaged households.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => window.location.href = "#donate"}
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => window.location.href = "#get-involved"}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
