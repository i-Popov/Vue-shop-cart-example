<template>
  <section class="product">
    <div class="product__container">
      <div class="product__image">
        <img :src="currentProduct.img" alt="">
      </div>
      <div class="product__info">
        <h2 class="product__title">{{ currentProduct.title }}</h2>
        <span>{{ currentProduct.description }}</span>
        <span class="product__price">{{ currentProduct.cost.toLocaleString() }} ₽</span>
        <button class="product__button" @click="addProductToCart(currentProduct)">
          Купить сейчас
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
  },

};
</script>

<style lang="scss" scoped>
  @import "../assets/resources";

  .product {
    width: 100%;
    min-height: calc(100vh - 180px);

    &__container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 50px 0;
      flex-direction: column;

      @media (min-width: $tb_bp) {
        flex-direction: row;
        padding: 100px 0;
      }
    }

    &__image img {
      width: 100%;
      max-width: 360px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    &__price {
      font-size: 30px;
      margin: 20px 0;
    }

    &__button {
      background-color: transparent;
      border: 1px solid black;
      padding: 14px 0;
      cursor: pointer;
      margin: 20px 0;
      transition: 0.2s;

      &:hover {
        color: $primary_color;
        background: $secondary_color;
      }
    }
  }
</style>
