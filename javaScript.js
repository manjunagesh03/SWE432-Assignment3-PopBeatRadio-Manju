const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();
let selectedDate = null;

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString
    ('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class = "date inactive">${prevDate.getDate()}</div>`;

    }

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class= "date ${activeClass}">${i}</div>`

    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate= new Date(currentYear, currentMonth+1, i);
        datesHTML += `<div class = "date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;

}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() -1);
    updateCalendar();
})


nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth()  + 1);
    updateCalendar();
})

datesElement.addEventListener('click', () => {
    
})

updateCalendar();


//Queue Implementation
const queue = [];

// Function to update the displayed queue in HTML
function updateQueueDisplay() {
    const queueContent = document.getElementById('queue-content');
    queueContent.innerHTML = ''; // Clear current queue display

    // Display each item in the queue
    queue.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('queue-item');
    div.textContent = item;
    queueContent.appendChild(div);
    });
}

// Function to add an item to the queue
function enqueue() {
    const item = prompt("Enter an item to add to the queue:");
    if (item) {
      queue.push(item); 
      updateQueueDisplay(); 
    }
}


// Function to remove an item from the queue
function dequeue() {
    if (queue.length > 0) {
    queue.shift();
    updateQueueDisplay(); 
    } else {
    alert("The queue is empty.");
    }
}

//Producer Class
class Producer {
    constructor(dj_names, playlists, announcements, songs, schedule) {
        this.dj_names = dj_names;
        this.playlists = playlists;
        this.announcements = announcements;
        this.songs = songs;
        this.schedule = schedule;
    }
}

const dj_names_list = ["Moxie", "Simba", "Rider", "Riley", "Daisy"];
const playlists_list = ["LoFi", "Playlist #1", "Rock and Roll"]
const songs_list = ["APT", "Happy", "Espresso", "Shake It Off", "Pillow Talks", "", "Birds of a Feather", "Nightlights", "Me Too"];
const announcements_list = ["Tour Dates Released!", "Tickets Selling!"];
const schedule_list = ["Monday 9 AM", "Tuesday 9 AM", "Wednesday 1 PM", "Thursday 9 AM", "Friday 10 AM", "Saturday 1 PM"];

let Prod_List = [];
for(let i = 0; i < 5; i++){
    const the_Producer = new Producer(dj_names_list[i], playlists_list[i], announcements_list[i], songs_list[i], schedule_list[i]);
    DJ_List.push(temp_DJ);
}








