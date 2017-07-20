import I18n from 'react-native-i18n';
import { Icons } from '@theme';

const constants = {
  SERVER_URL: 'http://192.168.1.125:7276',
  IP_BUTTONS: [
    { key: 0, label: I18n.t('TAKE_PHOTO') },
    { key: 1, label: I18n.t('PICK_FROM_LIBRARY')},
    { key: 2, label: I18n.t('CANCEL') },
  ],
  HOME_TABS: [
    { id: 0, title: 'WHO', icon: 'who' },
    { id: 1, title: 'WHAT', icon: 'what' },
    { id: 2, title: 'AN10NA', icon: 'an10na' },
    { id: 3, title: 'WATCH', icon: 'watch' },
    { id: 4, title: 'SHARE', icon: 'share' },
  ],
  FLAG_REASONS: [
    { id: 0, name: I18n.t('SPAM') },
    { id: 1, name: I18n.t('FRAUD') },
    { id: 2, name: I18n.t('ABUSIVE') },
    { id: 3, name: I18n.t('PROBLEMATIC') },
    { id: 4, name: I18n.t('OTHER') },
  ],
  AGE: {
    MIN: 1,
    MAX: 30,
  },
  GRADE: {
    MIN: 1,
    MAX: 30,
  },
  string: {
   "APP_NAME": "DucketApp",
   "WELCOME": "WELCOME",
   "UPLOAD_PHOTO": "UPLOAD YOUR PHOTO",
   "USERNAME": "USERNAME",
   "EMAIL": "EMAIL",
   "PASSWORD": "PASSWORD",
   "CREATE_PASSWORD": "CREATE PASSWORD",
   "CONFIRM_PASSWORD": "CONFIRM PASSWORD",
   "FORGOT_PASSWORD": "FORGOT PASSWORD?",
   "LOGIN": "LOGIN",
   "CREATE_ACCOUNT": "CREATE ACCOUNT",
   "CONNECT_FACEBOOK": "CONNECT WITH FACEBOOK",
   "RESET_PASSWORD": "GET PASSWORD",
   "STILL_DONT_HAVE": "Still don't have an account?",
   "REGISTER_NOW": "Register now!",
   "BY_CREATING": "By creating your account you agree with our",
   "TERMS_POLICY": "Terms and Policy",
   "FORGOT_YOUR": "FORGOT YOUR PASSWORD?",
   "ENTER_RESET_EMAIL": "Enter your email address below to receive your password ",
   "OR": "OR",

   "TAKE_PHOTO": "Take Photo",
   "PICK_FROM_LIBRARY": "Pick From Library",
   "CANCEL": "Cancel",

   "YES": "Yes",
   "NO": "No"
}
};

export default constants;
