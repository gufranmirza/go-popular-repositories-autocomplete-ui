import React from 'react';
import Button from '@atlaskit/button';
import Link from 'next/link';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import { MenuFoldOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';

import { AppContainer } from '@/core/components/AppContainer';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import config from '@/core/config';
import * as styles from './styles';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Link href="/signup">
          <a href="/signup">
            <Button
              shouldFitContainer
              style={{ width: '200px', margin: '10px 0 10px 0' }}
              appearance="primary"
            >
              {' '}
              Employers Sign up
            </Button>
          </a>
        </Link>
        <Link href="/login">
          <Button
            href="/login"
            style={{ width: '200px' }}
            shouldFitContainer
            appearance="subtle"
          >
            {' '}
            Employers Login{' '}
          </Button>
        </Link>
        <Divider />
        <Button
          href={config('URLs.MainPortal')}
          appearance="subtle"
          shouldFitContainer
          style={{ width: '200px', margin: '0 0 10px 0' }}
          iconAfter={<ShortcutIcon label="" size="small" />}
        >
          {' '}
          For Job Seekers{' '}
        </Button>
      </div>
    </Menu.Item>
  </Menu>
);

const Title: React.FC<{}> = () => (
  <styles.Root>
    <AppContainer>
      <styles.Container>
        <div>
          <Link href="/">
            <a href="/">
              <styles.Image>
                <img alt="" src="/logo.png" />
              </styles.Image>
            </a>
          </Link>
        </div>
        <div>
          <styles.ButtonsLeft>
            <Button
              appearance="subtle"
              iconAfter={<ShortcutIcon label="" size="small" />}
              href={config('URLs.MainPortal')}
            >
              {' '}
              For Job Seekers{' '}
            </Button>
            <Link href="/signup">
              <Button
                href="/signup"
                style={{ margin: '0 10px 0 35px' }}
                appearance="primary"
              >
                {' '}
                Employers Sign up
              </Button>
            </Link>
            <Link href="/login">
              <Button href="/login" appearance="subtle">
                {' '}
                Employers Login{' '}
              </Button>
            </Link>
          </styles.ButtonsLeft>
          <styles.MenuLeft>
            <Dropdown
              placement="bottomRight"
              overlay={menu}
              trigger={['click']}
            >
              <MenuFoldOutlined style={{ fontSize: '21px' }} />
            </Dropdown>
          </styles.MenuLeft>
        </div>
      </styles.Container>
    </AppContainer>
  </styles.Root>
);

export default Title;
