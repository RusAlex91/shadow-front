<template id="contact-form-template" style="display:none">
  <div class="contact-form">
    <h2 @click="submit_allow = !submit_allow">Submit a QA in database</h2>
    <div class="form" v-if="submit_allow">
      <form class="contact-form" @submit="saveContactMessage">
        <div class="text-field">
          <label for="email"
            >Email Address<span class="required">*</span></label
          >
          <input
            id="email"
            name="email"
            type="email"
            required=""
            placeholder="jane.doe@example.com"
            v-model="email"
          />
          <select v-model="selected">
            <option disabled value="">Группа вопросов</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JS</option>
            <option>Misc</option>
          </select>
        </div>
        <div class="text-field">
          <label for="firstname"
            >First Name<span class="required" for="firstname">*</span></label
          >
          <input
            id="firstname"
            name="firstname"
            type="text"
            required=""
            placeholder="Jane"
          />
        </div>
        <div class="text-field">
          <label for="lasname">Last Name<span class="required">*</span></label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            required=""
            placeholder="Doe"
          />
        </div>
        <p>Select which solutions you are interested in.</p>
        <label class="cb-container"
          >One
          <input type="checkbox" value="1" />
          <span class="checkmark"></span>
        </label>
        <label class="cb-container"
          >Two
          <input type="checkbox" value="2" />
          <span class="checkmark"></span>
        </label>
        <label class="cb-container"
          >Three
          <input type="checkbox" value="3" />
          <span class="checkmark"></span>
        </label>
        <div class="text-field">
          <label class="textarea-label"
            >Send us any additional information below.</label
          >
          <input id="message" name="message" class="textarea" type="textarea" />
        </div>
        <button type="submit" value="Submit">send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      message: null,
      solutions: ["One", "Two", "Three"],
      selection: {
        solutions: [],
      },
      submit_allow: false,
    };
  },

  methods: {
    saveContactMessage: function (e) {
      debugger;
      e.preventDefault();
      const messagesRef = this.$firebaseDatabase.collection("message");
      messagesRef.add({
        email: this.email,
        time: new Date(),
      });
      this.email = "";
      this.message = "";
      this.submitted = true;
      this.snackbar = false;
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap);

.contact-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form h1 {
  margin-bottom: 40px;
}
.text-field input {
  font-family: "LibreFranklin", sans-serif;
  outline: 0;
  background: #ededed;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.text-field label {
  display: block;
  position: relative;
  text-align: left;
  padding-bottom: 10px;
}
.textarea {
  min-height: 120px;
}
.textarea-label {
  display: block;
  position: relative;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}
.form button {
  font-family: "LibreFranklin", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form p {
  text-align: left;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "LibreFranklin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* The container */
.cb-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  text-align: left;
  line-height: 1.5;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.cb-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.cb-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.cb-container input:checked ~ .checkmark {
  background-color: #43a047;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.cb-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.cb-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.required {
  color: red;
}
</style>
