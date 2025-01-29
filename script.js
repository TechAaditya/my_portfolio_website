// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Here, you'd typically handle form submission.
    // This could be an AJAX request to a server,
    // or using a service like EmailJS to send an email.
    // This is just an example, it's not a complete solution.
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    console.log("Form Data:", name, email, message);
    alert('Thank you for your message!');
});

// Newsletter form handling
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to the newsletter!');
});