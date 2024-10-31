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
                  padding: "12px 24px",
                  borderRadius: "40px",
                  color: "white",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  border: "2px solid transparent"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.border = "2px solid #4488ff";
                  e.currentTarget.style.textDecoration = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.border = "2px solid transparent";
                }}
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
      title={`${siteConfig.title} Docs`}
      description="Walkthrough towards Security">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
