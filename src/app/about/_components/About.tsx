import { FaBirthdayCake } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <section>
      <div className="grid grid-cols-2 text-2xl w-full">
        <div className="flex justify-center items-center gap-2">
          <FaBirthdayCake size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p>2000.12.09</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <IoMdMail size={60} />
          <div className="flex flex-col justify-center items-center gap-1">
            <p>gusdnr0839@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
