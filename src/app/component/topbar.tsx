'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const pages = [
  { name: 'Campanhas', path: '/campanhas' },
  { name: 'Locais', path: '/locais' },
  { name: 'Blog', path: '/blog' }
];

const settings = [
  { name: 'Usuário', path: '/usuario' },
  { name: 'Meus locais de vacina', path: '/meus-locais' },
  { name: 'Minha Carteirinha', path: '/carteirinha' },
  { name: 'Logout', path: '/logout' }
];

function Topbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  return (
    <AppBar 
      position="sticky"
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <MedicalServicesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 32 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => router.push('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            Imuniza Brasil
          </Typography>

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navegação"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  mt: 1,
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    }
                  }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <MedicalServicesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => router.push('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Imuniza Brasil
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  px: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configurações">
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={{ 
                  p: 0,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <Avatar 
                  alt="Usuário" 
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    border: '2px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ 
                mt: '45px',
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  minWidth: 200,
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting.name} 
                  onClick={() => handleNavigate(setting.path)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    }
                  }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
