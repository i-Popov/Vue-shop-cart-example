<template>
  <section class="cart">
    <div class="cart__container">
      <div class="cartBox">
        <div class="cartBox__list">
          <transition-group name="fade">
            <div v-for="(product, index) in getProductsInCart" :key="index" class="cartBox__product">
              <div class="cartBox__img">
                <img :src="product.img" alt="">
              </div>
              <div class="cartBox__about">
                <div>
                  <button class="cartBox__remove" @click="remove(index)"><img src="../assets/images/remove.svg" alt=""></button>
                  <h3>{{ product.title }}</h3>
                  <div class="cartBox__description">{{ product.description }}</div>
                </div>
                <div class="cartBox__price">
                  <div class="cartBox__price__item">
                    Цвет<span class="color" v-for="color in product.colors" :key="color" :style="'background:'+color"></span>
                  </div>
                  <div class="cartBox__price__item">
                    {{ product.cost.toLocaleString() }} ₽
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
        <div v-if="!hasProduct()" class="checkout-message">
          <h3>Корзина пуста...</h3>
          <router-link to="/">Нажмите, чтобы вернуться в каталог</router-link>
        </div>
      </div>
      <div class="form" v-if="hasProduct()">
        <h3>Оформление заказа</h3>
        <div class="form__item">
          <span>Кол-во</span>
          <span>{{ getProductsInCart.length }}</span>
        </div>
        <div class="form__item">
          <span>Доставка</span>
          <span>Бесплатно</span>
        </div>
        <div class="form__item">
          <span>Итого</span>
          <span>{{ totalPrice().toLocaleString() }} ₽</span>
        </div>
        <form class="form__order" action="">
          <label>
            <input type="text" placeholder="ФИО">
          </label>
          <label>
            <input type="text" placeholder="Номер телефона">
          </label>
          <button class="form__button">Заказать</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },

  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.cost, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/resources";
  .cart {
    width: 100%;
    min-height: calc(100vh - 180px);

    &__container {
      width: 100%;
      padding: 80px 20px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      @media (min-width: $tb_bp) {
        max-width: 1200px;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
      }
    }

    .cartBox {
      width: 100%;
      max-width: 760px;
      display: flex;
      flex-direction: column;

      &__list {
        padding: 0;
      }

      &__product {
        display: flex;
        justify-content: space-between;
        position: relative;
        border-bottom: 1px solid #E5E5E5;
        padding: 18px 0;
        &:first-child {
          border-top: 1px solid #E5E5E5;;
        }
      }

      &__img img {
        width: 100%;
        max-width: 260px;
      }

      &__about {
        width: 100%;
        max-width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          margin-bottom: 5px;
        }
      }

      &__remove {
        position: absolute;
        top: 10px;
        right: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          transform: scale(1.3);
        }
      }

      &__description {
        font-size: 16px;
        line-height: 150%;
        color: $text_color2;
      }

      &__price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__item {
          display: flex;
          align-items: center;

          &:last-child {
            font-weight: 300;
            font-size: 36px;
            line-height: 100%;
          }

          .color {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            margin-left: 12px;
          }
        }
      }
    }


    .form {
      max-width: 360px;
      width: 100%;
      border: 1px solid #E5E5E5;
      padding: 10px 30px;
      display: flex;
      flex-direction: column;

      h3 {
        text-align: center;
        margin-bottom: 35px;
      }

      &__item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      &__order {
        display: flex;
        flex-direction: column;

        label {
          padding-top: 11px;
        }
        input {
          padding: 14px 15px;
          width: 100%;
          border: 1px solid $secondary_color;
          &::placeholder {
            color: $text_color2;
          }
        }
      }

      &__button {
        cursor: pointer;
        padding: 14px 0;
        margin: 30px 0;
        border: 1px solid $secondary_color;
        background-color: transparent;
        font-weight: 600;
        font-size: 17px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
