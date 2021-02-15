<template>
  <div id="app">
    <div class="bg-theme startAnimation">
      <div class="flex-wrapper">
        <transition name="type">
          <div class="main-container">
            <pre class="pre-above-1024">

   ____    ____     _____       _____ _    _          _____   ______          __  ______ _____   ____  _   _ _______ 
  |  _ \  |  _ \   / ____|     / ____| |  | |   /\   |  __ \ / __ \ \        / / |  ____|  __ \ / __ \| \ | |__   __|
  | |_) | | |_) | | (___      | (___ | |__| |  /  \  | |  | | |  | \ \  /\  / /  | |__  | |__) | |  | |  \| |  | |   
  |  _    |  _     \___ \      \___ \|  __  | / /\ \ | |  | | |  | |\ \/  \/ /   |  __| |  _  /| |  | | . ` |  | |   
  | |_) | | |_) |  ____) |     ____) | |  | |/ ____ \| |__| | |__| | \  /\  /    | |    | | \ \| |__| | |\  |  | |   
  |____/  |____/  |_____/     |_____/|_|  |_/_/    \_\_____/ \____/   \/  \/     |_|    |_|  \_\\____/|_| \_|  |_|   
                                                                                                                     
                                                                                                                     
           
                </pre
            >

            <pre class="pre-below-1024">
    ____  ____ _____    _____ __  _____    ____  ____ _       __   __________  ____  _   ________
   / __ )/ __ ) ___/   / ___// / / /   |  / __ \/ __ \ |     / /  / ____/ __ \/ __ \/ | / /_  __/
  / __  / __  \__ \    \__ \/ /_/ / /| | / / / / / / / | /| / /  / /_  / /_/ / / / /  |/ / / /   
 / /_/ / /_/ /__/ /   ___/ / __  / ___ |/ /_/ / /_/ /| |/ |/ /  / __/ / _, _/ /_/ / /|  / / /    
/_____/_____/____/   /____/_/ /_/_/  |_/_____/\____/ |__/|__/  /_/   /_/ |_|\____/_/ |_/ /_/     
                                                                                                 </pre
            >
            <pre class="pre-below-800">
 __   __   __      __             __   __           ___  __   __       ___ 
|__) |__) /__`    /__` |__|  /\  |  \ /  \ |  |    |__  |__) /  \ |\ |  |  
|__) |__) .__/    .__/ |  | /~~\ |__/ \__/ |/\|    |    |  \ \__/ | \|  |  
 </pre
            >

            <pre class="pre-below-600">
 __   __   __                                    
|__) |__) (_                                     
|__) |__) __)                                    
         __            __   __                   
        (_  |__|  /\  |  \ /  \ |  |             
        __) |  | /--\ |__/ \__/ |/\|             
                           __  __   __       ___ 
                          |_  |__) /  \ |\ |  |  
                          |   | \  \__/ | \|  |  
                                                 </pre
            >

            <pre class="pre-below-320">
 __   __   __                  
|__) |__) (_                   
|__) |__) __)                  
 __            __   __         
(_  |__|  /\  |  \ /  \ |  |   
__) |  | /--\ |__/ \__/ |/\|   
 __  __   __       ___         
|_  |__) /  \ |\ |  |          
|   | \  \__/ | \|  |          
                               
            </pre>
            <div class="header-underline">
              __________________________________________________________
            </div>
            <div class="header-underline">
              \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            </div>

            <div class="greeting-box">
              <div class="greeting-box_topline">
                [+> ----------------------------[*]-----------------------------
                [+]
              </div>
              <div class="greeting-box_left-border">
                [-]<br />[-]<br />[-] <br />
                [-]
              </div>
              <div class="greeting-box_message-wrapper">
                <span class="message-1">{{ timeNow() }}</span>
                <span class="message-2"
                  >Welcome back, <span class="special">ANONYMOUS</span>!</span
                >
              </div>
              <div class="greeting-box_right-border">
                [-] <br />
                [-] <br />
                [-]<br />
                [-]
              </div>
              <div class="greeting-box_bottomline">
                [+> ----------------------------[*]-----------------------------
                [+]
              </div>
            </div>
            <div class="middle-text-container">
              <p>Your database with frontend interview Q&A is ready.</p>

              <p>What question do you have today?</p>

              <p>You can search database</p>
            </div>
            <div class="search-input-wrapper">
              <input
                @click="
                  serachInput = '';
                  searhHidden = true;
                "
                type="text"
                v-model="serachInput"
                class="search_input"
              />
              <button
                class="query-Close-Button"
                @click="
                  searhHidden = false;
                  serachInput = '';
                "
              ></button>
            </div>
            <Search
              class="searchComponent"
              :searchText="searchFiltered()"
              :searhHidden="searhHidden"
            ></Search>

            <div class="middle-text-container">
              <p>or</p>
              <p>Navigate through menu below:</p>
            </div>

            <nav class="navigation">
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
              >
              <span
                v-on:click="selected = 'misc'"
                v-bind:class="{ navigation_active: selected == 'misc' }"
                >Misc
              </span>
              <span
                v-on:click="selected = 'test'"
                v-bind:class="{
                  navigation_active: selected == 'test',
                  test_deco: true,
                }"
                >Tests</span
              >
              <span
                class="nav_small"
                v-on:click="selected = 'interview'"
                v-bind:class="{
                  navigation_active: selected == 'interview',
                  interview_deco: true,
                }"
                >Interview</span
              >
            </nav>
            <TestMain class="quiz-test" v-if="selected == 'test'"> </TestMain>
            <Questions
              v-if="selected != 'test' && selected != 'interview'"
              :qaText="filteredAnswers()"
            ></Questions>

            <Interview
              :int_q="answers"
              class="quiz-test"
              v-if="selected == 'interview'"
            >
            </Interview>
            <Form></Form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Search from "./components/Search.vue";
import Form from "./components/Form";
import TestMain from "./components/Test_main.vue";
import Interview from "./components/Interview.vue";

// import Answers from "./assets/Answers";

export default {
  setup() {
    return {};
  },
  name: "App",
  data() {
    return {
      selected: "html",
      // answers: Answers || 0,
      answers: [],
      show: false,
      serachInput: "_",
      searhHidden: false,
    };
  },
  components: {
    Questions,
    Search,
    Form,
    TestMain,
    Interview,
  },
  methods: {
    toggleMenu: function () {
      this.htmlMenu = !this.htmlMenu;
      this.cssMenu = !this.cssMenu;
      this.jsMenu = !this.cssMenu;
      this.otherMenu = !this.cssMenu;
    },
    timeNow: function () {
      let date = new Date();
      let year = date.getFullYear();
      let mouth = date.toLocaleString("en", { month: "long" });
      let calendarDay = date.getDate();
      let weekDay = date.getDay();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var dayName = days[weekDay];
      return `Today's date is ${dayName}  ${calendarDay}  ${mouth} ${year} `;
    },
    filteredAnswers: function () {
      var qatype = this.selected;
      return this.answers.filter(function (item) {
        return item.qa_group == qatype;
      });
    },
    searchFiltered: function () {
      return this.answers.filter((item) => {
        return (
          !this.serachInput ||
          item.question.toLowerCase().indexOf(this.serachInput.toLowerCase()) >
            -1
        );
      });
    },
  },
  created() {
    // this.$http
    //   .get("https://shadow-front-40495.firebaseio.com/qa.json")
    //   .then(function (data) {
    //     return data.json();
    //   })
    //   .then(function (data) {
    //     var questArr = [];
    //     for (let key in data) {
    //       data[key].id = key;
    //       data[key].userCreated = true;
    //       questArr.push(data[key]);
    //     }
    //     console.log(questArr);
    //     this.qaQuest = questArr;
    //   });

    this.$firebaseDatabase
      .collection("qa")
      .get()
      .then((querySnapshot) => {
        var arrayQ = [];
        querySnapshot.forEach((doc) => {
          var key = doc.id;

          var arr = doc.data();
          arr.id = key;

          arrayQ.push(arr);
        });
        this.answers = arrayQ;
      });
  },
};
</script>

