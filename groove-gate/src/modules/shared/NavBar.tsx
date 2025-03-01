"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 py-4 px-6">
      <div className="xl:container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white mr-6">
          Groove
        </Link>

        {/* Search input */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
            <Input
              type="text"
              placeholder="Search events, artists, venues..."
              className="pl-10 pr-4 w-full bg-white/10 border-white/10 text-white placeholder:text-white/50 h-10 rounded-full focus:ring-white/30 focus:border-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Navigation */}
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/host"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Host Event
            </Link>
          </li>
          <li>
            <Button className="bg-white hover:bg-white/90 text-black font-medium px-6 rounded-full">
              Connect
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
