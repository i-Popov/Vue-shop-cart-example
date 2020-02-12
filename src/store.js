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
        colors: ['black', 'white'],
        cost: 24500,
      },
      {
        id: 2,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-2.jpg'),
        title: 'Стул Elbert голубая ткань',
        description: 'С белой тканью тоже есть.',
        colors: ['blue', 'white'],
        cost: 9990,
      },
      {
        id: 3,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-3.jpg'),
        title: 'Угловой диван Vario',
        description: 'Для создания комфортной домашней обстановки. Отличается простотой и лаконичным дизайном.',
        colors: ['black', 'white'],
        cost: 8500,
      },
      {
        id: 4,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-4.jpg'),
        title: 'Книжный шкаф Stanmore',
        description: 'Шкаф имеет как открытые , так и закрытые, что позволяет сделать весьма удобную расстановку.',
        colors: ['white'],
        cost: 45800,
      },
      {
        id: 5,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-5.jpg'),
        title: 'Кресло Swan красное',
        description: 'Кресло Swan Chair — культовая модель кресла, название которой переводится как «лебедь».',
        colors: ['red', 'white', 'black'],
        cost: 22350,
      },
      {
        id: 6,
        // eslint-disable-next-line global-require
        img: require('./assets/images/item-6.jpg'),
        title: 'Пенёк',
        description: 'Небольшая часть ствола дерева. Пень может быть как ещё живым, так и мёртвым',
        colors: ['black'],
        cost: 1000,
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
    minCost: 1000,
    maxCost: 46000,
  },

  getters: {
    getAllProducts: state => state.items,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
    getMinCost: state => state.minCost,
    getMaxCost: state => state.maxCost,
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
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
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
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