<style>
@font-face {
  font-family: Glass TTY VT220;
  src: url(fonts/Glass_TTY_VT220.ttf) format("truetype");
}

@font-face {
  font-family: AnonymousPro;
  src: url(fonts/AnonymousPro-Regular.ttf) format("truetype");
}

#app {
  background-color: #0a0600;
}

/* Animation */
/* .type-enter-active,
.type-enter,
.type-leave-active,
.type-leave-to {
  overflow: hidden;
  -webkit-animation: typingGeneral 4s steps(50, end);
   animation: typingGeneral 3s steps(50, end); 
} */

/* @-webkit-keyframes typingGeneral {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.startAnimation {
  -webkit-animation: typing 1.5s steps(50, end);
  animation: typingGeneral 1.5s steps(50, end);
} */

/*  */

.main-container {
  /* border: 1px solid tomato; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

pre {
  color: whitesmoke;
  height: 110px;
  margin-bottom: 30px;
}

body {
  font-family: Glass TTY VT220;
  color: #e5b800;
  font-weight: bold;
  margin: 0;
}

.header-underline {
  font-size: 30px;
  max-width: 830px;
  margin-right: 80px;
}

.message-1 {
  margin-bottom: 30px;
}

.message-2 .special {
  color: rgba(127, 255, 212, 0.863);
}

.greeting-box {
  position: relative;
  font-size: 30px;
}

.middle-text-container {
  text-align: center;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.greeting-box_left-border {
  position: absolute;
}

.greeting-box_right-border {
  position: absolute;
  top: 30px;
  left: 975px;
}

.greeting-box_message-wrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.greeting-box_bottomline {
  margin-top: 20px;
}

.middle-text-container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

button {
  background: none;
  border: 0;
  color: inherit;
  /* cursor: default; */
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
}

