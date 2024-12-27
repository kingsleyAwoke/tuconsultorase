import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

import { CustomTextField } from "../../components/TextField/CustomTextField"
import { PrimaryButton, SubmitButton } from "../../components/button/customButton"
import { tutorialSeo } from "../../assets/image"
import { ImageSectionWrapper } from "../../components/section/section"

const Extra = () => {
	return (
		<ExtraWrapper>
			<SubScriptionForm>
				<Typography variant="h3">suscripción por email</Typography>
				<Typography variant="h5">Ingrese su email</Typography>
				<CustomTextField />

				<SubmitButton>
					<Typography variant="h5">suscribirse</Typography>
				</SubmitButton>
			</SubScriptionForm>

			<Box display="flex" flexDirection="column" gap={1}>
				<Typography variant="h2">
					Tutorial SEO optimizacion para motores de busqueda
				</Typography>

				<TutorialSeoWrapper>
					<img src={tutorialSeo} alt="tutorial seo" />
				</TutorialSeoWrapper>
			</Box>

			<Box display="flex" flexDirection="column" gap={1}>
				<Typography variant="h5" component="p">
					Tutorial SEO paso a paso con herramientas SEO gratuitas. Con metodología "sombrero blanco" que se    apega a las directrices de los motores de búsqueda, altamente ético.
				</Typography>

				<PrimaryButton sx={{ padding: '8px' }}>
					<Typography variant="h5">
						Leer mas sobre el tutorial SEO
					</Typography>
				</PrimaryButton>
			</Box>
		</ExtraWrapper>
	)
}

const ExtraWrapper = styled(Box)(({ theme }) => ({
	gap: '20px',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10px',

	'& h2': {
		textAlign: 'center',
		color: theme.palette.common.thirdTypographyColor,
	},

	'& p': {
		color: theme.palette.common.fourthTypographyColor,
	},

	[theme.breakpoints.down('md')]: {
		gap: '15px',
	},
}))

const SubScriptionForm = styled(ImageSectionWrapper)(({ theme }) => ({
	gap: '8px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',

	'& h3': {
		fontSize: '18px',
		fontWeight: 600,
		color: theme.palette.common.secondTypographyColor,
	}
}))

const TutorialSeoWrapper = styled(ImageSectionWrapper)(({ theme }) => ({
	img: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}
}))

export { Extra }