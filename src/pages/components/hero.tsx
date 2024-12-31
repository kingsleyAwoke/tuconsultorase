import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { heroBg } from "../../assets/image/image";
import { CustomTextField } from "../../components/TextField/CustomTextField";
import { SubmitButton } from "../../components/button/customButton";
import { CustomActiveLink } from "../../components/Link/customLink";
import { CustomBreadcrumbs } from "./breadcrumbs";

const Hero = () => {
	return (
		<HeroWrapper>
			<HeroContainer>
				<Typography variant="h1">
					Diseño Paginas Web SEO Acelerar Plantillas Joomla - Consultoria SEO
				</Typography>

				<Typography variant="h3">
					Somos expertos en diseño de sitios web, seo, desarrollo de plantillas joomla, acelerar sitios joomla, seguridad web y formación joomla!.
				</Typography>
			</HeroContainer>

			<HeroHomeContainer>
				<Typography variant="h5">Buscar</Typography>

				<SearchFormContainer>
					<CustomTextField variant="outlined" />
					<SubmitButton>
						<Typography variant="h5">Ir</Typography>
					</SubmitButton>
				</SearchFormContainer>

				<CustomActiveLink to='/inicio'>
					<Typography variant="h5">Búsqueda avanzada</Typography>
				</CustomActiveLink>

				<CustomBreadcrumbs />
			</HeroHomeContainer>
		</HeroWrapper>
	)
}

const HeroWrapper = styled(Box)(({ theme }) => ({
	gap: '30px',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.down('md')]: {
		gap: '20px',
	}
}))

const HeroContainer = styled(Box)(({ theme }) => ({
	gap: '20px',
	display: 'flex',
	flexDirection: 'column',

	padding: '30px 40px 50px 40px',
	backgroundImage: `url(${heroBg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',

	[theme.breakpoints.down('md')]: {
		gap: '10px',
		padding: '20px 20px 25px 20px',
	}
}))

const HeroHomeContainer = styled(Box)(({ theme }) => ({
	'h5': {
		fontWeight: 600,
	},

	'a': {
		'h5': {
			color: theme.palette.common.activeLinkColor,
		}
	}
}))

const SearchFormContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',

	paddingLeft: '45px',
}))

export { Hero };
