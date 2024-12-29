import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const BlogItemWrapper = styled(Box)(({ theme }) => ({
	gap: '15px',
	display: 'flex',
	flexDirection: 'column',
	padding: '0px 5px',

	span: {
		fontWeight: 600,
	},

	[theme.breakpoints.down('md')]: {
		gap: '10px'
	}
}))

const BlogHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.blogSectionBg,
	padding: '30px 20px 5px',
	textAlign: 'center',

	[theme.breakpoints.down('md')]: {
		padding: '20px 10px 5px',
	}
}))

const BlogItemContainer = styled(Box)(({ theme }) => ({
	gap: '15px',
	display: 'flex',
	flexDirection: 'column',
	padding: '0px 10px',

	h2: {
		fontWeight: 500,
		color: theme.palette.common.fifthTypographyColor,
	},

	h4: {
		fontSize: '16px',
		span: {
			fontWeight: 600,
		}
	},

	[theme.breakpoints.down('md')]: {
		gap: '10px',
		padding: '0px',
	}
}))

export { BlogItemWrapper, BlogItemContainer, BlogHeader }