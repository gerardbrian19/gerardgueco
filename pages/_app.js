import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import '../public/static/styles/main.css'
import '../public/static/styles/animate.min.css'
import 'swiper/css/swiper.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const res = await import('../public/static/data/projects.json');
    const data = await import('../public/static/data/articles.json');
    return { pageProps: res, articleProps: data }
  }
  componentDidMount(e) {
    console.log(this.props)
}
  
  render() {
    const { Component, pageProps, router, articleProps } = this.props
    return (
      <div>
        <Head>
          <title>Gerard Gueco</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/images/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/images/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/images/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/images/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/images/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/images/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/static/images/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta property="og:type" content="website" key="type" />
          <meta property="og:title" content="Gerard Gueco | Portfolio" key="title" />
          <meta property="og:description" content="He is a software engineer, graphic design enthusiast, and an aspiring change-maker." key="description" />
        </Head>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} {...articleProps} key={router.route} />
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