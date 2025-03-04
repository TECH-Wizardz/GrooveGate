import Image from "next/image";
import heroImage from "../assets/images/hero-img-4.jpeg";
import HeroSection from "@/modules/home/Hero";
import { EventCard } from "@/modules/shared/EventCard";
export default function Home() {
  return (
    <>
      <HeroSection />

    {/* upcoming events */}
    <div className="px-6">
    <h1 className="my-10  text-2xl font-medium" >Upcoming Events</h1>

    <div className="flex justify-between">
    <p>All</p>
    <p>EDM</p>
    <p>Rock</p>
    <p>Pop</p>
    <p>Jazz</p>
    <p>Hip Hop/Rap</p>
    <p>Country</p>
    <p>Folk</p>
    <p>Classical</p>
    <p>Classical</p>
      </div>
  
    
    < div className="grid grid-cols-4 gap-10 ">

      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>


    </div>
    
    </div>

    </>
  );
}

