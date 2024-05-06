export function wait(timeout: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), timeout);
  });
}

/**
 * 一直轮询，直到某一个fn执行完成，如果有退出条件，那么每次轮训前再判断是否满足退出条件
 * @param fn  待成功执行的方法
 * @param reject  否满足退出条件的方法
 */
export const waitFor = async (fn: () => boolean, reject?: () => boolean) => {
  while (!fn()) {
    // 每次如果校验失败，再去检查一下是否可以退出了
    if (reject?.()) {
      console.warn("reject by", reject);
      break;
    }
    await wait(100);
  }
};
