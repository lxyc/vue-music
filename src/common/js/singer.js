// 面向对象 创建歌手对象
export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `http://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}