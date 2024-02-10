import {useToast} from 'react-native-toast-notifications';

export interface IAlert {
  message: string;
  variant: 'error' | 'info' | 'success' | 'warn';
}

const useAlert = () => {
  const toast = useToast();
  const alertInfo = (message: string) =>
    toast.show(message, {
      type: 'normal',
    });

  const alertError = (message: string) =>
    toast.show(message, {
      type: 'danger',
    });

  const alertWarn = (message: string) =>
    toast.show(message, {
      type: 'warn',
    });

  const alertSuccess = (message: string) =>
    toast.show(message, {
      type: 'success',
    });

  const alert = ({message, variant}: IAlert) => {
    switch (variant) {
      case 'error':
        alertError(message);
        return;
      case 'info':
        alertInfo(message);
        return;
      case 'success':
        alertSuccess(message);
        return;
      case 'warn':
        alertWarn(message);
        return;
    }
  };

  const alertList = (items: IAlert[]) => items.map(item => alert(item));

  return {alert, alertList};
};

export default useAlert;
