import React from 'react';
import { AppContainer } from '@/core/components/AppContainer';
import Typography from 'antd/lib/typography';
import message from 'antd/lib//message';
import * as vars from '@/core/theme/vars';
import { Get } from '@/core/http/requests';

import { Repository as RT } from '@/core/types/index.d';
import Repository from './Repository';
import * as styles from './styles';
import Header from './Header';

const { Title } = Typography;

type Props = {};
type State = {
  query: string;
  suggestions: Array<RT>;
};

class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
    };
  }

  onSearch = (s: string): void => {
    if (s.length === 0) {
      return;
    }
    // fetch data from a url endpoint
    Get(`/repository/search?q=${s}&limit=10`) // get top 10 suggestions
      .then(res => {
        if (res.status === 200) {
          this.setState({
            suggestions: res.data || [],
          });
        } else {
          message.error('Something went wrong, please try again', 5);
        }
      })
      .catch(() => {
        message.error('Something went wrong, please try again', 5);
      });
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const val = e.target.value || '';
    this.setState({
      query: val,
    });
    setTimeout(() => {
      this.onSearch(val);
    }, 500);
  };

  onClick = (e: string): void => {
    this.setState({
      query: e || '',
    });
    setTimeout(() => {
      this.onSearch(e);
    }, 500);
  };

  render() {
    const { query, suggestions } = this.state;
    return (
      <div>
        <Header
          suggestions={suggestions}
          onChange={this.onChange}
          onSearch={this.onSearch}
          onClick={this.onClick}
          query={query}
        />
        <styles.Root>
          <AppContainer>
            <styles.Container>
              <styles.Column>
                <Repository repository={suggestions[0] || undefined} />
              </styles.Column>
            </styles.Container>
          </AppContainer>
        </styles.Root>
        <styles.Info>
          <Title
            level={5}
            style={{
              fontWeight: 'normal',
              color: vars.HeadingColor1,
              margin: 0,
              textAlign: 'center',
              paddingTop: '25px',
              paddingBottom: '25px',
            }}
          >
            Github Inc
          </Title>
        </styles.Info>
      </div>
    );
  }
}

export default Search;
