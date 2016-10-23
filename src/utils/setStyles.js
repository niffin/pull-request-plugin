export default function setStyles (el, styles) {
  Object.keys(styles).forEach(key => {
    el.style[key] = styles[key];
  });
}
