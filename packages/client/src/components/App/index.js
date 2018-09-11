import React from 'react';
import Loadable from 'react-loadable';
import { HMR } from '@pwa/preset-react';
import { Route, withRouter } from 'react-router-dom';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import style from './index.sass';
import { userStore } from '@stores/User';

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import('@pages/Home'));
const About = load(() => import('@pages/About'));
const Article = load(() => import('@pages/Article'));
const Blog = load(() => import('@pages/Blog'));
const Login = load(() => import('@pages/Login'));
const Donate = load(() => import('@pages/Donate'));
const Events = load(() => import('@pages/Events'));
const Presskit = load(() => import('@pages/Presskit'));
const Cowork = load(() => import('@pages/Cowork'));
const Order = load(() => import('@pages/Order'));
const Purchase = load(() => import('@pages/Purchase'));
const Me = load(() => import('@pages/Me'));
const Contact = load(() => import('@pages/Contact'));
const Register = load(() => import('@pages/Register'));

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      // this.props.history.listen(obj => {
      // 	if (window.ga) ga.send('pageview', { dp:obj.pathname })
      // })
    }
  }

  render() {
    return (
      <div className={style.app}>
        <UserContext.Provider value={{}}>
          <Hero />
          <main className={style.wrapper}>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:title" component={Article} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/order" exact component={Order} />
            <Route path="/presskit" exact component={Presskit} />
            <Route path="/purchase" exact component={Purchase} />
            <Route path="/me" exact component={Me} />
            <Route path="/events" exact component={Events} />
            <Route path="/donate" exact component={Donate} />
            <Route path="/cowork" exact component={Cowork} />
            <Route path="/contact" exact component={Contact} />
          </main>
          <Footer />
        </UserContext.Provider>
      </div>
    );
  }
}

export default HMR(withRouter(App), module);
