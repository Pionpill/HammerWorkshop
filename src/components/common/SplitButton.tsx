import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export type SplitButtonProps = {
  // buttonGroup 的配置
  groupProps?: React.ComponentProps<typeof ButtonGroup>;
  // 多个 button 的配置, value 会作为 key 使用
  buttonsProps: Array<React.ComponentProps<typeof Button> & { value: string }>;
  // 点击 button 是是否替换默认配置
  replace?: boolean;
};

const SplitButton: React.FC<SplitButtonProps> = ({ groupProps, buttonsProps, replace }) => {
  const [open, setOpen] = useState(false);
  // 保存一个按钮顺序
  const [defaultIndex, setDefaultIndex] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = (show?: boolean) => {
    setOpen((open) => (show === undefined ? !open : show));
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const onClick = (event: any, index: number) => {
    handleToggle(false);
    const buttonClick = buttonsProps[index].onClick;
    if (buttonClick) buttonClick(event);
    if (replace) {
      setDefaultIndex(index);
    }
  };

  return (
    <>
      <ButtonGroup variant="outlined" ref={anchorRef} {...groupProps}>
        <Button {...buttonsProps[defaultIndex]} onClick={(event) => onClick(event, 0)} />
        <Button
          size="small"
          style={{ minWidth: "24px" }}
          className="p-0"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={() => handleToggle()}
        >
          <IoMdArrowDropdown />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {buttonsProps.map(
                    (config, index) =>
                      index !== defaultIndex && (
                        <MenuItem key={config.value}>
                          <Button {...config} onClick={(event) => onClick(event, index)} />
                        </MenuItem>
                      )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default SplitButton;
