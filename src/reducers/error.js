export default function reducer(state, { error, payload }) {
  if (error) {
    console.error(payload);

    // 返回对应 state: error 数据, 用于 container 上对 error 做监听
    return {
      message: payload.message
    };
  }

  return null;
}
