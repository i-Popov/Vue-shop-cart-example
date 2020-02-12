<template>
  <section class="about">
    <div class="about__container">
      <div class="about__first">
        <div class="about__first__title">
          <h1>Мебель<br>от производителя<br>в Краснодаре</h1>
        </div>
        <div class="about__first__description">
          <p>Наша компания предлагает вам качественную мебель в Краснодаре
            разного назначения — кухонные и спальные гарнитуры,
            шкафы и диваны, стенки, горки, тумбы, прихожие и др.
            Вся продукция поставляется напрямую от производителя.</p>
          <p>Все конструкции отличаются высоким качеством, поскольку
            для их изготовления используется безопасное сырье и
            надежная фурнитура от ведущих компаний. Приобрести понравившийся
            товар вы можете в любое удобное время.</p>
        </div>
      </div>
      <div class="about__second">
        <div class="about__second__title">
          <h1>Больше, чем<br>интернет-магазин<br>мебели</h1>
        </div>
        <div class="about__second__description">
          <div class="home">
            <p>Возможность создать неповторимый интерьер квартиры, сделать обстановку дома уютной,
              пребывание гостей в офисе – комфортабельным. А для нас, команды Дивана, мебель –
              это объект искреннего интереса и увлечения. Поэтому мы неизменно растем и стараемся
              предложить лучший ассортимент мебельного рынка.</p>
          </div>
          <div class="fashion">
            <div class="fashion__item">
              <p>Модно</p>
              <p>Мы активно следим за современными тенденциями, постоянно развиваем
                собственные навыки и возможности производства. </p>
            </div>
            <div class="fashion__item">
              <p>Молодёжно</p>
              <p>Кроме изделий собственного производства мы предлагаем в каталоге
                широкий ассортимент диванов и другой мебели известных фабрик Москвы и России.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss">
  @import "../assets/resources";
  .about {
    &__container {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;

      @media (min-width: $tb_bp) {
        max-width: 1200px;
      }
    }

    &__first {
      display: flex;
      justify-content: center;
      min-height: 387px;
      align-items: center;

      @media (min-width: $tb_bp) {
        justify-content: space-between;
        margin-bottom: 30px;
      }

      &__title {
        width: 100%;
        max-width: 360px;
        h1 {
          margin: 0 0 48px;
        }
      }

      &__description {
        width: 100%;
        max-width: 760px;
        padding-right: 26px;
        p {
          line-height: 170%;
          letter-spacing: 0.01px;
          margin: 22px 0;
        }
      }
    }

    &__second {
      display: flex;
      justify-content: center;

      @media (min-width: $tb_bp) {
        justify-content: space-between;
        padding-bottom: 110px;
      }

      &__title {
        width: 100%;
        max-width: 360px;
        h1 {
          margin: 0;
        }
      }

      &__description {
        width: 100%;
        max-width: 760px;
        p {
          line-height: 170%;
          letter-spacing: 0.01px;
          margin: 10px 0;
        }
        .home {
          margin-bottom: 53px;
        }
        .fashion {
          display: flex;
          justify-content: space-between;
          &__item {
            width: 100%;
            max-width: 360px;
            p:first-child {
              color: $text_color2;
            }
          }
        }
      }
    }
  }
</style>

