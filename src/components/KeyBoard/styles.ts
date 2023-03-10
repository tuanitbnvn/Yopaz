import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Color';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
  },
  imgOption: {
    width: 30,
    height: 30,
    tintColor: Colors.textGray,
  },
  row: {
    flexDirection: 'row',
  },
  boxHeader: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textBlue: {
    color: Colors.blue,
    fontSize: 35,
  },
  textBlack: {
    color: Colors.black,
    fontSize: 35,
  },
  textGray: {
    color: Colors.textGray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textWhite: {
    color: Colors.white,
    fontSize: 35,
  },
  boxResult: {
    width: '100%',
    height: 180,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  textResult: {
    fontSize: 60,
    // width: '100%',
  },
  imgAns: {
    width: 30,
    height: 30,
    tintColor: Colors.blue,
  },
});
