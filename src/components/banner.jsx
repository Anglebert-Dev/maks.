import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from "../assets/PRL.jpg";

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse 
    justify-between lg:gap-28 items-center ">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome to <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          odit sequi, vitae exercitationem doloribus facere ut voluptatibus
          reiciendis quasi magni, ad debitis fugiat ipsum culpa delectus facilis
          quibusdam veniam tempora.
        </p>
        <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                    <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <AiFillGithub className="text-[28px]"/>
                    </a>
                    <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <FaLinkedin className="text-[28px]"/>
                    </a>
                    <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <FaTwitter className="text-[28px]"/>
                    </a>
                    <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <FaFacebook className="text-[28px]"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <img src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500  img_glow"  alt="profile pic" />
    </div>
  );
};

export default Banner;
