<template>
  <div id="contents">
    <div id="navigation">
      <van-nav-bar title="Title" left-text="Back" right-text="Button" :left-arrow="true" :fixed="true" >
      </van-nav-bar>
    </div>
    <div id="page_body" >
      <ol>
        <li v-for="itm in prizeList" :key="itm">
          <div class="item">
            <img class="item_img" :src="itm.src">
          </div>
        </li>
      </ol>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="info" dot>申请</van-tabbar-item>
        <van-tabbar-item icon="search" to="goods">查询</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="user" info="5">设置</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {NavBar, Icon, Tabbar, TabbarItem} from 'vant'

export default {
  name: 'Test',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      msg: '这是一个底部',
      active: 0,
      prizeList: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        {name: '城轨采购网', src: '/static/img/2.jpg'},
        {name: '天津地铁电子采购平台', src: '/static/img/2.jpg'},
        {name: '兰州地铁招标信息', src: '/static/img/2.jpg'},
        {name: '天津地铁电子采购平台', src: '/static/img/2.jpg'},
        {name: '兰州地铁招标信息', src: '/static/img/2.jpg'},
        {name: '天津地铁电子采购平台', src: '/static/img/2.jpg'},
        {name: '兰州地铁招标信息', src: '/static/img/2.jpg'},
        {name: '西安公共资源交易中心', src: '/static/img/2.jpg'}
      ],
      activeIndex: 0,
      intnum: undefined
    }
  },
  mounted () {
    let pgwidth = $(document).width()
    let pgheiht = $(document).height()
    $('#contents').height(pgheiht)
    $('#contents').width(pgwidth)
    $('#navigation').width(pgwidth)
  },
  methods: {
  }
}
</script>

<style scoped>

  #contents {
    overflow: hidden;
  }

  .item {
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #fff4d8;
  }

  .item_img {
    max-width: 100px;
    height: 100px;
  }

  #page_body {
    height: 84%;
    align-items: center;
  }

</style>
