<template>
  <div>
    <h2 class="tests_header">Выберите категорию:</h2>
    <div class="navigation">
      <span
        v-on:click="selected = 'html'"
        v-bind:class="{ navigation_active: selected == 'html' }"
        >HTML</span
      >
      <span
        v-on:click="selected = 'css'"
        v-bind:class="{ navigation_active: selected == 'css' }"
        >CSS</span
      >
      <span
        v-on:click="selected = 'js'"
        v-bind:class="{ navigation_active: selected == 'js' }"
        >JS</span
      ><span
        v-on:click="selected = 'other'"
        v-bind:class="{ navigation_active: selected == 'other' }"
        >Other</span
      >
    </div>
    <h3 class="tests_header">Выберите тест:</h3>

    <div class="test_list">
      <div v-for="item in tests_name" :key="item.test_name">
        <p
          v-if="!show_test"
          class="test_item"
          @click="openbox(item, tests_name)"
        >
          {{ item.test_name }}
        </p>
        <div v-if="item.seen">
          <div>
            <TestSub
              :tests="filters(item)"
              :test_name="item"
              @clicked="onClickChild(item, tests_name)"
            ></TestSub>
          </div>
        </div>
      </div>
    </div>
    <button class="test_form_button" @click="show_test_form = !show_test_form">
      Submit a Quiz-Test
    </button>
    <TestSubmitForm v-if="show_test_form"></TestSubmitForm>
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
    onClickChild(item, tests_name) {
      // this.show_test = value;
      // console.log(this.show_test); // someValue
      this.openbox(item, tests_name);
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

<style >
.test_list {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test_list div {
  margin: 5px;
}

.test_list .test_item {
  font-size: 24px;
}
.tests_header {
  color: khaki;
}
.test_item {
  border: 2px solid khaki;
  width: 100px;
  padding: 10px;
}
.test_item:hover {
  cursor: pointer;
  color: tomato;
  background-color: rgba(119, 102, 35, 0.3);
}
.test_form_button {
  margin-bottom: 20px;
}

.navigation {
  font-size: 38px;
  display: flex;
  margin-right: 31px;
  flex-wrap: wrap;
  /* width: 800px; */
}
.navigation span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 68px;
  border: 4px inset #c8a207;

  margin-left: 7px;
  /* border-top-right-radius: 50px; */
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
}

.navigation span:hover {
  color: tomato;
}
.navigation_active {
  background-color: rgba(119, 102, 35, 0.3);
}
</style>