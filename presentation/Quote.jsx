import styled from 'styled-components';

import { Quote as RawQuote } from 'spectacle';
import { colors, sizes } from './const';

export const Quote = styled(RawQuote)`
  && {
    border-left: 1rem solid ${colors.badass};
    font-size: ${sizes.text};
    font-weight: normal;
    line-height: ${sizes.lineHeight};
  }
`;

export default Quote;
