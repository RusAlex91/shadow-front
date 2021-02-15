<template>
  <div>
    <div class="test_list">
      <h2 class="tests_header">Выберите тест:</h2>
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
    <button @click="show_test_form = !show_test_form">
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
}

.test_item {
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
</style>