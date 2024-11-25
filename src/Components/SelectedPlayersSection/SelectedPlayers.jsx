import PropTypes from 'prop-types';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coins, setCoins, setActiveComponent}) => {


  return (

    <div>
      {selectedPlayers.map(it => {
        return <SelectedPlayer key={it.id} selectedPlayer={it} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins}> </SelectedPlayer>
      })}

      <button className="text-black bg-tiya px-3 py-2 my-16 text-sm md:text-base rounded-lg"
              onClick={()=>setActiveComponent('all')}> 
         Add More Player
      </button>


    </div>

  );
};



SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array,
  setSelectedPlayers: PropTypes.func,
  coins: PropTypes.number,
  setCoins: PropTypes.func,
  setActiveComponent: PropTypes.func
}

export default SelectedPlayers;