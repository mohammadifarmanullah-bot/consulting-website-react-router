import Hero from './Hero'
import ServicesSection from './ServicesSection';
import ApproachSection from './ApproachSection';
import JourneyBanner from './JourneyBanner';
import BlogSection from './BlogSection';
import CustomizServicesBanner from './CustomizServicesBanner';
import Testimonials from './Testimonials'
function Home() {
  return (
    <>
    <Hero />
    <ServicesSection />
    <ApproachSection />
    <JourneyBanner />
    <BlogSection />
    <CustomizServicesBanner />
    <Testimonials />

    </>
  );
}

export default Home;