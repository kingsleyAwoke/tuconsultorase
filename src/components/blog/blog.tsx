import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const BlogHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.blogSectionBg,
	padding: '30px 20px 5px',
	textAlign: 'center',

	[theme.breakpoints.down('md')]: {
		padding: '20px 10px 5px',
	}
}))

export { BlogHeader }