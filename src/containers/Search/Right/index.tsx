import React from 'react';
import Typography from 'antd/lib/typography';
import { NextRouter } from 'next/router';
import * as styles from './styles';

const { Title } = Typography;

type Props = {};
const Right: React.FC<Props> = (props: Props) => (
  <styles.Root>
    {' '}
    <Title style={{ marginBottom: '0.4em', maxWidth: '450px' }}>
      {' '}
      Your Search results will appear here
    </Title>
  </styles.Root>
);

export default Right;
