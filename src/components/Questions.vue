<template>
  <div class="main-text-box">
    <div v-for="qa in qaText" :key="qa.id" class="question-answer-box">
      <p
        @click="
          openbox(qa);
          scrollToElement({ behavior: 'smooth' });
        "
        class="question-answer-box_question"
      >
        >>> {{ qa.question }}
      </p>
      <transition name="fade">
        <div v-show="qa.seen">
          <p class="question-answer-box_answer">
            {{ qa.answer }}
          </p>
          <div class="code-box">
            <span class="code-box-code" v-html="qa.code"> </span>
          </div>
          <p class="question-answer-box_close" @click="openbox(qa)">Закрыть</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    qaText: {},
  },
  data() {
    return {
      seen: false,
      answerHidden: false,
      // message: `hello my ${HtmlAnswers[0].question}!`,
      dynamicList: [],
    };
  },
  computed: {},
  methods: {
    openbox: function (questionSeen) {
      questionSeen.seen = !questionSeen.seen;
    },
    scrollToElement(options) {
      const el = this.$el.getElementsByClassName(
        "question-answer-box_question"
      )[0];

      if (el) {
        el.scrollIntoView(options);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* animations */
/* .fade-enter-active {
  overflow: hidden;
  -webkit-animation: typing 1s steps(50, end);
  animation: typing 1s steps(50, end);
}

@-webkit-keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
} */

/*  */

.main-text-box {
  border-left: 4px solid #c8a207;
  border-right: 4px solid #c8a207;
  border-top: 4px solid #c8a207;
  width: 1000px;

  /* margin-left: 25px; */
  /* background: rgb(118, 101, 35); */
  /* background: linear-gradient(184deg, rgba(118, 101, 35, 0.5) 0%, rgba(118, 101, 35, 0.21332282913165268) 100%); */
}

.middle-text-container {
  display: flex;
  flex-direction: column;
}

.question-answer-box_question {
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
}

.question-answer-box_question:hover {
  border-bottom: 1px solid #c8a207;
}

.question-answer-box_answer {
}

.question-answer-box {
  position: relative;
  margin-left: 20px;
  font-size: 24px;
}

.code-box {
  border: 4px double #493b05;
  width: 50%;
}

.code-box-code {
  font-size: 24px;
  display: block;
  margin: 20px;
}

.question-answer-box_close {
  cursor: pointer;
}
</style>
