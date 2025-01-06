import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Hero } from "./components/hero";
import { Extra } from "./components/extra";
import { Layouts } from "../components/layouts/layouts";
import { Posicion } from "./components/posicion";
import { BlogHeader, BlogItemContainer, BlogItemWrapper } from "../components/blog/blog";
import { CustomActiveLink } from "../components/Link/customLink";
import { blogImage1, blogImage2, blogImage3, blogImage4, blogImage5, blogImage6, blogImage7, blogImage8 } from "../assets/image/image";
import { ImageSectionWrapper } from "../components/section/section";
import { PrimaryButton } from "../components/button/customButton";
import { Link } from "react-router-dom";

interface LinkData {
	link: string
	label: string
}

interface BlogData {
	title: string
	image: string
	description: string[]
	phoneNumber: string
	email: string
	Links: LinkData[]
}

const blogData: BlogData[] = [
	{
		title: 'Desarrollo de Plantillas',
		image: blogImage1,
		description: ['En el diseño de paginas web joomla la salida visual es controlada por las plantillas. Existen 2 formas de desarrollar las plantillas: Personalizada y una plantilla adaptada a sus requerimientos. Nuestra meta es alcanzar sus objetivos de negocio, el <span>diseño de página páginas web</span> es inútil si no cumple con sus objetivos.'],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Acelerar Joomla',
		image: blogImage2,
		description: ['¿Necesita ayuda para acelerar su sitio web? En Tu Consultora Seo tenemos una gran cantidad de experiencia que muestra cómo acelerar sitios web lentos, de hecho es uno de los servicios más solicitados que prestamos. Conozca como mejorar el rendimiento de su sitio, esto mejorará su posición en los buscadores como Google, Yahoo,etc. Leer mas <a href="https://www.joomla.org/" style="color: #2a6496; text-decoration: none">Joomla</a>'],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Seguridad Joomla',
		image: blogImage3,
		description: [
			'La seguridad puede ser complicada. Desde el momento en que su sitio está en línea, los hackers comienzan a sondearlo en busca de vulnerabilidades de seguridad.  Hay sitios web hackeados todos los días - sitios como el suyo.',
			'Es un aspecto que los propietarios de sitios pasan por alto con frecuencia y debe ser un prioritario en cualquier organización.'
		],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Contáctenos',
		image: blogImage4,
		description: [
			'<span>Tu Consultora SEO</span>',
			'Carrera 15, entre 43 y 44',
			'Barquisimeto, Venezuela',
			'<span>Estela Silva</span>',

		],
		phoneNumber: '+58-414-357-61-81',
		email: 'info@tuconsultoraseo.com',
		Links: [
			{
				link: '#',
				label: 'Escribenos'
			},
			{
				link: '#',
				label: 'Visítenos en Google+'
			},
			{
				link: '#',
				label: 'Agregar a favoritos'
			},
		],
	},
	{
		title: 'Consultoria SEO',
		image: blogImage5,
		description: ['Somos especialistas o <span> consultores SEO</span>, el posicionamiento en buscadores es el proceso de mejorar el volumen o la calidad del tráfico a un sitio web en los motores de búsqueda a través de posicionamiento "natural", no de pago. Sólo la parte superior de los primeros 10 resultados de búsqueda tienen la oportunidad de convertir un visitante en un nuevo cliente valioso. '],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Tiendas online',
		image: blogImage6,
		description: ['Una tienda en línea puede ser un medio increíblemente eficaz para la venta de productos y servicios a clientes de todo el mundo que de otro modo nunca conocerían su empresa. En términos más básicos una tienda online o carrito de compras es un software que le permite mostrar los productos de su sitio web y recoge automáticamente el dinero cuando el cliente compra sus productos.'],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Formación Joomla',
		image: blogImage7,
		description: ['Tenemos 3 modalidades de cursos de este excelente gestor de contenidos. La formación abarca temas desde porqué se recomienda este gestor de contenidos, como instalarlo y otras preguntas esenciales. Todos nuestros cursos de formación de CMS son 100% personalizables. Nuestros cursos también están disponibles en <a href="https://www.udemy.com/course/joomla-for-beginners-build-a-website-with-joomla-cms/" alt="Joomla for beginners" style="color: #2a6496; text-decoration: none">Udemy</a> de forma gratuita.'],
		phoneNumber: '',
		email: '',
		Links: [],
	},
	{
		title: 'Limpieza sitio hackeado',
		image: blogImage8,
		description: ['El equipo de expertos en seguridad de tu consultora SEO limpia su sitio hackeado. Usted puede confiar en nosotros para ayudarle con incidentes de hacking de su sitio, discretamente. Disponemos de dos métodos: revisión de los archivos por nuestro personal de forma exhaustiva y reposición de  los archivos de forma nueva y limpia. '],
		phoneNumber: '',
		email: '',
		Links: [],
	},
]

const Inicio = () => {
	return (
		<Layouts>
			<Hero />

			<InicioWrapper>
				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<BlogFeatured />
					</Grid>

					<Grid item xs={12} md={3}>
						<Posicion />
					</Grid>
				</Grid>

				<TopBlog />
			</InicioWrapper>
		</Layouts>
	)
}

