import { Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { PAGES } from '../../constants/pages';
import AvatarMenu from './AvatarMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const NavBar = () => {
	return (
		<AppBar position='static' sx={appBarStyles}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Logo isMobile={true} />
					<Box sx={boxStyles(true)}>
						<MobileMenu />
					</Box>
					<Logo />
					<Box sx={boxStyles(false)}>
						{PAGES.map(page => (
							<Button
								key={page}
								onClick={() => {}}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<AvatarMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

const appBarStyles = () => ({
	boxShadow: 'none',
	borderBottom: '1px solid #6ee8dd'
});

const boxStyles = isMobile => ({
	flexGrow: 1,
	display: {
		xs: isMobile ? 'flex' : 'none',
		md: isMobile ? 'none' : 'flex'
	}
});

export default NavBar;
