import Head from 'next/head'
import Header from '@components/Header'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

export default function HomeContact() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Les 7 saveurs de Cucugnan est un producteur français d'épices aromatisées, d'olives et autres produits du terroir, et une maison d'hôtes, dans la région de Perpignan" />
        <meta name="author" content="Les 7 saveurs de Cucugnan est un producteur français d'épices. Il est la propriété de Vincent Busquet." />
        <title>Les 7 saveurs de Cucugnan - Contactez-nous</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className="flex-shrink-0">
        <Header title="Les 7 saveurs de Cucugnan" show="false" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
