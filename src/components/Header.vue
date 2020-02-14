<template>
    <header class="header">
        <div class="header__container">
            <router-link class="header__logo" to="/">Logo</router-link>
            <nav>
                <ul class="header__links">
                    <li>
                        <router-link to="/">Каталог</router-link>
                    </li>
                    <li>
                        <router-link to="/about">О нас</router-link>
                    </li>
                </ul>
            </nav>
            <Button class="header__button" @click.native="showPopupCart()">
                Корзина
                <span
                    class="header__button_item"
                    v-if="hasProduct()"
                >
                    {{ getProductsInCart.length }}
                </span>
            </Button>
            <PopupCart class="header__cart" v-if="getPopupCart"/>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from '../components/Button';
import PopupCart from '../components/PopupCart';

export default {
  components: {
    Button,
    PopupCart,
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

<style lang="scss" scoped>
@import "../assets/resources";
.header {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: $primary_color;
    border-bottom: 1px solid $border_color;

    &__container {
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        @media (min-width: $tb_bp) {
            max-width: 1200px;
            justify-content: space-between;
        }
    }

    &__logo {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
        position: relative;
        text-decoration: none;
        margin-left: 23px;
        letter-spacing: 0.05em;

        &::before {
            content: '';
            width: 18px;
            height: 18px;
            position: absolute;
            left: -23px;
            top: 3px;
            background-color: $secondary_color;
        }
    }

    &__links {
        padding-left: 125px;
        height: 20px;

        li {
            display: inline-block;
            list-style: none;
            margin: 0 28px;
            padding-bottom: 3px;
            &:hover{
                border-bottom: 1px solid $secondary_color;
            }
        }

        a.router-link-exact-active.router-link-active {
            border-bottom: 1px solid;
            padding-bottom: 3px;
        }
    }

    &__button {
        position: relative;
        background-color: $primary_color;
        border: none;
        padding: 8px 55px;
        cursor: pointer;
        display: flex;
        align-items: center;

        &::before {
            content: url("../../src/assets/images/cart-icon.svg");
            padding-right: 7px;
        }

        &_item {
            width: 31px;
            border: 1px solid black;
            height: 24px;
            position: absolute;
            top: 10px;
            right: 0;
            background-color: #fff;
            color: $secondary_color;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__cart {
        position: absolute;
        top: 75px;
        right: 0;
    }
}
</style>
