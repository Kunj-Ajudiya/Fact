document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');

    // Replace this with your own YouTube API or embed links
    // const videos = [
    //     { title: 'Video 1', link: 'https://www.youtube.com/embed/xyz1' },
    //     { title: 'Video 2', link: 'https://www.youtube.com/embed/xyz2' },
    //     { title: 'Video 3', link: 'https://www.youtube.com/embed/xyz3' },
    // ];

    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.innerHTML = `
            <iframe width="300" height="200" src="${video.link}" frameborder="0" allowfullscreen></iframe>
            <p>${video.title}</p>
        `;
        videoList.appendChild(videoContainer);
    });

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
    

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.style.display = 'none';
    successMessage.textContent = 'Your message has been sent successfully!';
    contactForm.appendChild(successMessage);

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Display the success message
        successMessage.style.display = 'block';

        // Optionally reset the form
        contactForm.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
});
