import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="logo.svg"
        alt="Suffolk's Tech Girl Logo"
        width={48}
        height={48}
        className="h-10 w-10 md:h-12 md:w-12"
        priority
        quality={100}
      />
    </div>
  );
}
