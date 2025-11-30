const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6', paddingBottom:0 },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:999
  },
  screenText: { fontSize: 24, fontWeight: 'bold' },

  bottomNav: {
    flexDirection: 'row',
    height: 57,
    backgroundColor: '#f6f6f6',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
  },

  activeTabBackground: {
    position: 'absolute',
    height: 45,
    top: 5,
    left: 5,
    borderRadius: 8,
    backgroundColor: '#60340f',
  },

  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginHorizontal: 5,
    // paddingVertical: 5,
    paddingHorizontal: '5%',
    borderRadius: 12,
  },

  iconAndTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tabIcon: {
    marginRight: 6,
  },

  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    maxWidth: '70%',
  },
});

export default styles;
