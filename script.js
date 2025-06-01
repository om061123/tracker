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

  // hier kunnen we appintments verwijderen
        function deleteAppointment(id) {
            appointments = appointments.filter(app => app.id !== id);
            saveAppointments();
            updateDisplay();
        }

 // hier kunnen we de status wijzigen 
        function toggleAppointment(id) {
            const index = appointments.findIndex(app => app.id === id);
            appointments[index].completed = !appointments[index].completed;
            saveAppointments();
            updateDisplay();
        }

