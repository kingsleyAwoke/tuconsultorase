import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Inicio } from './pages/inicio';
import { useGlobalContext } from './provider';
import { Loading } from './components/Loading';

import { Seo } from './pages/blogs/seo';
import { Joomla } from './pages/blogs/jooomla';
import { Ecommerce } from './pages/blogs/ecommerce';
import { Diseno } from './pages/blogs/diseno';
import { Seguridad } from './pages/blogs/seguridad';

import { Analisis } from './pages/utilidades/analisis';
import { Comprobar } from './pages/utilidades/comprobar';
import { Herramienta } from './pages/utilidades/herramienta';
import { SeoImagen } from './pages/utilidades/seoImagen';

import { MapaSitio } from './pages/mapaSitio';

import { PlantillasJoomla } from './pages/plantillas/plantillasJoomla';
import { DemoPlantillas } from './pages/plantillas/demoPlantollas';
import { Jumbotron } from './pages/modulos/jumbotron';

import { DemoModulo } from './pages/modulos/demoModulo';
import { Bloque } from './pages/modulos/bloque';
import { DemoBloque } from './pages/modulos/demoBloque';

import { Portafolio } from './pages/portafolio';

import { Contactenos } from './pages/contactenos';

import { Acelerar } from './pages/servicios/acelerar';
import { AltaEnBuscadores } from './pages/servicios/altaEnBuscadores';
import { AltaEnDirectories } from './pages/servicios/AltaEnDirectories';
import { AuditoriadeSeguridad } from './pages/servicios/auditoriadeSeguridad';
import { CursosJoomla } from './pages/servicios/cursosJoomla';
import { EliminacionDeMalware } from './pages/servicios/eliminacionDeMalware';
import { HostingJoomla } from './pages/servicios/hostingJoomla';
import { MejorasDeSoftware } from './pages/servicios/majorasDeSoftware';
import { TiendasOnline } from './pages/servicios/tiendasOnline';
import { OptimizacionParaMotores } from './pages/servicios/optimizacionParaMotores';
import { PublicidadPago } from './pages/servicios/PublicdadPago';
import { SoporteJoomla } from './pages/servicios/soportJoomla';
import { Programadores } from './pages/servicios/programadores';
import { Redaccionde } from './pages/servicios/redaccionde';
import { Consultoria } from './pages/servicios/consultoria';
import { Limpieza } from './pages/servicios/limpieza';
import { DisenoPaginas } from './pages/servicios/disenoPaginas';

// Popular Articles
import * as popularArticles from './pages/popularArticles/index';

