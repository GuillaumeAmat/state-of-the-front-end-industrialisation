import styled from 'styled-components';

import { Heading as RawHeading } from 'spectacle';
import { sizes } from './const';

export const Heading = styled(RawHeading)`
  && {
    margin-bottom: ${sizes.text};
    font-size: ${p => p.textSize || sizes.heading2};
  }
`;

export default Heading;
