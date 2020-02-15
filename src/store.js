import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-1.jpg'),
        title: 'Обеденный стол Renno 100 см',
        description: 'Обеденный стол Renno от Storeforhome стильное решение для вашего пространства. ',
        color: ['black', 'white'],
        cost: 24500,
      },
      {
        id: 2,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-2.jpg'),
        title: 'Стул Elbert голубая ткань',
        description: 'С белой тканью тоже есть.',
        color: ['blue', 'white'],
        cost: 9990,
      },
      {
        id: 3,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-3.jpg'),
        title: 'Угловой диван Vario',
        description: 'Для создания комфортной домашней обстановки. Отличается простотой и лаконичным дизайном.',
        color: ['black', 'white'],
        cost: 8500,
      },
      {
        id: 4,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-4.jpg'),
        title: 'Книжный шкаф Stanmore',
        description: 'Шкаф имеет как открытые , так и закрытые, что позволяет сделать весьма удобную расстановку.',
        color: ['white'],
        cost: 45800,
      },
      {
        id: 5,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-5.jpg'),
        title: 'Кресло Swan красное',
        description: 'Кресло Swan Chair — культовая модель кресла, название которой переводится как «лебедь».',
        color: ['red', 'white', 'black'],
        cost: 22350,
      },
      {
        id: 6,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-6.jpg'),
        title: 'Пенёк',
        description: 'Небольшая часть ствола дерева. Пень может быть как ещё живым, так и мёртвым',
        color: ['black'],
        cost: 1000,
      },
    ],

    cartProducts: [],
    filtersApplied: [],
    currentProduct: {},
    showPopupCart: false,
    colors: ['black', 'white', 'blue', 'red'],
    minPrice: 1000,
    maxPrice: 46000,
  },

  getters: {
    getAllProducts: state => state.items,
    getAllColors: state => state.colors,
    getProductsInCart: state => state.cartProducts,
    getFiltersApplied: state => state.filtersApplied,
    getCurrentProduct: state => state.currentProduct,
    getPopupCart: state => state.showPopupCart,
    getMinPrice: state => state.minPrice,
    getMaxPrice: state => state.maxPrice,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
    ON_FILTER: (state, product) => {
      state.filtersApplied.push(product);
    },
    OFF_FILTER: (state, index) => {
      state.filtersApplied.splice(index, 1);
    },
    CLEAR_CART: (state) => {
      state.cartProducts = [];
    },
    LOAD_MIN_PRICE: (state, payload) => {
      state.minPrice = payload;
    },
    LOAD_MAX_PRICE: (state, payload) => {
      state.maxPrice = payload;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
    onFilter: (context, product) => {
      context.commit('ON_FILTER', product);
    },
    offFilter: (context, index) => {
      context.commit('OFF_FILTER', index);
    },
    clearCartProducts: (context, state) => {
      context.commit('CLEAR_CART', state);
    },
    loadMinPrice: (context, payload) => {
      context.commit('LOAD_MIN_PRICE', payload);
    },
    loadMaxPrice: (context, payload) => {
      context.commit('LOAD_MAX_PRICE', payload);
    },
  },
});
