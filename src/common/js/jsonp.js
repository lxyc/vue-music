import originJSONP from 'jsonp'

/**
 * jsonp函数再封装
 * @param {*链接} url
 * @param {*链接参数} data
 * @param {*jsonp的opts参数} option
 * param (String) name of the query string parameter to specify the callback (defaults to callback)
 * timeout (Number) how long after a timeout error is emitted. 0 to disable (defaults to 60000)
 * prefix (String) prefix for the global callback functions that handle jsonp responses (defaults to __jp)
 * name (String) name of the global callback functions that handle jsonp responses (defaults to prefix + incremented counter)
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 将对象以url参数拼接
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}