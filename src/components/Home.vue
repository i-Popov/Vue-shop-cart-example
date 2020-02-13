<template>
  <div>
    <section class="main">
      <div class="main__container">
        <div class="main__title">
          <h1>Стиль<br>минимализм<br>в интерьере</h1>
        </div>
        <div class="main__description">
          <p>Английское слово minimalism ёмко и лаконично отражает суть одноимённого
            направления дизайна. Описание его концепции можно представить следующим
            образом: ясность, точность композиции, простота, сдержанное использование
            выразительных средств.</p>
          <p>Дизайнеры прибегают к применению природных и промышленных материалов с малыми
            объёмами, нейтральной чёрно-серой цветовой гаммой, простыми геометрическими формами.
            Пространство и свет грамотно планируются и моделируются.</p>
        </div>
      </div>
    </section>
    <ProductsList :products="getAllProducts" :colors="getAllColors"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductsList from './ProductsList';

export default {
  components: {
    ProductsList,
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getAllColors',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/resources";

  .main {
    min-height: 387px;
    height: 100%;
    display: flex;
    align-items: center;

    &__container {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      position: relative;

      @media (min-width: $tb_bp) {
        max-width: 1200px;
        justify-content: space-between;
      }
    }

    &__title {
      width: 100%;
      max-width: 351px;
      h1 {
        margin: 10px 0;
      }
    }

    &__description {
      width: 100%;
      max-width: 760px;
      p {
        line-height: 170%;
        letter-spacing: 0.01px;
        margin: 22px 0;
      }
    }
  }
</style>

