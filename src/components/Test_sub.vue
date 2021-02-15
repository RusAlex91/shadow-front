<template>
  <div class="main_test_box">
    <div class="" v-for="(test, index) in tests" :key="test.id">
      <div v-show="index === questionIndex">
        <p>Question {{ index + 1 }} of {{ tests.length }}:</p>

        <p>{{ test.question }}</p>
        <div v-if="empty_answer">
          <p>Вы не выбрали ответ на вопрос</p>
          <button @click="showAnswer(index)">Я знаю, покажи правильный</button>
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
          <p v-show="label_option == 'option_1'">{{ test.extra }}</p>
          <label class="option option_2">
            <input
              type="radio"
              name="option_2"
              v-bind:value="test.option_2"
              v-model="answer"
            />{{ test.option_2 }}</label
          >
          <p v-show="label_option == 'option_2'">{{ test.extra }}</p>
          <label class="option option_3">
            <input
              type="radio"
              name="option_3"
              v-bind:value="test.option_3"
              v-model="answer"
            />{{ test.option_3 }}</label
          >
          <p v-show="label_option == 'option_3'">{{ test.extra }}</p>
          <label class="option option_4">
            <input
              type="radio"
              name="option_4"
              v-bind:value="test.option_4"
              v-model="answer"
            />{{ test.option_4 }}</label
          >
          <p v-show="label_option == 'option_4'">{{ test.extra }}</p>
          <button
            class="submit_btn"
            @click.prevent="checkAnswer(index, test.answer, test.id)"
          >
            Submit
          </button>
          <!-- <button v-if="questionIndex > 0" v-on:click="prev">Предыдущий</button> -->
          <button v-on:click="next(tests.length)">Следующий</button>
          <p>{{ answer }}</p>
        </form>
      </div>
    </div>

    <div class="score" v-show="questionIndex == test_length">
      <h2 class="end_title">Тест {{ test_name.test_name }} завершен</h2>
      <p>Вы ответили на {{ score }} вопросов</p>

      <button @click="endQuiz">Завершить тест</button>
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
        (this.test_length = null);

      this.$emit("clicked", false);
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

      document.getElementsByClassName("submit_btn")[0].disabled = true;
    }, // Перейти к следующему вопросу
    next: function (test_length) {
      if (this.answer == "") {
        this.empty_answer = true;
      } else {
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

<style >
.valid {
  color: green;
}

.invalid {
  color: tomato;
}
.main_test_box {
  border-left: 4px solid brown;
  border-right: 4px solid brown;
  border-top: 4px solid brown;
  width: 100%;
  font-family: AnonymousPro;

  /* margin-left: 25px; */
  /* background: rgb(118, 101, 35); */
  /* background: linear-gradient(184deg, rgba(118, 101, 35, 0.5) 0%, rgba(118, 101, 35, 0.21332282913165268) 100%); */
  margin-top: 20px;
}

.test_case {
  display: flex;
  flex-direction: column;
}
</style>