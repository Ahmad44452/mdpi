import './styles.scss';
import Article from './Article';

const articlesData = [
  {
    id: 0,
    title: 'A Formal Performance Evaluation Method for Customised Plug-and-Play Manufacturing Systems Using Coloured Petri Nets.',
    authors: 'Ge Wang, Di Li, Shiyong Wang, Minghao Cheng, Ziren Luo and Renshun Liu',
    abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque
    felis imperdiet proin fermentum leo. Et netus et malesuada fames ac turpis. Enim praesent elementum facilisis leo vel fringilla. Sit amet consectetur adipiscing elit
  ut aliquam purus. In nisl nisi scelerisque eu. Nibh nisl condimentum id venenatis a condimentum. Massa tempor nec feugiat nisl pretium fusce id. Id diam vel quam
  elementum pulvinar etiam. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Et pharetra pharetra massa massa. Consectetur lorem donec massa sapien faucibus.
  Id donec ultrices tincidunt arcu non sodales. Sed turpis tincidunt id aliquet risus feugiat in ante. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.
  Sed risus ultricies tristique nulla aliquet enim. Laoreet sit amet cursus sit amet dictum sit amet justo.`
  },
  {
    id: 1,
    title: 'A Formal Performance Evaluation Method for Customised Plug-and-Play Manufacturing Systems Using Coloured Petri Nets.',
    authors: 'Ge Wang, Di Li, Shiyong Wang, Minghao Cheng, Ziren Luo and Renshun Liu',
    abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque
    felis imperdiet proin fermentum leo. Et netus et malesuada fames ac turpis. Enim praesent elementum facilisis leo vel fringilla. Sit amet consectetur adipiscing elit
  ut aliquam purus. In nisl nisi scelerisque eu. Nibh nisl condimentum id venenatis a condimentum. Massa tempor nec feugiat nisl pretium fusce id. Id diam vel quam
  elementum pulvinar etiam. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Et pharetra pharetra massa massa. Consectetur lorem donec massa sapien faucibus.
  Id donec ultrices tincidunt arcu non sodales. Sed turpis tincidunt id aliquet risus feugiat in ante. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.
  Sed risus ultricies tristique nulla aliquet enim. Laoreet sit amet cursus sit amet dictum sit amet justo.`
  },
  {
    id: 2,
    title: 'A Formal Performance Evaluation Method for Customised Plug-and-Play Manufacturing Systems Using Coloured Petri Nets.',
    authors: 'Ge Wang, Di Li, Shiyong Wang, Minghao Cheng, Ziren Luo and Renshun Liu',
    abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque
    felis imperdiet proin fermentum leo. Et netus et malesuada fames ac turpis. Enim praesent elementum facilisis leo vel fringilla. Sit amet consectetur adipiscing elit
  ut aliquam purus. In nisl nisi scelerisque eu. Nibh nisl condimentum id venenatis a condimentum. Massa tempor nec feugiat nisl pretium fusce id. Id diam vel quam
  elementum pulvinar etiam. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Et pharetra pharetra massa massa. Consectetur lorem donec massa sapien faucibus.
  Id donec ultrices tincidunt arcu non sodales. Sed turpis tincidunt id aliquet risus feugiat in ante. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.
  Sed risus ultricies tristique nulla aliquet enim. Laoreet sit amet cursus sit amet dictum sit amet justo.`
  },
  {
    id: 3,
    title: 'A Formal Performance Evaluation Method for Customised Plug-and-Play Manufacturing Systems Using Coloured Petri Nets.',
    authors: 'Ge Wang, Di Li, Shiyong Wang, Minghao Cheng, Ziren Luo and Renshun Liu',
    abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque
    felis imperdiet proin fermentum leo. Et netus et malesuada fames ac turpis. Enim praesent elementum facilisis leo vel fringilla. Sit amet consectetur adipiscing elit
  ut aliquam purus. In nisl nisi scelerisque eu. Nibh nisl condimentum id venenatis a condimentum. Massa tempor nec feugiat nisl pretium fusce id. Id diam vel quam
  elementum pulvinar etiam. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Et pharetra pharetra massa massa. Consectetur lorem donec massa sapien faucibus.
  Id donec ultrices tincidunt arcu non sodales. Sed turpis tincidunt id aliquet risus feugiat in ante. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.
  Sed risus ultricies tristique nulla aliquet enim. Laoreet sit amet cursus sit amet dictum sit amet justo.`
  }
]

const LatestArticles = () => {
  return (
    <div className="latestarticles">
      <h3 className="latestarticles__heading">Latest Articles</h3>
      <div className="latestarticles__items">
        {
          articlesData && articlesData.map((item) => <Article key={item.id} abstract={item.abstract} title={item.title} authors={item.authors} />)
        }
      </div>
    </div>
  )
}

export default LatestArticles;