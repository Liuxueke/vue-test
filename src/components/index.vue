<template>
    <div class="container">
        <div class="container-index">
            <!--banner-->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="bannerImage in bannerImages">
                        <a :href="bannerImage.url" class="w100">
                            <img :src="bannerImage.img" :alt="bannerImage.desc" class="w100">
                        </a>
                    </div>
                </div>
            </div>
            <div class="index-invest">
                <h4>{{ product.name }}</h4>
                <h3>{{ product.percent }}%</h3>
                <p><i>{{ product.term }}</i>天投资期限<span></span><i>{{ product.amount }}</i>起投金额</p>
                <a href="" class="download-app">立即投资</a>
                <a href="" class="appdownload">
                    <img :src="downIcon" alt="" class="w100">
                </a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import axios from 'axios'
    export default{
      data () {
        return {
          downIcon: 'http://10.10.20.240:5570/public/images/index/icon_wx_appdownload.png',
          bannerImages: [],
          product: ''
        }
      },
      created () {
        axios.all([axios.get('/api/mock/banner'),axios.get('/api/mock/index_product')])
          .then(axios.spread((res1,res2) => {
            this.bannerImages = res1.data.data;
            this.product = res2.data.data
          }))
          .catch((err1,err2) => {
            console.log(err1);
            console.log(err2);
          });
      },
      updated () {
        window.onload=function(){
          var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop : true,
            autoplay : 3000
          });
        }
      }
    }
</script>
<style>
    .swiper-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        -ms-transition-property: -ms-transform;
        transition-property: transform;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box
    }
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative
    }
</style>