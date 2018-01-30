/* @flow */

// 初始化数据的接口管理
export async function syncPlus() {
  // 一般这里还有有真正和接口交互的代码, 比如
  // const res = await request('player.play', {
  //   request: JSON.stringify(parameters)
  // });
  // return normalizePlayResponse(res);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value: 50
      });
    }, 1000);
  });
}
