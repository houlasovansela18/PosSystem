import { APP_DEBUG, APP_NAME } from '@env';

const parseBooleanEnv = (env: string): boolean => {
  switch (env.toLowerCase().trim()) {
    case 'false':
    case 'no':
    case '':
    case '0':
    case undefined:
      return false;
    case 'true':
    case 'yes':
    case '1':
      return true;
    default:
      return false;
  }
};

const __debug__ = parseBooleanEnv(APP_DEBUG);
const __appname__ = APP_NAME;

export { __debug__, __appname__ };
