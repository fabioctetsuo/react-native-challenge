import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import api from '~/services/api';
import styles from './styles';
import Header from '~/components/Header';
import Filter from '~/components/Filter';
import OrganizationItem from '~/components/OrganizationItem';

class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      loadingList: true,
      loading: false,
      activeFilter: 'all',
    };
  }

  async componentDidMount() {
    const { issues } = this.state;
    try {
      const { navigation } = this.props;
      const organization = navigation.getParam('organizationName');
      const repository = navigation.getParam('repositoryName');
      const { data } = await api.get(`/repos/${organization}/${repository}/issues`);
      this.setState({
        issues: [...issues, ...data],
      });
    } catch (e) {
      console.tron.log(e); // eslint-disable-line
    } finally {
      this.setState({ loadingList: false });
    }
  }

  renderItem = ({ item }) => <OrganizationItem organization={item} />

  renderList = () => {
    const { issues } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
      />
    );
  };

  changeFilter = async (state) => {
    const { navigation } = this.props;
    const organization = navigation.getParam('organizationName');
    const repository = navigation.getParam('repositoryName');
    this.setState({ loading: true });
    try {
      const { data } = await api
        .get(`/repos/${organization}/${repository}/issues?state=${state}`);
      this.setState({ issues: data, activeFilter: state });
    } catch (e) {
      // console.tron.log(e)
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loadingList, loading, activeFilter } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <Filter changeFilter={this.changeFilter} activeFilter={activeFilter} />
        {loading && <ActivityIndicator style={styles.loading} />}
        {loadingList
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}

export default withNavigation(Issues);
