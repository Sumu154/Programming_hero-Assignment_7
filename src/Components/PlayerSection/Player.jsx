import PropTypes from 'prop-types';

import { FaUser } from "react-icons/fa"
import { BsFlagFill } from "react-icons/bs";
import { toast } from 'react-toastify';



const Player = ({player, selectedPlayers, setSelectedPlayers, coins, setCoins}) => {
  const {name, country, role, battingStyle, bowlingStyle, price, image} = player;


  const handleAddSelected = () => {
    console.log('Player added');

    console.log(player);
    if(coins<price){
      toast.error(`You don't have enough coins`, {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    if(selectedPlayers.some(it => it.id === player.id)) {
      toast.error(`Player already added!`, {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    if(selectedPlayers.length >= 6){
      toast.error(`Already 6 player added!`, {
        position: "top-center",
        theme: "dark",
      });
      return;
    }



    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins-price);
  }


  return (
    <div>
     <div className="p-5 border-black border-opacity-20 border-[1px] rounded-md">
      <img className="w-full h-[180px] rounded-md"  src={image} alt="" />
      <div>
        <div className="flex gap-4 mt-3">
          <FaUser className="text-black text-opacity-80" />
          <p className="text-back font-semibold"> {name} </p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-black text-opacity-80 flex gap-2 items-center "> <BsFlagFill /> <span> {country} </span></p>
          <p className="text-sm bg-black bg-opacity-5 px-3 py-1 rounded-md"> {role} </p>
        </div>

        {/* line */}
        <div className="h-[.5px] mx-auto bg-black bg-opacity-15"> </div>

        <p className="font-semibold mt-2"> Rating </p>
        <p className="flex justify-between items-center font-semibold mt-2"> <span>{battingStyle}</span>  <span>{bowlingStyle}</span> </p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold"> Price: ${price} </p>
          <button onClick={handleAddSelected} className="text-sm border-black border-opacity-20 border-[1px] rounded-md px-2 py-[2px]"> Choose Player </button>
        </div>
      </div>
     </div>
    </div>
  );
};



Player.propTypes = {
  player: PropTypes.object,
  selectedPlayers: PropTypes.array,
  setSelectedPlayers: PropTypes.func,
  coins: PropTypes.number,
  setCoins: PropTypes.func
}

export default Player;