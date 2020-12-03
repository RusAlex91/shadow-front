<template>
  <transition name="fade">
    <div class="main-text-box">
      <div
        v-show="searchText.length < 5"
        v-for="qa in searchText"
        :key="qa.id"
        class="question-answer-box"
      >
        <transition name="fade">
          <p @click="openbox(qa)" class="question-answer-box_question">
            >>> {{ qa.question }}
          </p>
        </transition>
        <div v-show="qa.seen">
          <p class="question-answer-box_answer">
            {{ qa.answer }}
          </p>
          <div class="code-box">
            <span class="code-box-code" v-html="qa.code"> </span>
          </div>
          <p class="question-answer-box_close" @click="openbox(qa)">Закрыть</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    searchText: {},
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

/*  */

.main-text-box {
  width: 1000px;
  color: rgba(127, 255, 212, 0.863);
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
  border-bottom: 1px solid rgba(127, 255, 212, 0.863);
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
