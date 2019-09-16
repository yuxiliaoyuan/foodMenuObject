<template>
  <div id="app" align="center">
    <div id="menu">
    </div>
    <div id="share">
      <b>分  享  有  礼  ></b>
    </div>
    <div id="company">青岛禹锡智慧科技有限公司  技术支持</div>
  </div>
</template>

<script>
import $ from 'jquery'
import {Button, Icon} from 'vant'

export default {
  name: 'App',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  data () {
    return {
      message: '本店菜品排行榜',
      bgstyle: {
        backgroundSize: $(document).width() + ' ' + $(document).height()
      },
      sites:
          [{
            imgN: '/static/img/2.jpg',
            name: '红烧茄子',
            cp: '这里是菜品介绍',
            sl: '9999'
          }, {
            imgN: '/static/img/3.jpg',
            name: '红烧茄子',
            cp: '这里是菜品介绍',
            sl: '9999'
          }, {
            imgN: '/static/img/4.jpg',
            name: '红烧茄子',
            cp: '这里是菜品介绍',
            sl: '9999'
          }]

    }
  },
  mounted () {
    let pgwidth = $(document).width()
    let pgheiht = $(document).height()
    $('#app').height(pgheiht)
    $('#app').width(pgwidth)
  },
  methods: {
    share () {
      alert('share it')
    }
  }
}
</script>

<style>
  #app {
    background-image: url("/static/img/backgrand.png");
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 1px;
  }

  #menu {
    background-image: url("/static/img/menu_backgrand.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 350px;
    width: 90%;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  #share {
    background: transparent;
    background-image: url("/static/img/share_btn.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    height: 45px;
    width: 80%;
    margin-top: 10px;
    text-align: center;
    line-height: 45px;
    color: azure;
  }

  #company {
    height: 20px;
    width: 80%;
    text-align: center;
    color: white;
    position: fixed;
    bottom: 5px;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
