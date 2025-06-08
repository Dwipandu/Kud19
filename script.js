document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    const floatingHearts = document.getElementById('floatingHearts');
    const heartIcons = ['☕', '🚬', '🍻', '💸', '🥀', '💊'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (4 + Math.random() * 4) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
            heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
            floatingHearts.appendChild(heart);
        }, i * 300);
    }

    // Load more memory photos
    const memoryGallery = document.getElementById('memoryGallery');
    const memoryPhotos = [
        { date: '10 Februari 2023', title: 'Makan Malam Pertama', desc: 'Momen saat kita pergi makan malam pertama di restoran Italia favoritmu.', src: 'https://i.supaimg.com/884bb932-b950-44d2-9744-21a169a955e1.jpg' },
        { date: '15 April 2023', title: 'Piknik di Taman', desc: 'Hari yang cerah saat kita piknik di taman kota bersama.', src: 'https://i.supaimg.com/722bf811-9f9d-4c8e-96c6-9990af9382b5.jpg' },
        { date: '30 Mei 2023', title: 'Konser Musik', desc: 'Kita menonton konser band favoritmu bersama-sama.', src: 'https://i.supaimg.com/1dae03fa-8a75-4519-a07f-bba638d0c9e8.jpg' },
        { date: '12 Agustus 2023', title: 'Hiking Bersama', desc: 'Petualangan kita mendaki gunung untuk pertama kalinya.', src: 'https://i.supaimg.com/6b588189-ca18-41a4-9228-b98b34a5afbf.jpg' },
        { date: '8 September 2023', title: 'Ulang Tahunku', desc: 'Kamu membuat kejutan ulang tahun yang sangat menyentuh.', src: 'https://source.unsplash.com/random/600x400/?birthday,surprise,celebration' },
        { date: '25 November 2023', title: 'Thanksgiving', desc: 'Merayakan thanksgiving bersama keluarga besarmu.', src: 'https://source.unsplash.com/random/600x400/?thanksgiving,family,dinner' }
    ];

    memoryPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" class="memory-img">
            <div class="memory-info">
                <div class="memory-date">${photo.date}</div>
                <h3 class="memory-title">${photo.title}</h3>
                <p class="memory-desc">${photo.desc}</p>
            </div>
        `;
        memoryGallery.appendChild(card);
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});