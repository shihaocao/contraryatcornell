import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import { img_photo_descrip_block_h2 } from '../components/img_blocks'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Venture Partners</title>
      </Head>
      <h1>Venture Partners</h1>

      <p>Venture partners run the investing ecosystem at their school. Venture Partners across the nation work with each other to make investment decisions for the firm.</p>

      <h2>Announcements</h2>
      <ul>
        <li>Learn about being a VP at the <Link href="https://airtable.com/shrrvmTO3FAYSuMJl?utm_campaign=vp-national-info">national info-sess</Link></li>
        <li>Learn about the <Link href="http://contrary.com/blog/venture-partner-apps-2022">VP application process</Link></li>  
        {/* <li>In person info-session location and time TBD!</li> */}
      </ul>
      {/* <h2>Process</h2>

      <h2>What is it like being a VP?</h2>
      <h3>Hub Life</h3>
      The contrary community runs hubs in each city where fellows and venture partners all hangout.
      <h3>Retreats</h3> */}

      <h2>In-person Meet and Greet</h2>
      The in-person meet and greet will be held at 6:00pm in 1st-floor eHub Kennedy commons on Wednesday 09/07.

      <h2>Who really are VPs?</h2>

      Learn more about the <Link href="https://vp22.contrarycap.com/">2022 class of Venture Partners</Link>

      <h2>Questions?</h2>
      
      <p>Reach out to us at&nbsp;
        <a href="mailto:cornell@contrary.com">cornell@contrary.com</a>
      </p>
      <hr></hr>

    </Layout>
  )
}