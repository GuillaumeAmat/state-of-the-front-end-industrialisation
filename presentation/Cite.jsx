import styled from 'styled-components';

import { Cite as RawCite } from 'spectacle';
import { sizes } from './const';

const Cite = styled(RawCite)`
  && {
    font-size: ${sizes.text};
    line-height: ${sizes.lineHeight};
  }
`;

export default Cite;
