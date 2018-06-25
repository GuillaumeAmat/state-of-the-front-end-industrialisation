import React from 'react';
import { injectGlobal } from 'styled-components';

import { BlockQuote, Deck, List, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import Summary from './Summary';
import Heading from './Heading';
import ListItem from './ListItem';
import Quote from './Quote';
import Cite from './Cite';
import Highlighted from './Highlighted';

import { colors, fonts, sizes } from './const';

// eslint-disable-next-line
injectGlobal`
  a {
    color: ${colors.tertiary};
  }
`;

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={300}
        theme={theme}
        progress="bar"
        controls={false}
        contentHeight="90vh"
        contentWidth="80vw"
      >
        <Slide>
          <Heading
            size={1}
            caps
            lineHeight={1}
            textAlign="left"
            textSize="12vh"
            textColor="secondary"
          >
            <Highlighted>
              State<br />
              of<br />
              the<br />
              Front-End<br />
              Industrialisation<br />
              2018
            </Highlighted>
          </Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>Guillaume AMAT</ListItem>
            <ListItem>Ingénieur Front-End Sénior</ListItem>
            <ListItem>ekino.</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Pourquoi ce talk&nbsp;?
          </Heading>
          <List>
            <ListItem>Pour que ça devienne vraiment un sujet</ListItem>
            <ListItem>Pour débattre et avancer</ListItem>
            <ListItem>
              Pour prendre date sur les technologies et les méthodes
            </ListItem>
            <ListItem>Pour suivre l'évolution dans le temps</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Ce talk n'est pas exhaustif
          </Heading>
          <List>
            <ListItem>Il doit évoluer au fil du temps</ListItem>
            <ListItem>D'autres solutions intéressantes existent</ListItem>
          </List>
        </Slide>

        <Slide
          notes={
            <div>
              <p>Vous connaissez certainement cette formule&nbsp;?</p>
            </div>
          }
        >
          <Text textSize={sizes.text}>view = f(state)</Text>
        </Slide>

        <Slide
          notes={
            <div>
              <p>On peut voir l'industrialisation comme ça</p>
            </div>
          }
        >
          <Text textSize={sizes.text}>i15n = f(code + dependencies)</Text>
        </Slide>

        <Slide
          notes={
            <div>
              <p>lawl</p>
            </div>
          }
        >
          <Text textSize={sizes.text}>
            i15n = f(code + dependencies) * configuration
          </Text>
        </Slide>

        <Slide
          notes={
            <div>
              <p>On se voit aujourd'uhi pour parler d'indus'</p>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Industrialisation
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              L'industrialisation est le processus de fabrication de produits
              manufacturés avec des techniques permettant une forte productivité
              du travail et qui regroupe les travailleurs dans des{' '}
              infrastructures constantes avec des horaires fixes et une
              réglementation stricte. Cette définition peut également s'employer
              pour une organisation qui passe du prototype à la production de
              masse.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>DRY</li>
                <li>Mutualisation des ressources</li>
                <li>Énorme écosystème de modules</li>
                <li>Création de conventions</li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Industrialisation
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              L'industrialisation est le processus de fabrication de{' '}
              <Highlighted>produits manufacturés</Highlighted> avec des
              techniques permettant une{' '}
              <Highlighted>forte productivité</Highlighted> du travail et qui
              regroupe les travailleurs dans des{' '}
              <Highlighted>infrastructures constantes</Highlighted> avec des
              horaires fixes et une réglementation stricte. Cette définition
              peut également s'employer pour une organisation qui{' '}
              <Highlighted>
                passe du prototype à la production de masse
              </Highlighted>.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes={
            <div>
              <p>Alors que nous sommes aussi des artisans</p>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Artisanat
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              L’artisanat est la transformation de produits ou la mise en œuvre
              de services grâce à un savoir-faire particulier et hors contexte
              industriel : l'artisan assure en général tous les stades de sa
              transformation, de réparation ou de prestation de services, et
              leur commercialisation.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>Toujours se remettre en question</li>
                <li>Toujours suivre les nouveautés</li>
                <li>Fleurter avec les hacks (ex : WTF JSX)</li>
                <li>Création de standards</li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Artisanat
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              L’artisanat est la transformation de{' '}
              <Highlighted>produits</Highlighted> ou la mise en œuvre de{' '}
              <Highlighted>services</Highlighted> grâce à un{' '}
              <Highlighted>savoir-faire particulier</Highlighted> et hors
              contexte industriel : l'artisan assure en général{' '}
              <Highlighted>tous les stades</Highlighted> de sa transformation,
              de réparation ou de prestation de services, et leur
              commercialisation.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Ambivalence
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              Le terme ambivalence a été introduit en 1910 par Eugen Bleuler
              pour caractériser un aspect de l'état psychique des schizophrènes.
              Il a été repris par Sigmund Freud dans une acception différente :
              il s'agit de la juxtaposition plus ou moins simultanée de deux
              affects : l'amour et la haine.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes={
            <div>
              <p>Ce qui nous amène à cette dernière définition...</p>
              <p>
                Comme pour l'amour et la haine, on doit arriver à trouver le
                curseur entre artisanat et industrialisation.
              </p>
              <ul>
                <li>Bidouilleur vs expert</li>
                <li>Hacker vs ingénieur</li>
              </ul>
              <p>
                Ceux qui croient en l'absolu ou la réponse idéale, manquent
                certainement quelque chose.
              </p>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Ambivalence
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              Le terme ambivalence a été introduit en 1910 par Eugen Bleuler
              pour caractériser un aspect de{' '}
              <Highlighted>l'état psychique des schizophrènes</Highlighted>. Il
              a été repris par Sigmund Freud dans une acception différente : il
              s'agit de la juxtaposition plus ou moins simultanée de deux
              affects : <Highlighted>l'amour et la haine</Highlighted>.
            </Quote>
            <Cite>Wikipédia</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>Je ne parle pas de monitoring puisque ça concerne l'ops</li>
              </ul>
            </div>
          }
        >
          <Summary toAppear />
        </Slide>

        <Slide>
          <Summary item={1} />
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>L'industrialisation s'inscrit dans le temps</li>
                <li>Les membres d'un projet changent tout le temps</li>
                <li>On doit trouver notre information rapidement</li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Documentation
          </Heading>
          <List>
            <ListItem>Ne jamais rien garder en tête</ListItem>
            <ListItem>
              Séparer les documentations technique et fonctionnelle
            </ListItem>
            <ListItem>Avoir des cas d'usage précis et simples</ListItem>
            <ListItem>Doît être versionnée comme le code</ListItem>
            <ListItem>Directement dans le dépôt ou via un outil dédié</ListItem>
            <ListItem>JSDoc</ListItem>
            <ListItem>
              README, LICENSE, AUTHORS, CHANGELOG, CONTRIBUTING, etc.
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Documentation (outils)
          </Heading>
          <List>
            <ListItem>Wikis versionnés : Gitlab, Github, etc.</ListItem>
            <ListItem>
              Docusaurus :{' '}
              <a href="https://docusaurus.io">https://docusaurus.io</a>
            </ListItem>
            <ListItem>
              GitBook :{' '}
              <a href="https://www.gitbook.com">https://www.gitbook.com</a>
            </ListItem>
            <ListItem>
              Documentation.js :{' '}
              <a href="http://documentation.js.org">
                http://documentation.js.org
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={2} />
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>
                  On pourrait ajouter plus de détails mais c'est une histoire de
                  goût (master/develop, etc.)
                </li>
                <li>
                  Le hook de pre-push fait juste perdre du temps au développeur.
                  Rien d'autre. À condition que les tâches lancées en pre-commit
                  soient optimisées
                </li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Versionnement
          </Heading>
          <List>
            <ListItem>Git est apprécié :)</ListItem>
            <ListItem>Branches protégées</ListItem>
            <ListItem>Flow de contribution via PR/MR uniquement</ListItem>
            <ListItem>Revue de code par les pairs</ListItem>
            <ListItem>Squash ou No Fast-Forward</ListItem>
            <ListItem>Pre-commit hook (et non pre-push)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Versionnement (outils)
          </Heading>
          <List>
            <ListItem>
              Git : <a href="https://git-scm.com">https://git-scm.com</a>
            </ListItem>
            <ListItem>
              Husky :{' '}
              <a href="https://github.com/typicode/husky">
                https://github.com/typicode/husky
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={3} />
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>Pas de JSX dans un .js</li>
                <li>Ouverture = pérennité</li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Conventions & standards
          </Heading>
          <List>
            <ListItem>
              Utiliser des technologies open-source et/ou libres
            </ListItem>
            <ListItem>
              L'extension d'un fichier doit refléter son contenu
            </ListItem>
            <ListItem>
              Indentation standard du code pour faciliter la reprise
            </ListItem>
            <ListItem>
              Ne pas trop modifier les configurations par défaut des projets
            </ListItem>
            <ListItem>Convention d'écriture des messages de commit</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Conventions & standards (outils)
          </Heading>
          <List>
            <ListItem>
              Prettier : <a href="https://prettier.io">https://prettier.io</a>
            </ListItem>
            <ListItem>
              Cosmiconfig :{' '}
              <a href="https://github.com/davidtheclark/cosmiconfig">
                https://github.com/davidtheclark/cosmiconfig
              </a>
            </ListItem>
            <ListItem>
              Conventional Commit specification :{' '}
              <a href="https://conventionalcommits.org">
                https://conventionalcommits.org
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={4} />
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Typage
          </Heading>
          <List>
            <ListItem>Sécurise le code et les futures évolutions</ListItem>
            <ListItem>Accompagne le développeur dans ses tâches</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Typage (outils)
          </Heading>
          <List>
            <ListItem>
              TypeScript :{' '}
              <a href="http://www.typescriptlang.org">
                http://www.typescriptlang.org
              </a>
            </ListItem>
            <ListItem>Communauté beaucoup plus importante</ListItem>
            <ListItem>Très bon support par les principales librairies</ListItem>
            <ListItem>Migration douce possible</ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={5} />
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Dev tools
          </Heading>
          <List>
            <ListItem>
              NPM : <a href="https://www.npmjs.com">https://www.npmjs.com</a>
            </ListItem>
            <ListItem>
              Yarn : <a href="https://yarnpkg.com">https://yarnpkg.com</a>
            </ListItem>
            <ListItem>NPX / Yarn</ListItem>
            <ListItem>npm outdated</ListItem>
            <ListItem>npm-check -u / yarn upgrade-interactive</ListItem>
            <ListItem>
              Storybook :{' '}
              <a href="https://storybook.js.org">https://storybook.js.org</a>
            </ListItem>
            <ListItem>
              Docker & Docker Compose :{' '}
              <a href="https://www.docker.com/">https://www.docker.com</a>
            </ListItem>
            <ListItem>
              Makefile :{' '}
              <a href="https://www.gnu.org/software/make/manual/make.html">
                https://www.gnu.org/software/make/manual/make.html
              </a>
            </ListItem>
            <ListItem>
              Tmux :{' '}
              <a href="https://github.com/tmux/tmux">
                https://github.com/tmux/tmux
              </a>
            </ListItem>
            <ListItem>
              Tmuxinator :{' '}
              <a href="https://github.com/tmuxinator/tmuxinator">
                https://github.com/tmuxinator/tmuxinator
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={6} />
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Lint
          </Heading>
          <List>
            <ListItem>
              Vérifie que les règles de contribution soient respectées
            </ListItem>
            <ListItem>
              Dans l'éditeur de code, en pre-commit et dans la CI
            </ListItem>
          </List>
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>
                  StyleLint gère les styled-components grâce à un pré-processeur
                </li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Lint (outils)
          </Heading>
          <List>
            <ListItem>
              ESLint : <a href="https://eslint.org">https://eslint.org</a>
            </ListItem>
            <ListItem>
              TSLint :{' '}
              <a href="https://palantir.github.io/tslint">
                https://palantir.github.io/tslint
              </a>
            </ListItem>
            <ListItem>
              StyleLint :{' '}
              <a href="https://stylelint.io">https://stylelint.io</a>
            </ListItem>
            <ListItem>
              Prettier : <a href="https://prettier.io">https://prettier.io</a>
            </ListItem>
            <ListItem>
              Commitlint :{' '}
              <a href="http://marionebl.github.io/commitlint">
                http://marionebl.github.io/commitlint
              </a>
            </ListItem>
            <ListItem>
              Sonarlint :{' '}
              <a href="https://www.sonarlint.org">https://www.sonarlint.org</a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={7} />
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Tests
          </Heading>
          <List>
            <ListItem>Tests unitaires</ListItem>
            <ListItem>Snapshots</ListItem>
            <ListItem>Tests de régression visuelle</ListItem>
            <ListItem>Tests d'intégration</ListItem>
            <ListItem>Tests fonctionnels</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Tests (outils)
          </Heading>
          <List>
            <ListItem>
              Jest : <a href="http://jestjs.io">http://jestjs.io</a>
            </ListItem>
            <ListItem>
              Loki : <a href="https://loki.js.org">https://loki.js.org</a>
            </ListItem>
            <ListItem>
              Enzyme :{' '}
              <a href="https://airbnb.io/enzyme">https://airbnb.io/enzyme</a>
            </ListItem>
            <ListItem>
              Puppeteer : <a href="https://pptr.dev">https://pptr.dev</a>
            </ListItem>
            <ListItem>
              Cypress :{' '}
              <a href="https://www.cypress.io">https://www.cypress.io</a>
            </ListItem>
            <ListItem>
              Protractor :{' '}
              <a href="http://www.protractortest.org">
                http://www.protractortest.org
              </a>
            </ListItem>
            <ListItem>
              Cucumber.js :{' '}
              <a href="https://github.com/cucumber/cucumber-js">
                https://github.com/cucumber/cucumber-js
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={8} />
        </Slide>

        <Slide
          notes={
            <div>
              <ul>
                <li>
                  Nodesecurity a été acheté par NPM et sera intégré dans l'outil
                </li>
              </ul>
            </div>
          }
        >
          <Heading size={2} textAlign="left">
            Reporting
          </Heading>
          <List>
            <ListItem>Performances</ListItem>
            <ListItem>Code coverage</ListItem>
            <ListItem>Code duplication</ListItem>
            <ListItem>Failles de sécurité dans les dépendances</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Reporting (outils)
          </Heading>
          <List>
            <ListItem>Vos pairs</ListItem>
            <ListItem>
              Lighthouse :{' '}
              <a href="https://developers.google.com/web/tools/lighthouse">
                https://developers.google.com/web/tools/lighthouse
              </a>
            </ListItem>
            <ListItem>
              SonarQube :{' '}
              <a href="https://www.sonarqube.org">https://www.sonarqube.org</a>
            </ListItem>
            <ListItem>
              NSP :{' '}
              <a href="https://github.com/nodesecurity/nsp">
                https://github.com/nodesecurity/nsp
              </a>
            </ListItem>
            <ListItem>Beaucoup de services tiers non libres</ListItem>
          </List>
        </Slide>

        <Slide>
          <Summary item={9} />
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            CI/CD
          </Heading>
          <List>
            <ListItem>CI lancée à chaque push</ListItem>
            <ListItem>
              Mettre les node_modules en cache local ou distant
            </ListItem>
            <ListItem>Découper les stages pour paralléliser</ListItem>
            <ListItem>En cas de grosses CI, factoriser en templates</ListItem>
            <ListItem>
              Idéalement, un CD par branche pour recetter rapidement et de façon
              isolée
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            CI/CD (outils)
          </Heading>
          <List>
            <ListItem>
              Gitlab :{' '}
              <a href="https://about.gitlab.com">https://about.gitlab.com</a>
            </ListItem>
            <ListItem>
              Travis : <a href="https://travis-ci.org">https://travis-ci.org</a>
            </ListItem>
            <ListItem>
              Docker :{' '}
              <a href="https://www.docker.com">https://www.docker.com</a>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>Ça fait beaucoup...</Text>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>Et il manque des choses&nbsp;!</Text>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Wish list
          </Heading>
          <List>
            <ListItem>
              Tests fonctionnels plus faciles à mettre en place
            </ListItem>
            <ListItem>Industrialiser l'industrialisation</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Conclusion
          </Heading>
          <List>
            <ListItem>
              Soyons pragmatiques, pas besoin de tout faire dès le début
            </ListItem>
            <ListItem>
              Tendance à la facilitation des outils, c'est le moment de s'y
              mettre
            </ListItem>
            <ListItem>
              L'investissement en temps n'est pas si important et les bénéfices
              sont là
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>Merci</Text>
        </Slide>
      </Deck>
    );
  }
}
