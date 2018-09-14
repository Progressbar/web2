import React from 'react'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
// import { HMR } from '@pwa/preset-react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { select } from '@rematch/select'

import Footer from '../Footer'
import Hero from '../Hero'
import { IsAuthenticated } from '../Auth'
// import style from './index.sass';

// Route-Split Components
// const loading = () => <div>Loading...</div>
// const load = loader => Loadable({ loader, loading })

// const Home = load(() => import('@pages/Home'));
// const Login = load(() => import('@pages/Login'));
// const Donate = load(() => import('@pages/Donate'));
// const Events = load(() => import('@pages/Events'));
// const Presskit = load(() => import('@pages/Presskit'));
// const Cowork = load(() => import('@pages/Cowork'));
// const Order = load(() => import('@pages/Order'));
// const Purchase = load(() => import('@pages/Purchase'));
// const Me = load(() => import('@pages/Me'));
// const Contact = load(() => import('@pages/Contact'));
// const Register = load(() => import('@pages/Register'));

const mapState = state => ({
  user: select.session.user(state),
})

export const AppRouter = connect(mapState)(function AppRouter(props) {
  return (
    <div className={style.app}>
      <Provider>
        <Hero />
        <main className={style.wrapper} />
        <Footer />
      </Provider>
    </div>
  )
})

export default HMR(withRouter(App), module)
