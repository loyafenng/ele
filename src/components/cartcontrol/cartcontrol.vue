<template>
  <div class="cardcontrol">
  	<transition name="move">
  		<div class="card-decrease" v-show="food.count>0" @click.stop.prevent="removeCart">
  		  <span class="inner icon-remove_circle_outline"></span>
  		</div>
  	</transition>
  	
  	<div class="card-count"  v-show="food.count>0">
  		{{food.count}}
  	</div>
  	<div class="cart-add icon-add_circle" @click.stop.prevent="addCart">
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
	require('./cartControl.styl');
	
	import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count ++;
        }
        this.$emit('add', event.target);
      },
      removeCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count --;
        }
      }
    }
  };
</script>
