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
    methods:{
      nextStep(){
        this.$parent.$emit('continueNext', null)
      },
      cancel(){
        this.$parent.$emit('cancelNext', null)
      }
    },
		props:['msg']
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
                <h2 class="color-hannah ion-alert-circled font-bold" style="font-size:4em;"></h2>
            </div>
            <div class="flex flex-center flex-middle text-center">
              <h2 class="color-black text-center text-uppercase font-bold">¡Atención!</h2>
    	  		</div>
          </div>

          <article class="modal-body margin-bottom0 text-center padding10-20">
            <p class="font-bold font1-3em">{{ msg || 'Por favor verifica los datos ingresados.'}}</p>
            <slot name="companyName"></slot>
            <slot name="companyEmail"></slot>
            <slot name="companyRFC"></slot>
            <slot name="companyAddress"></slot>

          </article>

          <div class="modal-footer ">
	          <div class="flex flex-center margin-bottom20">
	            <button class="my-btn text-uppercase back-green center-block pointer" style="width:80%; padding:.6em;" @click="nextStep">
	                <h3 class="margin0 color-white text-uppercase">Utilizar datos</h3>
	            </button>
	          </div>

            <div class="flex flex-center margin-bottom20">
              <p class="anchor font1-3em" @click="cancel">Cancelar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
