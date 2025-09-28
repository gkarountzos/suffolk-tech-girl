import Image from "next/image";
import logo from "../../../public/home.png";

export default function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="Suffolk's Tech Girl Logo"
        width={300}
        height={207}
        className="h-16 w-16 md:h-12 md:w-16 aspect-auto object-contain"
        priority
        quality={100}
      />
    </div>
  );
}
