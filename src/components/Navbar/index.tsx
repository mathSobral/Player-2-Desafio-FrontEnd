import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { signOut } from "../../redux/auth/authActions";
import LogoSvg from "../Icons/Logo";
import HouseSvg from "../Icons/House";
import SpeakerSvg from "../Icons/Speaker";
import PeopleSvg from "../Icons/People";
import PersonSvg from "../Icons/Person";
import LogoutSvg from "../Icons/Logout";
import CustomTypography from "../CustomTypography";
import { Container, LogoWrapper, StyledButton } from "./styles";

export type NavbarButton = "home" | "dispatch" | "groups" | "contacts" | "";

export interface MiniDrawerProps {
  activeButton?: NavbarButton;
}

const MiniDrawer: React.FC<MiniDrawerProps> = ({ activeButton }) => {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState<NavbarButton>(activeButton || "");
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("oi mundo");
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    dispatch(signOut());
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose} mouseEvent="onMouseUp">
      <Container open={open}>
        <Drawer variant="permanent" anchor="left" open={open}>
          <LogoWrapper open={open}>
            {!open ? (
              <StyledButton onClick={handleDrawerOpen}>
                <LogoSvg />
              </StyledButton>
            ) : (
              <StyledButton onClick={handleDrawerClose}>
                <LogoSvg />
                <CustomTypography>informem-se</CustomTypography>
              </StyledButton>
            )}
          </LogoWrapper>

          <Divider />
          <List>
            <ListItem
              button
              className={button === "home" || !button ? "active" : ""}
              onClick={() => setButton("home")}
            >
              <ListItemIcon>
                <HouseSvg />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem
              button
              className={button === "dispatch" ? "active" : ""}
              onClick={() => setButton("dispatch")}
            >
              <ListItemIcon>
                <SpeakerSvg />
              </ListItemIcon>
              <ListItemText primary="Disparos" />
            </ListItem>
            <ListItem
              button
              className={button === "groups" ? "active" : ""}
              onClick={() => setButton("groups")}
            >
              <ListItemIcon>
                <PeopleSvg />
              </ListItemIcon>
              <ListItemText primary="Grupos" />
            </ListItem>
            <ListItem
              button
              className={button === "contacts" ? "active" : ""}
              onClick={() => setButton("contacts")}
            >
              <ListItemIcon>
                <PersonSvg />
              </ListItemIcon>
              <ListItemText primary="Contatos" />
            </ListItem>
            <ListItem button onClick={handleLogoutClick}>
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
};
export default MiniDrawer;
