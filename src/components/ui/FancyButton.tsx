import Link from "next/link";
import { ComponentProps } from "react";

interface IFancyButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}

const FancyButton = ({
  href,
  children,
  className,
  type = "button",
  ...rest
}: IFancyButtonProps) => {
  const commonClassNames = `
    group 
    relative 
    inline-block 
    cursor-pointer 
    select-none 
    no-underline 
    float-right 
    bg-background 
    border-2 
    border-primary 
    py-[1.25em] 
    px-[2em] 
    font-bold 
    text-[13px] 
    tracking-wider 
    transition-all 
    duration-300 
    ease-in-out 
    hover:bg-primary
    before:content-[''] 
    before:absolute 
    before:top-1/2 
    before:left-[1.5em] 
    before:h-[2px] 
    before:w-[1.5625rem] 
    before:bg-primary 
    before:-translate-y-1/2 
    before:transition-[background,width] 
    before:duration-300 
    before:ease-linear 
    hover:before:bg-white 
    hover:before:w-[0.9375rem]
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className}
  `;

  const innerContent = (
    <>
      {/* Top key element */}
      <span
        className="
          absolute 
          -top-[2px] 
          left-[0.625rem] 
          h-[2px] 
          w-[1.5625rem] 
          bg-[#e8e8e8] 
          transition-all 
          duration-500 
          ease-out 
          group-hover:left-[-2px] 
          group-hover:w-0
        "
      ></span>

      {/* Main text */}
      <span
        className="
          flex 
          items-center
          justify-center
          text-left 
          uppercase 
          no-underline 
          text-black 
          text-[1.125em] 
          leading-[1.33333em] 
          pl-[2em] 
          transition-all 
          duration-300 
          ease-in-out 
          group-hover:text-white 
          group-hover:pl-[1.5em]
        "
      >
        {children}
      </span>

      {/* Bottom key element 1 */}
      <span
        className="
          absolute 
          -bottom-[2px] 
          right-[1.875rem] 
          h-[2px] 
          w-[1.5625rem] 
          bg-[#e8e8e8] 
          transition-all 
          duration-500 
          ease-out 
          group-hover:right-0 
          group-hover:w-0
        "
      ></span>

      {/* Bottom key element 2 */}
      <span
        className="
          absolute 
          -bottom-[2px] 
          right-[0.625rem] 
          h-[2px] 
          w-[0.625rem] 
          bg-[#e8e8e8] 
          transition-all 
          duration-500 
          ease-out 
          group-hover:right-0 
          group-hover:w-0
        "
      ></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={commonClassNames} {...rest}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClassNames} {...rest}>
      {innerContent}
    </button>
  );
};

export default FancyButton;
