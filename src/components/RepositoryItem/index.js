import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Repository = ({ repository, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.navigate('Issues', {
        organizationName: repository.owner.login,
        repositoryName: repository.name,
      });
    }}
  >
    <View style={styles.information}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{repository.name}</Text>
        <Text style={styles.infoText}>{repository.owner.login}</Text>
      </View>
    </View>
    <Icon name="chevron-right" size={20} />
  </TouchableOpacity>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default withNavigation(Repository);
