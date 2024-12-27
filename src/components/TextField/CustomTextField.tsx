import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
	border: `1px solid ${theme.palette.common.inputBorderColor}`,
	borderRadius: '0px',

	'& .MuiInputBase-input': {
		fontSize: '14px',
		padding: '3px 5px',
		color: theme.palette.common.inputBorderColor,
	},

	fieldset: {
		visibility: 'hidden',
		borderColor: 'unset !important',
	}
}))

export { CustomTextField }