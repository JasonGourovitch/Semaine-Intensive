var BurgerOpen = document.querySelector('.Header__nav__burger');
var Menu = document.querySelector('.Menu');
var MenuClose = document.querySelector('.Menu__close');

BurgerOpen.addEventListener('click', function(){
  document.body.style.overflow="hidden";
  Menu.style.opacity = "1";
  Menu.style.zIndex = "999";
});

MenuClose.addEventListener('click', function (){
  Menu.style.display = "none";
  document.body.style.overflow="";
});


//  Particles

particlesJS("particles-js", {
//  Particle Value, Density
"particles":{
"number":{
"value":600,
"density":{
"enable":true,"value_area":800
}
},
//  Particles Color, Shape, Nubers
"color":{
"value":"#ffffff"
},
"shape":{
"type":"circle","stroke":{
"width":0,"color":"#000000"
},
"polygon":{
"nb_sides":5
},
"image":{
"src":"img/github.svg","width":100,"height":100
}
},
//  Particles Opacity, Size
"opacity":{
"value":1,
"random":true,
"anim":{
"enable":true,"speed":1,
"opacity_min":0,"sync":false
}
},
"size":{
"value":1,"random":true,
"anim":{
"enable":false,
"speed":17.053621458328248,
"size_min":1,"sync":false
}
},
"line_linked":{
"enable":false,
"distance":150,
"color":"#ffffff",
"opacity":0.4,"width":1
},

//  Particles Move
"move":{
"enable":true,
"speed":1,
"direction":"none",
"random":true,
"straight":false,
"out_mode":"out",
"bounce":false,
"attract":{
"enable":false,
"rotateX":600,
"rotateY":600
}
}
},
//  Interactivity

"interactivity":{
"detect_on":"canvas",
"events":{
"onhover":{
"enable":false,
"mode":"repulse"
},
//  Interactivity On Click
"onclick":{
"enable":true,
"mode":"push"},
"resize":true},
"modes":{
"grab":{
"distance":400,
"line_linked":{"opacity":1
}
},
//  Interactivity Buble, Repulse, Push, Remove
"bubble":{
"distance":250,
"size":0,
"duration":2,
"opacity":0,
"speed":3},
"repulse":{
"distance":400,
"duration":0.4
},
"push":{
"particles_nb":4
},
"remove":{
"particles_nb":2
}
}
},
// End  Interactivity
// End  Particle

"retina_detect":true
});








var BackToTop = document.querySelector('.BackToTop');
BackToTop.addEventListener('click',function () {
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
})
