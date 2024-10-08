const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskHours = parseInt(document.getElementById('taskHours').value) || 0;
    const taskMinutes = parseInt(document.getElementById('taskMinutes').value) || 0;
    const taskSpecificTime = document.getElementById('taskSpecificTime').value;
    
    const task = { name: taskName, duration: taskHours * 60 + taskMinutes, specificTime: taskSpecificTime };
    tasks.push(task);

    document.getElementById('taskForm').reset();
    updateTaskList();
});

document.getElementById('generatePlan').addEventListener('click', function() {
    const startTime = document.getElementById('startHour').value;
    const endTime = document.getElementById('endHour').value;

    if (!startTime || !endTime) {
        alert("Por favor, ingresa la hora de inicio y fin.");
        return;
    }

    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    const availableMinutes = endMinutes - startMinutes;

    if (availableMinutes <= 0) {
        alert("La hora de fin debe ser posterior a la hora de inicio.");
        return;
    }

    let currentTime = startMinutes;
    let scheduleHTML = '<h2>Plan de Tareas</h2>';
    let totalTaskTime = tasks.reduce((acc, task) => acc + task.duration, 0);

    if (totalTaskTime > availableMinutes) {
        alert("El tiempo disponible no es suficiente para realizar todas las tareas.");
        return;
    }

    tasks.forEach(task => {
        scheduleHTML += `<p>${minutesToTime(currentTime)} - ${minutesToTime(currentTime + task.duration)}: ${task.name}</p>`;
        currentTime += task.duration;
    });

    document.getElementById('schedule').innerHTML = scheduleHTML;
});

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpiar la lista de tareas

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.name} (${task.duration} mins)`;
        
        if (task.specificTime) {
            li.textContent += ` - Hora específica: ${task.specificTime}`;
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            tasks.splice(index, 1); // Elimina la tarea de la lista
            updateTaskList(); // Actualiza la lista de tareas
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}





