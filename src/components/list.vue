<template>
    <div class="container">
        <div class="container-list">
            <div class="newuser-area">
                <div class="clearFix">
                    <span class="fl">新手专区</span>
                    <p class="fl">专享福利，预购从速</p>
                </div>
                <ul>





                </ul>
            </div>
            <div class="activity-area">
                <div class="clearFix">
                    <span class="fl">活动专区</span>
                    <p class="fl">限时特惠，先到先得</p>
                </div>
                <ul>



                    <li>
                        <a href="/download" class="w100 activity-product">

                            <h4>招财宝M967</h4>
                            <div class="clearFix">
                                <div class="fl">

                                    <h3>
                                        <i>8.00</i>%
                                    </h3>

                                    <p>预期年化收益率</p>
                                </div>
                                <span class="fl"></span>
                                <div class="fl">
                                    <p>持有期限<i>30</i>天</p>
                                    <p>起投金额<i>1000</i>元</p>
                                </div>
                            </div>
                            <div class="barbox">
                                <div class="bar" data-width="1"><span></span></div>
                            </div>
                        </a>
                    </li>



                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default({
  data () {
    return {
      message: '这个是about页面！'
    }
  }
})
</script>