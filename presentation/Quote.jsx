import styled from 'styled-components';

import { Quote as RawQuote } from 'spectacle';
import { colors, sizes } from './const';

export const Quote = styled(RawQuote)`
  && {
    border-left: 1vmin solid ${colors.badass};
    padding-left: ${p => p.textSize || sizes.text};
    font-size: ${p => p.textSize || sizes.text};
    font-weight: normal;
    line-height: ${p => p.lineHeight || sizes.lineHeight};
  }
`;

export default Quote;
