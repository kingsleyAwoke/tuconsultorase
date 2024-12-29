import { Menu, MenuItem, Popper } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomPopper = styled(Popper)(({ theme }) => ({
	'.MuiBox-root': {
		minWidth: '180px',
		padding: '5px 0px',
		backgroundColor: theme.palette.common.white,
		boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
		border: `1px solid ${theme.palette.common.firstBorderColor}`,
	},
}))

const CustomMenu = styled(Menu)(({ theme }) => ({
	'& .MuiPaper-root': {
		minWidth: '180px',
		backgroundColor: theme.palette.common.white,
		boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
		border: `1px solid ${theme.palette.common.firstBorderColor}`,
	},
	'& .MuiList-root': {
		padding: '5px 0px',
	},
}))

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
	padding: '5px 10px',

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

export { CustomMenu, CustomMenuItem, CustomPopper }