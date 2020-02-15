<template>
  <section>
    <div class="filter">
      <div class="filter__container">
        <h2>Выберите параметры</h2>
        <div class="filter__box">
          <span>Цвет</span>
          <a href="#"
             class="filter__color"
             v-for='(color, index) in colors'
             :key="index"
             :class="{selected: isActive(color)}"
             @click.prevent="setActive(color)"
             :style="'background:'+color"></a>
        </div>
        <div class="filter__box">
          <input v-model.number="minPrice"/>
          <input v-model.number="maxPrice" />
        </div>
      </div>
    </div>
    <div class="products">
      <div class="products__container">
        <h3 v-if='filteredItems.length === 0'>Товар не найден</h3>
        <div class="product" v-for="(product, index) in filteredItems" :key="index">
          <div class="product__img">
            <img :src="product.img" alt="">
          </div>
          <router-link to="/product-details">
            <h3 class="product__title" @click="addCurrentProduct(product)">
              {{ product.title }}
            </h3>
          </router-link>
          <div class="product__description">
            {{ product.description }}
          </div>
          <div class="product__price">
            <div class="product__price__item">
              Цвета<span
                    class="color"
                    v-for="color in product.color"
                    :key="color"
                    :style="'background:'+color"></span>
            </div>
            <div class="product__price__item">
              {{ product.cost.toLocaleString() }} ₽
            </div>
          </div>
          <Button class="product__button" @click.native="addProductToCart(product)">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button';

export default {
  props: ['products', 'colors'],

  // data() {
  //   return {
  //     minPrice: 1000,
  //     maxPrice: 46000,
  //   };
  // },

  components: {
    Button,
  },

  computed: {
    ...mapGetters([
      'getFiltersApplied',
      'getMinPrice',
      'getMaxPrice',
    ]),
    minPrice: {
      get() {
        return this.getMinPrice;
      },
      set(cost) {
        this.loadMinPrice(cost);
      },
    },
    maxPrice: {
      get() {
        return this.getMaxPrice;
      },
      set(cost) {
        this.loadMaxPrice(cost);
      },
    },

    filteredItems() {
      return this.products

        .filter(product => {
          return this.getFiltersApplied.every(filterApplied =>
            product.color.includes(filterApplied));
        })

        .filter(product => {
          return Number(product.cost) >= this.minPrice && Number(product.cost) <= this.maxPrice;
        });
    },
  },

  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
      'onFilter',
      'offFilter',
      'loadMinPrice',
      'loadMaxPrice',
    ]),

    setActive(product) {
      if (this.getFiltersApplied.indexOf(product) > -1) {
        this.offFilter(product);
      } else {
        this.onFilter(product);
      }
    },
    isActive(product) {
      return this.getFiltersApplied.indexOf(product) > -1;
    },
    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/resources";
  .filter {
    height: 100px;
    width: 100%;
    background-color: $secondary_color2;
    display: flex;
    align-items: center;

    &__container {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;

      @media (min-width: $tb_bp) {
        max-width: 1200px;
      }
    }

    &__box {
      display: flex;
      align-items: center;
      padding-left: 107px;
      span {
        padding-right: 16px;
      }
    }

    &__color {
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin: 5px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      transition: .3s all;

      &:hover,
      &.selected {
        background: rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .products {
    width: 100%;
    min-height: calc(100vh - 667px);

    &__container {
      width: 100%;
      padding: 50px 20px;
      margin: 0 auto;
      display: flex;
      align-items: stretch;
      justify-content: center;
      position: relative;
      flex-wrap: wrap;

      @media (min-width: $tb_bp) {
        max-width: 1200px;
        justify-content: space-between;
        padding: 90px 20px;
      }
    }

    .product {
      width: 100%;
      max-width: 360px;
      background-color: #fff;
      list-style: none;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__img img {
        width: 100%;
        max-width: 360px;
      }

      &__title {
        margin: 16px 0 6px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      &__description {
        font-size: 16px;
        line-height: 150%;
        color: $text_color2;
        min-height: 48px;
        margin-bottom: 5px;
      }

      &__price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        &__item {
          display: flex;
          align-items: center;

          &:last-child {
            font-weight: 300;
            font-size: 36px;
            line-height: 140%;
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
      &__button {
        padding: 13px 0;
        background-color: $primary_color;
        border: 1px solid $secondary_color;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          background-color: $secondary_color;
          color: $text_color3;
        }
      }
    }
  }
</style>

