import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-4 text-4xl">
      <a
        href="https://www.linkedin.com/in/mohameed-ali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        className="hover:text-[#0A66C2] transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/MohamedAli-WaffarX"
        target="_blank"
        className="hover:text-black transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100012839829736"
        target="_blank"
        className="hover:text-[#0825ff] transition"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
