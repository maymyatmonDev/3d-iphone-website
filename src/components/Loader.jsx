import React from "react";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  useGSAP(() => {
    gsap.to("#box1", {
      rotation: 360,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "circ.inOut",
    });
    gsap.to("#box2", {
      rotation: -360,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "circ.inOut",
    });
  }, []);
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[20vw] h-[10vw] rounded-full">
          <div className="flex justify-between gap-2 items-center">
            <div
              id="box1"
              className="w-4 h-4 rounded-md"
              style={{
                backgroundColor: "#C9C8C2",
              }}
            />
            <div
              id="box2"
              className="w-4 h-4 rounded-md"
              style={{
                backgroundColor: "#C9C8C2",
              }}
            />
            <div
              id="box1"
              className="w-4 h-4 rounded-md"
              style={{
                backgroundColor: "#C9C8C2",
              }}
            />
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
