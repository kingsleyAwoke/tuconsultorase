import React, { useState } from "react";
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
  Collapse
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';

import { headerConfig } from "./headerConfig";
import { CustomMenu, CustomMenuItem } from "../../menu/CustomMenu";
import { CustomLink } from "../../Link/customLink";

const Header = () => {
  const location = useLocation();
  const [anchorElMenus, setAnchorElMenus] = useState<{ [key: string]: HTMLElement | null }>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorElMenus(prev => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleCloseSubMenu = (label: string) => {
    setAnchorElMenus(prev => ({ ...prev, [label]: null }));
  };

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
              <Box key={item.label}>
                {item.isChildren ? (
                  <>
                    <HeaderMenuItem onClick={(e) => handleOpenSubMenu(e, item.label)}
                      endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '18px !important' }} />}
                      className={item.children?.some(child => location.pathname === child.href) ? 'active' : ''}
                    >
                      <Typography variant="h5">{item.label}</Typography>
                    </HeaderMenuItem>

                    <CustomMenu anchorEl={anchorElMenus[item.label]}
                      open={Boolean(anchorElMenus[item.label])}
                      onClose={() => handleCloseSubMenu(item.label)}
                    >
                      {item.children?.map((child) => (
                        <CustomLink key={child.label} to={child.href || '#'}>
                          <CustomMenuItem onClick={() => handleCloseSubMenu(item.label)}
                            className={location.pathname === child.href ? 'active' : ''}
                          >
                            <Typography variant="h5">{child.label}</Typography>
                          </CustomMenuItem>
                        </CustomLink>
                      ))}
                    </CustomMenu>
                  </>
                ) : (
                  <CustomLink key={item.label} to={item.href || '#'}>
                    <HeaderMenuItem className={location.pathname === item.href ? 'active' : ''}>
                      <Typography variant="h5">{item.label}</Typography>
                    </HeaderMenuItem>
                  </CustomLink>
                )}
              </Box>
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
}));

export { Header };
