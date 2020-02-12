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
import Button from './components/Button';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Button,
    Footer,
    Fragment,
  },
};
</script>

<style lang="scss">
  @import "./assets/css/normalize.css";
  @import "./assets/index.scss";
</style>
