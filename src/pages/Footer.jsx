import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black py-4 md:py-6 px-4 md:px-8 flex flex-col items-center border-t  border-[#E04716]">
      <div>
        <img
          src={logo}
          alt="icon"
          className="hover:cursor-pointer w-32 md:w-48"
        />
      </div>
      <div className="text-white text-center mt-4">
        <p>&copy; 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
