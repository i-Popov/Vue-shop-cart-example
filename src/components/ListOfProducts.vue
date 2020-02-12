<template>
  <section>


    <div>
      <label>Фильтр по цене</label>
      <input v-model.number="minCost" type="number" />
      <input v-model.number="maxCost" type="number" />
    </div>



    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <div>
          <img :src="product.img" alt="">
        </div>
        <router-link to="/product-details">
          <h3 class="product-name" @click="addCurrentProduct(product)">
            {{ product.title }}
          </h3>
        </router-link>
        <div>
          {{ product.description }}
        </div>
        <div class="product-price">
          <div class="color"
               v-for="(color, index) in product.colors"
               :key="index"
          :style="'background:'+color"></div>
          <div>
            {{ product.cost.toLocaleString() }} ₽
          </div>
        </div>
        <Button btnColor="btn btn-large btn-sucess" @click.native="addProductToCart(product)">
          В корзину
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button';

export default {
  props: ['products'],

  components: {
    Button,
  },


  computed: {
    ...mapGetters([
      'getMinCost',
      'getMaxCost',
    ]),
  },


  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

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
  .products {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .color{
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 1px solid grey;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

</style>

