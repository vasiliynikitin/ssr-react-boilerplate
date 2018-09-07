export function answer(data, isFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (isFail ? reject : resolve)(data), 1000);
  });
}
