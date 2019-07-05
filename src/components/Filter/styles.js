import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    margin: metrics.baseMargin,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.grey,
  },

  active: {
    fontWeight: 'bold',
  },
});

export default styles;