const BlogFeatured = () => {
	return (
		<BlogItemWrapper>
			<BlogHeader>
				<Typography variant="h2">
					Diseño de Paginas web y seo. Acelerar sitio Joomla
				</Typography>
			</BlogHeader>

			<BlogItemContainer>
				<Typography variant="h4">
					Al tener un sitio web con nuestros  <span>especialistas Joomla</span> usted añadirá una segunda puerta principal de acceso a su empresa. Nuestra imagen en internet puede cerrar o abrir puertas a futuros clientes. La comunicación con sus clientes es fundamental, el sitio web pierde interés si no está actualizado.-
				</Typography>

				<Typography variant="h2">
					Servicios
				</Typography>

				<Typography variant="h4">
					Construimos y <span>diseñamos</span> su sitio web en Joomla. <span>Aceleraramos sitio Joomla</span>. Asesoramiento sobre el nombre de dominio más adecuado para su negocio. Realizamos un estudio para ofrecer a nuestros clientes la solución más adecuada a sus necesidades. Damos de alta su sitio web en los principales buscadores. Podemos llevar tu campaña <span>SEO</span> o SEM, <span>posicionando tu sitio web en Google</span>. Ofrecemos un hosting (alojamiento) profesional a un precio sin competencia. Desarrollamos su tienda online. <span>Seo</span> (<span>posicionamiento en buscadore</span>s).
				</Typography>

				<Typography variant="h2">
					Joomla Diseño de Paginas Web
				</Typography>

				<Typography variant="h4">
					Especialistas Joomla en <span>diseño de paginas web</span>, desarrollo de sitios web específicos a medida, para las necesidades de nuestros clientes. Nuestros <span>especialistas Joomla</span> en diseño web, se encargarán de abrir un segundo canal de marketing a su negocio, vea nuestro portafolio de <span>diseño web</span>. Totalmente compatible con todos los estándares de <span>diseño web</span>, nuestros sitios web diseñados a medida funcionan exactamente como sea necesario debido a nuestros estándares de desarrollo y plataforma extensible de Joomla. Para ofrecer servicios SEO de calidad utilizamos el <LinkColor to="https://seosmmpanel.com/">
					SEOSMMPanel
				</LinkColor> y <LinkColor to="https://seosmmpanel.com">
					SemRush
				</LinkColor> dos de las mejores herramientas SEO.
				</Typography>

				<CustomActiveLink to="/obi">
					<Typography variant="h5">
						Leer más: Diseño de paginas web y seo. Acelerar sitio Joomla
					</Typography>
				</CustomActiveLink>
			</BlogItemContainer>
		</BlogItemWrapper>
	)
}

const TopBlog = () => {
	return (
		<BlogWrapper>
			<Grid container spacing={3}>
				{blogData.map((blog, index) => (
					<Grid item xs={12} md={6} lg={4} xl={3} key={index}>
						<TopBlogItemWrapper>
							<Box display='flex' flexDirection='row' justifyContent='center'>
								<PrimaryButton>
									<Typography variant="h4">{blog.title}</Typography>
								</PrimaryButton>
							</Box>

							<BlogImageWrapper>
								<img src={blog.image} alt={`Blog ${index + 1}`} />
							</BlogImageWrapper>

							<Box display='flex' flexDirection='column' gap={1}>
								<Box display="flex" flexDirection="column">
									{blog.description.map((desc, i) => (
										<Typography key={i} variant="h5" dangerouslySetInnerHTML={{ __html: desc }} />
									))}
								</Box>

								{blog.phoneNumber && (
									<Typography variant="body2">
										Tel: {blog.phoneNumber}
									</Typography>
								)}

								{blog.email && (
									<Typography variant="body2">
										Email: {blog.email}
									</Typography>
								)}

								{blog.Links && blog.Links.length > 0 && (
									<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
										{blog.Links.map((link, i) => (
											<CustomActiveLink key={i} to={link.link}>
												<Typography variant="body2">
													{link.label}
												</Typography>
											</CustomActiveLink>
										))}
									</Box>
								)}
							</Box>

							{(blog.Links && blog.Links.length === 0) && (
								<Box sx={{ display: 'flex', flexDirection: 'row' }}>
									<Link to='#'>
										<PrimaryButton>
											<Typography variant="h5">Leer mas</Typography>
										</PrimaryButton>
									</Link>
								</Box>
							)}
						</TopBlogItemWrapper>
					</Grid>
				))}
			</Grid>
		</BlogWrapper>
	)
}

const InicioWrapper = styled(Box)(({ theme }) => ({
	gap: '50px',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.down('md')]: {
		gap: '30px',
	}
}))


const BlogWrapper = styled(Box)(({ theme }) => ({
	padding: '0px 15px',

	[theme.breakpoints.down('md')]: {
		padding: '5px',
	}
}))

const TopBlogItemWrapper = styled(Box)(({ theme }) => ({
	gap: '15px',
	display: 'flex',
	flexDirection: 'column',

	h4: {
		fontWeight: 600,
		padding: '3px 5px',
	},

	h5: {
		span: {
			fontWeight: 600,
		}
	},

	[theme.breakpoints.down('md')]: {
		gap: '10px',
	}
}))

const BlogImageWrapper = styled(ImageSectionWrapper)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		width: 'auto',
		height: '129px',
		objectFit: 'cover',
	}
}));

const LinkColor = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.common.activeLinkColor,

	'h1, h2, h3, h4, h5, h6, p, span': {
		color: theme.palette.common.activeLinkColor,
	},

	'&:hover': {
		textDecoration: 'underline',
	}
}))

export { Inicio };