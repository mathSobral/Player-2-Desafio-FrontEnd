import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LogoSvg from "../Icons/Logo";
import HouseSvg from "../Icons/House";
import SpeakerSvg from "../Icons/Speaker";
import PeopleSvg from "../Icons/People";
import PersonSvg from "../Icons/Person";
import LogoutSvg from "../Icons/Logout";
import CustomTypography from "../CustomTypography";
import { Container, LogoWrapper, StyledButton } from "./styles";

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose} mouseEvent="onMouseUp">
      <Container open={open}>
        <LogoWrapper open={open}>
          {!open && (
            <StyledButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <LogoSvg />
            </StyledButton>
          )}
        </LogoWrapper>

        <Drawer variant="persistent" anchor="left" open={open}>
          <LogoWrapper open={open}>
            {open && (
              <StyledButton onClick={handleDrawerClose}>
                <LogoSvg />
                <CustomTypography>informem-se</CustomTypography>
              </StyledButton>
            )}
          </LogoWrapper>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HouseSvg />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SpeakerSvg />
              </ListItemIcon>
              <ListItemText primary="Disparos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleSvg />
              </ListItemIcon>
              <ListItemText primary="Grupos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonSvg />
              </ListItemIcon>
              <ListItemText primary="Contatos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LogoutSvg />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Drawer>
      </Container>
    </ClickAwayListener>
  );
}
