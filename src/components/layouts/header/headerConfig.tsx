const headerConfig: HeaderConfig[] = [
	{
		label: 'Inicio',
		href: '/inicio',
		isChildren: false,
	},
	{
		label: 'Blog',
		isChildren: true,
		children: [
			{
				label: 'SEO',
				href: '/seo',
				isChildren: false,
			},
			{
				label: 'Joomla',
				href: '/joomla',
				isChildren: false,
			},
			{
				label: 'e-commerce',
				href: '/ecommerce',
				isChildren: false,
			},
			{
				label: 'seguridad',
				href: '/seguridad',
				isChildren: false,
			},
			{
				label: 'diseño',
				href: '/diseno',
				isChildren: false,
			}
		]
	},
	{
		label: 'Utilidades seo',
		isChildren: true,
		children: [
			{
				label: 'seo imagen',
				href: '/seo-imagen',
				isChildren: false,
			},
			{
				label: 'herramienta if-Modified',
				href: '/herramienta-if-modified',
				isChildren: false,
			},
			{
				label: 'comprobar redirecciones',
				href: '/comprobar-redirecciones',
				isChildren: false,
			},
			{
				label: 'Analisis de páginas',
				href: '/analisis-paginas',
				isChildren: false,
			}
		]
	},
	{
		label: 'Mapa del sitio',
		href: '/mapa-sitio',
		isChildren: false,
	},
	{
		label: 'Plantillas Joomla gratis y de pago',
		isChildren: true,
		children: [
			{
				label: 'Plantillas Joomla gratis',
				href: '/plantillas-joomla-gratis',
				isChildren: false,
			},
			{
				label: 'Demo Plantilla Atomical',
				href: '/demo-plantilla-atomical',
				isChildren: false,
			}
		]
	},
	{
		label: 'Modulos',
		isChildren: true,
		children: [
			{
				label: 'Jumbotron',
				href: '/jumbotron',
				isChildren: false,
			},
			{
				label: 'Demo modulo jumbotron',
				href: '/demo-modulo-jumbotron',
				isChildren: false,
			},
			{
				label: 'Bloques',
				href: '/bloques',
				isChildren: false,
			},
			{
				label: 'Demo Modulo Bloques',
				href: '/demo-modulo-bloques',
				isChildren: false,
			}
		]
	},
	{
		label: 'Portafolio',
		href: '/portafolio',
		isChildren: false,
	},
	{
		label: 'Servicios',
		isChildren: true,
		children: [
			{
				label: 'Diseño de Páginas Web',
				href: '/diseño-paginas-web',
				isChildren: false,
			},
			{
				label: 'Acelerar Joomla!',
				href: '/acelerar-joomla',
				isChildren: false,
			},
			{
				label: 'Alta en buscadores',
				href: '/alta-buscadores',
				isChildren: false,
			},
			{
				label: 'Alta en Directorio',
				href: '/alta-directorio',
				isChildren: false,
			},
			{
				label: 'Auditoria de Seguridad Joomla!',
				href: '/auditoria-seguridad-joomla',
				isChildren: false,
			},
			{
				label: 'Cursos Joomla!',
				href: '/cursos-joomla',
				isChildren: false,
			},
			{
				label: 'Eliminación de Malware',
				href: '/eliminacion-malware',
				isChildren: false,
			},
			{
				label: 'Hosting Joomla',
				href: '/hosting-joomla',
				isChildren: false,
			},
			{
				label: 'Mejoras de Software',
				href: '/mejoras-software',
				isChildren: false,
			},
			{
				label: 'Tiendas online',
				href: '/tiendas-online',
				isChildren: false,
			},
			{
				label: 'Optimización para motores de búsqueda',
				href: '/optimizacion-motores-busqueda',
				isChildren: false,
			},
			{
				label: 'Publicidad Pago por Clic',
				href: '/publicidad-pago-por-clic',
				isChildren: false,
			},
			{
				label: 'Soporte Joomla',
				href: '/soporte-joomla',
				isChildren: false,
			},
			{
				label: 'Programadores PHP',
				href: '/programadores-php',
				isChildren: false,
			},
			{
				label: 'Redacción de Contenido',
				href: '/redaccion-contenido',
				isChildren: false,
			},
			{
				label: 'Consultoria SEO',
				href: '/consultoria-seo',
				isChildren: false,
			},
			{
				label: 'Limpieza sitio hackeado',
				href: '/limpieza-sitio-hackeado',
				isChildren: false,
			}
		]
	},
	{
		label: 'Contactenos',
		href: '/contactenos',
		isChildren: false,
	},
]

export { headerConfig };