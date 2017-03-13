<template>
	<div class="recommend-wrapper">
    	<h3>推荐商家</h3>
		<div class="recommend-sec">
			<div class = "foods" v-for = "(item,index) in foods">
				<!--<router-link to="/orders">-->
				<router-link :to="{ path: 'shop', query:{id: item.seller.id}}">
				<!--<router-link :to="{name:'shop', params:{news_id: item.seller.id}}">-->
					<div class="inner">
						<div class="seller">
							<div class="avatar">
								<img :src = "item.seller.avatar"/>
							</div>
							<div class="content">
								<div class="seller-sec">
									<div class="name">{{item.seller.name}}</div>
									<div class="ensure"><span v-for = "(itm,index) in item.seller.ensure">{{itm}}</span></div>
								</div>
								<div class="list-sec">
									<div class="count"><span><star :size="48" :score="item.seller.score"></star></span><span class="score">{{item.seller.score}}</span><span>月售<i>{{item.seller.sellCount}}</i>单</span></div>
									<div class="support"><span v-for = "(itm,index) in item.seller.description" :class="classMap[itm.type]">{{itm.text}}</span></div>
								</div>
								<div class="price-sec">
									<div class="send">¥<i>{{item.seller.minPrice}}</i>元起送<em>&nbsp;|&nbsp;</em>配送费<i>约¥{{item.seller.deliveryPrice}}</i></div>
									<div class="detail"><span><i>{{item.seller.deliveryDistances}}</i>km</span><em>|</em><span class="time"><i>{{item.seller.deliveryTime}}</i>分钟</span></div>
								</div>
							</div>
						</div>
						<div class="benefit">
							<div class="showmore"><span>{{item.seller.supports.length}}个活动</span></div>
							<support :seller="item.seller"></support>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import star from '../../components/star/star'
import support from '../../components/support/support'
export default {
  props: {
    foods: Array
  },
  data () {
    return {
      sptlogo: '',
      classMap: []
    }
  },
  computed: {
    sptLogo () {
      return 'fnzs'
    }
  },
  created () {
    this.classMap = ['zsd', 'fnzs']
  },
  components: {
    'star': star,
    'support': support
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
.recommend-wrapper{
	padding-bottom: .42rem;
}
.recommend-wrapper h3{
	margin-left: .09rem;
	line-height: .34rem;
	font-size: .15rem;
	border-bottom: 1px solid #dfdfdf;
}
.foods{
	font-size: 0;
}
.foods{
	display: inline-block;
	width: 100%;
	padding-left: .09rem;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.foods .inner{
	padding: .14rem .09rem .01rem 0;
	border-bottom: 1px solid #dfdfdf;
}
.foods .seller{
	display: flex;
}
.foods:last-child{
	border-bottom: none;
}
.foods .avatar{
	flex: 0 0 .64rem;
}
.foods .avatar img{
	width: .56rem;
	height: .56rem;
	border: 1px solid #eee;
	border-radius: .02rem;
}
.foods .content{
	flex: 1;
	border-bottom: 1px dashed #dfdfdf;
}
.foods .seller-sec,
.foods .list-sec,
.foods .price-sec{
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	-webkit-justify-content: space-between;
    justify-content: space-between;
}
.foods .seller-sec .name{
	display: inline-block;
	vertical-align: top;
	color: #1a1a1a;
	font-size: .15rem;
	font-weight: bold;
}
.foods .seller-sec .ensure{
	text-align: right;
}
.foods .seller-sec .ensure span{
	display: inline-block;
	padding: 0 .02rem;
	font-size: .12rem;
	color: #999;
	text-align: center;
	border: 1px solid #999;
	border-radius: .02rem;
	-webkit-transform: scale(.8);
	-moz-transform: scale(.8);
	transform: scale(.8);
}
.foods .seller-sec .ensure span:last-child,
.foods .list-sec .support span:last-child{
	margin-right: 0;
}
.foods .list-sec .count,
.foods .price-sec .send{
	display: inline-block;
	vertical-align: top;
	color: #666;
	font-size: .12rem;
}
.foods .list-sec .count span{
	display: inline-block;
}
.foods .list-sec .count .score{
	padding-right: .01rem;
	color: #ff6509;
}
.foods .price-sec .send em{
	display: inline-block;
	color: #999;
	-webkit-transform: scaleY(.8);
	-moz-transform: scaleY(.8);
	transform: scaleY(.8);
}
.foods .list-sec .support,
.foods .price-sec .detail{
	display: inline-block;
	vertical-align: top;
	color: #999;
	font-size: .12rem;
}
.foods .list-sec .support span{
	display: inline-block;
	height: .12rem;
	line-height: .12rem;
	margin-right: .03rem;
	padding: 0 .02rem;
	font-size: .1rem;
}
.foods .list-sec .support .zsd{
	color: #2395ff;
	border: 1px solid #2395ff;
	border-radius: .02rem;
}
.foods .list-sec .support .fnzs{
	color: #fff;
	background: #2395FF;
	border: 1px solid #2395ff;
	border-radius: .02rem;
}
.foods .price-sec .detail .time{
	color: #2395ff;
}
.foods .price-sec .detail em{
	display: inline-block;
	vertical-align: top;
	padding: 0 .02rem;
	-webkit-transform: scaleY(.8);
	-moz-transform: scaleY(.8);
	transform: scaleY(.8);
}
.foods .price-sec{
	padding: .02rem 0 0;
}
.foods .benefit{
	position: relative;
	padding: .06rem 0 .06rem .64rem;
	color: #666;
	font-size: .12rem;
}
.showmore{
	position: absolute;
	top: .05rem;
	right: 0;
	color: #999;
}
.showmore span:after{
	position: relative;
	top: -.01rem;
	display: inline-block;
	vertical-align: middle;
	width: 0;
	height: 0;
	content: "";
	margin-left: .02rem;
	border-left: .04rem solid transparent;
	border-right: .04rem solid transparent;
	border-top: .04rem solid #999;
}
.foods .benefit ul{
	height: .32rem;
	overflow: hidden;
}
.foods .benefit ul li{
	line-height: .16rem;
}
.support .icon{
	display: inline-block
    vertical-align: top
    width: .12rem
    height: .12rem;
    margin-top: .02rem;
    margin-right: .02rem;
    background-size: .12rem .12rem;
    background-repeat: no-repeat;
}
.support .icon.decrease{
	bg-image('decrease_3')
}
.support .icon.discount{
	bg-image('discount_3')
}
.support .icon.guarantee{
	bg-image('guarantee_3')
}
.support .icon.invoice{
	bg-image('invoice_3')
}
.support .icon.special{
	bg-image('special_3')
}
.support .text{
	line-height: .12rem
	font-size: .12rem
}          
</style>
