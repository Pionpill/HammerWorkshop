"use client";
import { useThemeSelector } from "@/hook/store/useThemeStore";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export type FileTreeItemProps = {
  label: string;
  onClick?: (label: string) => void;
  Icon?: IconType;
  ActiveIcon?: IconType;
  activeLabel?: string;
  children?: FileTreeItemProps[];
  subHeader?: string;
  step?: number;
};

const FileTreeItem: React.FC<FileTreeItemProps> = (props) => {
  const { label, onClick, Icon, ActiveIcon, activeLabel, children, subHeader } = props;
  const step = props.step || 1;

  const [open, setOpen] = useState(activeLabel === label);
  const active = children && children.length ? open : open && activeLabel === label;

  const clickItem = () => {
    if (activeLabel === label && (!children || !children.length)) {
      return;
    }
    setOpen(!active);
    onClick && onClick(label);
  };

  const activeIconClass = "bg-slate-700 dark:bg-slate-100 text-white dark:text-black";
  const activeBefore = {
    width: "6px",
    height: "6px",
    content: '""',
    borderRadius: "6px",
    position: "absolute",
    transform: "translateX(-50%)",
    left: "-1px",
    backgroundColor: useThemeSelector("#444", "#aaa"),
  };

  return (
    <>
      <ListItemButton
        key={label}
        onClick={clickItem}
        selected={step === 1 && active}
        className={`gap-2 border-neutral-200 dark:border-neutral-700 ${step > 1 ? "p-1 pl-5" : "rounded-md p-2"} pr-2`}
        sx={{
          marginLeft: step > 1 ? "20px" : "",
          borderLeft: step > 1 ? "2px solid" : "",
          width: `calc(100% - ${(step - 1) * 20}px)`,
          "&::before": step > 1 && active ? activeBefore : {},
        }}
      >
        {Icon && (
          <ListItemIcon className={`min-w-0 p-1 rounded-md ${active && activeIconClass}`}>
            {active && ActiveIcon ? <ActiveIcon size={step > 1 ? 14 : 16} /> : <Icon size={step > 1 ? 14 : 16} />}
          </ListItemIcon>
        )}
        <ListItemText
          primary={label}
          className={`m-0 ${step > 1 && !active && "opacity-60"}`}
          primaryTypographyProps={{
            className: `tracking-widest ${step === 1 ? "font-medium text-base" : "text-sm"} ${
              active && "font-semibold"
            }`,
          }}
        />
        {children && children.length && (active ? <AiOutlineMinus /> : <AiOutlinePlus className="opacity-60" />)}
      </ListItemButton>
      {children && children?.length > 1 && (
        <Collapse in={active} timeout="auto" unmountOnExit>
          <List
            className="w-full border-neutral-200 dark:border-neutral-700"
            sx={{ marginLeft: `${(step - 1) * 20}px`, borderLeft: step > 1 ? "2px solid" : "" }}
            subheader={
              subHeader && (
                <ListSubheader component="div" id="nested-list-subheader">
                  {subHeader}
                </ListSubheader>
              )
            }
          >
            {children.map((item) => (
              <FileTreeItem {...item} step={step + 1} key={item.label} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default FileTreeItem;
