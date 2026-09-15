import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/home/HeroSection";
import HomeSearchCard from "../components/home/HomeSearchCard";
import HomeFeatures from "../components/home/HomeFeatures";
import HowItWorks from "../components/home/HowItWorks";
import PopularRoutes from "../components/home/PopularRoutes";
import HomeStats from "../components/home/HomeStats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AIHighlight from "../components/home/AIHighlight";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";

import { getAllRoutes } from "../services/routeApi";

const Home = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await getAllRoutes();
        setRoutes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Unable to load routes:", error);
        setRoutes([]);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <HomeSearchCard />
      <HomeStats />
      <HomeFeatures />
      <HowItWorks />
      <PopularRoutes routes={routes} />
      <WhyChooseUs />
      <AIHighlight />
      <Testimonials />
      <HomeCTA />
    </MainLayout>
  );
};

export default Home;