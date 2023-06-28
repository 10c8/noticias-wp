<template>
  <div>
    <div class="header-pre">
      <div class="container lg:mx-auto">
        <a href="#" class="header-pre__label">
          Transmissão FM Ao Vivo
        </a>
        <Clock />
      </div>
    </div>
    <header class="header">
      <div class="container lg:mx-auto">
        <!--
        <button class="nav-toggle">
          TODO: Navigation toggle button
        </button>
        -->
        <router-link to="/">
          <img
            class="header__logo"
            src="https://site/teste/img/logo.png"
            alt="News"
          />
        </router-link>
        <nav class="header__nav nav">
          <ul class="m-0 nav-items list-reset md:flex md:justify-center md:items-center">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/radio">Rádio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/podcasts">Podcasts</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/artigos">Artigos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/anuncie">Anuncie</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/expediente">Expediente</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contato">Fale Conosco</router-link>
            </li>
          </ul>
        </nav>
        <!--
        <button class="nav-search">
          TODO: Navigation search button
        </button>
        -->
      </div>
    </header>
    <div class="ticker">
      <div class="container lg:mx-auto">
        <NewsTicker />
      </div>
    </div>
    <div class="header-post">
      <div class="container lg:mx-auto">
        <nav class="header-post__nav nav">
          <ul class="flex items-center justify-between m-0 nav-items list-reset">
            <li class="nav-item text-politics-500">
              <router-link to="/politica">Politica</router-link>
            </li>
            <li class="nav-item text-cities-500">
              <router-link to="/cidades">Cidades</router-link>
            </li>
            <li class="nav-item text-judicial-500">
              <router-link to="/judiciario">Judieciário</router-link>
            </li>
            <li class="nav-item text-economy-500">
              <router-link to="/economia">Economia</router-link>
            </li>
            <li class="nav-item text-world-500">
              <router-link to="/agronegocio">Agronegócio</router-link>
            </li>
            <li class="text-black nav-item">
              <router-link to="/concursos">Concursos</router-link>
            </li>
            <li class="nav-item text-sports-500">
              <router-link to="/esporte">Esporte</router-link>
            </li>
            <li class="nav-item text-national-500">
              <router-link to="/nacional">Nacional</router-link>
            </li>
            <li class="nav-item text-varieties-500">
              <router-link to="/variedades">Variedades</router-link>
            </li>
            <li class="nav-item text-world-500">
              <router-link to="/mundo">Mundo</router-link>
            </li>
            <li class="text-black nav-item">
              <router-link to="/entrevista">Entrevista</router-link>
            </li>
            <li class="nav-item text-world-500">
              <router-link to="/podcast">Podcast</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Clock from './header/Clock';
  import NewsTicker from './header/NewsTicker';

  export default {
    components: {
      Clock,
      NewsTicker
    }
  }
</script>

<style type="postcss" scoped>
  .header-pre {
    @apply bg-white;
    height: 36px;

    &__label {
      @apply text-primary-500;
      font-family: 'Barlow', sans-serif;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.04em;

      &:hover {
        @apply text-black;
      }
    }
  }

  .header {
    @apply z-10 bg-primary-500;
    height: 80px;

    &__logo {
      margin-left: 0;
      margin-right: auto;
      width: 200px;
      height: auto;
    }

    &__nav {
      & .nav-item > a {
        @apply text-white select-none;
        padding: 16px;

        &:after {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0;
          height: 2px;
          background: none repeat scroll 0 0 transparent;
          background: #fff;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
        }

        &:hover {
          text-decoration: none;
        }

        &:hover:after {
          left: 0;
          width: 100%;
        }
      }
    }
  }

  .ticker {
    @apply bg-white;
    height: 38px;
  }

  .header-post {
    @apply bg-white border-0 border-t border-b border-gray-300;
    height: 47px;

    & .container {
      @apply justify-center;
    }

    &__nav {
      width: 100%;

      & .nav-items {
        width: 100%;

        & .nav-item > a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .container {
    @apply pl-4 pr-4 flex justify-between items-center;
    height: 100%;
  }

  .nav {
    @apply flex justify-center items-center;

    & .nav-item > a {
      position: relative;
      margin: 0;
      font-family: 'Barlow', sans-serif;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      font-style: normal;
    }
  }
</style>
