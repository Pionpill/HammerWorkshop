import { Box, List } from "@mui/material";
import FileTreeItem, { FileTreeItemProps } from "./FileTreeItem";

export type FileTreeProps = {
  items: FileTreeItemProps[];
};

const FileTree: React.FC<FileTreeProps & React.ComponentProps<typeof Box>> = ({ items, ...props }) => {
  return (
    <Box className="flex h-full w-full" {...props}>
      <List className="w-full">
        {items.map((item) => (
          <FileTreeItem {...item} key={item.label} />
        ))}
      </List>
    </Box>
  );
};

export default FileTree;
