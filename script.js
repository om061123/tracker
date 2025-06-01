//    hier gaan we alle appointments in de localStorage steken
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const datetime = document.getElementById("datetime").value;

    appointments.push({
      id: Date.now(),
      title,
      datetime,
      completed: false,
    });
    saveAppointments();
    this.reset();

  });


   // hier gaan we de appointments opslaan
        function saveAppointments() {
            localStorage.setItem('appointments', JSON.stringify(appointments));
        }

