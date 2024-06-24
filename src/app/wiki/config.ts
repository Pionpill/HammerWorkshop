import { FileTreeItemProps } from "@/components/common/FileTree/FileTreeItem";
import { AiFillFileImage, AiOutlineFileImage } from "react-icons/ai";

const articleNavigationConfig: FileTreeItemProps[] = [
  {
    label: "美工1",
    Icon: AiOutlineFileImage,
    ActiveIcon: AiFillFileImage,
    children: [
      {
        label: "美工1-1",
      },
      {
        label: "美工1-2",
        Icon: AiOutlineFileImage,
        ActiveIcon: AiFillFileImage,
        children: [
          {
            label: "美工1-2-1",
          },
          {
            label: "美工1-2-2",
          },
          {
            label: "美工1-2-3",
          },
          {
            label: "美工1-2-4",
          },
        ],
      },
      {
        label: "美工1-3",
      },
      {
        label: "美工1-4",
      },
    ],
  },
  {
    label: "美工2",
    Icon: AiOutlineFileImage,
    ActiveIcon: AiFillFileImage,
  },
  {
    label: "美工3",
    Icon: AiOutlineFileImage,
    ActiveIcon: AiFillFileImage,
  },
];

export default articleNavigationConfig;
