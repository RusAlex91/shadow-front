<template >
  <div>
    <form class="test-form" @submit.prevent="saveContactMessage">
      <button
        class="test-form_create-test-btn"
        type="button"
        @click="createTest = !createTest"
      >
        Создать новый тест
      </button>
      <div v-if="createTest">
        <p class="test-form_alert-text">
          Внимание! Создание теста нужно проводить только один раз (он появится
          в выпадающим списке). Создав тест далее нужно заполнить его вопросами
          через форму.
        </p>
        <label
          >Название теста:<input required type="text" v-model="testName"
        /></label>
      </div>

      <label for="category_select">Выберите группу вопросов:</label>
      <select
        class="category_select"
        @change="filterCategory(testCategorySelect)"
        v-model="testCategorySelect"
      >
        <option v-for="test in testCategory" :key="test">
          {{ test }}
        </option>
      </select>
      <label for="test_in_category_select">Выберите тест:</label>
      <select
        test_in_category_select
        v-show="testCategorySelect != undefined"
        :disabled="createTest"
        v-model="testName"
      >
        <option v-for="test in testsNames" :key="test">{{ test }}</option>
      </select>

      <label>Вопрос:</label>
      <textarea type="text" v-model="question" required></textarea>

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
</template>

<script>
export default {
  data() {
    return {
      message: null,
      testsNames: [],
      testsName: undefined,
      question: "",
      option_1: "",
      option_2: "",
      option_3: "",
      option_4: "",
      testName: "",
      testCategory: undefined,
      testCategorySelect: undefined,
      answer: "",
      checkBox1: undefined,
      checkBox2: undefined,
      checkBox3: undefined,
      checkBox4: undefined,
      extra: "",
      showExtra: "",
      createTest: false,
      testCategoryValue: undefined,
      testGroupArr: [],
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
        test_category: this.testCategorySelect,
        answer: this.answer,
        extra: this.extra,
        seen: false,
      });
      (this.question = ""),
        (this.option_1 = ""),
        (this.option_2 = ""),
        (this.option_3 = ""),
        (this.option_4 = ""),
        (this.answer = ""),
        (this.checkBox1 = undefined),
        (this.checkBox2 = undefined),
        (this.checkBox3 = undefined),
        (this.checkBox4 = undefined),
        (this.extra = ""),
        (this.showExtra = ""),
        (this.createTest = false),
        (this.test_category = undefined);
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
    filterCategory: function (cat) {
      var abc = this.testGroupArr;
      var abcAr = [];
      abc.forEach((element) => {
        if (element.test_category == cat) {
          abcAr.push(element.test_name);
        }
      });
      this.testsNames = abcAr;
    },
  },
  created() {
    this.$firebaseDatabase
      .collection("tests")
      .get()
      .then((querySnapshot) => {
        var arrayN = [];
        var arrayC = [];
        var testGroupArr = [];
        querySnapshot.forEach((doc) => {
          let testGroup = {};
          let arr = doc.data();
          let testName = arr.test_name;
          arrayN.push(testName);
          let testCat = arr.test_category;
          arrayC.push(testCat);

          let testCategory = arr.test_category;
          testGroup.test_name = testName;
          testGroup.test_category = testCategory;
          testGroupArr.push(testGroup);
        });
        var uniq = [...new Set(arrayN)];
        var uniqC = [...new Set(arrayC)];

        this.testsNames = uniq;

        this.testCategory = uniqC;
        this.testGroupArr = testGroupArr;
        console.log(testGroupArr);
      });
  },
};
</script>
<style >
.answers {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.answers > * {
  margin-bottom: 15px;
}

.contact-form {
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.test-form_create-test-btn {
  border: 2px solid khaki;
  width: 100px;
  padding: 10px;
}

.test-form_alert-text {
  color: brown;
}

.test-form {
  display: flex;
  flex-direction: column;
  width: 400px;
}
.test-form > * {
  margin-bottom: 15px;
}
</style>
