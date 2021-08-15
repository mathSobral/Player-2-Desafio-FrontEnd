import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "../../Icons/ExpandLess";
import ExpandMore from "../../Icons/ExpandMore";

export interface BarItem {
  name: string;
  icon?: React.ReactNode;
  link?: string;
  label?: string;
}

export interface NavbarItemProps extends BarItem {
  items?: NavbarItemProps[];
  onClick?: (name: string) => void;
  parentOpen?: boolean;
  className?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  name,
  onClick,
  icon,
  items,
  link,
  label,
  parentOpen,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open && !parentOpen) setOpen(false);
  }, [parentOpen, open]);

  const handleClick = () => {
    if (onClick) onClick(name);
    if (parentOpen) setOpen((oldValue) => !oldValue);
  };

  return (
    <>
      <ListItem button onClick={handleClick} className={className}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {items && items.length > 0 ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items?.map((listItem) => (
          <NavbarItem
            key={listItem.name}
            name={listItem.name}
            onClick={listItem.onClick}
            icon={listItem.icon}
            items={listItem.items}
            link={listItem.link}
            label={listItem.label}
            parentOpen={parentOpen}
            className={className}
          />
        ))}
      </Collapse>
    </>
  );
};

export default NavbarItem;
