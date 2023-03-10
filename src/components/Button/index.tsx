import {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  onPress?: () => void;
  isBlue?: boolean;
  isWhite?: boolean;
  children?: ReactNode;
}

export default function Button({
  onPress,
  children,
  isBlue,
  isWhite,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={isBlue ? styles.btnBlue : isWhite ? styles.btnWhite : null}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
