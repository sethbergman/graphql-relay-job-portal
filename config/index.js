import config from './default';
import env from './environment';
import * from './jwt';
import * from './mongoClient';
import * from './encrypting';

export default {
  ...config,
  ...env
};
