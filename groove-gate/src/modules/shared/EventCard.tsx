import upcomingEventImg from "../../assets/images/upcomingE.jpg"
import Image from "next/image";
import React from "react";
import { CalendarIcon, MapPinIcon } from "lucide-react";

export const EventCard = () => {
  return (
    <div className="overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative">
        <Image
          src={upcomingEventImg}
          alt="Upcoming Event"
          width={300}
          height={300}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h1 className="text-xl font-semibold text-white leading-tight">
          Radhika Das | Heartland Live in London
        </h1>

        {/* Date and Time */}
        <div className="flex items-center text-white/80 space-x-2">
          <CalendarIcon className="h-4 w-4" />
          <span className="text-sm">Thu, May 8 • 7:30 PM</span>
        </div>

        {/* Location (optional) */}
        <div className="flex items-center text-white/80 space-x-2">
          <MapPinIcon className="h-4 w-4" />
          <span className="text-sm">O2 Arena, London</span>
        </div>

        {/* Price */}
        <div className="pt-2 flex justify-between items-center">
          <p className="text-white font-bold">From £16.96</p>
          <span className="bg-white/20 hover:bg-white/30 transition-colors py-1 px-3 rounded-full text-xs text-white cursor-pointer">
            Get Tickets
          </span>
        </div>
      </div>
    </div>
  );
};

