import PropTypes from 'prop-types';


import { useEffect, useState } from "react";
import Player from "./Player";

const Players = ({selectedPlayers, setSelectedPlayers, coins, setCoins}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch('Json/playersFakeData.json');
      const data = await res.json();

      setPlayers(data);
    }

    fetchPlayers();
  } ,[])
  


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        {players.map(it => {
          // console.log(it); return null;
          return <Player key={it.id} player={it} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} > </Player>
        })}
      </div>
    </div>
  );
};


Players.propTypes = {
  selectedPlayers: PropTypes.array,
  setSelectedPlayers: PropTypes.func,
  coins: PropTypes.number,
  setCoins: PropTypes.func
}

export default Players;