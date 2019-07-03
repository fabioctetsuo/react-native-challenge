import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.light,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: metrics.baseMargin * 2,
    paddingBottom: metrics.basePadding / 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighter,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin * 2,
  },
  loading: {
    margin: metrics.baseMargin,
  },
});

export default styles;
