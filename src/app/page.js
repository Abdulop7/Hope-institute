import About from "./components/aboutSection";
import CoursesSection from "./components/courseSection";
import CTASection from "./components/CTA";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/whyChooseUs";

export default function page() {
  return (
    <div className="w-full"> 
      <Hero />
      <About />
      <CoursesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  )
}
