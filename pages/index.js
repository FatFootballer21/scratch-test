import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Blockly from 'blockly';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
