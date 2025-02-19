import { BASE_URL } from "@/config/config";
import React from "react";
import { ImageZoom } from "react-responsive-image-zoom";

const App = (props: any) => {
  return (
<ImageZoom
  src={`${BASE_URL}${props.picture || ""}`}
  defaultZoomFactor={2}
  transition={0.5}
  width="100%" // Ensure this is properly applied
  height="100%"
  alt={props.alt}
  className="min-h-[500px] w-full h-full" // Ensure height is set
  imgClassName="my-image-class object-cover w-full h-full" // Ensure the image itself takes full dimensions
  debug={false}
/>
  );
};

export default App;
