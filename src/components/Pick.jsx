import { useEffect, useRef, useState } from "react";
import iro from "@jaames/iro";

const Pick = ({sendData1}) => {
  const pickref = useRef(null);
  const [color, setcolor] = useState('#000')
  var flag = 0;
  useEffect(() => {
    
    if (flag ==1)
      return;

    const colorPicker = new iro.ColorPicker(pickref.current, {
      width: 280,
      height: 200,
      color: "#000",
      borderWidth: 2,
      borderColor: "#fff",
      layout: [
        {
          component: iro.ui.Box
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "hue",
          },
        },
      ],
    });

    flag = 1;
    

    colorPicker.on("color:change", (color) => {
    //  store = color.hexString;
    setcolor(color.hexString)
    const hex = color.hexString
    const rgb = color.rgb
    const hsv = color.hsv
    const hsl = color.hsl
    sendData1(hex,rgb,hsv,hsl)
    
    });
  }, []);
//   console.log(colorPicker); 
// console.log(store);
  return (
    <div className=" h-[48vh] md:h-[53vh] lg:h-[53vh] w-[384px] md:w-[550px] mx-auto bg-green-00">
      <h2 className="text-[#fff] text-2xl font-bold p-2">Color Picker</h2>
       <div className="h-fit w-[100%y] flex md:flex lg:flex gap-2 md:w-[580px] lg:w-[580px] rounded-2xl px-2 py-2">
        <div style={{background:color}} className="h-[320px] md:h-[40vh] lg:h-[40vh] w-[200px] md:w-[230px] rounded-2xl border-white border-2"></div>
        <div ref={pickref} className="scale-x-[100%] scale-y-[100%] md:scale-y-[90%] md:scale-x-[100%] lg:scale-y-[90%] lg:scale-x-[100%]  origin-top"></div>
      </div>
    </div>
  );
};

export default Pick;
