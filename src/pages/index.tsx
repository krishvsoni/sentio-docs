import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner} style={{ background: "#black" }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SENTIO
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
  
            to="/docs/intro"
            style={{
              background: "#9966ff",
              padding: "12px 24px",    // Increased padding for larger button
              borderRadius: "40px",
              color: "white",
              fontSize: "1.2em",       // Increased font size for visibility
              fontWeight: "bold",      // Bold font for emphasis
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",  // Shadow effect for depth
              transition: "transform 0.2s",                  // Smooth scaling transition
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Scale up on hover
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Get Started
          </Link>


        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
