import { Cancel, Home, LibraryBooks, Menu, Person } from '@mui/icons-material';
import { Button, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext } from '../../contexts/ThemeContext';

interface ILateralMenuProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string,
  label: string,
  icon: React.ReactNode,
  onClick?: () => void | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const theme = useTheme()

  const handleClick = () => {
    onClick?.();
  }

  const hoverStyleListItemButton = {
    '&:hover': {
      color: theme.palette.primary.main,
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main,
      }
    }
  }

  return (
    <ListItemButton onClick={handleClick} href={to}
      sx={hoverStyleListItemButton}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const LateralMenu: React.FC<ILateralMenuProps> = ({ children }) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false)
  const { toggleTheme } = useAppThemeContext();

  const toogleMenu = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleCloseMenu = () => {
    setOpenDrawer(false)
  }

  return (
    <>
      <Box
        display='flex'
        justifyContent='start'
      >
        <Button sx={{ height: '5%' }} onClick={toogleMenu}>
          <Menu fontSize='large' />
        </Button>
      </Box>

      <Drawer variant="temporary"
        open={openDrawer}
      >
        <Box
          display='flex'
          justifyContent='end'
        >
          <Cancel color='action'
            onClick={toogleMenu}
            sx={{
              cursor: 'pointer',
              fontSize: '32px',
              mx: '0.5em',
              marginTop: '0.5em',
              '&:hover': {
                color: theme.palette.primary.main
              }
            }}
          />
        </Box>

        <Box
          width='15em'
          height='100%'
          display='flex'
          flexDirection='column'
        >

          <Box>
            <List>
              <ListItemLink
                icon={<Home />} 
                label='Home'
                to='/'
                onClick={handleCloseMenu}
              />
            </List>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component='nav'>
              <ListItemLink
                icon={<Person />}
                label='Autores'
                to='/author'
                onClick={handleCloseMenu}
              />
              <ListItemLink
                icon={<LibraryBooks />}
                label='Livros'
                to='/book'
                onClick={handleCloseMenu}
              />
            </List>
          </Box>

          <Divider />

          <Box>
            <Button sx={{ width: '100%' }} color='secondary' onClick={toggleTheme}>Toogle Theme</Button>
          </Box>

        </Box>
      </Drawer>
      <Box height='90%' width='100vw' onClick={handleCloseMenu}>
        {children}
      </Box>

    </>
  );
};
