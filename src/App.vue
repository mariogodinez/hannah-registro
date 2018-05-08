 <template>
  <div id="app">
<!--     <router-link to="/app">Router App</router-link>
    <router-link to="/login">Login</router-link> -->
	
	   <HeaderComponent></HeaderComponent>

    <router-view style="padding-top:61px;"></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'


export default {
  name: 'app',
  components: {
    HeaderComponent
  }
}
</script>
