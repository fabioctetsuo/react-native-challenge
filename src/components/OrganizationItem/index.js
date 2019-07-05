import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => Linking.openURL(organization.html_url)}
  >
    <Image style={styles.avatar} source={{ uri: organization.user.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {organization.title}
      </Text>
      <Text style={styles.author}>{organization.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={20} />
  </TouchableOpacity>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    html_url: PropTypes.string,
    state: PropTypes.string.isRequired,
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default OrganizationItem;
