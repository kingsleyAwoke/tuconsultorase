import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection";
import Detectar from '../../assets/image/popularArticules/detectar.jpg'

const blogSeoData: BlogData[] = [
	{
		title: 'Redireccionamientos engañosos',
		description: [
			'Redireccionamientos engañosos: El auto-redireccionamiento es la técnica de enviar automáticamente a un visitante del sitio a otra página distinta de la que  aterrizó inicialmente. La otra <strong>página web</strong> está a menudo en el mismo sitio web, pero puede estar en un sitio diferente. De hecho, la auto-redirección se utiliza cuando un sitio web se ha creado con el único propósito de clasificar en los motores de búsqueda. Cuando los visitantes llegan a una página, a partir de una lista de los resultados de los motores de búsqueda, es redirigido automáticamente a la página principal.',
			'<br>Esto es común cuando una página dentro del sitio ha sido creada específicamente para clasificar en los primeros lugares en los motores de búsqueda, pero ha sido tan altamente optimizada que la gente no la ve en realidad. La auto-reorientación lleva a los visitantes a la página "adecuada" en el sitio.',
			'<br>Esto no es bien visto por los motores de búsqueda, que a veces sancionan una <strong>página web</strong> o un sitio por hacerlo. Los motores de búsqueda no son capaces de detectar automáticamente la mayoría de los métodos de auto-redireccionamiento.',
			'<br><strong>Esta práctica es engañosa porque intenta mostrar contenido diferente a los usuarios y al robot de Google.</strong>',
			'<h2>Métodos Auto-redireccionamiento</h2>',
			'<strong>El método "Refresh Meta Tag" </strong>',
			'<br>Este es el método de auto-redireccionamiento que los motores pueden detectar automáticamente, o al menos eso se cree. También es el método que los motores aceptan como un plazo de tiempo razonable entre la  página de aterrizaje y su redireccionamiento. Se recomiendan al menos 5 segundos.',
			'<br>El código debe estar en la sección head de la página, y se parece a esto: ',
			'<br>&lt;head &gt; &lt;meta http-equiv="refresh" content="5;url=pagename.html"&gt;&lt;/ head &gt;',
			'<br>El parámetro "content" consta de dos partes, separadas por un punto y coma. La primera parte es el retardo, en segundos, antes de que ocurra la redirección. La segunda parte es la URL a cual se redirigirá, como cualquier hipervínculo, puede ser una dirección URL relativa o una URL absoluta.',
			'<strong>El método redirecciones &nbsp;</strong>',
			'<strong>automáticos</strong>',
			'<strong>&nbsp;javascript &nbsp;</strong>',
			'<br>Las redirecciones &nbsp;<strong>&nbsp;</strong>automáticos &nbsp;Javascript &nbsp;no pueden ser detectados automáticamente por los motores de búsqueda, ya que aún no analizan Javascript. El script se puede colocar en cualquier lugar de la página, pero lo mejor es colocarlo en la sección head para que se ejecute tan pronto como la página empieza a cargarse. Este es un ejemplo típico:',
			'&lt;head&gt;',
			'&lt;script language="JavaScript"&gt;',
			'function replaceLocation()&#123; &nbsp;&nbsp;location.replace("nuevapagina.html");&nbsp;&nbsp;&#125;',
			'&lt;/script &gt;',
			'&lt;/head&gt;&nbsp;',
			'<br>"nuevapagina.html" puede ser cualquier URL relativa o absoluta, al igual que un hipervínculo URL.',
			'<br>El uso de la función "reemplazar" de Javascript elimina la dirección URL del documento actual en el historial del documento, lo que significa que no es posible usar el botón "atrás" para navegar de vuelta al documento original.',
			'<br>Esta práctica constituye a todas luces un engaño al usuario.',
			'<br>Muchos usan este redireccionamiento en la sección action de la declaración de un formulario: ',
			'<br>&lt;form name="myform" action="nuevapagina.html" method="get"&gt;&lt;/form &gt;',
			'<br>En la documentación de ayuda de Google dice esto acerca de redirecciones engañosas:',
			'<br>"JavaScript: coloca el mismo contenido JavaScript en una etiqueta &lt;noscript &gt;. Si utilizas este método, asegúrate de que el contenido sea exactamente igual al de JavaScript y que se muestre a los usuarios que no tengan JavaScript habilitado en el navegador."',
			'<h3>Motivaciones para redirecciones</h3>',
			'Existen redireccionamiento lícitos y engañosos, en todo caso piense acerca de la motivación para hacerlo. Pregúntese porque necesita ese redireccionamiento. ¿mejora la experiencia del usuario? ¿el usuario se sentirá satisfecho con la página donde le está redirigiendo?',
			'<br><strong>Lo importante sobre redirecciones:</strong>',
			'<br>Siempre envie a los usuarios y motores de búsqueda al mismo lugar.',
			'<br>Si utiliza redireccionamientos engañosos tendrá que enfrentar las penalizaciones de Google.',
			'<br>La redirección es "engañosa" si envia al usuario a un sitio diferente del que esperaba.',
			'<br><strong>¿Como podemos detectar redireccionamientos engañosos?</strong>',
			`<img src=${Detectar} height='142' width='356px' title="Observar la url del enlace es una técnica para saber el destino real del link" alt=" detectar redireccionamientos engañosos">`,
			'<br>Tambien es muy útil la extensión de Chrome link-revealer que mostrará la URL del enlace al que vas a hacer clic.'
		]
	}
]

const Recursos = () => {
	useEffect(() => {
		document.title = 'Redireccionamientos engañosos - Consultoria SEO';
	  }, []);
	return (
		<Layouts>
			<SeoWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{blogSeoData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}

							<ContactAuthorSection />
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</SeoWrapper>
		</Layouts>
	)
}

const SeoWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Recursos }	