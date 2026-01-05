import Slider from "../assets/Component/Slider.jsx";
import ThinkBhizComponent from "../assets/Component/ThinkBhizComponent.jsx";
import ServiceCard from "../assets/Component/ServiceCard.jsx";
import Vision from "../assets/Component/Vision.jsx";
import RatingSection from "../assets/Component/RatingSection.jsx";
import ProjectCounter from "../assets/Component/ProjectCounter.jsx";
import WhyChoose from "../assets/Component/Whychoose.jsx";
import NewsLetterbox from "../assets/Component/NewsLetterbox.jsx";
import WhatsAppButton from "../assets/Component/WhatsAppButton.jsx";

const Home = () => {
  const homeStats = [
    { value: 250, title: "Projects Completed" },
    { value: 180, title: "Happy Clients" },
    { value: 50, title: "Team Members" },
    { value: 3, title: "Years of Experience" },
  ];
  return (
    <>
      <Slider />
      {/* <ThinkBhizComponent /> */}
      <ServiceCard />
      <Vision />
      <RatingSection />
      <ProjectCounter counters={homeStats} />
      <WhyChoose />
      <NewsLetterbox />
      <WhatsAppButton />
    </>
  );
};

export default Home;
