const menuBox = document.querySelector('.menu-box')
const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')

window.addEventListener('scroll', () => {
        menuBox.classList.toggle('active', scrollY > 400)
        logo.classList.toggle('active', scrollY > 400)
        menu.classList.toggle('active', scrollY > 400)
})



/********** SLIDE ***********/
const galeriaContainer = document.querySelector('.galeria-container');
const galeriaControlsContainer = document.querySelector('.galeria-controls');
const galeriaControls = ['Anterior', 'Proximo'];
const galeriaItems = document.querySelectorAll('.galeria-item'); // Alterado para querySelectorAll

class carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('galeria-item-1');
            el.classList.remove('galeria-item-2');
            el.classList.remove('galeria-item-3');
            el.classList.remove('galeria-item-4');
            el.classList.remove('galeria-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`galeria-item-${i+1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'galeria-controls-Anterior') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction.className == 'galeria-controls-Proximo') { // Corrigido para verificar 'Proximo'
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `galeria-controls-${control}`;
            button.innerText = control;
            galeriaControlsContainer.appendChild(button);
        });
    }
    
    useControls() {
        const triggers = [...galeriaControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new carousel(galeriaContainer, galeriaItems, galeriaControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
/********** FIM DO SLIDE ***********/