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
		title: 'Importancia de usar un nombre de usuario y contrase &ntilde;a fuerte',
		description: [
			'En Joomla utilizamos nombres de usuario y contrase &ntilde;as. En general usamos nombres de usuario y contrase &ntilde;as en multitud de circunstancias en la vida diaria. Es crucial crear un <strong>nombre de usuario fuerte</strong> contrase &ntilde;a segura para proteger su sitio web Joomla al crear una cuenta de usuario en su sitio. Cualquier sitio web Joomla que emplea nombres de usuario y contrase &ntilde;as se debe crear con la atenci &oacute;n dedicada a asegurar que las buenas pr &aacute;cticas de <strong>seguridad</strong>son seguidos por todos los usuarios. Si usted, como administrador del sitio o sus usuarios es descuidado acerca de c &oacute;mo se eligen los nombres de usuario y contrase &ntilde;as o credenciales del administraci &oacute;n, m &aacute;s tarde o mas temprano, un &quot;hacker &quot;o un &quot;botnet &quot;pueden descubrir que es relativamente f &aacute;cil romper la <strong>seguridad</strong> de su sitio.',
			'<br>Usted debe desarrollar m &eacute;todos y proporcionar informaci &oacute;n a los potenciales usuarios de su sitio para que la selecci &oacute;n de nombres de usuario y contrase &ntilde;as seguras no resulten f &aacute;cilmente averiguables.',
			'<br>&iquest;Pueden creer que la contrase &ntilde;a m &aacute;s utilizada en el mundo (y en Facebook) es en realidad &quot;password &quot;&quot;123456 &quot;, &quot;12345678 &quot;, &quot;abc123 &quot;y &quot;QWERTY&quot; &iquest;es  hilarante? Uhhhh... &iquest;Cu &aacute;ntos de ustedes sigue utilizando el nombre del superadministrador &#39;admin &#39;o&#39;admin123 &#39;? Ouch... Usted sabe que la mayor &iacute;a de los robots est &aacute;n en busca de un sitio Joomla donde el s &uacute;per administrador comienza con algo de &#39;admin&#39;y cuando encuentra uno comienza el bombardeo de acceso al administrador con cientos de miles de contrase &ntilde;as? El resultado en el 99% de los casos: sitio hackeado, por lo tanto es esencial que se cree un buen nombre de usuario.',
			'<br><strong>C&oacute;mo crear un buen nombre de usuario?</strong>',
			'<br>Use al menos 6 caracteres alfanum &eacute;ricos (esto significa letras del alfabeto con n &uacute;meros) combinados con may &uacute;sculas y s &iacute;mbolos',
			'<ul><li>Use solamente  <strong>(punto). - (gui &oacute;n) _ (gui &oacute;n bajo) </strong> al usar s &iacute;mbolos</li><li>el nombre de usuario puede ser f &aacute;cil de recordar, pero muy dif&iacute;cil de adivinar</li></ul>',
			'<br>D&eacute;jeme darle un ejemplo:Elija nombres de usuario y contrase&ntilde;as que utilizan letras may&uacute;sculas, n&uacute;meros y letras min&uacute;sculas y s&iacute;mbolos. Si mi nombre, por ejemplo, es Leonardo. Obvio que es malo de usar ya que los hackers utilizar el nombre y/o combinaciones de nombre para descubrir el nombre de usuario. Entonces elijo el nombre de Le &oacute;n, que es f&aacute;cil de recordar, pero a &uacute;n as&iacute;es f&aacute;cil de descubrir, ya que es simple y s&oacute;lo 5 caracteres. As &iacute;que lo modificamos y ahora va a ser f&aacute;cil de recordar: &#39;<strong>l3_.0n</strong> &#39;, que es una buena reproducci &oacute;n y f &aacute;cil de recordar nombre de usuario.(E = 3 o = 0, a &ntilde;adir 2 s &iacute;mbolos y hemos terminado!)Ahora lo m &aacute;s importante es la contrase&ntilde;a!',
			'<br>&iquest;Como crear buena contrase &ntilde;a?Regla 1 - La longitud de la contrase&ntilde;a: al <strong>menos 15 caracteres</strong>de longitud. Mientras m&aacute;s caracteres mejor, ya que es m &aacute;s dif&iacute;cil de descifrar. (20 d &iacute;gitos son el m &aacute;ximo en cPanel, por ejemplo, por cierto).',
			'<br><strong>Regla 2 - La complejidad de la contrase&ntilde;a</strong>: Use una combinaci&oacute;n de:',
			'<ul><li>Letras min &uacute;sculas</li><li>Letras may &uacute;sculas</li><li>N&uacute;meros</li><li>S&iacute;mbolos</li></ul>',
			'<br>Un muy buen generador de contrase &ntilde;as le ayudar &aacute;a crear una buena contrase &ntilde;a. Sin embargo, es dif &iacute;cil de recordar, por lo que otra forma de generar una contrase &ntilde;a que usted recuerde f &aacute;cilmente es utilizar una frase familiar y traducir eso en su propio sistema de contrase &ntilde;as f &aacute;cil de recordar, a qu &iacute;est &aacute;el ejemplo de mi frase de texto:&quot; <strong>Estoy divorciado y tengo dos hijas de catorce y veintidos a &ntilde;os</strong>&quot;. Ahora puedo mantener s &oacute;lo el primer d &iacute;gito de cada palabra y tengo una posible contrase &ntilde;a: &quot;<strong>Edytdhdcyva</strong>&quot;. &nbspAhora debemos hacerla fuerte; incluimos n &uacute;meros y s &iacute;mbolos: &quot;Edyt2+hdcyva&quot;.',
			'<br>Ahora es <strong>s &uacute;per fuerte! e incluso ahora podemos pasar alg &uacute;n tiempo practicando una buena combinaci &oacute;n de <strong>segurida</strong> d</strong> en la vida diaria:',
			'<br>El acceso a nuestras cuentas bancarias v &iacute;a internet, inicio de sessi &oacute;n en windows, etc por ejemplo.',
			'<br>Nunca guarde los nombres de usuario y contrase &ntilde;as en papel o en un archivo no cifrado, como el popular cliente FTP llamado Filezilla!Filezilla almacena las contrase &ntilde;as en texto planoUtilice un programa de c &oacute;digo abierto, como keypass para guardar sus nombres de usuario y contrase &ntilde;as encriptadas y tambi &eacute;n crean contrase &ntilde;as irrompibles (a menos que tenga una supercomputadora Cray!).KeePass es un administrador de contrase &ntilde;as de c &oacute;digo abierto, lo que le ayuda a administrar sus contrase &ntilde;as de manera segura. Usted puede poner todas tus contrase &ntilde;as en una base de datos, cerrada con una llave principal o un archivo de clave. Por lo que s &oacute;lo tiene que recordar una &uacute;nica contrase &ntilde;a maestra o seleccionar el archivo llave para abrir toda la base de datos.Las bases de datos son encriptadas usando los mejores y m &aacute;s seguros algoritmos de cifrado actualmente conocidos (AES y Twofish).',
			'<br><em><strong>Consejos</strong></em>:',
			'<ul><li>Nunca revele los nombres de usuario y contrase &ntilde;as a otra persona.&nbsp;</li><li>No utilice contrase &ntilde;as que se han utilizado en el pasado.</li><li>No use la misma contrase &ntilde;a para otros sitios o programas (correo electr &oacute;nico, por ejemplo, el acceso al seguro social, las oficinas de impuestos en l &iacute;nea, cuentas bancarias, etc.)&nbsp;Si se tiene acceso a uno, puedan tener acceso a todos ellos!</li><li>Nunca proporcione credenciales cuando se le solicite a trav &eacute;s de correo electr &oacute;nico.&nbsp;Empresas de confianza como Fedex, PayPal, DHL, bancos nunca le pedir &aacute;n sus credenciales por correo electr &oacute;nico</li><li>Mantener el n &uacute;mero de super administradores &nbsp;que pueden acceder a los archivos del sistema en el backend al m &iacute;nimo y no comparta su contrase &ntilde;a</li><li>Mantener el n &uacute;mero de super administradores &nbsp;que pueden acceder a los archivos del sistema en el backend al m &iacute;nimo y no comparta su contrase &ntilde;a</li><li>Cuando haya dado acceso a (desconocidas) tercera partes con sus propias contrase &ntilde;as creadas espec &iacute;ficas, eliminelos una vez que han terminado su trabajo.</li><li>Escanear virus en su dispositivo USB al insertarlo en tu computador o utilizar un programa como USB an &aacute;lisis de Panda que es &nbsp;libre para descargar: Muy recomendable ya que los robots de phishing se ocultan a menudo en el USB que sus hijos traen a casa de la escuela o de la biblioteca, etc!</li></ul>'
		]
	}
]

const ImportanciaDeusar = () => {
	useEffect(() => {
		document.title = 'Importancia de usar un nombre de usuario y contraseña fuerte - Consultoria SEO';
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

export { ImportanciaDeusar }	