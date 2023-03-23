// Калькулятор

function calc() {

    const resultCal = document.querySelector(".calculating__result span");
    let sex = "female", height, weight, age, ratio = 1.375;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            resultCal.textContent = "****"
            return;
        }

        if (sex === "female") {
            resultCal.textContent = ((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(0);
        } else {
            resultCal.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(0);
        }
    }

    calcTotal();

    function getStaticInformation(parent, activeClass) {
        const elements = document.querySelectorAll(`${parent} div`);

        elements.forEach(elem => {
            elem.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute("data-ratio");
                    localStorage.setItem("ratio", ratio);
                } else {
                    sex = e.target.getAttribute("id")
                    localStorage.setItem("sex", sex);
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);

                calcTotal();
            });
        });

    }

    getStaticInformation("#gender", "calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big", "calculating__choose-item_active");

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener("input", (e) => {

            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }

            switch (input.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInfo("#height");
    getDynamicInfo("#weight");
    getDynamicInfo("#age");

}

export default calc;