.query-Close-Button {
  position: absolute;
  right: -42px;
  top: 5px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.query-Close-Button:hover {
  opacity: 1;
}
.query-Close-Button:before,
.query-Close-Button:after {
  position: absolute;
  left: 15px;
  top: 1px;
  content: "";
  height: 33px;
  width: 3px;
  background-color: tomato;
}
.query-Close-Button:before {
  transform: rotate(45deg);
}
.query-Close-Button:after {
  transform: rotate(-45deg);
}
.query-Close-Button:after:hover {
  transition: all 0.1s;
  background-color: red;
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

.test_deco {
  color: brown;
}

.interview_deco {
  color: brown;
}
.navigation span:hover {
  color: tomato;
}

.navigation_active {
  background-color: rgba(119, 102, 35, 0.3);
}

.nav_small {
  font-size: 28px;
}

.search_input {
  width: 300px;
  height: 20px;
  color: rgba(127, 255, 212, 0.863);
  font: inherit;
  background-color: black;
  font-size: 24px;
  padding: 10px;

  outline: none;
}
@media only screen and (max-width: 349px) and (min-width: 260px) {
  .pre-above-1024 {
    display: none;
  }
  .pre-below-600 {
    display: none;
  }

  .pre-below-1024 {
    display: none;
  }

  .pre-below-800 {
    display: none;
  }

  .pre-below-320 {
    margin-bottom: 60px;
  }
  .header-underline {
    font-size: 8px;
    margin-right: 6px;
  }
  .greeting-box {
    font-size: 8px;
  }
  .message-1 {
    margin-bottom: 0px;
  }
  .greeting-box_message-wrapper {
    font-size: 8px;
  }

  .middle-text-container {
    font-size: 10px;
  }
  .greeting-box_right-border {
    left: 95.6%;
    top: 8px;
  }
  .greeting-box_bottomline {
    margin-top: 7px;
  }
  .main-container {
    background-color: #0a0600;
  }
  .navigation {
    font-size: 24px;
    flex-wrap: wrap;
    width: 200px;
    margin-right: 21px;
  }

  .navigation span {
    width: 300px;
    height: 60px;

    margin-left: 3px;
    border: 2px inset #c8a207;
    border-bottom: 2px inset #c8a207;
    margin-top: 5px;
  }
  .main-text-box {
    width: 300px;
    border-left: 2px solid #c8a207;
    border-right: 2px solid #c8a207;
    border-top: 2px solid #c8a207;
  }
  .question-answer-box {
    font-size: 18px;
    margin-right: 2px;
  }

  .question-answer-box_answer {
    font-size: 14px;
  }
  .code-box {
    font-size: 16px;
    width: 90%;
  }
  .code-box-code {
    font-size: 16px;
  }

  .question-answer-box_close {
    font-size: 16px;
  }

  .search_input {
    font-size: 16px;
    width: 180px;
  }

  .contact-form {
    font-size: 16px;
    width: 280px;
  }
}

@media only screen and (max-width: 600px) and (min-width: 350px) {
  .pre-above-1024 {
    display: none;
  }
  .pre-below-600 {
    margin-bottom: 40px;
  }

  .pre-below-1024 {
    display: none;
  }

  .pre-below-800 {
    display: none;
  }

  .pre-below-320 {
    display: none;
  }
  .header-underline {
    font-size: 11px;
    margin-right: 12px;
  }
  .greeting-box {
    font-size: 11px;
  }
  .message-1 {
    margin-bottom: 5px;
  }
  .greeting-box_message-wrapper {
    font-size: 16px;
  }

  .middle-text-container {
    font-size: 14px;
  }
  .greeting-box_right-border {
    left: 95.6%;
    top: 15px;
  }
  .greeting-box_bottomline {
    margin-top: 7px;
  }
  .main-container {
    background-color: #0a0600;
  }
  .navigation {
    font-size: 28px;
    flex-wrap: wrap;
    width: 300px;
    margin-right: 21px;
  }

  .navigation span {
    width: 300px;
    height: 60px;

    margin-left: 3px;
    border: 2px inset #c8a207;
    border-bottom: 2px inset #c8a207;
    margin-top: 5px;
  }
  .main-text-box {
    width: 320px;
    border-left: 2px solid #c8a207;
    border-right: 2px solid #c8a207;
    border-top: 2px solid #c8a207;
  }
  .question-answer-box {
    font-size: 18px;
    margin-right: 2px;
  }

  .question-answer-box_answer {
    font-size: 14px;
  }
  .code-box {
    font-size: 16px;
    width: 90%;
  }
  .code-box-code {
    font-size: 16px;
  }
  .question-answer-box_close {
    font-size: 16px;
  }

  .search_input {
    font-size: 16px;
    width: 250px;
  }
  .contact-form {
    font-size: 16px;
    width: 300px;
  }
}

@media only screen and (max-width: 800px) and (min-width: 601px) {
  .pre-above-1024 {
    display: none;
  }
  .pre-below-600 {
    display: none;
  }

  .pre-below-1024 {
    display: none;
  }

  .pre-below-800 {
    height: 40px;
  }

  .pre-below-320 {
    display: none;
  }

  .header-underline {
    font-size: 20px;
    margin-right: 20px;
  }
  .greeting-box {
    font-size: 20px;
  }
  .message-1 {
    margin-bottom: 15px;
  }
  .greeting-box_message-wrapper {
    font-size: 20px;
  }
  .greeting-box_right-border {
    left: 95.6%;
    top: 23px;
  }
  .main-container {
    background-color: #0a0600;
    width: 40%;
  }
  .navigation {
    font-size: 24px;
    flex-wrap: wrap;
    width: 600px;
    margin-right: 21px;
  }

  .navigation span {
    width: 290px;
    height: 60px;

    margin-left: 3px;
    border: 2px inset #c8a207;
    border-bottom: 2px inset #c8a207;
    margin-top: 5px;
  }
  .main-text-box {
    width: 600px;
    border-left: 2px solid #c8a207;
    border-right: 2px solid #c8a207;
    border-top: 2px solid #c8a207;
  }

  .search_input {
    font-size: 20px;
  }

  .contact-form {
    font-size: 20px;
    width: 400px;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 801px) {
  .pre-below-1024 {
  }
  .pre-above-1024 {
    display: none;
  }
  .pre-below-600 {
    display: none;
  }

  .pre-below-800 {
    display: none;
  }
  .pre-below-320 {
    display: none;
  }
  .header-underline {
    font-size: 24px;
    margin-right: 20px;
  }
  .greeting-box {
    font-size: 24px;
  }
  .greeting-box_right-border {
    left: 95.6%;
  }
  .main-container {
    background-color: #0a0600;
  }
  .navigation {
    font-size: 24px;
    flex-wrap: wrap;
    width: 800px;
    margin-right: 21px;
  }

  .navigation span {
    width: 240px;
    height: 60px;
    border: 4px inset #c8a207;

    margin-left: 7px;
    border: 4px inset #c8a207;
    border-bottom: 4px inset #c8a207;
    margin-top: 5px;
  }
  .main-text-box {
    width: 800px;
  }

  .search_input {
    font-size: 24px;
  }

  .contact-form {
    font-size: 24px;
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .pre-above-1024 {
  }

  .main-text-box {
    width: 1000px;
  }

  .pre-below-1024 {
    display: none;
  }

  .pre-below-600 {
    display: none;
  }

  .pre-below-800 {
    display: none;
  }

  .pre-below-320 {
    display: none;
  }

  .contact-form {
    font-size: 36px;
    width: 400px;
  }
}
</style>
