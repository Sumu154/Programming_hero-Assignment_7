import PropTypes from 'prop-types';


const ToggleButtons = ({ activeComponent, setActiveComponent, selectedPlayers }) => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* dynamic heading */}
        <h1 className="text-black font-bold text-xl md:text-2xl py-3 md:py-0"> 
          {activeComponent==='all' ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}
        </h1>

        {/* buttons for toggle */}
        <div className=" rounded-lg">
          <button className={`w-[120px] text-black px-3 py-2  text-sm md:text-base rounded-l-lg border-[1px] border-black border-opacity-10 
                              ${activeComponent==='all'? 'bg-tiya' : 'bg-white text-opacity-50'}`}
                              onClick={()=> setActiveComponent('all')}>
            Available
          </button>
          <button className={`w-[130px] text-black px-3 py-2 text-sm md:text-base rounded-r-lg border-[1px] border-black border-opacity-10 
                              ${activeComponent==='selected'? 'bg-tiya' : 'bg-white text-opacity-50'}`}
                              onClick={()=> setActiveComponent('selected')}>
            Selected {selectedPlayers.length}
          </button>
        </div>
      </div>
    </div>
  );
};


ToggleButtons.propTypes = {
  activeComponent: PropTypes.any,
  setActiveComponent: PropTypes.func,
  selectedPlayers: PropTypes.array
}


export default ToggleButtons;
