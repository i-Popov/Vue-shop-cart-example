<template>
    <Fragment>
        <Header />
        <router-view></router-view>
        <Footer />
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer,
    Fragment,
  },
};
</script>

<style lang="scss">
  @import "./assets/css/normalize.css";
  @import "./assets/index.scss";
</style>
