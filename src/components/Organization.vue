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
          src: "http://neau-hand.hhp.im/img/zsdn.jpg",
          value: "掌上东农",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MzA5MzY2MQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/qx.jpg",
          value: "东农校青协",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4MjEwMTMwOA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/sl.jpg",
          value: "东农阿联",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3OTU1MTc2Mw==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/kx.jpg",
          value: "东农校科协",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNTQyMTI4Nw==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/dy.jpg",
          value: "艺术东农",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxODU0NzQ1Mw==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/qnyx.jpg",
          value: "青年印象",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4NzA4ODM0OQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/xh.jpg",
          value: "东北农业大学学生会",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4MjA1MTY2OA==&scene=124#wechat_redirect"
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
    .button-text {
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>


