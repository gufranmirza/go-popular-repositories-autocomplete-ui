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
      <Title level={3}> Woops! Page Not Found - 404</Title>
      <Typography.Paragraph>
        {' '}
        This is not the web page you are looking for
      </Typography.Paragraph>
    </styles.Container>
  </styles.Root>
);

export default NotFound;
