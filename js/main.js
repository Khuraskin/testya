//carousel video

const slides = document.querySelectorAll(".ride__content"),
  dots = document.querySelectorAll(".ride__dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("ride__content--active");
  }
  slides[n].classList.add("ride__content--active");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("ride__dot--active");
  }
  dots[n].classList.add("ride__dot--active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

//map

let myMap;
const init = () => {
  myMap = new ymaps.Map("map__ya", {
    center: [45.051907, 39.002902],
    zoom: 11,
    controls: [],
  });

  let coords = [[45.075957, 39.009992]],
    myCollection = new ymaps.GeoObjectCollection(
      {},
      {
        draggable: false,
        iconLayout: "default#image",
        iconImageHref: "./img/orig__map_scooter.png",
        iconImageSize: [90, 90],
        iconImageOffset: [-35, -52],
      }
    );

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);
