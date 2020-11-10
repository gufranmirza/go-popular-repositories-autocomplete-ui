import React from 'react';
import Typography from 'antd/lib/typography';

import * as styles from './styles';

const { Title } = Typography;

const NotFound: React.FC = () => (
  <styles.Root>
    <styles.Container>
      <styles.Image>
        <img alt="" src="/illustrations/404.png" />
      </styles.Image>
      <br />
      <Title level={3}> Woops! Nothing to show :(</Title>
      <Typography.Paragraph>
        {' '}
        Please select a repository from search results to show.
      </Typography.Paragraph>
    </styles.Container>
  </styles.Root>
);

export default NotFound;
