import { StyleSheet } from 'react-native';

// Size of dataContainer padding + childs height
const IMAGEHEIGHT = 78;

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: 8,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 4,
    borderColor: '#DFDFDE',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  dataContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    height: 18
  },
  description: {
    color: '#7D7C78',
    marginTop: 4,
    fontSize: 14,
    height: 36
  },
  link: {
    marginTop: 6,
    fontSize: 14,
    height: 16
  },
  imageContainer: {
    width: IMAGEHEIGHT,
    height: IMAGEHEIGHT,
    margin: 12,
    alignItems: 'center'
  },
  image: {
    width: IMAGEHEIGHT,
    height: IMAGEHEIGHT,
    resizeMode: 'cover',
    borderRadius: 4,
  },
});

export default styles;