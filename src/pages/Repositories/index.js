import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '~/components/Header';
import RepositoryItem from '~/components/RepositoryItem';
import api from '~/services/api';

import styles from './styles';

export default class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      repoName: '',
      loading: false,
      loadingList: true,
      refreshing: false,
    };
  }

  async componentDidMount() {
    await this.loadRepositories();
  }

  saveRepo = async (repo) => {
    const json = JSON.stringify(repo);
    await AsyncStorage.setItem('@Githuber:repositories', json);
  }

  addRepository = async () => {
    const { repositories, repoName } = this.state;
    this.setState({ refreshing: true });
    try {
      const { data } = await api.get(`/repos/${repoName}`);
      this.setState({ repositories: [...repositories, data] }); // eslint-disable-line;
      this.saveRepo([...repositories, data]);
    } catch (e) {
      // console.tron.log(e);
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@Githuber:repositories');
    const parsedRepos = JSON.parse(repositories);
    this.setState({
      repositories: parsedRepos || [],
      loadingList: false,
      refreshing: false,
    });
  }

  renderItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { repoName, loading, loadingList } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repoName}
            onChangeText={(text) => {
              this.setState({ repoName: text });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.addRepository}
          >
            {loading
              ? (<ActivityIndicator size="small" style={styles.formLoading} />)
              : (<Icon name="plus" size={20} style={styles.icon} />)}
          </TouchableOpacity>
        </View>
        {loadingList
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
