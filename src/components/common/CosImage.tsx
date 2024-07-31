"use client";

import Image, { ImageLoader } from "next/image";

type CosImageProps = Omit<React.ComponentProps<typeof Image>, "loader"> & { pixelate?: boolean };

/** 腾讯云 COS 对象存储的图像 */
const CosImage: React.FC<CosImageProps> = ({ pixelate = true, ...props }) => {
  const loader: ImageLoader = ({ src, width, quality }) => {
    return `https://hammerwokshop-1316521854.cos.ap-shanghai.myqcloud.com/${src}?w=${width}&q=${quality}`;
  };

  return (
    <Image
      style={{ imageRendering: pixelate ? "pixelated" : "inherit" }}
      className="object-contain"
      loader={loader}
      {...props}
    />
  );
};
export default CosImage;
