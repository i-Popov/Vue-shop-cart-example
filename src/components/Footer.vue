<template>
  <footer class="footer">
    <div class="footer__container">
      <router-link class="footer__logo" to="/">Logo</router-link>
      <div class="footer__social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/facebook.svg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/instagram.svg" alt="Instagram">
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/twitter.svg" alt="Twitter">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "../assets/resources";
  .footer {
    width: 100%;
    height: 100px;
    background-color: #333333;
    display: flex;
    align-items: center;

    &__container {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      @media (min-width: $sp_bp) {
        max-width: 768px;
      }

      @media (min-width: $tb_bp) {
        max-width: 1200px;
      }
    }

    &__logo {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      position: relative;
      text-decoration: none;
      margin-left: 23px;
      color: $text_color3;
      letter-spacing: 0.05em;

      &::before {
        content: '';
        width: 18px;
        height: 18px;
        position: absolute;
        left: -23px;
        top: 3px;
        background-color: $primary_color;
      }
    }

    &__social {
      a {
        margin-left: 16px;
      }

      img {
        vertical-align: middle;
      }
    }
  }
</style>
