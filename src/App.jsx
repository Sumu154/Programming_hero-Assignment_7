import { useState } from 'react'
import './App.css'

import Navbar from './Components/Header/Navbar'
import Banner from './Components/Header/Banner'
import ToggleButtons from './Components/ToggleButtons/ToggleButtons'
import Players from './Components/PlayerSection/Players'
import SelectedPlayers from './Components/SelectedPlayersSection/SelectedPlayers'
import Subscribe from './Components/Footer/Subscribe'
import Footer from './Components/Footer/Footer'


function App() {
  const [activeComponent, setActiveComponent] = useState('all');
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);  //add korci



  const claimFreeCredit = () => {
    console.log('setcoin clicked');
    setCoins(coins+2500000);
  }

  // const handleAddSelected = () => {
  //   console.log('Player added');
  // }

  return (
    <>
      <header>
        <Navbar coins={coins}> </Navbar>
        <Banner claimFreeCredit={claimFreeCredit}> </Banner>
      </header>

      <main className="">
       <section className="w-[90%] mx-auto my-20">
          {/* Toggle Buttons and conditional rendering */}
          <ToggleButtons activeComponent={activeComponent} setActiveComponent={setActiveComponent} selectedPlayers={selectedPlayers} />
          { activeComponent === 'all' &&  
            <Players selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} ></Players> }
          { activeComponent === 'selected' &&  
            <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} setActiveComponent={setActiveComponent} ></SelectedPlayers> }
       </section>
      </main>

      <footer>
        <Subscribe></Subscribe>
        <Footer> </Footer>
      </footer>
      
    </>
  )
}

export default App
