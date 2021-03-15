<template>
  <div class="main_test_box">
    <div class="test_body" v-for="(test, index) in tests" :key="test.id">
      <div v-show="index === questionIndex">
        <p>Вопрос {{ index + 1 }} из {{ tests.length }}:</p>

        <p class="test_question">{{ test.question }}</p>
        <div class="empty_answer" v-if="empty_answer">
          <p>Вы не выбрали ответ на вопрос</p>
          <button class="empty_answer_btn" @click="showAnswer(index)">
            Я знаю, покажи правильный
          </button>
        </div>

        <form action="" class="test_case" v-on:submit.prevent="onSubmit">
          <label class="option option_1">
            <input
              type="radio"
              name="option_1"
              v-bind:value="test.option_1"
              v-model="answer"
            />{{ test.option_1 }}</label
          >
          <p class="test_extra" v-show="label_option == 'option_1'">
            {{ test.extra }}
          </p>
          <label class="option option_2">
            <input
              type="radio"
              name="option_2"
              v-bind:value="test.option_2"
              v-model="answer"
            />{{ test.option_2 }}</label
          >
          <p class="test_extra" v-show="label_option == 'option_2'">
            {{ test.extra }}
          </p>
          <label class="option option_3">
            <input
              type="radio"
              name="option_3"
              v-bind:value="test.option_3"
              v-model="answer"
            />{{ test.option_3 }}</label
          >
          <p class="test_extra" v-show="label_option == 'option_3'">
            {{ test.extra }}
          </p>
          <label class="option option_4">
            <input
              type="radio"
              name="option_4"
              v-bind:value="test.option_4"
              v-model="answer"
            />{{ test.option_4 }}</label
          >
          <p class="test_extra" v-show="label_option == 'option_4'">
            {{ test.extra }}
          </p>
          <div class="control_btns">
            <button
              class="submit_btn test_btn"
              @click.prevent="checkAnswer(index, test.answer, test.id)"
              :disabled="answered"
              v-bind:class="{ btn_disabled: answered == true }"
            >
              Отправить
            </button>

            <!-- <button v-if="questionIndex > 0" v-on:click="prev">Предыдущий</button> -->
            <button class="next_btn test_btn" v-on:click="next(tests.length)">
              Следующий
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="score" v-show="questionIndex == test_length">
      <h2 class="end_title">Тест {{ test_name.test_name }} завершен</h2>
      <p>Вы ответили на {{ score }} вопросов</p>

      <button class="test_btn" @click="endQuiz">Завершить тест</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionIndex: 0,
      answer: "",
      score: 0,
      empty_answer: false,
      label_option: "",
      test_index: null,
      test_length: null,
      show_test: false,
      answered: false,
    };
  },
  props: {
    tests: null,
    test_name: undefined,
  },
  // created() {
  //   this.$firebaseDatabase
  //     .collection("tests")
  //     .get()
  //     .then((querySnapshot) => {
  //       var arrayT = [];
  //       querySnapshot.forEach((doc) => {
  //         var key = doc.id;
  //         console.log(key);
  //         var arr = doc.data();
  //         arr.id = key;

  //         arrayT.push(arr);
  //       });
  //       this.tests = arrayT;
  //       console.log(arrayT);
  //     });

  //   console.log("create");
  // },
  methods: {
    onSubmit: function () {
      // this.answer = "";
    },
    endQuiz: function () {
      (this.questionIndex = 0),
        (this.answer = ""),
        (this.score = 0),
        (this.empty_answer = false),
        (this.label_option = ""),
        (this.test_index = null),
        (this.test_length = null),
        (this.show_test = false),
        (this.answered = false),
        this.$emit("endQuiz", false);
    },
    showAnswer(index) {
      var options = document.getElementsByClassName("option");

      for (let i = 0; i < options.length; i++) {
        if (options[i].innerText == this.tests[index].answer) {
          options[i].classList.toggle("valid");
          options[i].children[0].disabled = true;
          this.label_option = options[i].classList[1];
        } else {
          options[i].classList.toggle("invalid");
          options[i].children[0].disabled = true;
        }
      }

      this.answer = this.tests[index].answer;

      // for (let i = 0; i < options.length; i++) {
      //   if (options[i].innerText == this.answer) {
      //     options[i].classList.toggle("valid");
      //     options[i].children[0].disabled = true;
      //     this.score++;
      //     this.label_option = options[i].classList[1];
      //   } else {
      //     options[i].classList.toggle("invalid");
      //     options[i].children[0].disabled = true;
      //   }
      // }
    },

    checkAnswer: function (index) {
      // console.log(index, answer);
      // console.log(this.tests);
      // console.log(this.tests[index].id == id);

      // delete this.tests[index].answer; //психанул я хз как сделать так, что бы оно искало по выборке из двух
      // var answer_option_ = Object.keys(this.tests[index]).find(
      //   (key) => this.tests[index][key] == this.answer
      //   // &&
      //   // this.tests[index][key] != this.tests[index].answer
      // );
      var options = document.getElementsByClassName("option");

      if (this.answer == "") {
        this.empty_answer = true;
      } else {
        this.empty_answer = false;
        this.answered = true;
      }
      if (!this.empty_answer) {
        if (this.tests[index].answer == this.answer) {
          for (let i = 0; i < options.length; i++) {
            if (options[i].innerText == this.answer) {
              options[i].classList.toggle("valid");
              options[i].children[0].disabled = true;
              this.score++;
              this.label_option = options[i].classList[1];
            } else {
              options[i].classList.toggle("invalid");
              options[i].children[0].disabled = true;
            }
          }
        } else if (this.tests[index].answer != this.answer) {
          for (let i = 0; i < options.length; i++) {
            if (options[i].innerText == this.tests[index].answer) {
              options[i].classList.toggle("valid");
              options[i].children[0].disabled = true;
              this.label_option = options[i].classList[1];
            } else {
              options[i].classList.toggle("invalid");
              options[i].children[0].disabled = true;
            }
          }
        }
      }
    }, // Перейти к следующему вопросу
    next: function (test_length) {
      if (this.answer == "") {
        this.empty_answer = true;
      } else {
        this.answered = false;
        this.empty_answer = false;
        this.questionIndex++;
        this.label_option = "";
        document.getElementsByClassName("submit_btn")[0].disabled = false;
        var options = document.getElementsByClassName("option");

        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove("valid");
          options[i].classList.remove("invalid");
          options[i].children[0].disabled = false;
        }
        this.test_length = test_length;
      }
      this.answer = "";
    },
    // Вернуться к предыдущему вопросу
    // prev: function () {
    //   this.questionIndex--;
    //   this.answer_option_1 = false;
    //   this.answer_option_2 = false;
    //   this.answer_option_3 = false;
    //   this.answer_option_4 = false;
    // },
  },
};
</script>

