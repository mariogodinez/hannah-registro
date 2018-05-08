<script>
	export default {
		data(){
			return {
				
			}
		},
		components:{
		},
		computed:{
			
		},
		methods:{
			
		},
		created(){
		}
	}
</script>



<template>

	<section class="">
		<article class="my-header back-white" style="box-shadow:0 0 10px #666;">
	        <header class="flex flex-center flex-middle show-mobile" >
	          <div class="menu-btn" id="menu-btn">
	             <div class="burguer-menu font35">
	                <span class="ion-navicon-round"></span>
	             </div>

	             <div class="burguer-x font35">
	                <span class="ion-close-round"></span>
	             </div>
	          </div>
	          	<span style="width: 100px;"></span>

	         	<figure class="padding10-15 margin-right20" style="width:130px;">
	              <img src="./dist/img/hannah-logo.png" alt="Hannah logo" class="width100">
	            </figure>

	            <div style="width:65px;"></div>

	        </header>
	        <div class="menu-mobile show-mobile" id="menu-mobile">
	          <ul class="menu-mobile-list">
	            <li class="menu-mobile-list-item">Hannah</li>
	            <li class="menu-mobile-list-item">Precios</li>
	            <li class="menu-mobile-list-item">Semantic</li>
	            <li class="menu-mobile-list-item">
	            	<a href="https://mariogodinez.github.io/hannah/#/login" style="border-radius:5px; box-shadow:0 0 10px #999;display:block; border:0; box-shadow:0; padding:14px 7px; width:90%;" target="_blank" class="my-btn back-green hvr-pulse-grow color-white text-uppercase hide-moblie action-header">
	                <h5 class=" text-center" style="font-size:2em">
	                  Empieza ya
	                </h5>
	              </a>
	            </li>
	          </ul>
	        </div>
	    
	        <header class="hide flex flex-middle flex-between transition30 relative my-container show-desktop"  >
	           <div class="flex flex-middle">
	              <figure class="padding10-15 margin-right20" style="width:110px;">
	              <img src="./dist/img/hannah-logo.png" alt="Hannah logo" class="width100">
	            </figure>
	            <div>
	              <ul class="flex my-nav flex-middle">
	                <li class="my-nav-item flex flex-middle">
	                  <a href="" class="font1em">Hannah</a>
	                </li>

	                <li class="my-nav-item">
	                  <a href="" class="font1em">Precios</a>
	                </li>
	              </ul>
	            </div>
	           </div>
	         
	          <div>
	            <a href="https://mariogodinez.github.io/hannah/#/login" style="border-radius:5px; box-shadow:0 0 10px #999;display:block; border:0; box-shadow:0; padding:14px 10px;" target="_blank" class="my-btn back-green hvr-pulse-grow color-white text-uppercase action-header">
	              <h5 class="font1em" style="padding:0 10px;">
	                Empieza ya
	              </h5>
	            </a>
	          </div>
	        </header>
        </article>
	</section>
</template>
