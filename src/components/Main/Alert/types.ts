export interface AlertProps {
  open: boolean;
  status: 'info' | 'warning' | 'success' | 'error';
  message: string;
  setAlert: (alert: AlertProps | undefined) => void;
}