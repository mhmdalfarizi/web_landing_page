/*
 * Landing Page - Personal Branding Pengusaha
 * JavaScript Utama
 */

document.addEventListener('DOMContentLoaded', function() {
    // Variabel & Elemen
    const header = document.getElementById('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const contactForm = document.getElementById('contactForm');
    const heroSection = document.getElementById('hero');
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Inisialisasi AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Header Sticky & Scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'none';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        // Parallax Effect untuk Hero Section
        if (heroSection) {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Mobile Navigation
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            navToggle.innerHTML = '<i class="fas fa-times"></i>';
            // Tambahkan animasi untuk menu
            document.querySelectorAll('.nav-menu ul li').forEach((item, index) => {
                item.style.animation = `slideIn 0.3s ease forwards ${index / 7 + 0.2}s`;
                item.style.opacity = '1';
            });
        } else {
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.querySelectorAll('.nav-menu ul li').forEach(item => {
                item.style.animation = 'none';
            });
        }
    });
    
    // Nav Link Active & Close Mobile Nav
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hapus kelas active dari semua link
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Tambahkan kelas active ke link yang diklik
            this.classList.add('active');
            
            // Tutup menu mobile jika terbuka
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Scroll halus ke bagian yang sesuai (jika bukan eksternal)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Service Card Interactive Effect
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                this.querySelector('.service-icon i').style.transform = 'rotateY(180deg)';
            }, 150);
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.transform = 'rotateY(0)';
            setTimeout(() => {
                this.querySelector('.service-icon i').style.transform = 'rotateY(0)';
            }, 150);
        });
    });
    
    // Testimonial Slider
    let currentSlide = 0;
    
    function showSlide(n) {
        // Reset slide aktif
        testimonialItems.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Set slide aktif baru dengan animasi
        testimonialItems[n].classList.add('active');
        setTimeout(() => {
            testimonialItems[n].style.opacity = '1';
            testimonialItems[n].style.transform = 'scale(1)';
        }, 100);
        
        dots[n].classList.add('active');
        currentSlide = n;
    }
    
    // Next Slide
    function nextSlide() {
        if (currentSlide >= testimonialItems.length - 1) {
            showSlide(0);
        } else {
            showSlide(currentSlide + 1);
        }
    }
    
    // Previous Slide
    function prevSlide() {
        if (currentSlide <= 0) {
            showSlide(testimonialItems.length - 1);
        } else {
            showSlide(currentSlide - 1);
        }
    }
    
    // Event Listeners untuk kontrol testimonial
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Click pada dot untuk ganti slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide setiap 5 detik
    let testimonialInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide saat hover pada testimonial
    document.querySelector('.testimonial-slider').addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    document.querySelector('.testimonial-slider').addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextSlide, 5000);
    });
    
    // Menambahkan typing effect di hero section
    if (document.querySelector('.hero-content h1')) {
        const heroText = document.querySelector('.hero-content h1').textContent;
        document.querySelector('.hero-content h1').innerHTML = '';
        const heroTextElement = document.querySelector('.hero-content h1');
        
        let i = 0;
        function typeWriter() {
            if (i < heroText.length) {
                heroTextElement.innerHTML += heroText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Mulai typing effect setelah 1 detik
        setTimeout(typeWriter, 1000);
    }
    
    // Form Submission dengan animasi
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validasi dasar
            if (!name || !email || !message) {
                showNotification('Silakan isi semua field yang diperlukan', 'error');
                return;
            }
            
            // Simulasi pengiriman form
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitButton.disabled = true;
            
            // Simulasi delay pengiriman
            setTimeout(() => {
                console.log('Form submitted:', { name, email, subject, message });
                
                // Reset form setelah submit
                contactForm.reset();
                
                // Tampilkan pesan sukses
                submitButton.innerHTML = 'Kirim Pesan';
                submitButton.disabled = false;
                
                showNotification('Terima kasih! Pesan Anda telah dikirim.', 'success');
            }, 2000);
        });
    }
    
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message, type) {
        // Cek apakah sudah ada notifikasi
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Buat elemen notifikasi
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <p>${message}</p>
            </div>
            <span class="notification-close">&times;</span>
        `;
        
        // Tambahkan ke body
        document.body.appendChild(notification);
        
        // Tampilkan notifikasi dengan animasi
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Hilangkan notifikasi setelah 5 detik
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
        
        // Tambahkan event listener untuk tombol close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }
    
    // Animasi counter untuk statistik
    const counters = document.querySelectorAll('.info-item h4');
    
    function startCounter() {
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            let count = 0;
            const speed = 2000 / target; // kecepatan animasi (ms)
            
            const updateCount = () => {
                if (count < target) {
                    count++;
                    counter.textContent = count + (counter.textContent.includes('+') ? '+' : '');
                    setTimeout(updateCount, speed);
                }
            };
            
            updateCount();
        });
    }
    
    // Memulai counter saat bagian about terlihat
    const aboutSection = document.getElementById('about');
    
    function checkIfInView() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            startCounter();
            window.removeEventListener('scroll', checkIfInView);
        }
    }
    
    window.addEventListener('scroll', checkIfInView);
    
    // Periksa saat halaman pertama kali dimuat
    checkIfInView();
    
    // Aktifkan navigasi aktif berdasarkan posisi scroll
    function updateActiveNav() {
        const scrollPosition = window.scrollY;
        
        // Ambil semua section dan cari yang sesuai dengan posisi scroll
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Hapus semua kelas active
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Tambahkan kelas active ke link yang sesuai
                const activeLink = document.querySelector(`.nav-menu ul li a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Panggil updateActiveNav saat scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Inisialisasi status awal
    updateActiveNav();
}); 