//DROPDOWN

let dropdownTimeout;
const dropdown = document.querySelector('.store-dropdown');
const mainContent = document.getElementById('main-content');

function showDropdown() {
    clearTimeout(dropdownTimeout);
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = 'block';

    mainContent.classList.add('overlay');
}

function hideDropdown() {
    dropdownTimeout = setTimeout(function() {
      var dropdown = document.querySelector('.dropdown-content');
      dropdown.style.display = 'none';
    }, 200);
    
    mainContent.classList.remove('overlay');
}