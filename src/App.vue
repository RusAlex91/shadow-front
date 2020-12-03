<template>
  <div id="app">
    <div class="bg-theme">
      <div class="flex-wrapper">
        <transition name="type">
          <div class="main-container">
            <pre>

   ____    ____     _____       _____ _    _          _____   ______          __  ______ _____   ____  _   _ _______ 
  |  _ \  |  _ \   / ____|     / ____| |  | |   /\   |  __ \ / __ \ \        / / |  ____|  __ \ / __ \| \ | |__   __|
  | |_) | | |_) | | (___      | (___ | |__| |  /  \  | |  | | |  | \ \  /\  / /  | |__  | |__) | |  | |  \| |  | |   
  |  _    |  _     \___ \      \___ \|  __  | / /\ \ | |  | | |  | |\ \/  \/ /   |  __| |  _  /| |  | | . ` |  | |   
  | |_) | | |_) |  ____) |     ____) | |  | |/ ____ \| |__| | |__| | \  /\  /    | |    | | \ \| |__| | |\  |  | |   
  |____/  |____/  |_____/     |_____/|_|  |_/_/    \_\_____/ \____/   \/  \/     |_|    |_|  \_\\____/|_| \_|  |_|   
                                                                                                                     
                                                                                                                     
           
                </pre
            >
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
            <input
              @click="serachInput = ''"
              type="text"
              v-model="serachInput"
              class="search_input"
            />

            <Search
              class="searchComponent"
              :searchText="searchFiltered()"
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
                v-bind:class="{ navigation_active: selected == 'other' }"
                >Misc
              </span>
              <span
                class="nav_small"
                v-on:click="selected = 's&c'"
                v-bind:class="{ navigation_active: selected == 's&c' }"
                >Scope <br />& Closure</span
              >
            </nav>

            <Questions :qaText="filteredAnswers()"></Questions>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Search from "./components/Search.vue";
import Answers from "./assets/Answers";

export default {
  name: "App",
  data() {
    return {
      selected: "html",
      answers: Answers || 0,

      show: false,
      serachInput: "_",
    };
  },
  components: {
    Questions,
    Search,
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
        return item.type == qatype;
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
};
</script>

<style>
@font-face {
  font-family: Glass TTY VT220;
  src: url(fonts/Glass_TTY_VT220.ttf) format("truetype");
}

#app {
  background-color: #0a0600;
}

/* Animation */
.type-enter-active,
.type-enter,
.type-leave-active,
.type-leave-to {
  overflow: hidden;
  -webkit-animation: typingGeneral 4s steps(50, end);
  /* animation: typingGeneral 3s steps(50, end); */
}

@-webkit-keyframes typingGeneral {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.startAnimation {
  white-space: nowrap;
  overflow: hidden;
  -webkit-animation: typing 6s steps(50, end);
  animation: typingGeneral 6s steps(50, end);
}

/*  */

.main-container {
  /* border: 1px solid tomato; */
  min-width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1100px;
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

.navigation {
  font-size: 38px;
  display: flex;
  margin-right: 97px;
}

.navigation span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 68px;
  border: 4px inset #c8a207;
  border-bottom: none;
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
</style>
