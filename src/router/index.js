import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
import About from '../components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Продукты',
      component: Home,
    },
    {
      path: '/about',
      name: 'О нас',
      component: About,
    },
    {
      path: '/product-details',
      name: 'Детали',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Корзина',
      component: CartCheckout,
    },
  ],
});
