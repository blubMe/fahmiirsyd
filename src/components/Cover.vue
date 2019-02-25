<template>
  <div class="cover">
    <div class="cover__title">
      <h1>Fahmiirsyd</h1>
      <q>This is my place to write some little journey.</q>
      <p>Hai, nama saya <strong>Fahmi irsyad khairi</strong>. Orang yang menuliskan pengalamannya disini, saya seorang <strong>web developer</strong>, <strong>designer</strong> dan juga suka melakukan <strong>eksperimen</strong> dengan teknologi.</p>
      <!-- <div>
        <p>If you happy about what i doing, you can <link-yellow-style><g-link :to="{ name: 'support' }">support me</g-link></link-yellow-style>. I will show your profile picture or even your works.</p>
      </div> -->
    </div>
    <div class="cover__img">
      <div>
        <span>
          Be good in all things.
        </span>
      </div>
      <g-image alt="edge pool" src="~/assets/images/today.jpg" width="260"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cover {
  /* background-color: yellow; */
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

.cover__title {
  h1 {
    font-size: 70px;
    font-family: "Libre Baskerville";
  }
  p {
    padding-top: 30px;
    max-width: 40vw;
    font-size: 18px;
  }
}

.cover__img {
  position: relative;
  max-height: 340px;
  overflow: hidden;
  border-radius: 3px;
  div {
    position: absolute;
    top: 0;
    margin: 10px;
    span {
      display: block;
      color: white;
      font-weight: bold;
      padding: 5px 10px;
      margin: 5px;
      background-color: black;
      border-radius: 3px;
      max-width: 260px;
    }
  }
  img {
    border-radius: 3px;
    -webkit-user-drag: none;
  }
}
</style>

