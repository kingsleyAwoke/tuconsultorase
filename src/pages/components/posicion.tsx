import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../../components/button/customButton";
import { CustomActiveLink } from "../../components/Link/customLink";
import { popularArticleItems } from "./popularArticles";

const Posicion = () => {
	const limitedArticles = popularArticleItems.slice(0, 12);
	return (
		<PosicionWrapper>
			<Box display="flex" flexDirection="row" justifyContent="center">
				<PrimaryButton>
					<Typography variant="body1">Los más Populares</Typography>
				</PrimaryButton>
			</Box>

			<Box paddingLeft={3}>
				{limitedArticles.map((item, index) => (
					<Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
						<Typography variant="h5">.</Typography>

						<CustomActiveLink to={item.url}>
							<Typography variant="h5" component="p">{item.title}</Typography>
						</CustomActiveLink>
					</Box>
				))}
			</Box>
		</PosicionWrapper>
	)
}

const PosicionWrapper = styled(Box)(({ theme }) => ({
	gap: '10px',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10px',

	'& h5': {
		fontWeight: '600',
	},
}))

export { Posicion }