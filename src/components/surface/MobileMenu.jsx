import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { PAGES } from '../../constants/pages';

const MobileMenu = () => {
	const { anchorElNav, setOpen, setClose } = useMobileMenu();

	return (
		<>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={ev => setOpen(ev.currentTarget)}
				color='inherit'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				open={Boolean(anchorElNav)}
				onClose={setClose}
				sx={{ display: { xs: 'block', md: 'none' } }}
			>
				{PAGES.map(page => (
					<MenuItem key={page} onClick={setClose}>
						<Typography sx={{ textAlign: 'center' }}>{page}</Typography>
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

const useMobileMenu = () => {
	const [anchorElNav, setAnchorElNav] = useState();

	const setOpen = currentTarget => setAnchorElNav(currentTarget);

	const setClose = () => setAnchorElNav();

	return {
		anchorElNav,
		setOpen,
		setClose
	};
};

export default MobileMenu;
