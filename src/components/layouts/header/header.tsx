import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Container,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Popper,
  Fade
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';

import { headerConfig } from "./headerConfig";
import { CustomMenu, CustomMenuItem, CustomPopper } from "../../menu/CustomMenu";
import { CustomLink } from "../../Link/customLink";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileSubMenu = (label: string) => {
    setOpenSubMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <HeaderWrapper>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', height: '50px', justifyContent: 'flex-end' }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            {headerConfig.map((item) => (
              <DesktopMenuItem key={item.label} item={item} />
            ))}
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <MobileDrawer anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {headerConfig.map((item) => (
          <React.Fragment key={item.label}>
            {item.isChildren ? (
              <>
                <ListItem onClick={() => handleMobileSubMenu(item.label)}>
                  <ListItemText>
                    <Typography variant="h5">{item.label}</Typography>
                  </ListItemText>
                  {openSubMenus[item.label] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSubMenus[item.label]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children?.map((child) => (
                      <CustomLink key={child.label} to={child.href || '#'}>
                        <ListItem
                          button
                          sx={{ pl: 4 }}
                          onClick={handleDrawerToggle}
                          className={location.pathname === child.href ? 'active' : ''}
                        >
                          <ListItemText>
                            <Typography variant="h5">{child.label}</Typography>
                          </ListItemText>
                        </ListItem>
                      </CustomLink>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <CustomLink to={item.href || '#'}>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  className={location.pathname === item.href ? 'active' : ''}
                >
                  <ListItemText>
                    <Typography variant="h5">{item.label}</Typography>
                  </ListItemText>
                </ListItem>
              </CustomLink>
            )}
          </React.Fragment>
        ))}
      </MobileDrawer>
    </HeaderWrapper>
  );
};

const DesktopMenuItem = ({ item }: { item: HeaderConfig }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItemRef = useRef<any>(null);
  const [hoverState, setHoverState] = useState<boolean>(false);
  const [openPopper, setOpenPopper] = useState<boolean>(false);

  const handleLink = (to: string) => {
    navigate(to);
    setHoverState(false);
    setOpenPopper(false);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {item.isChildren ? (
        <React.Fragment>
          <HeaderMenuItem ref={menuItemRef}
            onMouseOver={() => { setOpenPopper(true) }}
            onMouseLeave={() => { setOpenPopper(false) }}
            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '18px !important' }} />}
            className={item.children?.some(child => location.pathname === child.href) ? 'active' : ''}
          >
            <Typography variant="h5">{item.label}</Typography>
          </HeaderMenuItem>

          <CustomPopper transition
            placement="bottom-start"
            anchorEl={menuItemRef.current}
            open={openPopper || hoverState}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={500}>
                <Box onMouseOver={() => { setHoverState(true) }} onMouseLeave={() => { setHoverState(false) }}>
                  {item.children?.map((child) => (
                    <CustomMenuItem key={child.label}
                      onClick={() => { handleLink(child.href || '#') }}
                      className={location.pathname === child.href ? 'active' : ''}
                    >
                      <Typography variant="h5">{child.label}</Typography>
                    </CustomMenuItem>
                  ))}
                </Box>
              </Fade>
            )}
          </CustomPopper>
        </React.Fragment>
      ) : (
        <HeaderMenuItem onClick={() => { handleLink(item.href || '#') }}
          className={location.pathname === item.href ? 'active' : ''}
        >
          <Typography variant="h5">{item.label}</Typography>
        </HeaderMenuItem>
      )}
    </Box>
  )
}

const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0, left: 0, right: 0,

  backgroundColor: theme.palette.common.headerBg,
  borderColor: theme.palette.common.headerBorderBg,
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',

  '& .MuiButton-root': {
    textTransform: 'none',
    fontSize: '0.9rem',
    padding: '8px 12px',
    whiteSpace: 'nowrap',
  },
}))

const HeaderMenuItem = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  minHeight: '50px',
  borderRadius: '0px',

  '& .MuiButton-endIcon': {
    margin: '0px 0px 0px 5px !important',
  },

  '&.active': {
    backgroundColor: theme.palette.common.menuActiveBg,
    '& h1, h2, h3, h4, h5, h6, p': {
      // fontWeight: 500,
      color: theme.palette.common.menuActiveColor,
    }
  },

  '&:hover': {
    backgroundColor: theme.palette.common.menuActiveBg,
    '& h1, h2, h3, h4, h5, h6, p': {
      // fontWeight: 500,
      color: theme.palette.common.menuActiveColor,
    }
  }
}))

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.common.headerBg,
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
  },

  '& .MuiSvgIcon-root': {
    color: theme.palette.common.menuActiveColor,
  },

  '& .MuiListItem-root': {
    padding: '8px 16px',
    '&.active': {
      backgroundColor: theme.palette.common.menuActiveBg,
      '& .MuiTypography-root': {
        color: theme.palette.common.menuActiveColor,
      }
    }
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  }
}))

export { Header };
