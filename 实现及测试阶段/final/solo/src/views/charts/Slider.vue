<template>
  <div class="slider">
    <div class="products">
      <h4>各页面访客</h4>
      <div class="slider">
        <swiper :options="productSwiperOption">
          <swiper-slide
            v-for="(item, index) in sliderProducts"
            :key="index"
            :class="{'active': productIsActive === index}"
            @click.native="selectProducts(index)"
          >
            <div class="text">
              <h5>{{item.code}}</h5>
              <p>访问占比</p>
              <span>{{item.radio}}%</span>
            </div>
            <div class="circle">
              <el-progress type="circle" :stroke-width="8" :width="70"  :percentage="item.radio"></el-progress>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="charts">
        <h5>{{productInvokeCode}}各攻略访客</h5>
        <ve-line
          :data="productChartData"
          :settings="productChartSettings"
          ref="products"
        >
        </ve-line>
      </div>
    </div>
    <TableAndRing
      :tableTitle='hotProducts.tableTitle'
      :ringTitle='hotProducts.ringTitle'
      :tableData='hotProducts.tableData'
      :chartData='hotProducts.chartData'
      :chartSettings='hotProducts.chartSettings'
    >
    </TableAndRing>
    <TableAndRing
      :tableTitle='bigCustomer.tableTitle'
      :ringTitle='bigCustomer.ringTitle'
      :tableData='bigCustomer.tableData'
      :chartData='bigCustomer.chartData'
      :chartSettings='bigCustomer.chartSettings'
    >
    </TableAndRing>
  </div>
</template>

<script>
import TableAndRing from '@/components/slider/TableAndRing'

