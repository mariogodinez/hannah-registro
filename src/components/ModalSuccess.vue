<script>

import datepicker from 'vuejs-datepicker'
	export default{
		data(){
			return {
        date: '',
			}
		},
    components:{
      datepicker
    },
		props:['error']
	}
</script>
<style>
  .modal-mask {
  position: fixed;
  z-index: 99954365765823432454;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 360px;
  margin: 0px auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  text-align:center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header flex flex-center flex-column">
            <div class="flex flex-center flex-middle text-center">
                <h2 class="color-green ion-thumbsup font-bold" style="font-size:4em;"></h2>
            </div>
            <div class="flex flex-center flex-middle text-center">
              <h2 class="color-black text-center text-uppercase font-bold">¡Éxito!</h2>
    	  		</div>
          </div>

          <article class="modal-body margin-bottom0 text-center padding10-20">
          <p class="font-bold font1-3em">{{ msg || 'Se ha guardado correctamente'}}</p>
          </article>

         

          <div class="modal-footer ">
	          <div class="flex flex-center margin-bottom20">
	            <button class="my-btn text-uppercase back-green center-block pointer" style="width:80%; padding:.6em;" >
	                <h3 class="margin0 color-white text-uppercase">Continuar</h3>
	            </button>
	          </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
