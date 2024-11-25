import logo from '../../assets/images/logo-footer.png'

const Footer = () => {
  return (
    <div className="bg-blue">

      <div className="border-b-[1px] border-b-white border-opacity-20 py-16">
        <img className="mx-auto py-8" src={logo} alt="" />
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-8 text-white px-6 md:px-0">
          <div className="flex-[1]">
            <h5 className="text-base lg:text-lg font-bold mb-2"> About Us </h5>
            <p className="text-white text-opacity-60 text-sm lg:text-base">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          <div className="flex-[1]">
            <h5 className="text-base md:text-lg font-bold mb-2"> Quick Links </h5>
            <ul className="text-white text-opacity-60 text-sm lg:text-base list-disc">
              <li> Home </li>
              <li> Services </li>
              <li> About </li>
              <li> Contact </li>
            </ul>
          </div>
          <div className="flex-[1]">
            <h5 className="text-base lg:text-lg font-bold mb-2"> Subscribe </h5>
            <p className="text-white text-opacity-60  text-sm lg:text-base"> Subscribe to our newsletter for the latest updates. </p>
            <div className="flex justify-center mx-auto my-4">
              <input className="w-[70%] px-3 py-2 rounded-l-lg border-[1px] border-black border-opacity-20 text-sm lg:text-base" type="text" placeholder="Enter your email" />
              <button className="px-3 py-2 text-black bg-orange-200 shadow-custom-inset rounded-r-lg text-sm lg:text-base" > Subscribe </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-white text-opacity-60 py-6  text-sm lg:text-base"> @2024 Your Company All Rights Reserved. </p>
      
    </div>
  );
};

export default Footer;