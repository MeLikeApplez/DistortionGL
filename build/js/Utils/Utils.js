// ../src/Utils/Utils.ts
function Promisify(promiseFunc, customError) {
  return new Promise((res) => {
    promiseFunc.then((value) => {
      res([value, null]);
    }).catch((err) => {
      console.error(customError || err);
      res([null, customError || err]);
    });
  });
}
export {
  Promisify
};
