import { useEffect, useState } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask"
import Laptops from "./components/Laptops"


const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [myData, setMyData] = useState(false);
  const url = "http://localhost:3000/api/laptop";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMyData(data);
        setLoaded(true)
        console.log("Get ran");
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      {isLoaded ? <div>loaded already</div> : <LoadingMask />}
      {isLoaded && <Laptops data={myData} />}
    </div>)
};

export default App;
