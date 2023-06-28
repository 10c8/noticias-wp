<template>
  <div class="clock">
    <span class="clock__date">{{ date }}</span>
    <span class="clock__time">{{ time }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      date: null,
      time: null
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  created() {
    // Set the initial date and time
    const date = new Date();
    const day = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit'
    }).format(date);
    const month = new Intl.DateTimeFormat('pt-BR', {
      month: 'long'
    }).format(date);

    this.date = `${day}, ${month}`;
    this.time = date.toLocaleTimeString('pt-BR');

    // Update the time every second
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString('pt-BR');
    }, 1000);
  }
}
</script>

<style type="postcss" scoped>
.clock {
  @apply select-none;

  & span {
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	&__date {
		@apply text-black;
		font-family: 'Barlow', sans-serif;
		font-weight: 700;
		text-decoration: none;
	}

	&__time {
    @apply text-primary-400;
    font-family: 'Arial', sans-serif;
    font-weight: 900;
	}
}
</style>
