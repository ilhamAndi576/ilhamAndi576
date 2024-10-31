document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Anda sedang melihat gambar: ${img.alt}`);
        });
    });
});
