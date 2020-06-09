import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import 'semantic-ui-css/semantic.min.css'
import '../public/static/styles/main.css'
import '../public/static/styles/animate.min.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const res = await import('../public/static/data/projects.json')
    return { pageProps: res }
  }
  componentDidMount(e){
    console.log(this.props);
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
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </div>
    )
  }
}