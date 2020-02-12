<template>
  <div class="product-box">
    <div class="product-image">
      <img :src="currentProduct.img" alt="">
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ currentProduct.title }}</h2>
      <span class="product-price">{{ currentProduct.cost.toLocaleString() }} ₽</span>
      <Button btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Купить сейчас
      </Button>
      <span>{{ currentProduct.description }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from './Button';

export default {
  components: {
    Button,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style lang="scss" scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
