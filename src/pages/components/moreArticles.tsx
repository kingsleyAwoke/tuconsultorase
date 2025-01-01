import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomActiveLink } from "../../components/Link/customLink";
import { popularArticleItems } from "./popularArticles";

const MoreArticles = () => {
	const limitedArticles = popularArticleItems.slice(0, 12);

	return (
		<MoreArticlesWrapper>
			<Typography variant="h2">
				Más artículos...
			</Typography>

			<Box paddingLeft={3}>
				{limitedArticles.map((item, index) => (
					<Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
						<Typography variant="h5">{index + 1}.</Typography>

						<CustomActiveLink to={item.url}>
							<Typography variant="h5" component="p">{item.title}</Typography>
						</CustomActiveLink>
					</Box>
				))}
			</Box>
		</MoreArticlesWrapper>
	);
}

const MoreArticlesWrapper = styled(Box)(({ theme }) => ({
	gap: '10px',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10px',

	'h2': {
		fontWeight: 500,
		color: theme.palette.common.black,
	}
}));

export { MoreArticles };