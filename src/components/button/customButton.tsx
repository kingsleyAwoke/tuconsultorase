import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const SubmitButton = styled(Button)(({ theme }) => ({
	minWidth: 'unset',
	textTransform: 'none',
	backgroundColor: theme.palette.common.firstButtonBg,
	border: `1px solid ${theme.palette.common.inputBorderColor}`,
	borderRadius: '0px',
	padding: '4px 8px',
}))

const PrimaryButton = styled(Button)(({ theme }) => ({
	minWidth: 'unset',
	textTransform: 'none',
	backgroundColor: theme.palette.common.secondButtonBg,
	border: `1px solid ${theme.palette.common.secondButtonBorder}`,
	borderRadius: '4px',
	padding: '3px 8px',

	'h1, h2, h3, h4, h5, h6, p, span': {
		color: theme.palette.common.white,
	},

	'&:hover': {
		backgroundColor: theme.palette.common.secondButtonBg,
	},
}))

export { SubmitButton, PrimaryButton }