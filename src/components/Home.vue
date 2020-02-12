<template>
  <div>
    <section>
      <div>
        <h1>Стиль минимализм в интерьере</h1>
      </div>
      <div>
        <p>Английское слово minimalism ёмко и лаконично отражает суть одноимённого
          направления дизайна. Описание его концепции можно представить следующим
          образом: ясность, точность композиции, простота, сдержанное использование
          выразительных средств.</p>
        <p>Дизайнеры прибегают к применению природных и промышленных материалов с малыми
          объёмами, нейтральной чёрно-серой цветовой гаммой, простыми геометрическими формами.
          Пространство и свет грамотно планируются и моделируются.</p>
      </div>
    </section>
    <listOfProducts :products="getAllProducts"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
    ]),
  },
};
</script>

<style lang="scss" scoped>


</style>

