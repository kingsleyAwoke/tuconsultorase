import BreadCrumb from './BreadCrumb';
import MiddleContent from './MiddleContent';
import RightContent from './RightContnet';
import LeftContent from './LeftContent';
import { Links } from './Links';


const Main = () => {
  return (
    <section>
        <BreadCrumb />
        <div className='main-section container'>
            <LeftContent />            
            <MiddleContent />
            <RightContent Links={Links} maxDisplayed={12} />
        </div>
    </section>
  );
}

export default Main
