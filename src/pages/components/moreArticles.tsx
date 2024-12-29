import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { CustomActiveLink } from "../../components/Link/customLink";


interface ArticleItem {
	title: string;
	href: string;
}

const articleItems: ArticleItem[] = [
	{ title: 'Importancia del archivo robots.txt para la seguridad y el seo', href: '#' },
	{ title: 'Optimización interna de una pagina web', href: '#' },
	{ title: 'Dónde se inserta el código de Google Analytics en Joomla! 2.5', href: '#' },
	{ title: 'htaccess en joomla!', href: '#' },
	{ title: 'Las directrices para webmaster de Google', href: '#' },
	{ title: 'Como construir un cotizador, calculadora o formula en joomla', href: '#' },
	{ title: 'Como encontrar HTTP Error 500 en joomla!', href: '#' },
	{ title: 'Inline small CSS', href: '#' },
	{ title: 'Causas de disminucion de visitas o trafico web', href: '#' },
	{ title: 'Que aspectos considerar en e-commerce para garantizar su exito', href: '#' },
	{ title: 'Como quitar la advertencia de malware por parte de Google', href: '#' },
	{ title: 'Como crear un archivo sitemap.xml en Joomla!', href: '#' },
	{ title: 'Enlaces negativos: Como afectan su sitio y su marca', href: '#' },
]

const MoreArticles = () => {
	return (
		<MoreArticlesWrapper>
			<Typography variant="h2">
				Más artículos...
			</Typography>

			<Box paddingLeft={3}>
				{articleItems.map((item, index) => (
					<Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
						<Typography variant="h5">{index + 1}.</Typography>

						<CustomActiveLink to={item.href}>
							<Typography variant="h5" component="p">{item.title}</Typography>
						</CustomActiveLink>
					</Box>
				))}
			</Box>
		</MoreArticlesWrapper>
	)
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
}))

export { MoreArticles }