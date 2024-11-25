import PropTypes from 'prop-types';

import logo from '../../assets/images/logo.png'
import dollar from '../../assets/images/dollar.png'

const Navbar = ({coins}) => {
  return (
    <div>

      <div className="w-[90%] mx-auto">
        <nav className="flex justify-between items-center py-3 text-sm md:text-base">
          <a href=""> <img className="w-10 md:w-16" src={logo} alt="" /> </a>
          <ul className="flex gap-5 items-center text-black text-opacity-70">
            <a href=""> <li className="hidden sm:inline"> Home </li> </a>
            <a href=""> <li className="hidden sm:inline"> Picture </li> </a>
            <a href=""> <li className="hidden sm:inline"> Teams </li> </a>
            <a href=""> <li className="hidden sm:inline"> Schedule </li> </a>
            <li className="px-3 py-2 border-black border-opacity-10 border-[1px] rounded-lg">
              <p className="flex gap-2"> <span id="coins"> {coins} </span> <span className="flex gap-2 items-center"> Coin <img className="w-6 h-6" src={dollar} alt="" /> </span> </p>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};



Navbar.propTypes = {
  coins: PropTypes.number
}

export default Navbar;