let blocks = document.getElementsByClassName('block');
let container = document.getElementsByClassName('container');
let hs = new HorizontalScroll.default({
    blocks:blocks,
    container:container,
    isAnimated:true,
    springEffect:0.8
});
