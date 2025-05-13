import Image from "next/image";
import Hero from "../components/home/Hero";
import ProjectsSection from '../components/home/ProjectsSection';
import MySkills from "@/components/home/MySkills";
import Blogs from "@/components/home/Blogs";

export default function Home () {
  return (
    <>
   <Hero/>
   <ProjectsSection />
   <MySkills />
   <Blogs />
    </>
  );
}
