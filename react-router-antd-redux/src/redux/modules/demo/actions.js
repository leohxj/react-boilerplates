import createActions from '../../helpers/createActions';

import { syncPlus } from '../../../api';

export default createActions('demo', {
  // 异步的，相当于 USER_RENAME
  async asyncTest(data) {
    console.info('asyncTest', data);
    try {
      const result = await syncPlus(data);
      return result;
    } catch (e) {
      throw e;
    }
  },

  // 同步的
  syncTest(data) {
    console.info('syncTest:', data);
    return data;
  }
});
