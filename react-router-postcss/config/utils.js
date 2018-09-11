import path from 'path';

// 拼接目录路径
export function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
