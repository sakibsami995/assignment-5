document.addEventListener('DOMContentLoaded', function() {
    const dateToday = document.getElementById('current-date');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    
    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const date2 = today.getDate();
    const year2 = today.getFullYear();
    
    dateToday.innerHTML = dayName + ", "+ monthName + " " + date2 + "," + " " + year2;

});
