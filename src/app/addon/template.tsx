import FlexBox from "@/components/common/FlexBox";
import { PropsWithChildren } from "react";

const AddonTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return <FlexBox className="h-full w-full justify-center items-center">{children}</FlexBox>;
};

export default AddonTemplate;
