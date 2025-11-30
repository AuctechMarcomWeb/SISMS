const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#887d66',
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    marginBottom: '1%',
    padding: '2%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardText: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    paddingRight: 10,
  },
  shareButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  shareIconImage: {
    width: 20,
    height: 20,
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 20,
  },
  paginationContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 12,
  backgroundColor: '#fff',
},

pageNumber: {
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 10,
  marginHorizontal: 5,
  borderWidth: 1,
  borderColor: '#c9b04e',
  backgroundColor: '#fff',
},

activePage: {
  backgroundColor: '#c9b04e',
  borderColor: '#c9b04e',
},

pageNumberText: {
  color: '#c9b04e',
  fontSize: 16,
  fontWeight: '500',
},

activePageText: {
  color: '#fff',
  fontWeight: '600',
},

  uploadButton: {
    backgroundColor: '#e0cd8b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
