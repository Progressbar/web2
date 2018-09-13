import React from 'react';
import Loadable from 'react-loadable';
import { HMR } from '@pwa/preset-react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'unstated';

import Footer from '@components/Footer';
import Hero from '@components/Hero';
import { IsAuthenticated } from '@components/Auth';
import style from './index.sass';

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import('@pages/Home'));
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
        <Provider>
          <Hero />
          <main className={style.wrapper}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/presskit" component={Presskit} />
              <Route path="/events" component={Events} />
              <Route path="/donate" component={Donate} />
              <Route path="/cowork" component={Cowork} />
              <Route path="/contact" component={Contact} />
              <IsAuthenticated
                NotAllowed={
                  <Redirect
                    to={{ pathname: '/login', state: { referrer: window.location.href } }}
                  />
                }
                Allowed={
                  <Switch>
                    <Route path="/purchase" component={Purchase} />
                    <Route path="/me" component={Me} />
                    <Route path="/order" component={Order} />
                  </Switch>
                }
              />
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default HMR(withRouter(App), module);
