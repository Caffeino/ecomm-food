import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Typography } from '@mui/material';

const Logo = ({ isMobile }) => (
	<>
		<RamenDiningIcon
			sx={{ display: displayOptions(isMobile), mb: 1, color: '#ff7777' }}
			fontSize='large'
		/>
		<Typography
			variant='h5'
			noWrap
			component='a'
			href='/'
			sx={typographyStyles(isMobile)}
		>
			Fu-Hao
		</Typography>
	</>
);

const typographyStyles = isMobile => ({
	mr: 2,
	display: displayOptions(isMobile),
	flexGrow: isMobile ? 0 : 1,
	fontFamily: 'Shojumaru, system-ui',
	fontWeight: 400,
	letterSpacing: '.1rem',
	color: '#5f6868',
	textDecoration: 'none'
});

const displayOptions = isMobile => ({
	xs: isMobile ? 'none' : 'flex',
	md: isMobile ? 'flex' : 'none'
});

export default Logo;
