import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiTistory, SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full h-36 p-8 bg-[#151515] flex justify-between items-center">
      <div className="flex flex-col">
        <span>Copyright©2025 GhastlyMouse All Rights Reserved. </span>
        <span>gusdnr0839@gmail.com</span>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={"https://github.com/ghastlymouse"} target="_blank">
          <BsGithub size={30} />
        </Link>
        <Link href={"https://gamasod.tistory.com/"} target="_blank">
          <SiTistory size={30} />
        </Link>
        <Link href={"https://velog.io/@ghastlymouse/posts"} target="_blank">
          <SiVelog size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
