import { Slider, SliderProps } from "@mui/material";
import { FC } from "react";

// 滑块控制点容易超出范围
const AdjustSlider: FC<SliderProps> = (props) => {
  return <Slider className="ml-2 mr-2 w-auto" {...props} />;
};

export default AdjustSlider;
