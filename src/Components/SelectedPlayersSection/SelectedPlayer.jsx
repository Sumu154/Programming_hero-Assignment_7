import PropTypes from 'prop-types';

import { MdDelete } from "react-icons/md";


const SelectedPlayer = ({selectedPlayer, selectedPlayers, setSelectedPlayers, coins, setCoins}) => {
  const {id, name, image, price, battingStyle, bowlingStyle} = selectedPlayer;

  const handleRemoveSelected = () => {
    setSelectedPlayers(selectedPlayers.filter(it => {
      return it.id != id;
    }))

    setCoins(coins+price);
  }




  return (
    <div className="flex justify-between items-center border-[1px] border-black border-opacity-25 rounded-lg p-3 my-4">
      <div className="flex gap-4 ">
        <img className="w-24 h-24 rounded-lg" src={image} alt="" />
        <div>
          <p className="font-semibold text-black mb-2 text-base md:text-lg"> {name} </p>
          <p className="text-black text-opacity-50 text-sm md:text-base"> {battingStyle} </p>
          <p className="text-black text-opacity-50 text-sm md:text-base"> {bowlingStyle} </p>
        </div>
      </div>

      {/* delete icon */}
      <div onClick={handleRemoveSelected} className="">
        <MdDelete  className="text-red-500 h-7 w-7 " />
      </div>

    </div>
  );
};

SelectedPlayer.propTypes = {
  selectedPlayers: PropTypes.array,
  selectedPlayer: PropTypes.object,
  setSelectedPlayers: PropTypes.func,
  coins: PropTypes.number,
  setCoins: PropTypes.func
}

export default SelectedPlayer;