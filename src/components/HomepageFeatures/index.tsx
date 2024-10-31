import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { CiLock } from "react-icons/ci";
import { LuCheckSquare } from "react-icons/lu";
import { BiCctv } from "react-icons/bi";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Security',
    Svg: CiLock  ,
    description: (
      <>
        Secure your messages with the power of Sentinels.
      </>
    ),
  },
  {
    title: 'Audit',
    Svg: LuCheckSquare,
    description: (
      <>
        Indepth Code Auditing with certification to ensure any potential threats are mitigated from Code before deployment over arweave
      </>
    ),
  },
  {
    title: 'Monitoring',
    Svg: BiCctv,
    description: (
      <>
       Continous Process Monitoring and Alerting system to keep you safe from any potential threats in messages
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
