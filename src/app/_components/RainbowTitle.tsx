import FlexBox from "@/components/common/FlexBox";
import { SxProps, Typography, keyframes } from "@mui/material";
import { blue, green, purple, red, teal } from "@mui/material/colors";
import { PropsWithChildren } from "react";

const HomeTitle: React.FC<PropsWithChildren> = ({ children }) => {
  const getRainbowGradient = (colorArray: string[]) => {
    const scale = 100 / colorArray.length;
    const colors = colorArray
      .map(
        (color, index) =>
          `${color} ${scale * index}%, ${color} ${scale * (index + 1) - 1}%, transparent ${
            scale * (index + 1) - 1
          }%, transparent ${scale * (index + 1)}%`
      )
      .join(", ");
    return `linear-gradient(225deg, ${colors})`;
  };

  const titleMove = keyframes`
      0% {
        background-position: 0% 100%;
      }
      100% {
        background-position: 100% 0%;
      }
    `;

  const titleSx: SxProps = {
    display: "inline-block",
    color: "transparent",
    background: getRainbowGradient([
      red[500],
      purple[500],
      blue[500],
      teal[500],
      green[500],
      red[500],
      purple[500],
      blue[500],
      teal[500],
      green[500],
    ]),
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200% 200%",
    animation: `${titleMove} 6s linear infinite`,
  };

  return (
    <FlexBox>
      <Typography variant="h2" sx={titleSx} className="animate-bg-move">
        {children}
      </Typography>
    </FlexBox>
  );
};

export default HomeTitle;
