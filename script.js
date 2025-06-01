//    hier gaan we alle appointments opslaan in de localStorage
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
