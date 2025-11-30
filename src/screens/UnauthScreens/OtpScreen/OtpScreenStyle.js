import { StyleSheet, Platform, StatusBar } from 'react-native';
import { wp, hp } from '../../../utils/Functions/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: wp(3),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  logo: {
    width: wp(35),
    height: hp(4),
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: wp(6),
    alignItems: 'center',
    paddingBottom: hp(3), // Add bottom padding for better spacing
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(4),
  },
  illustration: {
    width: wp(85),
    height: hp(35),
  },
  textContainer: {
    marginBottom: hp(2),
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: wp(1),
  },
  title: {
    fontSize: wp(5.5),
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    color: '#8B4513',
    textAlign: 'left',
    lineHeight: wp(8),
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  subtitle: {
    fontSize: wp(4.5),
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    color: '#8B4513',
    textAlign: 'left',
    lineHeight: wp(8),
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(5),
    gap: wp(2.5),
  },
  dot: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#E8E8E8',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  activeDot: {
    backgroundColor: '#C4C4C4',
  },
  loginButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: wp(7),
    paddingVertical: hp(2),
    borderRadius: wp(4),
    marginBottom: hp(5),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
    minHeight: Platform.OS === 'ios' ? 44 : 48,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4.2),
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
});

export default styles;