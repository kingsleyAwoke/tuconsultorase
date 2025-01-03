import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Enlaces pagados y publicidad',
		description: [
			'La compra y venta de enlaces que pasan pagrank es una violación de las directrices de Google. Esto se debe a que al pasar pagerank estan tratando de tener un impacto en los motores de búsqueda, se está manipulando los resultados de los motores de búsqueda.  Asi puede observar el siguiente video donde Matt Cutts responde porque los enlaces de pago violan las directrices de Google.',
			'<br><iframe width="560" height="315" src="https://web.archive.org/web/20160314235511if_/https://www.youtube.com/embed/12PP7bHnQ9o" frameborder="0" allowfullscreen></iframe>',
			'<br>Lo que está en contra de las directrices de Google es mostrar anuncios que manipulen o afecten la clasificación  del comprador del anuncio ya que viola sus directrices. Lo importante es conocer que anuncios con enlaces de pago afectan la clasificación, lo cual es malo y cuales no afectan la clasificación, esto es bueno.',
			'<br>Si su <strong>pagina web</strong>ya tiene enlaces de pago que pasan pagerank, elimínelos lo más pronto posible, no espere una penalización, no importa si ha venido adquiriendolos en los últimos 2 o 5 años, porque esperar una reconsideranción posiblemente puede llevar mucho tiempo.',
			'<br>Cualquier anuncio que pasa pagerank está en contra de las directrices de Google.',
			'<h2>¿Cómo puedo saber si mis anuncios y enlaces pagados no están afectando a las clasificaciones?</h2>',
			'Cualquier vínculo con el atributo rel  = "nofollow" no se utilizará para calcular el PageRank o para determinar la relevancia de sus páginas para una consulta del usuario.',
			'<h3> <strong>Si usted está vendiendo enlaces con fines publicitarios, usted debe manejar esto de la siguiente forma:</strong></h3>',
			'<ul><li>Agregando rel = "nofollow" a la etiqueta &lt;a href &gt;</li><li>Redirigir los enlaces a una página intermedia que está bloqueada a los motores de búsqueda en un archivo robots.txt.</li></ul>',
			'<br>Es su responsabilidad como propietario de un sitio o <strong>pagina web</strong>, dejar claro a los anunciantes que la publicidad que se publique en su sitio no afectará sus clasificaciones.',
			'<br><h4>Lo que debe saber si está publicando anuncios o piensa hacerlo:</h4>',
			'<br>Si está anunciando con Google Adsense:',
			'<br>Los anuncios de Google Adsense no afectan ranking. Si la única publicidad en sus <strong>páginas web</strong> es Adsense no es necesario hacer ningún cambio en su código para asegurarse de que está siguiendo esta directriz.',
			'<br>Si está anunciando con doubleclick:',
			'<br>Los anuncios de DoubleClick no afectan ranking. Si la única publicidad en sus páginas web es DoubleClick no es necesario realizar ningún cambio en su código para asegurarse de que usted está siguiendo esta directriz.',
			'<br>Si está anunciando en la red Bing/Yahoo:',
			'<br>Los anuncios de Bing no afectan ranking. Si la única publicidad en sus <strong>páginas web</strong>es de la red de Bing/Yahoo no es necesario realizar ningún cambio en su código para asegurarse de que usted está siguiendo esta directriz.',
			'<br>Es su responsabilidad averiguar si la publicidad por usted elegida afectará o no el ranking y si debe o no realizar cambios en el código para asegurarse que no está infringiendo las directrices de Google.',
			'<strong>Si usted está vendiendo enlaces de pago o está mostrando anuncios de empresas o sitios web particulares es probable que necesite tomar medidas.</strong>',
			'Ud puede colocar un enlace al sitio web sin afectar la clasificación, es decir; el enlace no debe pasar pagerank, de este modo usted estará respetando ésta directiva.',
			'<strong>Para enlaces de afiliados en su sitio web, usted probablemente tendrá que tomar medidas.</strong>',
			'Los anuncios de afiliados son anuncios, y no deben afectar la clasificación. Esto significa que estos vínculos deben ser nofollow o redirigidos y bloqueadas por robots.txt, si no lo son, entonces no están respetando esta pauta de Google.',
			'Si usted está <strong>comprando o vendiendo notas de prensa</strong>que contienen enlaces a sus <strong>páginas web</strong>, entonces usted probablemente tendrá que tomar medidas',
			'Si va a pagar o recibir dinero para colocar enlaces en otro sitio web, usted está anunciando. Esto significa que estos vínculos deben ser nofollow o redirigidos y bloqueadas por robots.txt, si no lo son, entonces no están siguiendo esta directriz de Google y su <strong>seo</strong> no estará bien construido.',
			'Como debe usted  manejar los enlaces pagados.',
			'<strong>¿Como respetar la directriz mediante el atributo rel="nofollow"?</strong>',
			'El enlace al anuncio:',
			'&lt;a href="http://www.anuncio.com"&gt;anuncio &lt;/ a &gt;',
			'Para  agregar el atributo nofollow, coloque el siguiente código en el vínculo',
			'Para  agregar el atributo nofollow, coloque el siguiente código en el vínculo  rel = "nofollow"  El atributo nofollow en el enlace tendrá el siguiente aspecto ...  &lt;a href="http://www.anuncio.com" rel="nofollow"&gt;anuncio &lt;/a &gt;<strong>¿Como respetar la directriz mediante Redireccionar y robot.txt?</strong> El enlace anunciante es redirigido a una página en su sitio web que está bloqueada por el archivo robots.txt. Este método permite a los visitantes ir a través del enlace, pero no pasa pagerank, por lo que no afecta a las clasificaciones web.  Utilice los métodos descritos anteriormente para garantizar que sus anuncios no afectarán las clasificaciones, obviamente el primer método es mucho más sencillo y con él estamos indicando que el enlace es de pago pero no se está transfiriendo pagerank por lo que se respeta la directriz.Puede comprobar la información en este vínculo de Google Adicionalmente, Ud puede indicarle a Google mediante un formulario sobre enlaces de pago.El hecho de que Google necesite que se le indique quien está comprando y vendiendo enlaces es una señal de que los algoritmos de Google no estan optimizados para detectar este tipo de enlaces.  Si te ha gustado el artículo ¡Compartelo!'
		]
	}
]

const EnlacesPagadon = () => {
	useEffect(() => {
		document.title = 'Enlaces pagados y publicidad - Consultoria SEO';
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

export { EnlacesPagadon }	