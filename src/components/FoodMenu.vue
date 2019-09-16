<template>
  <div id="app" align="center">
    <div id="menu">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="isLoading" :finished="isFinished" @load="onLoad" style="margin-top: 5px;">
          <van-row type="flex" justify="space-between" v-for="(item, index) in sites" class="item_class" :key="index">
            <van-col span="4"><div class="item_index">{{index + 1}}</div></van-col>
            <van-col span="12" align="left" style="line-height: 45px;">{{item.name}}</van-col>
            <van-col span="4" style="line-height: 45px;">{{item.likes}}</van-col>
            <van-col span="4"><van-image class="item_img" :src="item.img"></van-image></van-col>
          </van-row>
        </van-list>
      </van-pull-refresh>
    </div>
    <div id="share">
      <b>分 享 有 礼 ></b>
    </div>
    <div id="company">青岛禹锡智慧科技有限公司 技术支持</div>
  </div>
</template>

<script>
import $ from 'jquery'
import {
  Button, Icon, PullRefresh, List,
  Cell, Row, Col, Image
} from 'vant'

export default {
  name: 'App',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image
  },
  data () {
    return {
      message: '本店菜品排行榜',
      isLoading: false,
      isFinished: true,
      bgstyle: {
        backgroundSize: $(document).width() + ' ' + $(document).height()
      },
      sites:
          [{
            img: '/static/img/recommend.png',
            name: '红烧茄子',
            description: '这里是菜品介绍',
            likes: '1000',
            islike: 'like'
          }, {
            img: '/static/img/unrecommend.png',
            name: '尖椒鸡蛋',
            description: '这里是菜品介绍',
            likes: '1280',
            islike: 'like-o'
          }, {
            img: '/static/img/unrecommend.png',
            name: '糖醋排骨',
            description: '这里是菜品介绍',
            likes: '9999',
            islike: 'like'
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
    },
    onLoad () {
      console.log('Loding ...')
      this.isFinished = false
      this.isLoading = false
      this.sites = [{
        img: '/static/img/recommend.png',
        name: '红烧茄子',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like'
      }, {
        img: '/static/img/unrecommend.png',
        name: '韭菜鸡蛋',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }, {
        img: '/static/img/unrecommend.png',
        name: '红烧肉',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }, {
        img: '/static/img/unrecommend.png',
        name: '东坡肘子',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }, {
        img: '/static/img/unrecommend.png',
        name: '蚂蚁上树',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }, {
        img: '/static/img/unrecommend.png',
        name: '地三鲜',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }, {
        img: '/static/img/unrecommend.png',
        name: '尖椒豆皮',
        description: '这里是菜品介绍',
        likes: '9999',
        islike: 'like-o'
      }]
    },
    onRefresh () {
      console.log('Refresh ...')
      this.isFinished = false
      this.isLoading = false
      this.sites = []
      this.onLoad()
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
    height: 40px;
    width: 60%;
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
    font-size: small;
  }
  .item_class {
    width: 90%;
    height: 45px;
    margin-top: 2px;
    background-image: url("/static/img/item_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
  .item_img {
    height: 30px;
    width: 35px;
    margin-top: 5px;
  }
  .item_index {
    background-image: url("/static/img/index_num.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 25px;
    width: 25px;
  }
</style>
