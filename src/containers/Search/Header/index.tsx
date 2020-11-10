import React from 'react';
import Menu from 'antd/lib/menu';
import Input from 'antd/lib/input';
import Dropdown from 'antd/lib/dropdown';

import { AppContainer } from '@/core/components/AppContainer';
import { Repository } from '@/core/types/index.d';
import * as styles from './styles';

const { Search } = Input;

type Props = {
  onSearch: Function;
  onChange: Function;
  onClick: Function;
  query: string;
  suggestions: Array<Repository>;
};

const Title: React.FC<Props> = props => {
  const { onSearch, suggestions, query, onChange, onClick } = props;
  const menu = (
    <Menu>
      {suggestions.map(item => (
        <Menu.Item
          key={item.id}
          onClick={() => {
            onClick(item.full_name);
          }}
        >
          <span> {item.full_name} </span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <styles.Root>
      <AppContainer>
        <styles.Container>
          <styles.Search>
            <Dropdown overlay={menu}>
              <Search
                value={query}
                placeholder="Search popular Golang repositories...!"
                enterButton="Search"
                size="large"
                style={{
                  width: '768px',
                }}
                onChange={e => {
                  onChange(e);
                }}
                onSearch={e => {
                  onSearch(e);
                }}
              />
            </Dropdown>
          </styles.Search>
        </styles.Container>
      </AppContainer>
    </styles.Root>
  );
};

export default Title;
