import {useState} from "react";
import Pick from './components/pick';
import ColorCode from './components/ColorCode';
import StorePicker from './components/StorePicker';

const App = () => {
  const [data,setData] = useState({hex:"#000",rgb:"#000",hsv:"#000", hsl:"#000"})
  const response_data = (hex,rgb,hsv,hsl)=>{
    setData({hex,rgb,hsv,hsl})
  }
  return (
    <div className=" md:h-[100vh] md:w-[100vw] md:flex lg:flex bg-[#222222]">
      <div className="h-full w-[100vw] md:w-[50vw] bg-amber-00">
        <Pick sendData1 = {response_data}/>
        <ColorCode dataFrompick = {data}/>
      </div>
      <div className="h-full w-[50vw] bg-amber-00">
        <StorePicker storedata = {data}/>
      </div>
    </div>
  );
};

export default App;