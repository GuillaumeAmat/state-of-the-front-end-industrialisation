import React from 'react';
import PropTypes from 'prop-types';
import { List, Appear } from 'spectacle';

import Heading from './Heading';
import ListItem from './ListItem';
import Highlighted from './Highlighted';

const items = [
  'Documentation',
  'Versionnement',
  'Conventions & standards',
  'Typage',
  'Dev tools',
  'Lint',
  'Tests',
  'Reporting',
  'CI/CD'
];

function buildName(name, index, item) {
  if (item - 1 === index) {
    return <Highlighted>{name}</Highlighted>;
  }

  return name;
}

export const Summary = ({ item, toAppear }) => (
  <div>
    <Heading size={2} textAlign="left">
      Sommaire
    </Heading>
    <List ordered>
      {items.map((name, index) => {
        if (toAppear) {
          return (
            <Appear key={index}>
              <ListItem>{buildName(name, index, item)}</ListItem>
            </Appear>
          );
        }

        return <ListItem key={index}>{buildName(name, index, item)}</ListItem>;
      })}
    </List>
  </div>
);

Summary.propTypes = {
  item: PropTypes.number,
  toAppear: PropTypes.boolean
};

Summary.defaultProps = {
  item: null,
  toAppear: false
};

export default Summary;
