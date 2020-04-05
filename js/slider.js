var slider1 = {
  imagesUrl: [],
  showPrevBtn: document.getElementById('show-prev-btn'),
  showNextBtn: document.getElementById('show-next-btn'),
  slideImg: document.getElementById('slide-img'),
  currentImageIndex: 0,

  start: function () {
    var that = this;

    // subscribe to events
    this.showPrevBtn.addEventListener('click', function (e) {
      that.onShowPrevBtnClick(e);
    });

    this.showNextBtn.addEventListener('click', function (e) {
      that.onShowNextBtnClick(e);
    });

    // create images array
    this.imagesUrl.push('https://www.topcarmonaco.com/images/cars/rent-lamborghini-aventador-s-roadster-top-car-monaco-hire-lamborghini-aventador-monaco-renting.jpg');
    this.imagesUrl.push('https://storage1b.censor.net/images/2/c/8/9/2c891aa2a3ec4a86723435b0d117f542/original.jpg');
    this.imagesUrl.push('https://cdn.motor1.com/images/mgl/zZnP8/s3/2020-rimac-c-two.jpg');
    this.imagesUrl.push('https://www.novine.rademetalac.edu.rs/images/slike/Zanimljivosti/maxresdefault.jpg');

    this.slideImg.src = this.imagesUrl[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  },

  onShowPrevBtnClick: function (e) {
    this.currentImageIndex--;
    this.slideImg.src = this.imagesUrl[this.currentImageIndex];
    this.showNextBtn.disabled = false;
    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  },

  onShowNextBtnClick: function (e) {
    this.currentImageIndex++;
    this.slideImg.src = this.imagesUrl[this.currentImageIndex];
    this.showPrevBtn.disabled = false;
    if (this.currentImageIndex === (this.imagesUrl.length - 1)) {
      this.showNextBtn.disabled = true;
    }
  }
};