import { BASE_URL } from "@/config/config";
import React from "react";
import { ImageZoom } from "react-responsive-image-zoom";

const App = (props: any) => {
  return (
    <ImageZoom
      src={`${BASE_URL}${props.picture || ""}`}
      defaultZoomFactor={2}
      transition={0.5}
      width={500}
      height={500}
      alt={props.alt}
      className="h-[500px] "
      imgClassName=" my-image-class"
      debug={false}
    />
  );
};

export default App;
