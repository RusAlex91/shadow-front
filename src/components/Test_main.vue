<template>
  <div class="tests_body">
    <div>
      <h2 class="tests_header">Выберите категорию:</h2>
      <div class="navigation_test">
        <span
          v-on:click="(selected = 'html'), testSelect('HTML')"
          v-bind:class="{ navigation_test_active: selected == 'html' }"
          >HTML</span
        >
        <span
          v-on:click="(selected = 'css'), testSelect('CSS')"
          v-bind:class="{ navigation_test_active: selected == 'css' }"
          >CSS</span
        >
        <span
          v-on:click="(selected = 'js'), testSelect('JS')"
          v-bind:class="{ navigation_test_active: selected == 'js' }"
          >JS</span
        ><span
          v-on:click="(selected = 'other'), testSelect('OTHER')"
          v-bind:class="{ navigation_test_active: selected == 'other' }"
          >Other</span
        >
      </div>
      <h3 v-if="selected != undefined" class="tests_header">Выберите тест:</h3>

      <div v-if="selected != undefined" class="test_list">
        <div v-for="item in tests_name_filtered" :key="item.test_name">
          <p
            v-if="!show_test"
            class="test_item"
            @click="openbox(item, tests_name_filtered)"
          >
            {{ item.test_name }}
          </p>
          <div v-if="item.seen">
            <div>
              <TestSub
                :tests="filters(item)"
                :test_name="item"
                @clicked="onClickChild(item, tests_name_filtered)"
              ></TestSub>
            </div>
          </div>
        </div>
      </div>

      <TestSubmitForm v-if="show_test_form"></TestSubmitForm>
    </div>
    <button class="test_form_button" @click="show_test_form = !show_test_form">
      Submit a Quiz-Test
    </button>
  </div>
</template>
<script>
import TestSub from "./Test_sub.vue";
import TestSubmitForm from "./TestSubmitForm.vue";
export default {
  data() {
    return {
      tests: {},
      tests_quantity: null,
      tests_name: [],
      tests_name_filtered: [],
      filterItem: "",
      show_test: false,
      show_test_form: false,
      selected: undefined,
    };
  },
  components: {
    TestSub,
    TestSubmitForm,
  },
  methods: {
    showTest(data) {
      console.log("child component said login", data);
    },
    onClickChild(item, tests_name_filtered) {
      // this.show_test = value;
      // console.log(this.show_test); // someValue
      this.openbox(item, tests_name_filtered);
    },
    showInput(index) {
      this.chosenExpenseId = index;
      // if want to make the button to hide input once clicked back
      // this.chosenExpenseId = this.chosenExpenseId !== index ? index : null;
    },
    openbox: function (questionSeen, test_names) {
      for (let i = 0; i < test_names.length; i++) {
        if (
          test_names[i].seen == true &&
          test_names[i].test_name == questionSeen.test_name
        ) {
          this.show_test = false;
        } else if (test_names[i].seen == false && i == test_names.length - 1) {
          this.show_test = false;
        }
        // else if (test_names[i].seen == false) {

        // }
      }

      if (this.show_test == false) {
        questionSeen.seen = !questionSeen.seen;
        this.show_test = true;
      }
    },
    filters(filterItem) {
      // console.log(this.tests.filter((item) => item.test_name === filterItem));

      if (filterItem.seen) {
        return this.tests.filter(
          (item) => item.test_name === filterItem.test_name
        );
      }

      // result = people.filter((o) => id_filter.includes(o.test_name));
    },
    testSelect: function (selector) {
      var abc = this.tests;
      const filteredArr = abc.filter((item) => item.test_category == selector);
      // console.log(filteredArr);
      // console.log(this.tests_name);
      console.log(this.tests);
      console.log(filteredArr);
      this.tests_name_filtered = filteredArr;
    },
  },
  created() {
    this.$firebaseDatabase
      .collection("tests")
      .get()
      .then((querySnapshot) => {
        var arrayT = [];
        querySnapshot.forEach((doc) => {
          var key = doc.id;

          var arr = doc.data();
          arr.id = key;
          arrayT.push(arr);
        });

        this.tests = arrayT;

        var resArr = [];
        this.tests.forEach(function (item) {
          var i = resArr.findIndex((x) => x.test_name == item.test_name);
          if (i <= -1) {
            var Obj = {};
            let item_1 = item.test_name;
            let item_2 = item.seen;
            let item_3 = item.test_category;
            Obj.test_category = item_3;
            Obj.test_name = item_1;
            Obj.seen = item_2;
            resArr.push(Obj);
          }
        });

        console.log(resArr);
        this.tests_quantity = resArr.length;
        this.tests_name = resArr;
      });
  },
  openbox: function (testSeen) {
    testSeen.seen = !testSeen.seen;
  },
};
</script>

<style>
.tests_body {
  width: 90%;
  display: flex;
  justify-content: center;
}
.test_list {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test_list div {
  margin: 5px;
}

.tests_header {
  color: khaki;
}
.test_list .test_item {
  font-size: 24px;
}

.test_item {
  border: 2px solid khaki;
  width: 100px;
  padding: 10px;
  height: 50px;
  text-align: center;
}
.test_item:hover {
  cursor: pointer;
  color: rgb(233, 178, 38);
  background-color: rgba(119, 102, 35, 0.3);
}
.test_form_button {
  margin-bottom: 20px;
}

.navigation_test {
  font-size: 28px;
  display: flex;
  margin-right: 31px;
  flex-wrap: wrap;
}
.navigation_test span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 68px;
  border: 4px double #c8a207;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 20px;
}

.navigation_test span:hover {
  color: gold;
}
.navigation_test_active {
  background-color: rgba(119, 102, 35, 0.3);
}
</style>