import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Color';
import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  btnBlue: {
    width: deviceWidth / 4,
    height: 100,
    backgroundColor: Colors.btnBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWhite: {
    width: deviceWidth / 4,
    height: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.border,
    borderWidth: 1,
  },
});
