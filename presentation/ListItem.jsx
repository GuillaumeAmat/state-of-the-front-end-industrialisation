import styled from 'styled-components';

import { ListItem as RawListItem } from 'spectacle';
import { sizes } from './const';

export const ListItem = styled(RawListItem)`
  && {
    font-size: ${sizes.text};
    line-height: ${sizes.lineHeight};
  }
`;

export default ListItem;
