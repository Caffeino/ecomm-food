import { createTheme } from '@mui/material';
import { blue, pink } from '@mui/material/colors';

export const appTheme = createTheme({
	palette: {
		primary: {
			light: '#aef3ed',
			main: '#aef3ed',
			dark: blue[700]
		},
		secondary: {
			light: pink[300],
			main: '#11cb5f',
			dark: pink[700]
		}
	}
});
