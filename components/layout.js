import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Contrary at Cornell'
const big_img_size = 230
const neg_margin_on_links = -2
const neg_top_margin_on_top_header = -25
const pos_margin_on_top_header = 20

export function header_links() {
  return <div style={
    {
    marginBottom: pos_margin_on_top_header,
    marginTop:    neg_top_margin_on_top_header
    }}> 
  
  &nbsp;&nbsp;

  <Link href="/" >
  <a>Home</a>
  </Link>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <Link href="/funding" >
  <a>Funding</a>
  </Link>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <Link href="/vp" >
  <a>Venture Parnters</a>
  </Link>
  {/* &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/notes/notes-landing" >
  <a>Notes</a>
  </Link>

  &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/builds/builds-landing" >
  <a>Builds</a>
  </Link>

  &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/photos" >
  <a>Photos</a>
  </Link> */}

  </div>
}

export function ten_spaces() {
  return <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
}

export const siteTitle = name

export default function Layout({ children, home , layout_type}) {
  return (
    <div className={layout_type}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta
          name="description"
          content="Contrary at Cornell: building startup ecosystems and investing at Cornell"
        />
        <meta
          property="og:image"
          content="www.contraryatcornell.com/images/contrary-new-logo-only.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {header_links()}

            <Image
              priority
              src="/images/contrary-new-logo-only.png"
              className={utilStyles.borderCircle}
              height={big_img_size}
              width={big_img_size}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl_no_pad}>{name}</h1>

            {/* <h3 style={{marginBottom: neg_margin_on_links}}> 
            <a href="assets/Shihao_Cao_Resume.pdf" className="button" target="_blank">Resume</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/shihaocao" className="button" target="_blank">Github</a>
            &nbsp;|&nbsp;
            <a href="https://twitter.com/shihao_cao" className="button" target="_blank">Twitter</a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/shihaocao/" className="button" target="_blank">LinkedIn</a>
            </h3> */}
          </>
        ) : (
          <>
            {header_links()}

            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/contrary-new-logo-only.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
            <div className={styles.backToHome}>

              <Link href="/">
                <a>← Back to home</a>
              </Link>
{/* 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link href="/notes/how-i-made-this-website" align="right">
              <a>Source</a>
              </Link> */}
        </div>

      )}
    </div>
  )
}