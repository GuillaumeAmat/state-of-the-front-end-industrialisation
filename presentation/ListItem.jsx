import styled from 'styled-components';

import { ListItem as RawListItem } from 'spectacle';
import { sizes } from './const';

export const ListItem = styled(RawListItem)`
  && {
    font-size: ${p => p.textSize || sizes.text};
    line-height: ${p => p.lineHeight || sizes.lineHeight};
  }
`;

export default ListItem;
