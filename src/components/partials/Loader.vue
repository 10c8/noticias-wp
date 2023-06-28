<template>
  <div class="loader-wrapper">
    <div class="loading-animation" />
  </div>
</template>

<style type="postcss" scoped>
  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;

    & .loading-animation {
      @apply text-primary-500;
      width: 45px;
      height: 45px;
      background:
        linear-gradient(currentColor 0 0),
        linear-gradient(currentColor 0 0),
        linear-gradient(currentColor 0 0);
      background-repeat: no-repeat;
      animation:
        loading-animation-1 1s infinite,
        loading-animation-2 1s infinite;
    }
  }

  @keyframes loading-animation-1 {
     0%, 100% { background-size: 9px 100% }
    33%,  66% { background-size: 9px  40% }
  }

  @keyframes loading-animation-2 {
     0%,  33% { background-position:    0    0,  50% 100%, 100%    0 }
    66%, 100% { background-position:    0 100%,  50%    0, 100% 100% }
  }
</style>
