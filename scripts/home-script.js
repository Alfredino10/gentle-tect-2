'use strict';

const navBtn = document.querySelector('.open-close-btn');
navBtn.addEventListener('click', function () {
  document.querySelector('.oci1').classList.toggle('show-hide-open-close-icon');

  document.querySelector('.oci2').classList.toggle('show-hide-open-close-icon');

  document.querySelector('.nav-items').classList.toggle('show-nav-items');
});

const heroImgs = document.querySelectorAll('.hero-img-container');
let counter = heroImgs.length + 1;

heroImgs.forEach((ele) => {
  ele.style.transform = `translateX(${0}%)`;
});

let slide = setInterval(() => {
  if (counter === 0) {
    heroImgs.forEach((ele) => {
      ele.style.transform = `translateX(${0}%)`;
    });
    counter = heroImgs.length + 1;
  }
  heroImgs.forEach((n, i) => {
    if (n.classList.contains(`hic-${counter}`)) {
      //   console.log('Good');
      n.style.transform = `translateX(${140 + counter * (i + 50)}%)`;
    }
  });
  counter--;
}, 2300);

const featureBottomImg = document.querySelectorAll(
  '.feature-bottom-img-wrapper'
);

const opCallback = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    setTimeout(() => {
      entry.target.firstElementChild.classList.add('show-fmig');
      observer.unobserve(entry.target);
    }, 500);
  }
};

const observer = new IntersectionObserver(opCallback, {
  threshold: 0.6,
});

featureBottomImg.forEach((ele) => {
  observer.observe(ele);
});

const sliderWrapper = document.querySelector('.testimonial-section');
const sliders = document.querySelectorAll('.slider');

sliders.forEach((ele, i) => {
  ele.style.transform = `translateX(${100 * i}%)`;
});

const imgContCallBack = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    let coun = 0;
    sliders.forEach((ele, i) => {
      ele.style.transform = `translateX(${100 * i}%)`;
    });
    setInterval(() => {
      if (coun === slideLen) {
        coun = 0;
      }
      sliders.forEach((ele, i) => {
        ele.style.transform = `translateX(${100 * (i - coun)}%)`;
      });
      coun++;
    }, 5000);
  }
  //  else {
  //   sliders.forEach((ele, i) => {
  //     ele.style.transform = `translateX(${100 * i}%)`;
  //   });
  // }
};

const observeImgCont = new IntersectionObserver(imgContCallBack, {
  threshold: 0.5,
});
observeImgCont.observe(sliderWrapper);
const slideLen = sliders.length;
