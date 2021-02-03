<template>
  <div class="main-text-box">
    <input type="checkbox" id="validated" value="valid" v-model="user_send" />

    <label class="validated_label" for="validated"
      >Показать присланные вопросы</label
    >
    <div v-for="qa in qaText" :key="qa.id" class="question-answer-box">
      <div class="validationIf" v-if="user_send == qa.user_send">
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
            <div class="code-box" v-if="qa.code != ''">
              <span class="code-box-code">{{ qa.code }} </span>
            </div>
            <p class="question-answer-box_answer">
              {{ qa.answer_second }}
            </p>
            <div class="code-box" v-if="qa.code_second != ''">
              <span class="code-box-code"> {{ qa.code_second }} </span>
            </div>
            <p class="question-answer-box_answer">
              {{ qa.answer_third }}
            </p>
            <div class="code-box" v-if="qa.code_third != ''">
              <span class="code-box-code"> {{ qa.code_third }} </span>
            </div>
            <p class="question-answer-box_answer">
              {{ qa.answer_fourth }}
            </p>
            <div class="code-box" v-if="qa.code_fourth != ''">
              <span class="code-box-code">{{ qa.code_fourth }} </span>
            </div>

            <div class="links">
              <div class="link_wrapper" v-if="qa.link_desc != ''">
                <span class="sourceLinks">- </span>
                <a v-bind:href="qa.link" class="link">{{ qa.link_desc }}</a>
              </div>
              <div class="link_wrapper" v-if="qa.link_desc_second != ''">
                <span class="sourceLinks">- </span>
                <a v-bind:href="qa.link_second" class="link">{{
                  qa.link_desc_second
                }}</a>
              </div>

              <div class="link_wrapper" v-if="qa.link_desc_third != ''">
                <span class="sourceLinks">- </span>
                <a v-bind:href="qa.link_third" class="link">{{
                  qa.link_desc_third
                }}</a>
              </div>

              <div class="link_wrapper" v-if="qa.link_desc_fourth != ''">
                <span class="sourceLinks">- </span>
                <a v-bind:href="qa.link_fourth" class="link">{{
                  qa.link_desc_fourth
                }}</a>
              </div>

              <div class="link_wrapper" v-if="qa.link_desc_fifth != ''">
                <span class="sourceLinks">- </span>
                <a v-bind:href="qa.link_fifth" class="link">{{
                  qa.link_desc_fifth
                }}</a>
              </div>
            </div>
            <span class="extra"> Дополнительно: {{ qa.extra }} </span>
            <p class="question-answer-box_close" @click="openbox(qa)">
              Закрыть
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//успешно замена на qaQuest, нужен другой компонент для отправленных через "форму"
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
      qaQuest: [],
      user_send: false,
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
<style>
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

  font-family: AnonymousPro;

  /* margin-left: 25px; */
  /* background: rgb(118, 101, 35); */
  /* background: linear-gradient(184deg, rgba(118, 101, 35, 0.5) 0%, rgba(118, 101, 35, 0.21332282913165268) 100%); */
  margin-top: 20px;
}

#validated {
  margin-left: 20px;
  margin-top: 20px;
}

.validated_label {
  margin: 10px;
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
  font-size: 20px;
}

.question-answer-box {
  position: relative;
  margin-left: 20px;
  font-size: 24px;
}

.code-box {
  border: 4px double #493b05;
  width: 50%;
  word-wrap: break-word;
}

.code-box-code {
  font-size: 24px;
  display: block;
  margin: 20px;
  margin-left: 15px;
  white-space: pre-line;
  line-height: 120%;
}

.question-answer-box_close {
  cursor: pointer;
  font-size: 18px;
  color: #c8a207;
  background-color: rgba(134, 113, 26, 0.3);
  border: 2px solid #c8a207;
  text-align: center;
  width: 100px;
}

.question-answer-box_close:hover {
  color: tomato;
}

.links {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
}

.links a {
  color: #ddb40e;
}

.links a:visited {
  color: #776006;
}

.link .extra {
  font-size: 20px;
}
</style>
