const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

    gsap.from(".nlink", {
        stagger: 0.1,
        y: 10,
        duration: 0.7,
        ease: 'power2',
        opacity: 0
    });

Shery.textAnimate("#etext h1", {
    style: 3,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
    gsap.from(".anim2", {
        stagger: 0.1,
        y: 40,
        duration: 0.7,
        ease: 'power4',
        opacity: 0
    });
Shery.imageEffect(".imgf img", {
    style: 5, //Select Style
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.39,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.85},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},
    "scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]}},
    preset: "./presets/wigglewobble.json",
  });
Shery.imageEffect("#ephemeral img", {
    style: 3, //Select Style
    config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":21.49,"range":[0,100]},"uFrequencyZ":{"value":20.66,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7026943910322501},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect("#imgwrapper img", {
    style: 5, //Select Style
    debug : true,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.39,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.85},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},
    "scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]}},
    preset: "./presets/wigglewobble.json",
  });

  Shery.imageEffect("#bimg", {
    style: 5, //Select Style
    gooey : true,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7454264898295957},"gooey":{"value":false},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.197402,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]}},
    preset: "./presets/wigglewobble.json",
  });

  document.querySelector("#ftext button").addEventListener("mouseover", function(){
      gsap.to("video",{
        opacity : 1,
        duration : 1,
        ease: 'power4',
      })
  })
  document.querySelector("#ftext button").addEventListener("mouseleave", function(){
    gsap.to("video",{
        opacity : 0,
        duration : 1,
        ease: 'power4',
      })
  })



