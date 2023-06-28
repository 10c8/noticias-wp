<template>
  <footer class="footer">
    <div class="container flex flex-col justify-between lg:flex-row lg:mx-auto">
      <div class="grid-cols-9 footer__left">
        <nav class="footer__nav">
          <ul class="flex flex-col items-center gap-3 m-0 lg:gap-6 lg:flex-row nav-items list-reset">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/radio">Rádio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/podcast">Podcasts</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/artigos">Artigos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/expediente">Expediente</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/enquetes">Enquetes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contato">Fale Conosco</router-link>
            </li>
          </ul>
        </nav>
        <span class="copyright">Copyright © {{ year }} Todos os direitos reservados</span>
      </div>
      <div class="grid-cols-3 footer__right">
        <a href="https://empresa.com.br" class="empresa-logo">
          <img src="https://site/teste/img/logo_empresa.png" alt="Empresa" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style type="postcss" scoped>
  .footer {
    height: 235px;

    & .container {
      @apply border-0 border-t border-gray-300;
      padding-top: 56px;
      padding-bottom: 56px;
      height: 100%;

      & .footer__right {
        @apply flex flex-col justify-end;
      }
    }

    &__nav {
      & .nav-items {
        @apply mb-5;

        & .nav-item {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: 15px;

          & a:hover {
            text-decoration: underline;
          }
        }
      }
    }

    & .copyright {
      @apply text-gray-600;
      font-family: 'Barlow', sans-serif;
      font-weight: 400;
      font-size: 15px;
    }
  }
</style>
