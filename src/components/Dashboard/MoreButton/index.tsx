import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import { More } from "../../Icons";
import { MoreButtonWrapper } from "./styles";

export interface MoreButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({
  children,
  onClick,
  onOpen,
  onClose,
}) => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  );

  const handleClickAway = () => {
    setAnchorEl(null);
    if (onClose) onClose();
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (onOpen) onOpen();
    if (onClick) onClick(event);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent="onMouseUp">
      <MoreButtonWrapper className="moreButton">
        <Button onClick={handleMoreClick}>
          <More />
        </Button>
        <Popper
          id="popper"
          placement="top"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
        >
          {children}
        </Popper>
      </MoreButtonWrapper>
    </ClickAwayListener>
  );
};

export default MoreButton;
