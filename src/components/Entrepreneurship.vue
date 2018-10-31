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
          src: "http://neau-hand.hhp.im/img/cm.jpg",
          value: "东农传媒",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5NzIyOTkyMQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/cx.jpg",
          value: "东农创行",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjMzNTU5NQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/hh.jpg",
          value: "东小农黑土地黄豆",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4MTM2NDc0Ng==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/qz.jpg",
          value: "茄子咔",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5NzkyMDQ1MA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/mg.jpg",
          value: "蜜疏果蔬",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxNzcyOTU2OA==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/xs.jpg",
          value: "奶酪先森",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyODU3NDY3Mg==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/qy.jpg",
          value: "青藤驿站",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3NDQzNjI2NQ==&scene=124#wechat_redirect"
        },
        {
          src: "http://neau-hand.hhp.im/img/zz.jpg",
          value: "纸张记忆",
          url:
            "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI3MDA1MDQ0OQ==&scene=124#wechat_redirect"
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


