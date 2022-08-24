const slider = document.querySelector('slider');
// const track = slider.querySelector('slide-track');
// const pagination = slider.querySelector('pagination')
const [track, pagination] = slider.children


const showSlide = (index) => {
    index = index % track.children.length
    track.children[index].scrollIntoView({ behavior: 'smooth' });
};

const rand = (num) => {
    return Math.floor(Math.random() * num);
};

const genColor = () => {
    return `hsl(${rand(360)}, 70%, 50%)`;
};

const genColors = () => {
    const count = 2 + rand(18);
    const colors = [];

    for (let i = 0; i < count; i += 1) {
        colors.push(genColor());
    }

    return colors;
};

const makeSlides = (colors) => {
    const slides = [];

    for (let i = 0; i < colors.length; i += 1) {
        slides.push(document.createElement('slide'));
        slides[i].style.backgroundColor = colors[i];
    }

    return slides;
};

const makeBtns = (count) => {
    const buttons = [];

    for (let i = 0; i < count; i += 1) {
        buttons.push(document.createElement('button'));
        buttons[i].addEventListener('click', () => showSlide(i));
        buttons[i].style.backgroundColor = colors[i];
    }

    return buttons
};

const colors = genColors();
const slides = makeSlides(colors);
const buttons = makeBtns(slides.length);
let i = 0

track.append(...slides);

pagination.append(...buttons);


setInterval(() => {
    if (slider.matches(':hover')) return    

    showSlide(i++) 
},
1000);
