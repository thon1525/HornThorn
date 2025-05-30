// import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import PropTypes from 'prop-types';

// const Ball = ({ icon }) => {
//   const [decal] = useTexture([icon]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <div className="w-28 h-28">
//       <Canvas
//         frameloop="demand"
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense fallback={null}>
//           <OrbitControls enableZoom={false} />
//           <Ball icon={icon} />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// BallCanvas.propTypes = {
//   icon: PropTypes.string.isRequired,
// };

// export default BallCanvas;
import React from 'react';
import PropTypes from 'prop-types';

const TechnologyCard = ({ icon: Icon,  }) => {
  return (
    <div className="w-28 h-28 perspective-1000 m-2">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180 group">
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-[#151253] rounded-xl shadow-lg flex items-center justify-center border border-[#151253]">
       <img src={Icon} alt="" />
        </div>
        {/* Back of the card */}
      </div>
    </div>
  );
};

TechnologyCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default TechnologyCard;