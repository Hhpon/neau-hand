<template>
    <div class='container'>
        <a :href='imgdata.url' v-for='imgdata in imgdatas' :key='imgdata'>
            <img :src="imgdata.src" alt="" width="60%">
            <div class="button-text">{{imgdata.value}}</div>
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgdatas: [
        {
          src: "http://neau-hand.hhp.im/img/nxy.jpg",
          value: "农学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwMTE0NjM3MA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/yy.jpg",
          value: "园艺园林学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4MzgxNjk2Ng==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/zh.jpg",
          value: "资源与环境学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjI2Nzc0NQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/gc.jpg",
          value: "工程学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxMjExODQ4OA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/sl.jpg",
          value: "水利与土木工程学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MTYzNzgwNQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/dy.jpg",
          value: "动物医学学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIxMDQ0MTE3OA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/sk.jpg",
          value: "生命科学学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5NDgzODI2Nw==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/sp.jpg",
          value: "食品学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxNzg2NjE5MQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/jg.jpg",
          value: "经济管理学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI3MDY2MTIzMQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/wf.jpg",
          value: "文法学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2NTA0NjkyNw==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/lxy.jpg",
          value: "理学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5Njk0NDU5NA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/dq.jpg",
          value: "电气与信息学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDY0MDg1OQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/ys.jpg",
          value: "艺术学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNzU0MTgxNA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/gj.jpg",
          value: "国际文化教育学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxMjU1MTAwMQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/dk.jpg",
          value: "动物科学技术学院",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI3NzA3NDMwMw==&scene=124#wechat_redirect"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  a {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 13px;
    margin-top: 10px;
    .button-text{
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }
}
</style>


