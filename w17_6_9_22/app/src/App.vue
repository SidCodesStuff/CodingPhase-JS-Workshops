<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Hello!</h1>
    <div class="card">
      <div class="form">
        <div class="input">
          <label for="username">Username</label>
          <input v-model="username" type="text" name="username" id="username" />
        </div>
        <div class="input">
          <label for="display_name">Display Name</label>
          <input v-model="displayName" type="text" name="display_name" id="display_name" />
        </div>
        <div class="input">
          <label for="bio">Bio</label>
          <textarea v-model="bio" name="bio" id="bio"></textarea>
        </div>
      </div>
      <div class="preview">
        <div class="avatar">
          <input type="file" name="avatar_input" id="avatar_input" v-on:change="handleFile"/>
          <img src="http://via.placeholder.com/300" alt="Avatar" id="preview" />
          <label for="avatar_input" class="overlay">
            <p>Change Avatar</p>
          </label>
        </div>

        <h2>{{ displayName || 'Sid Codes' }}</h2>
        <h3>{{ usernamePreview || '@SidCodes' }}</h3>
        <p>{{ bio || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores, rem iusto deleniti
        accusamus veniam suscipit tenetur eaque, corrupti officia, repellendus obcaecati necessitatibus? Quo beatae
        dicta, iusto nostrum enim officiis?` }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      bio: '',
      displayName: '',
      username: '',
    }
  },
  computed: {
    usernamePreview() {
      return this.username === '' ? '' : `@${this.username}`
    }
  },
  methods: {
    handleFile(e) {
      const { files } = e.target;
      console.log(
        "🚀 ~ file: index.html ~ line 183 ~ handleFile ~ file",
        files
      );
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          console.log("🚀 ~ file: index.html ~ line 430 ~ handleFile ~ reader", reader)
          // convert image file to base64 string
          document.getElementById("preview").setAttribute("src", reader.result);
          files[0].src = reader.result;
        },
        false
      );
      reader.readAsDataURL(files[0]);
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

h1 {
  width: 100%;
}

h2,
h3 {
  font-size: 3rem;
  margin: 0 0 1rem;
  line-height: 1;
}

h3 {
  font-size: 2rem;
  color: var(--primary);
}

.welcome {
  position: relative;
  width: 100%;
  height: 0;
  padding: 0 0 calc(100% * 495 / 2048) 0;
}

.welcome img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
}

input[type='file'] {
  display: none;
}

.card {
  width: 100%;
  border-radius: 2rem;
  display: flex;
  background: white;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
}

.form,
.preview {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
}

.form {
  border-right: 5px solid #000;
}

.input {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.form input,
.form textarea {
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem;
  position: relative;
}

.avatar img {
  width: 100%;
  height: auto;
}

.avatar .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar:hover .overlay {
  opacity: 1;
}

.avatar .overlay p {
  color: rgba(255, 255, 255, 0.86);
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

.form label {
  margin-left: 1rem;
  font-weight: 600;
}

textarea {
  height: 200px;
  resize: none;
}
</style>