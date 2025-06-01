//    hier gaan we alle appointments in de localStorage steken
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
            
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const datetime = document.getElementById('datetime').value;

        appointments.push({
                id: Date.now(),
                title,
                description,
                datetime,
                completed: false
    });
    saveAppointments();
    this.reset();
    updateDisplay();
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

                // hier kunnen we de weergave bewerken
        function updateDisplay() {
            const container = document.getElementById('appointmentsList');
            container.innerHTML = '';

            // alles word hier gesorteerd 
  const sortedAppointments = [...appointments].sort((a, b) => 
                new Date(a.datetime) - new Date(b.datetime)
            );

            sortedAppointments.forEach(appointment => {
                const div = document.createElement('div');
                div.className = 'appointment-item';
                
                const statusClass = appointment.completed ? 'completed' : '';
                div.innerHTML = `
                    <div class="appointment-details">
                        <div>
                            <h3>${appointment.title}</h3>
                            <p class="appointment-description">${appointment.description || 'Geen beschrijving'}</p>
                        </div>
                        <div>
                            <span>${new Date(appointment.datetime).toLocaleString('nl-NL')}</span>
                            <div class="appointment-actions">
                                <button onclick="toggleAppointment(${appointment.id})">
                                    ${appointment.completed ? 'Herstart' : 'Voltooid'}
                                </button>
                                <button class="delete-btn" onclick="deleteAppointment(${appointment.id})">
                                    Verwijder
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(div);
            });
        }

         updateDisplay();

