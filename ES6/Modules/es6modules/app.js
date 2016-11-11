import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url as bum, sayHi } from './src/config';

import User, { createURL, gravatar } from './src/user';

const wes = new User('Lev Roz', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);

console.log(wes, profile, image);