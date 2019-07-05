import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.light,
  },
  loading: {
    margin: metrics.baseMargin,
  },
});

export default styles;
