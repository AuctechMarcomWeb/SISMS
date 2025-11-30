import { StyleSheet } from 'react-native';
import { wp, hp } from '../../utils/Functions/Responsive';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    gap: wp(1.5),
  },
  input: {
    width: wp(14),
    height: wp(13),
    borderRadius: wp(3),
    fontSize: wp(5),
    fontWeight: '600',
    color: '#8B4513',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '#000',
  
  },
  inputEmpty: {
    borderColor: '#D0D0D0',
    backgroundColor: '#F9F9F9',
  },
  inputFilled: {
    borderColor: '#8B4513',
    backgroundColor: '#FFFFFF',
  },
});

export default styles;