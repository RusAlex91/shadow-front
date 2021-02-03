<template id="contact-form-template">
  <div class="contact-form">
    <h2 @click="submit_allow = !submit_allow">Submit a QA in database</h2>
    <div class="form" v-if="submit_allow">
      <form class="contact-form" @submit.prevent="saveContactMessage">
        <label for="qa_group">Выберите категорию вопроса:</label>
        <select class="qa_group" required v-model="qa_group">
          <option>html</option>
          <option>css</option>
          <option>js</option>
          <option>misc</option>
        </select>
        <div
          class="form-control_question"
          :class="{ invalid: validate_question === 'invalid' }"
        >
          <label for="input_question">Вопрос:</label>
          <input
            required
            placeholder="Что такое HTML?"
            type="text"
            class="input_question"
            v-model="question"
            @blur="validate_question_input"
          />
          <p
            class="invalid_question_input-text"
            v-if="validate_question === 'invalid'"
          >
            Введите вопрос
          </p>
        </div>

        <div
          class="form-control_answer"
          :class="{ invalid: validate_answer === 'invalid' }"
        >
          <label for="textarea_answer">Ответ:</label>
          <textarea
            required
            placeholder="HTML это..."
            class="textarea_answer"
            v-model="answer"
            @blur="validate_answer_input"
          ></textarea>

          <p v-if="validate_answer === 'invalid'">Введите ответ</p>

          <label class="textarea_code-label" for="textarea_code">Код:</label>
          <textarea
            placeholder="<html></html>"
            class="textarea_code"
            v-model="code"
          ></textarea>
          <p v-if="validate_answer === 'invalid'">Опционально введите код</p>
        </div>

        <button
          class="add_q_a_code"
          type="button"
          @click="
            moreA = !moreA;
            add_answer_isPressedA = !add_answer_isPressedA;
          "
          :class="{ btn_pressed: add_answer_isPressedA }"
        >
          Добавить тест с кодом
        </button>
        <!-- Second section with answer and code -->
        <div
          v-if="moreA"
          class="form-control_answer"
          :class="{ invalid: validate_answer_second === 'invalid' }"
        >
          <label for="textarea_answer">Ответ:</label>
          <textarea
            placeholder=""
            class="textarea_answer"
            v-model="answer_second"
            @blur="validate_answer_input"
          ></textarea>

          <p v-if="validate_answer_second === 'invalid'">Введите ответ</p>

          <label class="textarea_code-label" for="textarea_code">Код:</label>
          <textarea
            placeholder=""
            class="textarea_code"
            v-model="code_second"
          ></textarea>

          <p v-if="validate_answer_second === 'invalid'">
            Опционально введите код
          </p>
          <button
            type="button"
            class="add_q_a_code"
            @click="
              moreB = !moreB;
              add_answer_isPressedB = !add_answer_isPressedB;
            "
            :class="{ btn_pressed: add_answer_isPressedB }"
          >
            Добавить тест с кодом
          </button>
        </div>

        <!-- Third section with answer and code -->
        <div
          v-if="moreB"
          class="form-control_answer"
          :class="{ invalid: validate_answer_third === 'invalid' }"
        >
          <label for="textarea_answer">Ответ:</label>
          <textarea
            placeholder=""
            class="textarea_answer"
            v-model="answer_third"
            @blur="validate_answer_input"
          ></textarea>

          <p v-if="validate_answer_third === 'invalid'">Введите ответ</p>

          <label class="textarea_code-label" for="textarea_code">Код:</label>
          <textarea
            placeholder=""
            class="textarea_code"
            v-model="code_third"
          ></textarea>

          <p v-if="validate_answer_third === 'invalid'">
            Опционально введите код
          </p>
          <button
            type="button"
            class="add_q_a_code"
            @click="
              moreC = !moreC;
              add_answer_isPressedC = !add_answer_isPressedC;
            "
            :class="{ btn_pressed: add_answer_isPressedC }"
          >
            Добавить тест с кодом
          </button>
        </div>

        <!-- Fourth section with answer and code -->
        <div
          v-if="moreC"
          class="form-control_answer"
          :class="{ invalid: validate_answer_fourth === 'invalid' }"
        >
          <label for="textarea_answer">Ответ:</label>
          <textarea
            placeholder=""
            class="textarea_answer"
            v-model="answer_fourth"
            @blur="validate_answer_input"
          ></textarea>

          <p v-if="validate_answer_fourth === 'invalid'">Введите ответ</p>

          <label class="textarea_code-label" for="textarea_code">Код:</label>
          <textarea
            placeholder=""
            class="textarea_code"
            v-model="code_fourth"
          ></textarea>

          <p v-if="validate_answer_fourth === 'invalid'">
            Опционально введите код
          </p>
        </div>
        <!-- extra  -->
        <label for="textarea_extra">Дополнительно:</label>
        <textarea
          placeholder="А ещё HTML..."
          class="textarea_extra"
          v-model="extra"
        ></textarea>
        <!-- links  -->
        <div class="link_group">
          <label for="input_link_desc">Описание ссылки:</label>
          <input
            placeholder="MDN"
            type="text"
            class="input_link_desc"
            v-model="link_desc"
          />
          <label for="input_link">Ссылка:</label>
          <input
            placeholder="https://developer.mozilla.org/"
            type="text"
            class="input_link"
            v-model="link"
          />
        </div>
        <!-- adding 1 more -->
        <button
          type="button"
          @click="
            linkA = !linkA;
            add_link_isPressedA = !add_link_isPressedA;
          "
          v-bind:class="{ add_link: isLink, btn_pressed: add_link_isPressedA }"
          ref="btnToggleA"
        >
          Добавить ссылку
        </button>
        <div class="link_group" v-if="linkA">
          <label for="input_link_desc">Описание ссылки:</label>
          <input
            placeholder="MDN"
            type="text"
            class="input_link_desc"
            v-model="link_desc_second"
          />
          <label for="input_link">Ссылка:</label>
          <input
            placeholder="https://developer.mozilla.org/"
            type="text"
            class="input_link"
            v-model="link_second"
          />
          <button
            type="button"
            @click="
              linkB = !linkB;
              add_link_isPressedB = !add_link_isPressedB;
            "
            v-bind:class="{
              add_link: isLink,
              btn_pressed: add_link_isPressedB,
            }"
            ref="btnToggleB"
          >
            Добавить ссылку
          </button>
        </div>

        <div class="link_group" v-if="linkB">
          <label for="input_link_desc">Описание ссылки:</label>
          <input
            placeholder="MDN"
            type="text"
            class="input_link_desc"
            v-model="link_desc_third"
          />
          <label for="input_link">Ссылка:</label>
          <input
            placeholder="https://developer.mozilla.org/"
            type="text"
            class="input_link"
            v-model="link_third"
          />
          <button
            type="button"
            @click="
              linkC = !linkC;
              add_link_isPressedC = !add_link_isPressedC;
            "
            v-bind:class="{
              add_link: isLink,
              btn_pressed: add_link_isPressedC,
            }"
            ref="btnToggleC"
          >
            Добавить ссылку
          </button>
        </div>

        <div class="link_group" v-if="linkC">
          <label for="input_link_desc">Описание ссылки:</label>
          <input
            placeholder="MDN"
            type="text"
            class="input_link_desc"
            v-model="link_desc_fourth"
          />
          <label for="input_link">Ссылка:</label>
          <input
            placeholder="https://developer.mozilla.org/"
            type="text"
            class="input_link"
            v-model="link_fourth"
          />
          <button
            type="button"
            @click="
              linkD = !linkD;
              add_link_isPressedD = !add_link_isPressedD;
            "
            v-bind:class="{
              add_link: isLink,
              btn_pressed: add_link_isPressedD,
            }"
            ref="btnToggleD"
          >
            Добавить ссылку
          </button>
        </div>

        <div class="link_group" v-if="linkD">
          <label for="input_link_desc">Описание ссылки:</label>
          <input
            placeholder="MDN"
            type="text"
            class="input_link_desc"
            v-model="link_desc_fifth"
          />
          <label for="input_link">Ссылка:</label>
          <input
            placeholder="https://developer.mozilla.org/"
            type="text"
            class="input_link"
            v-model="link_fifth"
          />
        </div>
        <button class="send" type="submit" value="Submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      qa_group: "",
      question: "",
      answer: "",
      answer_second: "",
      answer_third: "",
      answer_fourth: "",
      code: "",
      code_second: "",
      code_third: "",
      code_fourth: "",
      extra: "",
      link_desc: "",
      link: "",
      link_desc_second: "",
      link_second: "",
      link_desc_third: "",
      link_third: "",
      link_desc_fourth: "",
      link_fourth: "",
      link_desc_fifth: "",
      link_fifth: "",

      submit_allow: false,

      moreA: false,
      moreB: false,
      moreC: false,

      linkA: false,
      linkB: false,
      linkC: false,
      linkD: false,

      isLink: true,

      add_link_isPressed: false,
      add_link_isPressedA: false,
      add_link_isPressedB: false,
      add_link_isPressedC: false,
      add_link_isPressedD: false,
      add_answer_isPressed: false,
      add_answer_isPressedA: false,
      add_answer_isPressedB: false,
      add_answer_isPressedC: false,

      validate_question: "pending",
      validate_answer: "pending",
      validate_answer_second: "pending",
      validate_answer_third: "pending",
      validate_answer_fourth: "pending",
    };
  },

  methods: {
    saveContactMessage: function (e) {
      e.preventDefault();
      const messagesRef = this.$firebaseDatabase.collection("qa");
      messagesRef.add({
        qa_group: this.qa_group,
        question: this.question,
        answer: this.answer,
        answer_second: this.answer_second,
        answer_third: this.answer_third,
        answer_fourth: this.answer_fourth,
        code: this.code,
        code_second: this.code_second,
        code_third: this.code_third,
        code_fourth: this.code_fourth,
        extra: this.extra,
        link_desc: this.link_desc,
        link: this.link,
        link_desc_second: this.link_desc_second,
        link_second: this.link_second,
        link_desc_third: this.link_desc_third,
        link_third: this.link_third,
        link_desc_fourth: this.link_desc_fourth,
        link_fourth: this.link_fourth,
        link_desc_fifth: this.link_desc_fifth,
        link_fifth: this.link_fifth,
        user_send: true,
        seen: false,
      });
      (this.qa_group = "Misc"),
        (this.question = ""),
        (this.answer = ""),
        (this.answer_second = ""),
        (this.answer_third = ""),
        (this.answer_fourth = ""),
        (this.code = ""),
        (this.code_second = ""),
        (this.code_third = ""),
        (this.code_fourth = ""),
        (this.extra = ""),
        (this.link_desc = ""),
        (this.link = ""),
        (this.link_desc_second = ""),
        (this.link_second = ""),
        (this.link_desc_third = ""),
        (this.link_third = ""),
        (this.link_desc_fourth = ""),
        (this.link_fourth = ""),
        (this.link_desc_fifth = ""),
        (this.link_fifth = ""),
        (this.submit_allow = false),
        (this.moreA = false),
        (this.moreB = false),
        (this.moreC = false),
        (this.linkA = false),
        (this.linkB = false),
        (this.linkC = false),
        (this.linkD = false),
        (this.add_link_isPressed = false),
        (this.add_link_isPressedA = false),
        (this.add_link_isPressedB = false),
        (this.add_link_isPressedC = false),
        (this.add_link_isPressedD = false),
        (this.add_answer_isPressed = false),
        (this.add_answer_isPressedA = false),
        (this.add_answer_isPressedB = false),
        (this.add_answer_isPressedC = false),
        (this.snackbar = false);
    },
    validate_question_input: function () {
      if (this.question.trim() === "") {
        this.validate_question = "invalid";
      } else {
        this.validate_question = "valid";
      }
    },
    validate_answer_input: function () {
      if (this.answer.trim() === "") {
        this.validate_answer = "invalid";
      } else {
        this.validate_answer = "valid";
      }

      if (this.answer_second.trim() === "") {
        this.validate_answer_second = "invalid";
      } else {
        this.validate_answer_second = "valid";
      }
      if (this.answer_third.trim() === "") {
        this.validate_answer_third = "invalid";
      } else {
        this.validate_answer_third = "valid";
      }
      if (this.answer_fourth.trim() === "") {
        this.validate_answer_fourth = "invalid";
      } else {
        this.validate_answer_fourth = "valid";
      }
    },
    change_content: function () {},
  },
};
</script>
<style scoped>
.contact-form {
  font-size: 24px;
}

