import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography
} from '@mui/material';
import { useState } from 'react';
import { SETTINGS_USER } from '../../constants/settingsUser';

function stringToColor(string) {
	let hash = 0;
	let i;

	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}

	return color;
}

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: stringToColor(name)
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
	};
}

const AvatarMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Andres Tellez'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar {...stringAvatar('Andres Tellez')} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{SETTINGS_USER.map(setting => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default AvatarMenu;
