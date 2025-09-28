import Image from "next/image";
import logo from "../../../public/home.svg";

export default function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="Suffolk's Tech Girl Logo"
        width={300}
        height={207}
        className="h-12 w-12 aspect-auto object-contain "
        priority
        quality={100}
      />
    </div>
  );
}