.contact-form h2 {
  font-size: inherit;
}

.contact-form h2:hover {
  color: #ffcc02;
  cursor: pointer;
}

.qa_group,
.input_question,
.textarea_answer,
.textarea_code,
.input_link,
.textarea_extra,
.input_link_desc {
  margin-bottom: 10px;
}
.add_q_a_code,
.add_link {
  margin: 10px;
  background-color: rgba(80, 80, 80, 0.397);
  cursor: pointer;

  font-size: 20px;
}

.add_q_a_code:hover {
  color: #ffcc02;
}

.send {
  margin: 10px;
  font-size: 24px;
  border: 2px solid burlywood;
}

.send:hover {
  background-color: rgba(245, 222, 179, 0.082);
  transition: all 0.1s;
}
.moreA {
  color: gray;
}

.btn_pressed {
  cursor: progress;
  color: lightgray;
  background-color: gray;
}

label {
  margin-bottom: 10px;
  font-size: 20px;
}
.contact-form {
  display: flex;
  flex-direction: column;
}

.answer_with_code {
  display: flex;
  flex-direction: column;
}

.link_group {
  display: flex;
  flex-direction: column;
}
.form-control_question {
  display: flex;
  flex-direction: column;
}

.form-control_answer {
  display: flex;
  flex-direction: column;
}

.form-control_question p {
  font-size: 14px;
  color: yellow;
}

.form-control_answer p {
  font-size: 14px;
  color: yellow;
}

.form-control_answer.invalid .textarea_code-label {
  color: inherit;
}

/* form validation */
.form-control_question.invalid input {
  border-color: red;
}
.form-control_question.invalid label {
  color: red;
}

.form-control_answer.invalid input {
  border-color: red;
}
.form-control_answer.invalid label {
  color: red;
}
</style>
