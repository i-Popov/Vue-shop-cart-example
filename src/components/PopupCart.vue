<template>
  <div class="box">
    <div v-if="!hasProduct()">Для заказа выберите и добавьте товар в корзину</div>
    <div v-for="(product, index) in getProductsInCart"  :key="index" class="popupItem">
      <img :src="product.img" alt="" class="popupItem__thumb">
      <h3 class="popupItem__name">{{ product.title }}</h3>
      <span class="popupItem__amount">Количество: 1</span>
      <span class="popupItem__price">{{ product.cost.toLocaleString() }} ₽</span>
    </div>
    <div class="popupItem__info" v-if="hasProduct()">
      <span>Всего: {{ totalPrice().toLocaleString() }} ₽</span>
      <router-link to="/checkout">
        <button class="popupItem__button" @click="showPopupCart()">
          Посмотреть корзину
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.cost, 0);
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/resources";
  .box {
    width: 400px;
    height: auto;
    background-color: $secondary_color4;
    box-shadow: 0 0 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: absolute;
    z-index: 1;

    &:after {
      content: '';
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
      background: inherit;
      position: absolute;
      top: -15px;
      right: 15px;
    }

    .popupItem {
      width: 100%;
      height: 130px;
      background-color: $primary_color;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 0 .5em;
      margin-top: .3em;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);

      &__thumb {
        max-width: 70%;
        grid-column: 1/2;
        grid-row: 1/4;
        align-self: center;
      }

      &__name {
        grid-column: 2/4;
        grid-row: 1/2;
        font-weight: normal;
      }

      &__amount {
        grid-column: 2/3;
        grid-row: 2/4;
        color: $text_color2;
      }

      &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        font-size: 20px;
      }

      &__button {
        padding: 12px 20px;
        background: transparent;
        border: 1px solid #28282854;
        cursor: pointer;

        &:hover {
          background-color: $secondary_color;
          color: $primary_color;
        }
      }
    }
  }

</style>
