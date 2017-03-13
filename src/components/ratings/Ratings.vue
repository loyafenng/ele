<template>
  <div class="ratings" ref="ratings">
  	<div class="ratings-content">
  		<div class="overview">
  			<div class="overview-left">
  				<h1 class="score">{{seller.score}}</h1>
  				<div class="title">综合评分</div>
  				<div class="rank">高于周边商家{{seller.rankRate}}%</div>
  			</div>
  			<div class="overview-right">
  				<div class="score-wrapper">
  					<span class="title">服务态度</span>
  					<star :size="36" :score="seller.serviceScore"></star>
  					<span class="score">{{seller.serviceScore}}</span>
  				</div>
  				<div class="score-wrapper">
  					<span class="title">商品评分</span>
  					<star :size="36" :score="seller.foodScore"></star>
  					<span class="score">{{seller.foodScore}}</span>
  				</div>
  				<div class="delivery-wrapper">
  					<span class="title">送达时间</span>
  				  <span class="delivery">{{seller.deliveryTime}}分钟</span>
  				</div>
  			</div>
  		</div>
  		<split></split>
  		<div>
  			<ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent" :ratings="ratings"></ratingselect>
  		</div>
  		<div class="rating-wrapper">
  			<ul>
  				<li v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" class="rating-item">
  					<div class="avatar">
  						<img width="28px" height="28px" :src="rating.avatar"/>
  					</div>
  					<div class="content">
  						<h1 class="name">{{rating.username}}</h1>
  						<div class="star-wrapper">
  							<star :size="24" :score="rating.score"></star>
  							<span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
  						</div>
  						<p class="text">{{rating.text}}</p>
  						<div class="recommend" v-show="rating.recommend && rating.recommend.length">
  							<span class="icon-thumb_up"></span>
  							<span class="item" v-for="item in rating.recommend">{{item}}</span>
  						</div>
  						<div class="time">
  							{{rating.rateTime | formatDate}}
  						</div>
  					</div>
  				</li>
  			</ul>
  		</div>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import star from 'components/star/star';
	import split from 'components/split/split';
	import {formatDate} from 'common/js/date';
	import ratingselect from 'components/ratingselect/ratingselect';
	
	const ALL = 2;
	const ERR_OK = 0;
	
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
	    return {
	      showFlag: false,
	      selectType: ALL,
	      onlyContent: false,
	      ratings: []
	    };
    },
    methods: {
      needShow(type, text) {
	      if (this.onlyContent && !text) {
	        return false;
	      }
	      if (this.selectType === ALL) {
	        return true;
	      } else {
	        return type === this.selectType;
	      }
	    },
      selectRating(type) {
	      this.selectType = type;
	    },
	    toggleContent() {
	      this.onlyContent = !this.onlyContent;
	      this.$nextTick(() => {
	        this.scroll.refresh();
	      });
	    }
    },
    created() {
      this.$http.get('/api/ratings').then((response) => {
      response = response.body;
        if (response.errno === ERR_OK) {
          this.ratings = response.data;
          this.$nextTick(() => {
	          this.scroll = new BScroll(this.$refs.ratings, {
	            click: true
	          });
          });
	      }
      });
    },
    filters: {
	    formatDate(time) {
	      let date = new Date(time);
	      return formatDate(date, 'yyyy-MM-dd hh:mm');
	    }
	  },
    components: {
      star,
      split,
      ratingselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  @import "ratings.styl";
</style>
