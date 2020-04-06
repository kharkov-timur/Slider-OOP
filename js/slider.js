var sliderFactory = {
  createNewSlider: function () {
    var newSlider = {
      imagesUrl: [],
      currentImageIndex: 0,

      showPrevBtn: null,
      showNextBtn: null,
      slideImg: null,

      start: function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImg = el.querySelector('.slide-img');

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

    return newSlider;
  }
};