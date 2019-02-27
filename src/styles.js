import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer: {
    // height: 16,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#b4c5ff',
    borderRadius: 16,
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  separatorContainer: {
    height: 8,
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: 'blue',
    borderTopColor: 'blue',
  },
  itemSeparatorContainer: {
    height: 4,
  },
  separatorBig: {
    height: 16,
  },
  lightBackground: {
    backgroundColor: '#c4c7c6',
    marginLeft: 8,
    marginRight: 60,
  },
  wrapper: {
    backgroundColor: '#4171ff',
    marginLeft: 60,
    marginRight: 8,
    minHeight: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    // maxWidth: 190,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  blackText: {
    color: 'black',
  },
  messageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
});

export default s;
