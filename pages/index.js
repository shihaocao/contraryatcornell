import Head from 'next/head'
import Layout from '../components/layout'
import { siteTitle } from "../components/layout.js"
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'

import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

const neg_margin = -12
const icon_size = "26"

// type Props = {
//   allPosts: Post[]
// }

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <br></br>

        <h3>What we do</h3>
        <p>
        🔩 &nbsp; Build startup ecosystems on campus
        <br></br>
        🚀 &nbsp; Sponsor hackathons/builder events on campus
        <br></br>
        📈 &nbsp; <Link href="/funding">Invest</Link> in Cornell startups (up to $2M)
        <br></br>
        🤝 &nbsp; Connect talented builders with one another
        </p>

        <h3>Who we are</h3>
        <p>
        🏛️ &nbsp; Contrary at Cornell is run by Venture Partners (VPs)
        <br></br>
        🌎 &nbsp; The Venture Partner program is a <Link href="https://contrary.com/partners">nation-wide program</Link>
        </p>

        <h3>Announcements</h3>
        <p>
        🔩 &nbsp; Apply for up to <Link href="https://contrary.com/blog/contrary-sabbatical-2022">$250k in SAFE funding</Link> (due 08/31)

        </p>


        <h3>Are you building a startup?</h3>
        <p>Learn about how to <Link href="/funding">receive up to $2M in funding</Link>
        </p>

        <h3>Join Contrary</h3>
        <p>
        <Link href="https://airtable.com/shrrvmTO3FAYSuMJl?utm_campaign=vp-national-info">Applications</Link> are due Thursday 09/15
        <ul>
        <li>Learn about being a VP at the <Link href="https://airtable.com/shrrvmTO3FAYSuMJl?utm_campaign=vp-national-info">national info-sess</Link></li>
        <li>Learn about Contrary @ Cornell at the <Link href="/vp">in-person info-sess</Link></li>
        <li>Learn about the <Link href="http://contrary.com/blog/venture-partner-apps-2022">VP application process</Link></li>  
        </ul>
        </p>


        <h3>Interested in working at a startup?</h3>
        <p>Discover the best jobs in startups and venture&nbsp;
        <a href="https://startupsearch.com/">here</a>
        </p>


        <h3>Got questions?</h3>
        <p>Reach out to us at&nbsp;
        <a href="mailto: cornell@contrary.com">cornell@contrary.com</a>
        </p>

      </section>

    </Layout>
    
    
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
