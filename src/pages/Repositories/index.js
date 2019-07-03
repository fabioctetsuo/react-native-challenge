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
      refreshing: false,
    };
  }

  async componentDidMount() {
    const repositories = await this.loadRepositories();
    if (repositories) {
      this.setState({
        repositories,
      });
    }
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
    const repos = await AsyncStorage.getItem('@Githuber:repositories');
    console.tron.log(repos);
    const parsedRepos = JSON.parse(repos);
    return parsedRepos;
  }

  renderItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.addRepository}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { repoName, loading } = this.state;
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
            <Icon name="plus" size={25} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
