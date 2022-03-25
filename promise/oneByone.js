
// 串行之行多个请求

apisPromise = apis.map(api => {
  return new Promise((resolve, reject) => {
    const resp = fetch(api);
    resolve(resp.json().data);
  })
})
function services(apisPromise) {

  let result = [];

  return new Promise((resolve, reject) => {
    apisPromise.reduce((pre, cur, index) => {
      pre.then(res => {
        return new Promise((reso, rej) => {
          cur().then(data => {
            result.push(data);
            reso(cur);
          });
          if (result.length === index + 1) {
            resolve(result);
          }
        })
      })
    }, Promise.resolve())
  })
}