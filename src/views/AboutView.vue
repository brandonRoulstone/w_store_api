<template>
  <div id="about">
    <div class="px-4 pt-5 my-5 text-center">
      <h1 class="display-4 fw-bold text-body-emphasis" id="text">Take W's with W-store</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-white">Welcome to W Store, your ultimate destination for cutting-edge gaming tech! Dive into the heart of the action with our array of high-powered gaming gear designed to elevate your gameplay to new heights. From lightning-fast processors to immersive virtual reality setups, we've got everything you need to conquer the digital realm like never before. Upgrade your gaming experience with W Store today!</p>
        <router-link to="/products" class="btn mb-2 mx-1" id="button">Explore our store</router-link>
        <router-link to="/" class="btn mb-2 mx-1" id="button">Contact our store</router-link>
      </div>
      <div class="overflow-hidden" style="max-height: 34.9vh;" id="hideBorder">
        <div class="container px-5">
          <img src="https://i.postimg.cc/9mMjX75j/pexels-tomasz-filipek-1637436.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
        </div>
      </div>
    </div>
    <div class="container px-4 py-5" id="hanging-icons">
      <h2 class="pb-2 border-bottom text-white fw-bold text-white">Experience Gaming Excellence</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <i class="fa-solid fa-gamepad fa-xl" style="color: #ffffff;"></i>
          </div>
          <div>
            <h3 class="fs-2 text-white">High-End Tech</h3>
            <p class="text-white">Unleash your gaming potential with top-of-the-line equipment meticulously curated by W Store. Elevate your gameplay with the latest innovations designed for ultimate performance.</p>
            <a href="/products" class="btn btn-primary" id="button">
              Explore Now
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <i class="fa-solid fa-headset fa-xl" style="color: #ffffff;"></i>
          </div>
          <div>
            <h3 class="fs-2 text-white">Exceptional Support</h3>
            <p class="text-white">Experience unparalleled customer service with W Store's dedicated support team. Whether you need technical assistance or product guidance, we're here to ensure your gaming needs.</p>
            <a href="/contact" class="btn btn-primary" id="button">
              Contact us now
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <i class="fa-solid fa-truck-ramp-box fa-xl" style="color: #ffffff;"></i>
          </div>
          <div>
            <h3 class="fs-2 text-white">Swift Deliveries</h3>
            <p class="text-white">Don't wait to dive into your gaming adventures. With W Store's lightning-fast delivery service, your gear arrives promptly, ensuring you're ready to dominate the digital battlefield in no time.</p>
            <a href="/products" class="btn btn-primary" id="button">
              Get Yours Now
            </a>
          </div>
        </div>
      </div>
    </div>
    
  <div>
</div>
  </div>
</template>
<script>
</script>
<style scoped>
#about{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
  flex-direction: column;
}

#text {
  background: #121FCF;
  background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#button {
  position: relative;
  display: inline-block;
  background: linear-gradient(to bottom, #8439e6, #c75555);
  color: white;
  font-family: "Segoe UI", sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  padding: 14px 28px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: btnHover 2s infinite;
  transition: all 0.3s ease-in-out;
}

#button:hover {
  background: linear-gradient(to bottom, #472c63, #5b67b7);
  animation: animation55 1s ease-in-out infinite;
  transform: translateY(-2px);
}


#button:active {
  transform: scale(0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

@keyframes btnHover {
  0% {
    background-position: left top;
  }

  100% {
    background-position: right bottom;
  }
}

@keyframes animation55 {
  0% {
    background-position: left top;
  }

  100% {
    background-position: right bottom;
  }
}
</style>