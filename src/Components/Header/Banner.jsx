import PropTypes from 'prop-types';

import banner_img from '../../assets/images/banner-main.png'

const Banner = ({claimFreeCredit}) => {
  return (
    <div>
      <div className="w-[90%] mx-auto py-8 rounded-lg bg-black bg-bg-shadow bg-cover bg-center">
        <img className="mx-auto mb-6 w-36 md:w-44" src={banner_img} alt="" />
        <h3 className="w-[80%] mx-auto text-center text-xl md:text-3xl text-white font-bold mb-2"> Assemble Your Ultimate Dream 11 Cricket Team  </h3>
        <p className="w-[80%] mx-auto text-center text-base md:text-xl text-white text-opacity-70 mb-5"> Beyond Boundaries Beyond Limits </p>
        <div className="flex justify-center items-center">
          <button onClick={claimFreeCredit} className="text-sm md:text-base bg-tiya px-4 py-2 rounded-lg"> Claim Free Credit </button>
        </div>
      </div>
    </div>
  );
};


Banner.propTypes = {
  claimFreeCredit: PropTypes.func,
}

export default Banner;