import { commonParams, options } from './config'
import jsonp from 'common/js/jsonp'
import { getUid } from 'common/js/uid'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

// 获取每首歌曲唯一对应的Vkey
export function getVKey(songmid, filename) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    cid: 205361747,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    uin: 0,
    songmid,
    filename,
    guid: getUid()
  })

  return jsonp(url, data, Object.assign({}, options, {
    param: 'callback'
  }))
}

export function getLyric(mid) {
  const url = debug ? '/api/lyric' : 'http://ustbhuangyi.com/music/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}