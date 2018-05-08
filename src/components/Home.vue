<script type="text/javascript">
	import Spinner from './Spinner.vue'
	import WarnTag from './WarnTag.vue'
	import ModalSuccess from './ModalSuccess.vue'
	import ModalWarn from './ModalWarn.vue'

	export default {
		data(){
			return {
				imageToUpload:{
					uri:''
				},
				companyIdToAdd: null,
				showWarn: false,
				showSlotData: true,
				warnMsg: 'Se ha encontrado una empresa con estos datos:',
				success: false,
				spin: false,
				current: 1,
				next: null,
				noValid:{
					nameCompany: false,
					rfc: false,
					street:{
						val: false,
						msg: ''
					},
					noExt:{
						val: false,
						msg: ''
					},
					colonia:{
						val: false,
						msg: ''
					},
					city:{
						val: false,
						msg: ''
					},
					postalCode:{
						val: false,
						msg: ''
					},
					phone:{
						val: false,
						msg: ''
					},
					email:{
						val: false,
						msg: ''
					},
					state:{
						val: false,
						msg: ''
					},
					city:{
						val: false,
						msg: ''
					}
				},
				userData:{
					nameCompany: '',
					img: null,
					rfc:'',
					city: '',
					postalCode: null,
					colonia: '',
					noInt: '',
					phone: null,
					email: '',
					street: '',
					noExt: '',
					state: ''
				},
				userDataNew:{
					name: '',
					phone: null,
					email: '',
					password: '',
				},
				userDataNewRepeatPass: ''
			}
		},
		computed:{
			lengthrfc(){
				return this.userData.rfc.length
			}
		},
		components:{
			Spinner,
			WarnTag,
			ModalSuccess,
			ModalWarn
		},
		methods:{
			onFileChange(e) {
				console.log(e)
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length)
				return; 
				this.createImage(files[0]);
			},
			createImage(file) {
				let image = new Image();
				let reader = new FileReader();
				let self = this;

				reader.onload = (e) => {
					self.imageToUpload.uri = e.target.result;
					self.addImage = true;
					
				};
				reader.readAsDataURL(file);
				// setTimeout(function(){
				// 	self.imageGuillo()
				// },10)
			},
			saveSeller(){
				let self = this
				this.spin = true
				axios.post(apiUrl + '/create_admin', {
					"name": self.userDataNew.name,
					"company_id": self.companyIdToAdd,
					"password": self.userDataNew.password,
					"password": self.userDataNew.password,
					"password_confirmation": self.userDataNewRepeatPass,
					"email": self.userDataNew.email
				})
				.then(res =>{
					self.spin = false
					self.success = true
				})
				.catch(err =>{
					self.spin = false
				})
			},
			saveData(){
				let self = this
				this.spin = true
				let obj = {
				    'phone': self.userData.phone,
				    'rfc': self.userData.rfc,
				    'email': self.userData.email,
				    'company_name': self.userData.nameCompany,
				    'street_name': self.userData.street,
				    'ext_number': self.userData.noExt,
				    'neighborhood': self.userData.colonia,
				    'zip_code': self.userData.postalCode,
				    'city': self.userData.city,
				    'state': self.userData.state,
				    'image_url': self.imageToUpload.uri

				}

				setTimeout(function(){
					self.spin = false
					axios.post(apiUrl + '/create_companies', obj)
						.then(res => {
							console.log(res)
							localStorage.removeItem('rfc')
							localStorage.removeItem('nameCompany')
							self.next = 5
							self.companyIdToAdd = res.data.company_id

						})
						.catch(err => {
							console.log(err.response)
						})
				},1000)
			},
			goNext(number, next){
				let self = this

				localStorage.nameCompany = this.userData.nameCompany
				localStorage.rfc = this.userData.rfc
				
				if(this.current == 1){
					if(Is.empty(this.userData.nameCompany)){
						this.noValid.nameCompany = true
					}

					if(Is.empty(this.userData.rfc)){
						this.noValid.rfc = true
					}

					if(this.userData.rfc.length != 12 && this.userData.rfc.length != 13){
						this.noValid.rfc = true
						this.noValidRfcLength = 'Por favor, ingresa un RFC válido!'
					}

					if( this.userData.rfc.length == 0){
						this.noValid.rfc = true
						this.noValidRfcLength = 'Campo requerido'
					}

					if(Is.empty(this.userData.nameCompany) || Is.empty(this.userData.rfc) || this.noValid.rfc){
						setTimeout(function(){
							self.noValid.nameCompany = false
							self.noValid.rfc = false

						}, 3500)
						return false

					}
				}

				if(this.current == 2){
					if(Is.empty(this.userData.street)){
						this.noValid.street.val = true
					}

					if(Is.empty(this.userData.noExt)){
						this.noValid.noExt.val = true
					}

					if(Is.empty(this.userData.city)){
						this.noValid.city.val = true
					}

					if(Is.empty(this.userData.colonia)){
						this.noValid.colonia.val = true
					}

					if(Is.empty(this.userData.state)){
						this.noValid.state.val = true
					}

					if(Is.null(this.userData.postalCode)){
						this.noValid.postalCode.val = true
					}

					if(Is.empty(this.userData.state) || Is.empty(this.userData.noExt) || Is.empty(this.userData.street) || Is.empty(this.userData.colonia) ||  Is.empty(this.userData.city) || Is.empty(this.userData.postalCode)){
						setTimeout(function(){
							self.noValid.street.val = false
							self.noValid.noExt.val = false
							self.noValid.colonia.val = false
							self.noValid.city.val = false
							self.noValid.state.val = false
							self.noValid.postalCode.val = false


						}, 3500)
						return false

					}

					self.current = number
					setTimeout(function(){
						self.next = next
					},800)
				}


				if(this.current == 3){
					if(Is.empty(this.userData.email)){
						this.noValid.email.val = true
					}

					if(Is.null(this.userData.phone)){
						this.noValid.phone.val = true
					}

					if(this.userData.noExt == null || Is.empty(this.userData.street) || Is.empty(this.userData.colonia) ||  Is.empty(this.userData.city) || Is.empty(this.userData.postalCode)){
						setTimeout(function(){
							self.noValid.street.val = false
							self.noValid.noExt.val = false
							self.noValid.colonia.val = false
							self.noValid.city.val = false
							self.noValid.postalCode.val = false


						}, 3500)
						return false

					}


				}

				if(this.current == 1){
					this.spin = true 
					setTimeout(function(){

						axios.post(apiUrl + '/company_exists', {rfc: self.userData.rfc})
							.then(res => {
								self.spin = false

								if(res.data.exists == true){
									self.showWarn = true

							    self.userData.phone = res.data.company.phone
							    self.userData.rfc = res.data.company.rfc
							    self.userData.email = res.data.company.email
							    self.userData.nameCompany = res.data.company.company_name
							    self.userData.street = res.data.company.street_name
							    self.userData.noExt = res.data.company.ext_number
							    self.userData.colonia = res.data.company.neighborhood
							    self.userData.state = res.data.company.state
							    self.userData.postalCode = res.data.company.zip_code
							    self.userData.city = res.data.company.city
									return false
								} 

								if(res.data.exists == false){
									self.current = number
									setTimeout(function(){
										self.next = next
									},800)
								} 
							})
							.catch(err => {
								self.spin = false

							})
					},800)
				}

			},
			validateOne(){
				if(Is.empty(this.userData.name)){
					this.noValid.nameCompany = true
					return false
				}
			}
		},
		mounted(){
			let self = this
			this.$on('continueNext', function(){
				self.showWarn = false
				self.current = 2
				setTimeout(function(){
					self.next = 3
				},800)
			})

			this.$on('cancelNext', function(){
				self.showWarn = false
					let obj = {
						nameCompany: '',
						img: null,
						rfc:'',
						city: '',
						postalCode: null,
						colonia: '',
						noInt: '',
						phone: null,
						email: '',
						street: '',
						noExt: ''

					}
					self.userData = obj

			})
		}
	}
