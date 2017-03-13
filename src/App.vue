<template>
    <div class="wrapper">
	    <div class="menu-item">
	    	<div class="item">
	    		<router-link to="/foods">
	    			<i class="ele"></i>
	    			<span>外卖</span>
	    		</router-link>
	    	</div>
	    	<div class="item">
	    		<router-link to="/finds">
	    			<i class="find"></i>
	    			<span>发现</span>
	    		</router-link>
	    	</div>
	    	<div class="item">
	    		<router-link to="/orders">
	    			<i class="order"></i>
	    			<span>订单</span>
	    		</router-link>
	    	</div>
	    	<div class="item">
	    		<router-link to="/myinfo">
	    			<i class="user"></i>
	    			<span>我的</span>
	    		</router-link>
	    	</div>
	    </div>
	    <keep-alive>
	    	<router-view :foods = "foods"></router-view>
	    </keep-alive>
	  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data () {
    return {
      foods: []
    }
  },
  created () {
    this.$http.get('/api/foods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.foods = response.data
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
@charset "utf-8";
body{
	font-size: .12rem;
	font-family: "微软雅黑","Microsoft YaHei", Arial, SimHei;
}
.recommend-wrapper{
	padding-bottom: .42rem;
}
.recommend-wrapper h3{
	margin-left: .09rem;
	line-height: .34rem;
	font-size: .15rem;
	border-bottom: 1px solid #dfdfdf;
}
.menu-item{
	z-index: 2;
	display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: .42rem;
	background: #fff;
}
.menu-item div{
	display: inline-block;
	flex: 1;
	text-align: center;
}
.menu-item div a{
	display: inline-block;
	width: 100%;
	height: 100%;
	color: #666;
}
.menu-item div i,
.menu-item div span{
	display: inline-block;
	vertical-align: top;
	width: 100%;
	text-align: center;
}
.menu-item div i{
	width: .21rem;
	height: .2rem;
	margin-top: .04rem;
}
.menu-item div i.ele{
	background: url(common/images/ele.png)no-repeat center center;
	background-size: contain;
}
.menu-item div i.find{
	background: url(common/images/find.png)no-repeat center center;
	background-size: contain;
}
.menu-item div i.order{
	background: url(common/images/order.png)no-repeat center center;
	background-size: contain;
}
.menu-item div i.user{
	background: url(common/images/user.png)no-repeat center center;
	background-size: contain;
}
.menu-item div span{
	-webkit-transform: scale(.8);
	-moz-transform: scale(.8);
	transform: scale(.8);
}
/*适配*/
@media only screen and (min-width: 321px) and (max-width: 360px) {
  html {font-size: 703%;}
}
@media only screen and (min-width: 361px) and (max-width: 413px) {
  html {font-size: 732%;}
}
@media only screen and (min-width:414px) and (max-width: 640px) {
  html {font-size: 808%;}
}
@media only screen and (width: 384px) {
  html {font-size: 750%;}
}
@media only screen and (width: 411px) {
  html {font-size: 800%;}
}
@media only screen and (width: 412px) {
  html {font-size: 800%;}
}
@media only screen and (width: 435px) {
  html {font-size: 845%;}
}
@media only screen and (width: 600px) {
  html {font-size: 1170%;}
}
@media screen and (min-width:768px){
  html{font-size: 1500%;}
}
</style>
