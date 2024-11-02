import * as THREE from "three";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  const isMobile = window.innerWidth < 780;
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-150%]" : ""}`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      {/*wrap the entire suspense with OrbitControls - allow us to move the camera using mouse */}
      <OrbitControls
        makeDefault //default way of traversing over our model
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={!isMobile}
        rotateSpeed={0.4} //slow and steady
        target={new THREE.Vector3(0, 0, 0)} //construct a new vector and give 0 0 0 as XYZ to target the center of the screen
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]} //center the model
      >
        {/* Suspense to provide some kind of a loader until the model loads */}
        {/* fallback - define something that's going to load */}
        <Suspense fallback={<Loader />}>
          {/* render the model */}
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
            groupRef={groupRef}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
