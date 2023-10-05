var countdownElement = document.querySelector('.countdown');

var dueDate = new Date();
dueDate.setHours(dueDate.getHours() + 24);

var dateDueElement = document.querySelector('.date-due');
dateDueElement.textContent = formatDate(dueDate);

var countdownInterval = setInterval(updateCountdown, 1000);

function formatDate(date) {
    var formattedDate = date.toLocaleString(["en-US"], {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return formattedDate;
}

function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = dueDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Time expired';
        return;
    }

    var seconds = Math.floor(timeDifference / 1000) % 60;
    var minutes = Math.floor(timeDifference / 1000 / 60) % 60;
    var hours = Math.floor(timeDifference / 1000 / 3600) % 24;

    var countdownText = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');

    countdownElement.textContent = countdownText;
}

document.addEventListener("DOMContentLoaded", function() {
    var totalAmount = localStorage.getItem('totalAmount');

    if (totalAmount) {

        document.getElementById('payment-total').textContent = 'Rp. ' + totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});