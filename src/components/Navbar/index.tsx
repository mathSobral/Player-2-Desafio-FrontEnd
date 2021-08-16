import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { signOut } from "../../redux/auth/authActions";
import LogoSvg from "../Icons/Logo";
import HouseSvg from "../Icons/House";
import SpeakerSvg from "../Icons/Speaker";
import PeopleSvg from "../Icons/People";
import PersonSvg from "../Icons/Person";
import LogoutSvg from "../Icons/Logout";
import CustomTypography from "../CustomTypography";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import { Container, LogoWrapper, StyledButton } from "./styles";
import { breakpoints } from "../../constants/sizes";

export type NavbarButton = "home" | "dispatch" | "groups" | "contacts" | "";

export interface MiniDrawerProps {
  activeButton?: NavbarButton;
}

const MiniDrawer: React.FC<MiniDrawerProps> = ({ activeButton }) => {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState<NavbarButton>(activeButton || "");
  const dispatch = useDispatch();
  const isSm = useMediaQuery(breakpoints.sm);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    dispatch(signOut());
  };

  const openDrawerIfItsClosed = () => {
    if (!open) handleDrawerOpen();
  };

  const listItems: NavbarItemProps[] = [
    {
      name: "home",
      label: "Início",
      onClick: () => setButton("home"),
      icon: <HouseSvg />,
      parentOpen: open,
      className: button === "home" || !button ? "active" : "",
    },
    {
      name: "dispatchSublist",
      label: "Disparos",
      onClick: openDrawerIfItsClosed,
      icon: <SpeakerSvg />,
      parentOpen: open,
      items: [
        {
          name: "dispatch",
          onClick: undefined,
          label: "Disparos",
          parentOpen: open,
        },
        {
          name: "createDispatch",
          onClick: undefined,
          label: "Criar Disparos",
          parentOpen: open,
        },
      ],
    },
    {
      name: "groups",
      label: "Grupos",
      onClick: () => setButton("groups"),
      icon: <PeopleSvg />,
      parentOpen: open,
      className: button === "groups" ? "active" : "",
    },
    {
      name: "contacts",
      label: "Contatos",
      onClick: () => setButton("contacts"),
      icon: <PersonSvg />,
      parentOpen: open,
      className: button === "contacts" ? "active" : "",
    },
    {
      name: "signOut",
      label: "Sair",
      onClick: handleLogoutClick,
      icon: <LogoutSvg />,
      className: "sign-out",
    },
  ];

  return (
    <ClickAwayListener onClickAway={handleDrawerClose} mouseEvent="onMouseUp">
      <Container open={open}>
        {isSm && !open && (
          <LogoWrapper open={open}>
            <StyledButton onClick={handleDrawerOpen}>
              <LogoSvg />
            </StyledButton>
          </LogoWrapper>
        )}
        <Drawer
          variant={isSm ? "persistent" : "permanent"}
          anchor="left"
          open={open}
        >
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
            {listItems.map((item) => (
              <NavbarItem key={item.name} {...item} />
            ))}
          </List>
        </Drawer>
      </Container>
    </ClickAwayListener>
  );
};
export default MiniDrawer;
