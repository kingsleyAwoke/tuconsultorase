import { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const utilidadesComprobarData: BlogData[] = [
	{
		title: 'Herramienta comprobar redirección',
		description: [
			'Cuando solicitamos una URL desde el navegador el servidor al que hemos dirigido la solicitud responde con un grupo de cabeceras HTTP que nosotros no visualizamos y luego, si todo esta correcto, lanza el contenido solicitado que es el que finalmente podemos ver en forma de pagina Web en nuestro navegador.',
			'<ul><li><strong>200</strong> - Una página válida se ha encontrado en la URL especificada </li><li><strong>404</strong> - No se encontró la página de la URL especificada</li><li><strong>301</strong> - La dirección URL especificada redirige permanentemente a otra página</li><li><strong>302</strong> - La dirección URL especificada redirige temporalmente a otra página</li><li><strong>otra</strong> - Sería inusual recibir una respuesta distinta de las mencionadas anteriormente.</li></ul>',
			'<br>Las personas utilizan esta herramienta para comprobar si su sitio web tiene contenido duplicado. Una de las causas de contenido duplicado es tener la misma página disponible en más de una URL.',
			'<br>El propósito de esta herramienta es ver rápidamente las respuestas generadas a partir de una gama de direcciones URL. Generalmente, sólo una de ellas debe devolver una respuesta 200, por lo general www.sitio.com o sitio.com.',
			'<br>Si alguno de los index.htm, index.php, index.asp está devolviendo una respuesta 200, usted tiene un problema de contenido duplicado. Todas las páginas deben devolver un 404 o 301 como respuesta. Si alguna devuelve una respuesta 302 &nbsp;probablemente sería mejor cambiarla &nbsp;a una redirección 301.',
		]
	}
]

const Comprobar = () => {
	const [text, setText] = useState('http://tuconsultoraseo.com');

	useEffect(() => {
        document.title = 'Comprobar-redireccion - Consultoria SEO';
    }, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert(`Comprobar URL: ${text}`);
	};
	return (
		<Layouts>
			<ComprobarWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{utilidadesComprobarData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}

<form  
                                onSubmit={handleSubmit} 
                                style={{
                                    padding: '5px',
                                    margin: '5px'
                                }}
                            >
                                <input 
                                    type="search"
                                    maxLength={255} 
                                    name="URL" 
                                    value={text} 
                                    onChange={(e) => setText(e.target.value)} 
                                    id='search-box' 
                                    style={{
                                        padding: '1px 3px 3px 3px',
                                        display: 'inline',
										width: '100%',
										marginBottom: '10px'
                                    }}
                                />
                                <input 
                                    type="submit" 
                                    id='search-btn' 
                                    name="comprobar" 
                                    value="¿apoya If-Modified?" 
                                    style={{
                                        border: 'solid 1px #806666',
                                        padding: '3px 10px',
                                        margin: '0 10px 0 0',
                                        display: 'block'
                                    }}
                                />
                            </form>

							<ContactAuthorSection />

						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</ComprobarWrapper>
		</Layouts>
	)
}

const ComprobarWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Comprobar }	