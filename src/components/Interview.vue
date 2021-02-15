<template>
  <div>
    <p>
      Попробуйте пройти "интервью" ответив на несколько вопросов. Постарайтесь
      ответить на каждый по одному и максимально полно, а затем посмотрите
      "ответы" ниже:
    </p>
    <button
      v-if="!interview_start"
      v-on:click="
        interview_start = true;
        randomQ();
      "
    >
      Начать
    </button>

    <Questions v-if="interview_start" :qaText="int_q_random"></Questions>

    <button v-if="interview_start" @click="interview_start = true">
      Новое Интервью
    </button>
  </div>
</template>

<script>
import Questions from "./Questions.vue";

export default {
  components: {
    Questions,
  },
  props: {
    int_q: {},
    int_q_random: {},
  },
  data() {
    return {
      interview_start: false,
    };
  },
  methods: {
    randomQ: function () {
      var q = [];
      let i = 0;
      while (i < 3) {
        var randQ = this.int_q[Math.floor(Math.random() * this.int_q.length)];
        q.push(randQ);
        i++;
      }

      console.log(q);
      this.int_q_random = q;
      console.log(this.int_q_random);
    },
  },
};
</script>

<style >
</style>