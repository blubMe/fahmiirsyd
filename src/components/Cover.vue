<template>
  <div class="cover">
    <div class="cover__title">
      <h1>Fahmiirsyd</h1>
      <q>This is my place to write some little journey.</q>
      <p>Hello, nama saya <strong>Fahmi irsyad khairi</strong>. Orang yang menuliskan pengalamannya  disini, saya seorang <strong>web developer</strong>, <strong>designer</strong> dan juga sering melakukan <strong>eksperimen</strong> dengan teknologi.</p>
      <!-- <div>
        <p>If you happy about what i doing, you can <link-yellow-style><g-link :to="{ name: 'support' }">support me</g-link></link-yellow-style>. I will show your profile picture or even your works.</p>
      </div> -->
    </div>
    <div class="cover__img">
      <div>
        <span>
          Memory is a software.
        </span>
      </div>
      <g-image alt="edge pool" src="~/assets/images/today.jpg" width="260"/>
    </div>
  </div>
</template>
<script>
import LinkYellowStyle from './Linkyellow.styled.js'

export default {
  components: {
    'link-yellow-style': LinkYellowStyle
  }
}
</script>

