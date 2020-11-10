import React from 'react';

import * as vars from '@/core/theme/vars';
import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';
import { GoRepoForked, GoEye, GoMarkGithub } from 'react-icons/go';
import { Repository } from '@/core/types/index.d';
import * as styles from './styles';

type Props = {
  repository: Repository;
};

const { Title } = Typography;

const Card: React.FC<Props> = (props: Props) => {
  const { repository } = props;
  return (
    <styles.Root>
      <Title level={3} style={{ color: vars.HeadingColor2, marginBottom: '0' }}>
        <a href={repository.html_url}>{repository.full_name} </a>
      </Title>
      <Title
        level={5}
        style={{
          color: vars.HeadingColor2,
          fontWeight: 'normal',
          marginTop: '0.4em',
        }}
      >
        {repository.description}
      </Title>
      <Divider />
      <styles.Icons>
        <GoRepoForked style={{ fontSize: '22px' }} />{' '}
        <span> {repository.forks} </span>
        <GoEye style={{ fontSize: '22px' }} />{' '}
        <span>{repository.watchers} </span>
        <GoMarkGithub style={{ fontSize: '22px' }} />{' '}
        <span> {repository.language} </span>
      </styles.Icons>
    </styles.Root>
  );
};

export default Card;
