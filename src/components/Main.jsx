import BreadCrumb from './BreadCrumb';
import MiddleContent from './MiddleContent';
import RightContent from './RightContnet';
import LeftContent from './LeftContent';

const links = [
  { title: 'Importancia del archivo robots.txt para la seguridad y el seo', url:'/blog/seguridad'},
  { title: 'Importancia del archivo robots.txt para la seguridad y el seo', url:'/blog/seguridad'},
  { title: 'Importancia del archivo ,robots.txt para la seguridad y el seo', url:'/blog/seguridad'}
]

const Main = () => {
  return (
    <section>
        <BreadCrumb />
        <div className='main-section container'>
            <LeftContent />            
            <MiddleContent />
            <RightContent links={links} maxDisplayed={3} />
        </div>
    </section>
  );
}

export default Main
