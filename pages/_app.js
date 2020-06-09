import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import 'semantic-ui-css/semantic.min.css'
import '../public/static/styles/main.css'
import '../public/static/styles/animate.min.css'
import 'swiper/css/swiper.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const res = await import('../public/static/data/projects.json')
    return { pageProps: res }
  }
  
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <div>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity:0;
           }
           .page-transition-enter-active {
            opacity:1;
            -webkit-transition:opacity 300ms;
            transition:opacity 300ms;
           }
           .page-transition-exit {
            opacity:1;
           }
           .page-transition-exit-active {
            opacity:0;
            -webkit-transition:opacity 300ms;
            transition:opacity 300ms;
           }
           
        `}</style>
      </div>
    )
  }
}