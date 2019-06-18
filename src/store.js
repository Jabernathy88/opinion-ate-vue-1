import axios from 'axios';
import { mapResourceModules } from '@reststate/vuex';

const token = 'YUYz9QiaCLRupN-wvpiO_IMdkRtLacBeffHNcVSTIwg';

const httpClient = axios.create({
  baseURL: 'https://sandboxapi.reststate.org/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${token}`,
  },
});