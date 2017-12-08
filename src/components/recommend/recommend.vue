<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="recommend.discList">
      <div>
        <!-- slider -->
        <div v-if="recommend.sliders.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommend.sliders" :key="item.id">
              <a :href="item.linkUrl">
                <img @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <!-- songList -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in recommend.discList" :key="item.id" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <div class="name" v-html="item.creator.name"></div>
                <div class="desc" v-html="item.dissname"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!recommend.discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  name: 'recommend',
  data() {
    return {
      recommend: {
        sliders: [],
        discList: []
      }
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.slider)
          this.recommend.sliders = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.list)
          this.recommend.discList = res.data.list
        }
      })
    },
    // slider高度是由图片获取到后撑开的 checkLoaded用于节流
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>


