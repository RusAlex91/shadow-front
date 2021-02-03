<template>
  <transition name="fade">
    <div class="main-text-box main-text-box_color" v-if="searhHidden">
      <div class="validated_search_wrapper">
        <input
          type="checkbox"
          id="validated_search"
          value="valid"
          v-model="user_send_search"
        />

        <label class="validated_label" for="validated_search"
          >Показать присланные вопросы</label
        >
      </div>
      <div
        v-show="searchText.length < 5"
        v-for="qa in searchText"
        :key="qa.id"
        class="question-answer-box"
      >
        <div class="validationIf" v-if="user_send_search == qa.user_send">
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
                <span class="code-box-code_search code-box-code_color"
                  >{{ qa.code }}
                </span>
              </div>
              <p class="question-answer-box_answer">
                {{ qa.answer_second }}
              </p>
              <div class="code-box" v-if="qa.code_second != ''">
                <span class="code-box-code_search code-box-code_color">
                  {{ qa.code_second }}
                </span>
              </div>
              <p class="question-answer-box_answer">
                {{ qa.answer_third }}
              </p>
              <div class="code-box" v-if="qa.code_third != ''">
                <span class="code-box-code_search code-box-code_color">
                  {{ qa.code_third }}
                </span>
              </div>
              <p class="question-answer-box_answer">
                {{ qa.answer_fourth }}
              </p>
              <div class="code-box" v-if="qa.code_fourth != ''">
                <span class="code-box-code_search code-box-code_color"
                  >{{ qa.code_fourth }}
                </span>
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
  </transition>
</template>

<script >
export default {
  name: "HelloWorld",
  props: {
    searchText: {},
    searhHidden: Boolean,
  },
  data() {
    return {
      seen: false,
      answerHidden: false,
      // message: `hello my ${HtmlAnswers[0].question}!`,
      dynamicList: [],
      user_send_search: false,
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
.validated_search {
  margin-left: 5px;
  margin-top: 10px;
}

.validated_search_wrapper {
  margin: 10px;
}

.main-text-box {
  font-family: AnonymousPro;

  /* margin-left: 25px; */
  /* background: rgb(118, 101, 35); */
  /* background: linear-gradient(184deg, rgba(118, 101, 35, 0.5) 0%, rgba(118, 101, 35, 0.21332282913165268) 100%); */
}

.main-text-box_color {
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

.question-answer-box_close {
  cursor: pointer;
}

.code-box-code_color {
  color: rgba(69, 163, 132, 0.863);
}

.code-box {
  word-wrap: break-word;
}

.code-box-code_search {
  display: block;
  font-size: 20px;
  white-space: pre-line;
  line-height: 120%;
}
</style>
