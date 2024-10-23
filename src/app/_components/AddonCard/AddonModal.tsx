"use client";
import ModelMesh from "@/components/common/three/components/ModelMesh";
import SimpleEnvironment from "@/components/common/three/components/SimpleEnvironment";
import { ArcballControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export type modelUrl = {
  modelPath: string;
};

const AddonModel: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  return (
    <Canvas shadows>
      <OrthographicCamera makeDefault position={[1, 1, 1]} zoom={20} />
      <SimpleEnvironment />
      <ModelMesh url="ecology/model/cooking_table/cooking_table.gltf" />
      <ArcballControls />
    </Canvas>
  );
};

export default AddonModel;
