import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Repository = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.information}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{repository.name}</Text>
        <Text style={styles.infoText}>{repository.owner.login}</Text>
      </View>
    </View>
    <Icon name="chevron-right" size={20} />
  </View>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
