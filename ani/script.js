// Menambahkan kelas 'visible' ketika elemen muncul di viewport
const skillItems = document.querySelectorAll('.skills .skill-list li');

const checkVisibility = () => {
  const windowHeight = window.innerHeight;
  skillItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Panggil fungsi saat halaman dimuat pertama kali
