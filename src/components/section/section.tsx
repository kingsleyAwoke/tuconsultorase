import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const ImageSectionWrapper = styled(Box)(({ theme }) => ({
	padding: '5px 10px',
	borderRadius: '5px',
	border: `1px solid ${theme.palette.common.firstBorderColor}`,

	'&:hover': {
		border: `1px solid ${theme.palette.common.activeBorderColor}`,
	}
}))

export { ImageSectionWrapper }