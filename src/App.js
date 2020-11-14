import React, { useEffect, useState } from 'react'
import States from "./components/States";
import Andaman from "./components/states/Andaman"

import Axios from "axios";
import WestBengal from './components/states/WestBengal';
import Andhra from "./components/states/Andhra";
import Map from "./components/map/Map"

function App() {
  const [details, setDetails] = useState([]);
  const [westbengal, setWestbengal] = useState([]);
  const [andaman, setAndaman] = useState([]);
  const [andhra, setAndhra] = useState([]);
  // const [districtdetails, setDistrictdetails] = useState([]);
  const fetchStateData = async () => {
    
     const {data} = await Axios.get("https://api.covidindiatracker.com/state_data.json");
     //console.log(data[1].state);
      setDetails(data);
      //console.log(details[0]);
  }
  const fetchDistrictData = async() => {
    const {data} = await Axios.get("https://api.covid19india.org/v2/state_district_wise.json");
    //console.log(data[36].districtData[4].district);
      setWestbengal(data[36].districtData)
      setAndaman(data[1].districtData);
      setAndhra(data[2].districtData);
  }

  useEffect(() => {
    fetchStateData()
    fetchDistrictData()
  }, [])
  return (
    <div>
      {/* <WestBengal westbengal={westbengal}/> */}
      {/* <Andaman andaman={andaman} /> */}
      {/* <Andhra andhra={andhra}/> */}
      <Map details={details}/>
      <States details={details}/>
    </div>
  )
}


export default App;