</script>

<template>
  <transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
  	<section class="height100vh back-white">
  	<Spinner v-if="spin"></Spinner>
  	<ModalSuccess v-if="success"></ModalSuccess>
  	<ModalWarn :msg="warnMsg" v-if="showWarn">
  		<p style="text-align:left; margin-top:20px; margin-bottom:3px;" slot="companyName" v-if="showSlotData"><span class="font-bold">Nombre Compañia:</span>  {{userData.nameCompany}}</p>
  		<p style="text-align:left;" slot="companyEmail" v-if="showSlotData"><span class="font-bold">Email:</span> {{userData.email}}</p>

  		<p style="text-align:left; margin-bottom:3px;" slot="companyRFC" v-if="showSlotData"><span class="font-bold">RFC:</span> {{userData.rfc}}</p>
  		<p style="text-align:left; margin-bottom:3px;" slot="companyAddress" v-if="showSlotData"><span class="font-bold">Domicilio Fiscal:</span> {{userData.street}} #{{userData.noExt}}. {{userData.city}} {{userData.postalCode}}.</p>


  	</ModalWarn>

		<article class="my-container-inner padding20 " style="margin-top:30px;">
			<section class=" flex flex-between flex-middle relative">
				<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">
		            <div v-if="next == 5" class="absolute" style="top:0;">
		              <h3 class="text-uppercase font1-3em">Agregar nuevo usuario</h3>
		              
		            </div>

		        </transition>

		        <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">
		            <div v-if="next != 5" class="absolute" style="top:0;">
		              <h3 class="text-uppercase font1-3em">Registro de nueva empresa</h3>
		              
		            </div>

		        </transition>
	        </section>

	        <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">

		        <article class="margin-top20 padding10-0" v-if="current == 1">
		        	<section class="margin-bottom30">
				        <p class="margin-top10 font1em">1. Ingresa la identidad de tu empresa.</p>
						<div class="flex flex-center flex-middle margin-top20 relative" style="border-radius:2px;border: 1px solid #aaa; width:190px; min-height:120px;">
							<span class="color-green" style="font-weight:bold; font-size:28px;" v-if="!imageToUpload.uri">Logo</span>

							<figure class="" style="width: 20vw" v-if="imageToUpload.uri">
								<img :src="imageToUpload.uri" alt="" class="width100">
							</figure>
							<div class="absolute  pointer"   style="bottom:0px; right:0; background:rgba(224, 224, 224, 0.75);">
									<div class="pointer flex flex-center " >
							            <div   class=" pointer flex  text-center font-bold  pointer   "  >
							              <input class="width100 pointer" type="file" style="opacity:0;position:absolute;" id="myFile" name="file" @change="onFileChange">
							              <label class="flex padding5-15 pointer" for="myFile" style="  width:100%;  " >
							                  <span class="ion-camera font25 pointer color-gray"></span>
							              </label>
							            </div>
							        </div>
								</div>
						</div>
						
					</section>

			        <section class="padding10-0">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Nombre de la compañia</p>
			          </div>
			          <div class="flex width100 relative">
			          	<WarnTag style="position:absolute; top:-39px;" v-if="noValid.nameCompany"></WarnTag>
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userData.nameCompany">
			          </div>
			        </section>

			        <section class="padding10-0 margin-bottom30">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">R.F.C.</p>
			          </div>
			          <div class="flex width100 relative">
			          	<WarnTag :msg="noValidRfcLength" style="position:absolute; top:-39px;" v-if="noValid.rfc"></WarnTag>
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userData.rfc">
			          </div>
			        </section>
		    
			        <section class="flex flex-center width100" @click="goNext(2,3)">
			          <button class="my-btn width100 text-center text-uppercase back-hannah color-white btn-full-mobile">
			            Siguente
			            <span class="ion-chevron-right"></span>
			          </button>
			        </section>
		        </article>


	        </transition>

	        <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">

		        <article class="margin-top20 padding10-0" v-if="current == 2 && next == 3">
		        	<section class="margin-bottom30">
				        <p class="margin-top10 font1em">2. Registra el domicilio fiscal de tu empresa.</p>
					</section>

					<article class="margin-bottom30 relative">
						<WarnTag style="position:absolute; top:-10px;" v-if="noValid.street.val"></WarnTag>
						<h3 class="color-black font-normal line-height30 font20 margin-bottom5">Calle</h3>

						<div class="flex">
							
							<input type="text" class="my-input" v-model="userData.street">
						</div>
					</article>

					<article class="margin-bottom30 flex">
							<div class=" width100 margin-right10 relative">
								<WarnTag :msg="noValid.noExt.msg" style="position:absolute; top:-10px;" v-if="noValid.noExt.val"></WarnTag>
								<h3 class="color-black font-normal line-height30 font1em margin-bottom5">No. Ext.</h3>
								<div class="flex">
									<input type="text" class="my-input"  v-model="userData.noExt">
								</div>
							</div>
							<div class=" width100" >
								<h3 class="color-black font-normal line-height30 font1em margin-bottom5">No. Int.</h3>
								<div class="flex">
									<input type="text" class="my-input" v-model="userData.noInt">
								</div>
							</div>


					</article>



					<article class="margin-bottom30">

						<div class="relative margin-bottom30">
							<WarnTag :msg="noValid.colonia.msg" style="position:absolute; top:-10px;" v-if="noValid.colonia.val"></WarnTag>
							<h3 class="color-black font-normal line-height30 font1em margin-bottom5">Colonia</h3>
							<div  class="flex ">
								
								<input type="text" class="my-input"  v-model="userData.colonia">
							</div>
						</div>


						<div class="relative margin-bottom30">
							<WarnTag :msg="noValid.postalCode.msg" style="position:absolute; top:-10px;" v-if="noValid.postalCode.val"></WarnTag>
							<h3 class="color-black font-normal line-height30 font1em margin-bottom5">C.P.</h3>
							<div class="flex">
								<input type="text" class="my-input"  v-model.number="userData.postalCode">
							</div>
						</div>
						<section class="flex width100 " >
							<div class=" margin-right10 width100 relative">
								<WarnTag :msg="noValid.city.msg" style="position:absolute; top:-10px;" v-if="noValid.city.val"></WarnTag>
								<h3 class="color-black font-normal line-height30 font1em margin-bottom5">Ciudad</h3>
								<div class="flex">
									<input type="text" class="my-input"  v-model="userData.city">
								</div>
							</div>
							 
						</section>
						
					</article>

					<article class="margin-bottom30 relative">
						<WarnTag style="position:absolute; top:-10px;" v-if="noValid.state.val"></WarnTag>
						<h3 class="color-black font-normal line-height30 font20 margin-bottom5">Estado</h3>

						<div class="flex">
							<input type="text" class="my-input" v-model="userData.state">
						</div>
					</article>
		    
			        <section class="flex flex-center width100" >
			          <button class="my-btn width100 text-center text-uppercase back-hannah color-white btn-full-mobile" @click="goNext(3,4)">
			            Siguente
			            <span class="ion-chevron-right"></span>
			          </button>
			        </section>
		        </article>
	        </transition>


	         <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">

		        <article class="margin-top20 padding10-0" v-if="next == 4">
		        	<section class="margin-bottom30">
				        <p class="margin-top10 font1em">3. Registra el contacto de tu empresa.</p>
					</section>

			        <section class="padding10-0">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Teléfono</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userData.phone">
			          </div>
			        </section>

			        <section class="padding10-0 margin-bottom30">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Correo de contacto para tus clientes</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userData.email">
			          </div>
			        </section>
		    
			        <section class="flex flex-center width100" >
			          <button class="my-btn width100 text-center text-uppercase back-hannah color-white btn-full-mobile flex flex-middle flex-center" style="padding:.5em;" @click="saveData">
			            Guardar
			            <span class="ion-upload font1-5em margin-left10"></span>
			          </button>
			        </section>
		        </article>


	        </transition>


	        <transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="animated bounceOutUp">

		        <article class="margin-top20 padding10-0" v-if="next == 5">
		        	<section class="margin-bottom30">
				        <p class="margin-top10 font1em">4. Ingresa la información del primer usuario administrador de esta cuenta.</p>
					</section>

			        <section class="padding10-0">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Nombre</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userDataNew.name">
			          </div>
			        </section>

			        <section class="padding10-0 margin-bottom30">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Correo Electrónico</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="text" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userDataNew.email">
			          </div>
			        </section>

			        <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Rol</p>
		          	</div>

		          	<div class="flex padding-bottom5 width100 margin-bottom30">
			            <h3 class="color-black font20 color-darkblue text-uppercase">Administrador</h3>
		          	</div>


		          	<section class="padding10-0">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Contraseña</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="password" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userDataNew.password">
			          </div>
			        </section>

			        <section class="padding10-0 margin-bottom30">
			          <div class="flex padding-bottom5 width100">
			            <p class="color-black font20 color-darkblue text-uppercase">Confirmar Contraseña</p>
			          </div>
			          <div class="flex width100 ">
			            <input type="password" class="my-input width100 back-lightgray" style="padding:10px;" v-model="userDataNewRepeatPass">
			          </div>
			        </section>
		    
			        <section class="flex flex-center width100" >
			          <button class="my-btn width100 text-center text-uppercase back-green color-white btn-full-mobile flex flex-middle flex-center" style="padding:.5em;" @click="saveSeller">
			            Finalizar
			            <span class="ion-android-cloud-done font1-5em margin-left10"></span>
			          </button>
			        </section>
		        </article>


	        </transition>
	        

	        <div class="padding20"></div>

	    </article>
  	</section>
  </transition>
</template>

<style type="text/css">
	.my-container-inner{
		max-width: 600px;
		margin:0 auto;
	}
</style>