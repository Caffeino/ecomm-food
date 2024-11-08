import { Box, Container, Typography } from '@mui/material';
import NavBar from '../../components/surface/Navbar';

const Home = () => {
	return (
		<>
			<NavBar />
			<Container sx={{ padding: '0.5rem' }}>
				<Box
					sx={{
						height: '90vh',
						padding: '1rem',
						bgcolor: '#edfffe',
						borderRadius: '0.75rem'
					}}
				>
					<Typography variant='body2' gutterBottom>
						This the container for the Home Page...
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default Home;
