import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Bio from "./Bio";

const About = () => {
  return (
    <section className="h-screen">
      <p className="w-full text-center text-5xl font-semibold pt-20 pb-10">
        About me
      </p>
      <div className="grid grid-cols-3 text-2xl">
        <div className="flex justify-start items-center gap-2">
          <IoPersonSharp size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p>정현욱</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <FaBirthdayCake size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p>2000.12.09</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <IoMdMail size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p>gusdnr0839@gmail.com</p>
          </div>
        </div>
      </div>
      <Bio />
    </section>
  );
};

export default About;
