import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import { img_photo_descrip_block_h2 } from '../components/img_blocks'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Funding</title>
      </Head>
      <h1>Funding</h1>

      <p>We invest in startups from pre-seed to series A/B. We invest in any vertical and any idea.</p>

      <h2>Announcements</h2>
      Announcing <Link href="https://contrary.com/blog/contrary-sabbatical-2022">Contrary Sabbatical</Link>, which fast tracks $250k in funding to 5 teams (due 08/31)

      <h2>Process</h2>

      <p>Our main investing process is fast. Here's an example timeline:</p>

      <ol>
        <li>Short chat with Cornell VPs on Monday</li>
        <li>Short chat Investing Lead on Tuesday</li>
        <li>Formal pitch with HQ Investing team on Wednesday</li>
        <li>Receive investing decision (up to $2M SAFE) on Thursday</li>
      </ol>

      This is our internal timeline, but we can easily flex our schedule to accommodate your team's availabilities.
      We like to be fast because we don't want to waste your time.

      <h2>Apply</h2>

      <p><a href="cornell@contrary.com">Send us a quick email</a> with what you're building, and we'll schedule a time to chat! We're excited to meet you and help you get started.
      Please don't spend more than 1 minute on the email haha.</p>

      <p>Or even <Link href="https://mobile.twitter.com/shihao_cao">dm us on twitter</Link> with what you're building!</p>

      <h2>What happens if we decide not to invest?</h2>
      The objective of Contrary at Cornell is not evaluative. Entrepreneurship is not a zero-sum game.
      We stay in touch and support you in any other way possible. We will actively work with you to bolster your idea/product until we are ready to invest.

      <h2>Terms</h2>

      <p>We invest up to $2M on a standard SAFE (no discount, no MFN clauses),
        on a valuation depending on your level of progress (e.g number of users, technical milestones achieved, etc.).</p>

      <h2>Questions?</h2>
      
      <p>Reach out to us at&nbsp;
        <a href="cornell@contrary.com">cornell@contrary.com</a>
      </p>
      <hr></hr>

    </Layout>
  )
}