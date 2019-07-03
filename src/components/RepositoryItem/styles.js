/* eslint-disable linebreak-style */
import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  information: {
    display: 'flex',
    flexDirection: 'row',
  },

  avatar: {
    width: 50,
    height: 50,
    marginRight: metrics.baseMargin,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  info: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
    alignItems: 'center',
  },

  infoText: {
    color: colors.dark,
    fontSize: 12,
  },
});

export default styles;
