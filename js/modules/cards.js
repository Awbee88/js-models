// Cards
import { getFromServer } from "../services/services";

function cards() {

    class Card {
        constructor(src, alt, title, descr, price, parent, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.transfer = 70;
            this.toRub();
            this.parent = document.querySelector(parent);
        }

        toRub() {
            this.price = this.price * this.transfer;
        }

        render() {
            const elem = document.createElement("div");

            if (this.classes.length === 0) {
                elem.classList.add("menu__item");
            } else {
                this.classes.forEach(className => elem.classList.add(className));
            }

            elem.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
            `;
            this.parent.append(elem);
        }
    }


    // Классовый компонент

    // getFromServer("http://localhost:3000/menu")
    //     .then(data => {
    //         data.forEach(({ img, imgalt, title, descr, price }) => {
    //             new Card(img, imgalt, title, descr, price, ".menu .container").render();
    //         })
    //     });


    // Функциональный компонент

    getFromServer("http://localhost:3000/menu")
        .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({ img, imgalt, title, descr, price }) => {
            const elem = document.createElement("div");
            price *= 70;

            elem.classList.add("menu__item");

            elem.innerHTML = `
        <img src=${img} alt=${imgalt}>
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">${descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price}</span> руб/день</div>
        </div>
        `;

            document.querySelector(".menu .container").append(elem);
        });
    }

    // const div = new Card(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     "Меню \"Фитнес\"",
    //     "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
    //     30,
    //     ".menu .container",
    //     "menu__item").render();

}

export default cards;