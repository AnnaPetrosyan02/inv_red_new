const card = document.querySelector('.card');
let opened = false;

card.addEventListener('click', () => {
    if (!opened) {
        card.classList.add('open');
        opened = true;

        // Триггерим reveal через задержку (после анимации flip)
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach((el, i) => {
                setTimeout(() => el.classList.add('active'), i * 200);
            });
        }, 900);
    }
});