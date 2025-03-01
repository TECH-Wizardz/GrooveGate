import Image from "next/image";
import heroImage from "../assets/images/hero-img-4.jpeg";
export default function Home() {
  return (
    <>
      <div className="text-3xl mt-20">hello world</div>;
      <img
        src={heroImage.src}
        alt="Vercel Logo"
        width={1000}
        height={400}
        className="w-full"
      />
    </>
  );
}
