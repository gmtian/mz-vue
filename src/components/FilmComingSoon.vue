<template>
  <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="item">
          <a href="#/film/4480">
            <div class="img">
              <img
                src="https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg?x-oss-process=image/quality,Q_70"
                alt
              >
            </div>
            <div class="info">
              <div class="film-name info-col">
                <span class="name">老师·好</span>
                <span class="item">2D</span>
              </div>
              <div class="film-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">7</span>
              </div>
              <div class="film-actors info-col">
                <span class="label">主演：于谦 汤梦佳 秦鸣悦 王广源 孙艺杨</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">中国大陆 | 100分钟</span>
              </div>
            </div>
            <div class="buy">预约</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../styles/common/mixins.less";

.film-list-content {
    background-color: #fff;
  ul {
    margin-left: 15px;

    li {
      .border-1-bottom;
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      box-sizing: content-box;

      > a {
        display: flex;
        align-items: center;
      }

      .img {
        flex-shrink: 0;
        width: 66px;
        height: 94px;
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          border-radius: 2px;
        }
      }

      .info {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;

        .info-col {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .film-name {
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
        }

        .film-grade {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
        }

        .film-actors {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }

        .film-detail {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
      }

      .buy {
        .border-1;
        flex-shrink: 0;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
      }
    }
  }
}
</style>
