import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Filter = ({ activeFilter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity
      styles={styles.option}
      onPress={() => changeFilter('all')}
    >
      <Text style={activeFilter === 'all' && styles.active}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity
      styles={styles.option}
      onPress={() => changeFilter('open')}
    >
      <Text style={activeFilter === 'open' && styles.active}>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity
      styles={styles.option}
      onPress={() => changeFilter('closed')}
    >
      <Text style={activeFilter === 'closed' && styles.active}>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default Filter;
