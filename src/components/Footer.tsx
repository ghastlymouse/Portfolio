import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiTistory, SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 p-8 bg-gray-800 text-white flex justify-between items-center z-0">
      <div className="flex flex-col">
        <span>Copyright©2025 GhastlyMouse All Rights Reserved. </span>
        <span>gusdnr0839@gmail.com</span>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={"https://github.com/ghastlymouse"} target="_blank">
          <BsGithub size={30} color="#A67BC1" />
        </Link>
        <Link href={"https://gamasod.tistory.com/"} target="_blank">
          <SiTistory size={30} color="#FF5722" />
        </Link>
        <Link href={"https://velog.io/@ghastlymouse/posts"} target="_blank">
          <SiVelog size={30} color="#20C997" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
