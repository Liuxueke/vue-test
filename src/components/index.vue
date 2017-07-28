<template>
    <div class="container-index">
        sss
        <!--banner-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="bannerImg in bannerImgs">
                    <a :href="bannerImg.url" class="w100">
                        <img :src="bannerImg.img" :alt="bannerImg.desc" class="w100">
                    </a>
                </div>
            </div>
        </div>
        <div class=""></div>
    </div>
</template>

<script>
    import a from '../assets/banner1.png'
    import b from '../assets/banner2.png'
    export default{
      data () {
        return {
          bannerImgs: [
            { url: 'baidu.com', img: a, desc: 'banner1'},
            { url: 'baidu.com', img: b, desc: 'banner2'}
          ]
        }
      }
    }
</script>