<template >
  <div>
    <div class="form">
      <p>{{ testsNames }}</p>
      <p>ответ {{ answer }}</p>

      <form class="contact-form" @submit.prevent="saveContactMessage">
        <button type="button" @click="createTest = !createTest">
          Создать новый тест
        </button>
        <div v-if="createTest">
          <p class="alert">
            Внимание! Создание теста нужно проводить только один раз (он
            появится в выпадающим списке ниже). Создав тест далее нужно
            заполнить его вопросами через форму.
          </p>
          <label
            >Название теста:<input type="text" v-model="testName" />/></label
          >
        </div>
        <label for="qa_group">Выберите тест для добавления вопроса:</label>
        <select v-model="testName">
          <option v-for="test in testsNames" :key="test">{{ test }}</option>
        </select>
        <label for=""
          >Вопрос: <input type="text" v-model="question" required
        /></label>
        <div class="answers">
          <!-- first -->
          <label>Ответ 1:<input type="text" v-model="option_1" /></label>

          <label
            ><input
              type="checkbox"
              :value="option_1"
              @click="setAnswer($event.target.value)"
              :disabled="answer != ''"
              v-model="checkBox1"
            />Этот ответ правильный</label
          >
          <button type="button" v-on:click="showExtra = 'first'">
            Добавить объяснение к правильному ответу
          </button>
          <label v-if="showExtra == 'first'">
            <input type="text" class="extra" v-model="extra"
          /></label>
          <!-- second -->
          <label>Ответ 2:<input type="text" v-model="option_2" /></label>

          <label
            ><input
              type="checkbox"
              :value="option_2"
              @click="setAnswer($event.target.value)"
              :disabled="answer != ''"
              v-model="checkBox2"
            />Этот ответ правильный</label
          >
          <button type="button" v-on:click="showExtra = 'second'">
            Добавить объяснение к правильному ответу
          </button>
          <label v-if="showExtra == 'second'">
            <input type="text" class="extra" v-model="extra"
          /></label>
          <!-- third -->
          <label>Ответ 3:<input type="text" v-model="option_3" /></label>

          <label
            ><input
              type="checkbox"
              :value="option_3"
              @click="setAnswer($event.target.value)"
              :disabled="answer != ''"
              v-model="checkBox3"
            />Этот ответ правильный</label
          >
          <button type="button" v-on:click="showExtra = 'third'">
            Добавить объяснение к правильному ответу
          </button>
          <label v-if="showExtra == 'third'">
            <input type="text" class="extra" v-model="extra"
          /></label>
          <!-- fourth -->
          <label>Ответ 4:<input type="text" v-model="option_4" /></label>

          <label
            ><input
              type="checkbox"
              :value="option_4"
              @click="setAnswer($event.target.value)"
              :disabled="answer != ''"
              v-model="checkBox4"
            />Этот ответ правильный</label
          >
          <button type="button" v-on:click="showExtra = 'fourth'">
            Добавить объяснение к правильному ответу
          </button>
          <label v-if="showExtra == 'fourth'">
            <input type="text" class="extra" v-model="extra"
          /></label>
        </div>
        <button type="button" @click="resetCheckBoxAnswers">
          Cбросить выбор ответа
        </button>
        <button>Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      testsNames: [],
      question: "",
      option_1: "",
      option_2: "",
      option_3: "",
      option_4: "",
      testName: "",
      answer: "",
      checkBox1: undefined,
      checkBox2: undefined,
      checkBox3: undefined,
      checkBox4: undefined,
      extra: "",
      showExtra: "",
      createTest: false,
    };
  },

  methods: {
    saveContactMessage: function (e) {
      e.preventDefault();
      const messagesRef = this.$firebaseDatabase.collection("tests");
      messagesRef.add({
        question: this.question,
        option_1: this.option_1,
        option_2: this.option_2,
        option_3: this.option_3,
        option_4: this.option_4,
        test_name: this.testName,
        answer: this.answer,
        extra: this.extra,
        seen: false,
      });
    },
    setAnswer: function (answer) {
      if (this.answer == "") {
        this.answer = answer;
      } else if (this.answer == answer) {
        this.answer = "";
      }
    },
    resetCheckBoxAnswers: function () {
      this.answer = "";
      this.checkBox1 = false;
      this.checkBox2 = false;
      this.checkBox3 = false;
      this.checkBox4 = false;
    },
  },
  created() {
    this.$firebaseDatabase
      .collection("tests")
      .get()
      .then((querySnapshot) => {
        var arrayN = [];
        querySnapshot.forEach((doc) => {
          var arr = doc.data();
          var abc = arr.test_name;
          arrayN.push(abc);
        });
        var uniq = [...new Set(arrayN)];

        this.testsNames = uniq;
      });
  },
};
</script>
<style scoped>
.answers {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.contact-form {
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.alert {
  color: brown;
}
</style>
