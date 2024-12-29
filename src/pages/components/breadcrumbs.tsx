import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// import { CustomActiveLink } from '../../components/Link/customLink';

const CustomBreadcrumbs = () => {
	const location = useLocation();

	return (
		<BreadcrumbsWrapper aria-label="breadcrumb">
			<Typography variant="h5">Está aquí: </Typography>

			{/* <CustomActiveLink to='/inicio'>
				<Typography variant="h5">Inicio</Typography>
			</CustomActiveLink> */}

			<Typography variant="h5">{location.pathname.split('/').pop()}</Typography>
		</BreadcrumbsWrapper>
	)
}

const BreadcrumbsWrapper = styled(Breadcrumbs)(({ theme }) => ({
	'h5': {
		fontWeight: 400,
	},

	'.MuiBreadcrumbs-separator': {
		margin: '0 4px',
		// color: theme.palette.common.black,
	}
}))

export { CustomBreadcrumbs }