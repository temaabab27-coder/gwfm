document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filterBtn');
    const filterMenu = document.getElementById('filterMenu');
    const filterOptions = document.querySelectorAll('.filter-option');
    const productItems = document.querySelectorAll('.product-item');

    // Открытие/закрытие меню
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('active');
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
            filterMenu.classList.remove('active');
        }
    });

    // Применение фильтра
    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            const filter = option.dataset.filter;

            productItems.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else if (filter === 'available') {
                    if (item.dataset.status === 'available') {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });

            // Закрываем меню после выбора
            filterMenu.classList.remove('active');
        });
    });
});