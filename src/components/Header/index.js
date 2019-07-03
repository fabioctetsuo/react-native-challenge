import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <TouchableOpacity onPress={() => { }}>
      <Icon name="chevron-left" size={16} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.right} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
