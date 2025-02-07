import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Bio from "./Bio";

const About = () => {
  return (
    <section className="grid grid-flow-row gap-y-10">
      <p className="w-full text-center text-5xl font-semibold">About me</p>
      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center gap-2">
          <IoPersonSharp size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-extrabold text-gray-400">Name</p>
            <p>정현욱</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaBirthdayCake size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-extrabold text-gray-400">Birth</p>
            <p>2000.12.09</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <IoMdMail size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-extrabold text-gray-400">E-mail</p>
            <p>gusdnr0839@gmail.com</p>
          </div>
        </div>
      </div>
      <Bio />
    </section>
  );
};

export default About;
