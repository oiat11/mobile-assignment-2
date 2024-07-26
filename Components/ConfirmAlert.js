import { Alert } from 'react-native';

const showConfirmAlert = (title, message, onConfirm) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: onConfirm },
    ],
    { cancelable: false }
  );
};

export default showConfirmAlert;
