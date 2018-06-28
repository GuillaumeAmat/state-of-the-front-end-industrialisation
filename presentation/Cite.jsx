import styled from 'styled-components';

import { Cite as RawCite } from 'spectacle';
import { sizes } from './const';

const Cite = styled(RawCite)`
  && {
    font-size: ${p => p.textSize || sizes.text};
    line-height: ${p => p.lineHeight || sizes.lineHeight};
  }
`;

export default Cite;