<style>
.valid {
  color: green;
}

.invalid {
  color: tomato;
}
.main_test_box {
  font-family: AnonymousPro;
  width: 500px;
  /* margin-left: 25px; */
  /* background: rgb(118, 101, 35); */
  /* background: linear-gradient(184deg, rgba(118, 101, 35, 0.5) 0%, rgba(118, 101, 35, 0.21332282913165268) 100%); */
}

.empty_answer {
  font-size: 18px;
  padding-bottom: 20px;
}

.empty_answer p {
  color: rgb(216, 216, 16);
}

.test_case {
  display: flex;
  flex-direction: column;
}

.main_test_box {
  font-size: 20px;
}

.test_question {
}

.option {
  margin: 5px;
}

input[type="radio"] {
  margin-right: 10px;
}
label:hover {
  cursor: pointer;
  color: goldenrod;
}

.test_extra {
  margin: 0px;
  padding: 5px;
  font-size: 18px;
}

.submit_btn {
  margin-top: 40px;
  cursor: pointer;
}
.next_btn {
  margin-top: 20px;
  cursor: pointer;
}

.submit_btn:hover,
.next_btn:hover {
  background-color: rgba(134, 101, 18, 0.616);
}

.test_btn {
  border: 1px solid gold;
  width: 150px;
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}

.test_btn:hover {
  background-color: rgba(134, 101, 18, 0.616);
}

.empty_answer_btn {
  border-bottom: 1px solid gold;
  cursor: pointer;
}

.empty_answer_btn:hover {
  color: goldenrod;
}

.control_btns {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test_btn.btn_disabled {
  border: 1px solid gray;
  color: gray;
}

.btn_disabled:hover {
  background-color: rgba(128, 128, 128, 0.103);
}
</style>