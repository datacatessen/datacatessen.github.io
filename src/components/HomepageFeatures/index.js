import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram , faSyncAlt, faServer } from '@fortawesome/free-solid-svg-icons';

const FeatureList = [
  {
    title: 'Solutions Architecture and Engineering',
    icon: faProjectDiagram,
    description: (
      <>
        <ul>
          <li>Work with key stakeholders to identify and develop new solutions to drive business decisions</li>
          <li>Provide recommendations for future-proof, scalable solutions using Hadoop and other Big Data technologies </li>
          <li>Develop operational prototypes to provide functional, usable solutions that achieve the most critical goals and provide instant</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Solution Overhaul',
    icon: faSyncAlt,
    description: (
      <>
        <ul>
          <li>Work closely with technical teams to investigate and explore existing data architectures and use cases</li>
          <li>Deliver recommendations for overhauling existing solutions using Hadoop and other Big Data technologies</li>
          <li>Develop the solutions using real data sets to produce real results</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Deployment and Configuration',
    icon: faServer,
    description: (
      <>
        <ul>
          <li>Work together to identify the Big Data needs of our clients, ensuring the chosen software stack is optimal</li>
          <li>Install, configure, and validate the initial setup of Big Data software</li>
          <li>Remain vendor-agnostic to fit our clients' business goals</li>
        </ul>
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <FontAwesomeIcon icon={icon} size="3x" className="feature-icon" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