export const Routers = () => {
  const [state] = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<Inicio />} />

        {/* blogs */}
        <Route path='/seo' element={<Seo />} />
        <Route path='/joomla' element={<Joomla />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/seguridad' element={<Seguridad />} />
        <Route path='/diseno' element={<Diseno />} />

        {/* utilidades */}
        <Route path='/analisis-paginas' element={<Analisis />} />
        <Route path='/seo-imagen' element={<SeoImagen />} />
        <Route path='/comprobar-redirecciones' element={<Comprobar />} />
        <Route path='/herramienta-if-modified' element={<Herramienta />} />

        {/* mapa del sitio */}
        <Route path='/mapa-sitio' element={<MapaSitio />} />

        {/* plantilla */}
        <Route path='/plantillas-joomla-gratis' element={<PlantillasJoomla />} />
        <Route path='/demo-plantilla-atomical' element={<DemoPlantillas />} />

        {/* modulos */}
        <Route path='/jumbotron' element={<Jumbotron />} />
        <Route path='/demo-modulo-jumbotron' element={<DemoModulo />} />
        <Route path='/bloques' element={<Bloque />} />
        <Route path='/demo-modulo-bloques' element={<DemoBloque />} />

        {/* portafolio */}
        <Route path='/portafolio' element={<Portafolio />} />

        {/* servicios */}
        <Route path='/diseño-paginas-web' element={<DisenoPaginas />} />        
        <Route path='/acelerar-joomla' element={<Acelerar />} />        
        <Route path='/alta-buscadores' element={<AltaEnBuscadores />} />        
        <Route path='/alta-directorio' element={<AltaEnDirectories />} />        
        <Route path='/auditoria-seguridad-joomla' element={<AuditoriadeSeguridad />} />        
        <Route path='/cursos-joomla' element={<CursosJoomla />} />        
        <Route path='/eliminacion-malware' element={<EliminacionDeMalware />} />        
        <Route path='/hosting-joomla' element={<HostingJoomla />} />        
        <Route path='/mejoras-software' element={<MejorasDeSoftware />} />        
        <Route path='/tiendas-online' element={<TiendasOnline />} />        
        <Route path='/optimizacion-motores-busqueda' element={<OptimizacionParaMotores />} />        
        <Route path='/publicidad-pago-por-clic' element={<PublicidadPago />} />        
        <Route path='/soporte-joomla' element={<SoporteJoomla />} />        
        <Route path='/programadores-php' element={<Programadores />} />        
        <Route path='/redaccion-contenido' element={<Redaccionde />} />        
        <Route path='/consultoria-seo' element={<Consultoria />} />
        <Route path='/limpieza-sitio-hackeado' element={<Limpieza />} />

        {/* Contactenos */}
        <Route path='/contactenos' element={<Contactenos />} />

        {/* Popular Articles */}
        <Route path='/importancia' element={<popularArticles.Importancia />} />
        <Route path='/donde' element={<popularArticles.Donde />} />
        <Route path='/optimizacion-interna' element={<popularArticles.Optimizacion />} />
        <Route path='/las-directories' element={<popularArticles.LasDirectories />} />
        <Route path='/las-vulnerabilidades' element={<popularArticles.LasVulnerabilidades />} />
        <Route path='/causesa' element={<popularArticles.Causesa />} />
        <Route path='/htaccess' element={<popularArticles.Htaccess />} />
        <Route path='/Como-encontrar' element={<popularArticles.ComoEncontrar />} />
        <Route path='/como-construir' element={<popularArticles.ComoConstruir />} />
        <Route path='/inline-small' element={<popularArticles.InlineSmall />} />
        <Route path='/como-quitra' element={<popularArticles.ComoQuitar />} />
        <Route path='/enlaces' element={<popularArticles.Enlaces />} />
        <Route path='/tutorial-seo' element={<popularArticles.TutorialSEO />} />
        <Route path='/como-agregar' element={<popularArticles.ComoAgregar />} />
        <Route path='/que-significa' element={<popularArticles.QueSignifica />} />
        <Route path='/como-especifcar' element={<popularArticles.ComoEspecifcar />} />
        <Route path='/Como-las' element={<popularArticles.ComoLas />} />
        <Route path='/que-características' element={<popularArticles.QueCaracteristicas />} />
        <Route path='/que-hacer' element={<popularArticles.QueHacer />} />
        <Route path='/configuracion' element={<popularArticles.Configuracion />} />
        <Route path='/enlaces-pagados' element={<popularArticles.EnlacesPagadon />} />
        <Route path='/recursos' element={<popularArticles.Recursos />} />
        <Route path='/resireccionamientos' element={<popularArticles.Redireccionamientos />} />
        <Route path='/tutorial-permisos' element={<popularArticles.TutorialPermisos />} />
        <Route path='/porque-minimizer' element={<popularArticles.PorqueMinimizer />} />
        <Route path='/como-crear' element={<popularArticles.ComoCrear />} />
        <Route path='//importancia-de-usar' element={<popularArticles.ImportanciaDeusar />} />
        <Route path='/Como-usar' element={<popularArticles.ComoUsar />} />
        <Route path='/como-afecta' element={<popularArticles.ComoAfecta />} />
        <Route path='/como-configurar' element={<popularArticles.ComoConfigurar />} />
        <Route path='/por-que' element={<popularArticles.PorQue />} />
        <Route path='/problemas' element={<popularArticles.Problemas />} />
        <Route path='/como-puedo' element={<popularArticles.ComoPuedo />} />
        <Route path='/joomla-contenido' element={<popularArticles.JoomlaContentido />} />
        <Route path='/como-probar-el' element={<popularArticles.ComoProbar />} />
        <Route path='/tutorial-como-crear' element={<popularArticles.TutorialComoCrear />} />
        <Route path='/porque-mi-sitio' element={<popularArticles.ProtejaSuSition />} />
        <Route path='/como-recperarse' element={<popularArticles.ComoRecuperarse />} />
        <Route path='/importancia-palabras' element={<popularArticles.ImportancialPalabras />} />
        <Route path='/como-recuperarse-del' element={<popularArticles.ComoRecuperarseDel />} />
        <Route path='/procedimientos' element={<popularArticles.Procedimientos />} />
        <Route path='/proteja-su-sitio' element={<popularArticles.ProtejaSuSition />} />
        <Route path='/como-proteger' element={<popularArticles.ComoProteger />} />
        <Route path='/por-que-disminuya' element={<popularArticles.PorDisminuya />} />
        <Route path='/como-crear-un' element={<popularArticles.ComoCrearUn />} />
        <Route path='/que-aspectos' element={<popularArticles.QueAspectos />} />

        <Route path='*' element={<Inicio />} />
      </Routes>

      <NotificationContainer />
      <Loading state={state.loading} opacity={0.9} />
    </BrowserRouter>
  )
}