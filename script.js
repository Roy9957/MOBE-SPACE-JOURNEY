// Get references to elements
const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const sidebarMenu = document.getElementById('sidebarMenu');
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('#sidebarMenu ul li');

// Toggle Sidebar Menu
menuToggle.addEventListener('click', () => {
  sidebarMenu.classList.toggle('active'); // Show/Hide menu
  menuIcon.textContent = sidebarMenu.classList.contains('active') ? '×' : '≡'; // Change icon
});

// Show selected section and hide others
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-section');
    sections.forEach(section => {
      if (section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
    sidebarMenu.classList.remove('active'); // Hide menu after selection
    menuIcon.textContent = '≡'; // Reset icon to default
  });
});


