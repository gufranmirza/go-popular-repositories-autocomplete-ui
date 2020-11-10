import React from 'react';
import NotFound from '@/components/common/NotFound';

import { Repository as RT } from '@/core/types/index.d';
import * as styles from './styles';
import Card from '../Card';

type Props = {
  repository: RT;
};

const Repository: React.FC<Props> = props => {
  const { repository } = props || undefined;
  return (
    <styles.Image>
      {repository === undefined ? (
        <NotFound />
      ) : (
        <Card repository={repository} />
      )}
    </styles.Image>
  );
};

export default Repository;
