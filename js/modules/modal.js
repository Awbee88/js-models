// Modal

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };


// Modal old ver.

/*

const modalBtns = document.querySelectorAll("[data-modal]"),
modalWindow = document.querySelector(".modal"),
modalClose = document.querySelector(".modal__close");

modalBtns.forEach(btn => {
btn.addEventListener("click", () => {
    openModal();
});
});

function closeModal() {
modalWindow.classList.add('hide');
modalWindow.classList.remove('show');
document.body.style.overflow = '';
}

function openModal() {
modalWindow.classList.add('show');
modalWindow.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modalTimerId);
}

modalClose.addEventListener("click", () => {
closeModal();
});

modalWindow.addEventListener("click", (e) => {
if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
    closeModal();
}
});

document.addEventListener("keydown", (e) => {
if (e.key === "Escape" && modalWindow.style.display === "block") {
    closeModal();
}
});

const modalTimerId = setTimeout(() => {
openModal(modalWindow);
}, 500000);

function showModalByScroll() {
if (window.scrollY > 3300 && modalWindow.style.display === "") {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
}
}
window.addEventListener('scroll', showModalByScroll);

*/