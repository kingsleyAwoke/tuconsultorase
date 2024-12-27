import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles"

const CustomLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
}))

const CustomActiveLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.common.activeLinkColor,

	'h1, h2, h3, h4, h5, h6, p, span': {
		color: theme.palette.common.activeLinkColor,
	},

	'&:hover': {
		textDecoration: 'underline',
	}
}))

export { CustomLink, CustomActiveLink }