<template>
  <section class="cart">
    <div class="cart__container">
      <div class="cartBox">
        <div class="cartBox__list">
          <div v-for="(product, index) in getProductsInCart"
               :key="index"
               class="cartBox__product">
            <div class="cartBox__img">
              <img :src="product.img" alt="">
            </div>
            <div class="cartBox__about">
              <div>
                <button class="cartBox__remove" @click="remove(index)">
                  <img src="../assets/images/remove.svg" alt="">
                </button>
                <h3>{{ product.title }}</h3>
                <div class="cartBox__description">{{ product.description }}</div>
              </div>
              <div class="cartBox__price">
                <div class="cartBox__price__item">
                  Цвет<span class="color"
                            v-for="color in product.color"
                            :key="color"
                            :style="'background:'+color"></span>
                </div>
                <div class="cartBox__price__item">
                  {{ product.cost.toLocaleString() }} ₽
                </div>
              </div>
            </div>
          </div>
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
        <form class="form__order"  @submit="checkForm" action="#">
          <ul v-if="errors.length">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <label>
            <input type="text" name="name" id="name" v-model.trim="name" placeholder="ФИО">
          </label>
          <label>
            <input type="text" name="phone" id="phone" v-model.number.trim="phone" placeholder="Номер телефона">
          </label>
          <button type="submit" value="Submit" class="form__button">Заказать</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      errors: [],
      name: null,
      phone: null,
    };
  },

  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
  methods: {
    ...mapActions([
      'removeProduct',
      'clearCartProducts',
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
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push('Поле "ФИО" обязательно для заполнения');
        return;
      } else if (!this.phone) {
        this.errors.push('Поле "Номер телефона" обязательно для заполнения');
        return;
      } setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Ваша заявка принята');
        this.clearCartProducts();
      }, 5000);
    },
    clear() {
      this.clearCartProducts();
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
      max-width: 400px;
      display: flex;
      flex-direction: column;
      margin: 0 0 50px;

      @media (min-width: $sp_bp) {
        max-width: 760px;
      }

      @media (min-width: $tb_bp) {
        margin: 0;
      }

      &__list {
        padding: 0;
      }

      &__product {
        display: flex;
        justify-content: space-between;
        position: relative;
        border-bottom: 1px solid $border_color;
        padding: 18px 0;

        &:first-child {
          border-top: 1px solid $border_color;
        }

        @media (max-width: $sp_bp) {
          align-items: center;
          flex-direction: column;
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
            border: 1px solid $border_color2;
            margin-left: 12px;
          }
        }
      }
    }

    .form {
      max-width: 360px;
      width: 100%;
      border: 1px solid $border_color;
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
</style>