export default {
  name: 'Slider',
  components: {
    TableAndRing
  },
  data () {
    this.productChartSettings = {
      dimension: ['时间'],
      scale: [true, true],
      area: true
    }
    this.formChartSettings = {
      dimension: ['时间'],
      scale: [true, true],
      area: true
    }
    return {
      activeName: 'invoke',
      dateValue: '',
      // 限制只能选择当前之前的时间
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
      },
      productChartData: {
        columns: ['时间', '北京', '上海', '青岛'],
        rows: [
          { '时间': '2020-05-28', '北京': 75700, '上海': 4311, '青岛': 1000 },
          { '时间': '2020-05-29', '北京': 72936, '上海': 6650, '青岛': 1307 },
          { '时间': '2020-05-30', '北京': 76636, '上海': 7085, '青岛': 1707 },
          { '时间': '2020-05-31', '北京': 66536, '上海': 6085, '青岛': 2105 },
          { '时间': '2020-06-01', '北京': 77516, '上海': 5105, '青岛': 1505 },
          { '时间': '2020-06-02', '北京': 80536, '上海': 8015, '青岛': 1750 },
        ]
      },
      formChartData: {
        columns: ['时间', '暗黑', '星际', 'LOL', '文明'],
        rows: [
          { '时间': '2020-05-28', '暗黑': 56000, '星际': 22000, 'LOL': 8888, 'Y0906': 666 },
          { '时间': '2020-05-29', '暗黑': 44000, '星际': 24000, 'LOL': 5888, 'Y0906': 766 },
          { '时间': '2020-05-30', '暗黑': 51000, '星际': 21000, 'LOL': 6888, 'Y0906': 1166 },
          { '时间': '2020-05-31', '暗黑': 59000, '星际': 27000, 'LOL': 8888, 'Y0906': 966 },
          { '时间': '2020-06-01', '暗黑': 66000, '星际': 12000, 'LOL': 6888, 'Y0906': 1266 },
          { '时间': '2020-06-02', '暗黑': 52000, '星际': 29000, 'LOL': 7888, 'Y0906': 1066 },
        ]
      },
      // swiper轮播图
      productSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      formSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      productIsActive: 0,
      productInvokeCode: '暗黑',
      formIsActive: 0,
      formInvokeName: '北京',
      sliderProducts: [
        {
          code: 'LOL',
          radio: 63
        },
        {
          code: 'Dota2',
          radio: 15
        },
        {
          code: '星际',
          radio: 2
        },
        {
          code: '魔兽',
          radio: 1
        }
      ],
      sliderForms: [
        {
          code: '北京',
          radio: 72
        },
        {
          code: '上海',
          radio: 12
        },
        {
          code: '上海淇毓',
          radio: 9
        },
        {
          code: '北京济南',
          radio: 6
        }
      ],
      // 热门产品和各产品关注占比
      hotProducts: {
        tableTitle: '热门游戏',
        ringTitle: '各游戏关注占比',
        tableData: [{
          id: 1,
          name: '暗黑',
          amount: '82093',
          increase: '128%'
        }, {
          id: 2,
          name: '黑魂',
          amount: '77093',
          increase: '33%'
        }, {
          id: 3,
          name: '文明',
          amount: '66752',
          increase: '25%'
        }, {
          id: 4,
          name: 'LOL',
          amount: '57890',
          increase: '55%'
        }, {
          id: 5,
          name: '魔兽',
          amount: '5567',
          increase: '67%'
        }],
        chartData: {
          columns: ['游戏', '关注'],
          rows: [
            { '游戏': '魔兽', '关注': 1393 },
            { '游戏': 'LOL', '关注': 3530 },
            { '游戏': '黑魂', '关注': 2923 },
            { '游戏': '暗黑', '关注': 1723 },
            { '游戏': '星际', '关注': 3792 },
          ]
        },
        chartSettings: {
          dimension: '游戏',
          metrics: '关注',
          offsetY: 180
        }
      },
      // 大客户和各客户关注占比
      bigCustomer: {
        tableTitle: '游客',
        ringTitle: '各游客关注占比',
        tableData: [{
          id: 1,
          name: '北京',
          amount: '82093',
          increase: '183%'
        }, {
          id: 2,
          name: '济南',
          amount: '77093',
          increase: '33%'
        }, {
          id: 3,
          name: '苏州',
          amount: '66752',
          increase: '25%'
        }, {
          id: 4,
          name: '大连',
          amount: '57890',
          increase: '55%'
        }, {
          id: 5,
          name: '西安',
          amount: '5567',
          increase: '67%'
        }],
        chartData: {
          columns: ['公司', '关注'],
          rows: [
            { '游戏': '北京', '关注': 10093 },
            { '游戏': '济南', '关注': 5530 },
            { '游戏': '苏州', '关注': 2923 },
            { '游戏': '大连', '关注': 1723 },
            { '游戏': '西安', '关注': 992 },
          ]
        },
        chartSettings: {
          dimension: '游戏',
          metrics: '关注',
          offsetY: 180
        }
      }
    }
  },
  watch: {
    // 切换tab时更新charts
    activeName (v) {
      this.$nextTick(() => {
        this.$refs[`${v}`].echarts.resize()
      })
    }
  },
  methods: {
    handleTab (tab) {
      console.log(tab.name);
    },
    selectProducts (index) {
      console.log(index)
      this.productIsActive = index
      if (index === 0) {
        this.productInvokeCode = 'LOL'
        this.productChartData = {
          columns: ['时间', '北京', '上海', '青岛'],
          rows: [
            { '时间': '2020-05-28', '北京': 75700, '上海': 4311, '青岛': 1000 },
            { '时间': '2020-05-29', '北京': 72936, '上海': 6650, '青岛': 1307 },
            { '时间': '2020-05-30', '北京': 76636, '上海': 7085, '青岛': 1707 },
            { '时间': '2020-05-31', '北京': 66536, '上海': 6085, '青岛': 2105 },
            { '时间': '2020-06-01', '北京': 77516, '上海': 5105, '青岛': 1505 },
            { '时间': '2020-06-02', '北京': 80536, '上海': 8015, '青岛': 1750 },
          ]
        }
      } else if (index === 1) {
        this.productInvokeCode = 'DOTA'
        this.productChartData = {
          columns: ['时间', '北京', '上海', '青岛'],
          rows: [
            { '时间': '2020-05-28', '北京': 15700, '上海': 800, '青岛': 200 },
            { '时间': '2020-05-29', '北京': 11936, '上海': 650, '青岛': 307 },
            { '时间': '2020-05-30', '北京': 12636, '上海': 785, '青岛': 197 },
            { '时间': '2020-05-31', '北京': 14536, '上海': 885, '青岛': 215 },
            { '时间': '2020-06-01', '北京': 15516, '上海': 705, '青岛': 155 },
            { '时间': '2020-06-02', '北京': 16536, '上海': 805, '青岛': 250 },
          ]
        }
      } else if (index === 2) {
        this.productInvokeCode = '星际'
        this.productChartData = {
          columns: ['时间', '北京', '上海', '青岛'],
          rows: [
            { '时间': '2020-05-28', '北京': 650, '上海': 300, '青岛': 300 },
            { '时间': '2020-05-29', '北京': 736, '上海': 250, '青岛': 307 },
            { '时间': '2020-05-30', '北京': 636, '上海': 285, '青岛': 297 },
            { '时间': '2020-05-31', '北京': 536, '上海': 285, '青岛': 215 },
            { '时间': '2020-06-01', '北京': 516, '上海': 205, '青岛': 255 },
            { '时间': '2020-06-02', '北京': 636, '上海': 305, '青岛': 350 },
          ]
        }
      } else if (index === 3) {
        this.productInvokeCode = '魔兽'
        this.productChartData = {
          columns: ['时间', '北京', '上海', '青岛'],
          rows: [
            { '时间': '2020-05-28', '北京': 157, '上海': 100, '青岛': 300 },
            { '时间': '2020-05-29', '北京': 136, '上海': 150, '青岛': 307 },
            { '时间': '2020-05-30', '北京': 166, '上海': 115, '青岛': 297 },
            { '时间': '2020-05-31', '北京': 156, '上海': 125, '青岛': 215 },
            { '时间': '2020-06-01', '北京': 156, '上海': 105, '青岛': 555 },
            { '时间': '2020-06-02', '北京': 136, '上海': 135, '青岛': 250 },
          ]
        }
      }

    },
    selectForms (index) {
      console.log(index)
      this.formIsActive = index
      if (index === 0) {
        this.formInvokeName = '北京'
        this.formChartData = {
          columns: ['时间', '星际', '魔兽', 'LOL', 'Y0906'],
          rows: [
            { '时间': '2020-05-28', '星际': 56000, '魔兽': 22000, 'LOL': 8888, 'Y0906': 666 },
            { '时间': '2020-05-29', '星际': 44000, '魔兽': 24000, 'LOL': 5888, 'Y0906': 766 },
            { '时间': '2020-05-30', '星际': 51000, '魔兽': 21000, 'LOL': 6888, 'Y0906': 1166 },
            { '时间': '2020-05-31', '星际': 59000, '魔兽': 27000, 'LOL': 8888, 'Y0906': 966 },
            { '时间': '2020-06-01', '星际': 66000, '魔兽': 12000, 'LOL': 6888, 'Y0906': 1266 },
            { '时间': '2020-06-02', '星际': 52000, '魔兽': 29000, 'LOL': 7888, 'Y0906': 1066 },
          ]
        }
      } else if (index === 1) {
        this.formInvokeName = '上海'
        this.formChartData = {
          columns: ['时间','星际', '魔兽', 'LOL', 'Y0906'],
          rows: [
            { '时间': '2020-05-28', '星际': 12000, '魔兽': 7000, '': 300, 'Y0906': 500 },
            { '时间': '2020-05-29', '星际': 14000, '魔兽': 6000, 'LOL': 388, 'Y0906': 666 },
            { '时间': '2020-05-30', '星际': 11000, '魔兽': 6600, 'LOL': 338, 'Y0906': 466 },
            { '时间': '2020-05-31', '星际': 19000, '魔兽': 5500, 'LOL': 298, 'Y0906': 566 },
            { '时间': '2020-06-01', '星际': 16000, '魔兽': 6900, 'LOL': 388, 'Y0906': 466 },
            { '时间': '2020-06-02', '星际': 12000, '魔兽': 7900, 'LOL': 488, 'Y0906': 666 },
          ]
        }
      }  else if (index === 2) {
        this.formInvokeName = '上海淇毓'
        this.formChartData = {
          columns: ['时间', '星际', '魔兽', 'LOL', 'Y0906'],
          rows: [
            { '时间': '2020-05-28', '星际': 10000, '魔兽': 3000, 'LOL': 2008, 'Y0906': 500 },
            { '时间': '2020-05-29', '星际': 14000, '魔兽': 4000, 'LOL': 1588, 'Y0906': 466 },
            { '时间': '2020-05-30', '星际': 11000, '魔兽': 2700, 'LOL': 1888, 'Y0906': 566 },
            { '时间': '2020-05-31', '星际': 12000, '魔兽': 2800, 'LOL': 2288, 'Y0906': 565 },
            { '时间': '2020-06-01', '星际': 13000, '魔兽': 3300, 'LOL': 2388, 'Y0906': 555 },
            { '时间': '2020-06-02', '星际': 14000, '魔兽': 3400, 'LOL': 2288, 'Y0906': 666 },
          ]
        }
      } else if (index === 3) {
        this.formInvokeName = '北京济南'
        this.formChartData = {
          columns: ['时间', '星际', '魔兽', 'LOL', 'Y0906'],
          rows: [
            { '时间': '2020-05-28', '星际': 9000, '魔兽': 2000, 'LOL': 1000, 'Y0906': 333 },
            { '时间': '2020-05-29', '星际': 8000, '魔兽': 1800, 'LOL': 1188, 'Y0906': 466 },
            { '时间': '2020-05-30', '星际': 9000, '魔兽': 2100, 'LOL': 1118, 'Y0906': 466 },
            { '时间': '2020-05-31', '星际': 9900, '魔兽': 1800, 'LOL': 888, 'Y0906': 555 },
            { '时间': '2020-06-01', '星际': 8800, '魔兽': 1900, 'LOL': 999, 'Y0906': 444 },
          ]
        }
      }
    },
    bindSelectDate (e) {
      console.log(e)
      if (e === '今日') {
          this.invokeChartData = {
          columns: ['时间', '星际访客', '魔兽访客', 'LOL访客'],
          rows: [
            { '时间': '10:00', '星际访客': 2800, '魔兽访客': 1000, 'LOL访客': 900 },
            { '时间': '11:00', '星际访客': 2600, '魔兽访客': 1200, 'LOL访客': 1400 },
            { '时间': '12:00', '星际访客': 2700, '魔兽访客': 1600, 'LOL访客': 1200 },
            { '时间': '13:00', '星际访客': 3000, '魔兽访客': 1100, 'LOL访客': 1600 },
            { '时间': '14:00', '星际访客': 3100, '魔兽访客': 1700, 'LOL访客': 1900 },
            { '时间': '15:00', '星际访客': 2900, '魔兽访客': 2000, 'LOL访客': 1800 },
            { '时间': '16:00', '星际访客': 3300, '魔兽访客': 1500, 'LOL访客': 2200 },
          ]
        }
      } else if (e === '今日') {
          this.invokeChartData = {
          columns: ['时间', '星际访客', '魔兽访客', 'LOL访客'],
          rows: [
            { '时间': '10:00', '星际访客': 2800, '魔兽访客': 1000, 'LOL访客': 900 },
            { '时间': '11:00', '星际访客': 2600, '魔兽访客': 1200, 'LOL访客': 1400 },
            { '时间': '12:00', '星际访客': 2700, '魔兽访客': 1600, 'LOL访客': 1200 },
            { '时间': '13:00', '星际访客': 3000, '魔兽访客': 1100, 'LOL访客': 1600 },
            { '时间': '14:00', '星际访客': 3100, '魔兽访客': 1700, 'LOL访客': 1900 },
            { '时间': '15:00', '星际访客': 2900, '魔兽访客': 2000, 'LOL访客': 1800 },
            { '时间': '16:00', '星际访客': 3300, '魔兽访客': 1500, 'LOL访客': 2200 },
          ]
        }
      }

    }
  }
}
</script>

<style lang="stylus">
  .slider
    width 100%
    // max-width 1200px
    // margin auto
    .total
      height 440px
      width 100%
      background #fff
      padding 10px 12px
      margin-bottom 20px
      position relative
      box-sizing border-box
      .select-wrapper
        position absolute
        right 10px
        top 6px
        padding 0 .4rem
        z-index 9
        .el-button
          margin-right 6px
      .el-tabs__item
        font-size 16px
    .products
      min-height 400px
      background #fff
      padding 10px 16px
      margin-bottom 20px
      position relative
      h4
        font-size 18px
        font-weight bold
        padding 0 0 12px 0
      .slider
        height 100px
        padding-bottom 12px
        .swiper-container
          height 100px
          .swiper-slide
            background #d7f1e966
            border-radius 8px
            padding 10px
            box-sizing border-box
            display flex
            align-items center
            justify-content space-around
            cursor pointer
            &.active
              background #9df5da
            .text
              color #555
              font-size 16px
              p
                font-size 14px
                color #666
                padding 16px 0
              span
                font-size 20px
                font-weight bold
                color #333
      .charts
        h5
          font-weight bold



  @media (max-width: 920px)
    .select-wrapper
      display none

</style>
