import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../../components/button/customButton";
import { CustomActiveLink } from "../../components/Link/customLink";

interface PosicionItem {
	title: string;
	href: string;
}

const posicionItems: PosicionItem[] = [
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

const Posicion = () => {
	return (
		<PosicionWrapper>
			<Box display="flex" flexDirection="row" justifyContent="center">
				<PrimaryButton>
					<Typography variant="body1">Los más Populares</Typography>
				</PrimaryButton>
			</Box>

			<Box component="ul" sx={{ listStyle: 'disc', pl: 3, m: 0 }}>
				{posicionItems.map((item, index) => (
					<li key={index}>
						<CustomActiveLink to={item.href}>
							<Typography variant="h5" component="p">
								{item.title}
							</Typography>
						</CustomActiveLink>
					</li>
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