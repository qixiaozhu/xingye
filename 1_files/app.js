/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.3,
    size: 2,
    size_random: true,
    nb: 300,
    line_linked: {
      enable_auto: true,
      distance: 230,
      color: '#fff',
      opacity: 0.5,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 4
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 500
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .2
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 2
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});