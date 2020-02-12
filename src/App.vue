<template>
  <div class="container">
    <Header>
      <Button btnColor="btn btn-small btn-info btn-popup"
         @click.native="showPopupCart()">
         Корзина
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </Button>
      <transition name="appear">
        <PopupCart class="cart" v-if="getPopupCart"/>
      </transition>
    </Header>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/Header';
import Button from './components/Button';
import PopupCart from './components/PopupCart';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Button,
    PopupCart,
    Footer,
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};
</script>

<style lang="scss">
  @import "./assets/css/normalize.css";
  @import "./assets/index.scss";

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
