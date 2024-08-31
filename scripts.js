document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Role-based redirection
    if (username === 'generalDirector' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else if (username === 'Anas Al Gazzawi' && password === 'password') {
        window.location.href = 'socialMedia.html';
    } else if (username === 'Bilal Najjar' && password === 'password') {
        window.location.href = 'onlineSales.html';
    } else if (username === 'Mustafa Al Mansi' && password === 'password') {
        window.location.href = 'accounting.html';
    } else if (username === 'Hamza Al Ajwah' && password === 'password') {
        window.location.href = 'salesHall.html';
    } else if (username === 'Farwk' && password === 'password') {
        window.location.href = 'employee.html?name=Farwk';
    } else if (username === 'Muhammad Alshami' && password === 'password') {
        window.location.href = 'employee.html?name=Muhammad Alshami';
    } else if (username === 'Ahmad Almawla' && password === 'password') {
        window.location.href = 'employee.html?name=Ahmad Almawla';
    } else if (username === 'Ali Mardini' && password === 'password') {
        window.location.href = 'employee.html?name=Ali Mardini';
    } else if (username === 'Mustafa Jawhari' && password === 'password') {
        window.location.href = 'employee.html?name=Mustafa Jawhari';
    } else if (username === 'Ali Nas' && password === 'password') {
        window.location.href = 'employee.html?name=Ali Nas';
    } else if (username === 'Sayd Alfayyoumi' && password === 'password') {
        window.location.href = 'employee.html?name=Sayd Alfayyoumi';
    } else if (username === 'Abdullah' && password === 'password') {
        window.location.href = 'employee.html?name=Abdullah';
    } else if (username === 'Esraa Turkmani' && password === 'password') {
        window.location.href = 'employee.html?name=Esraa Turkmani';
    } else if (username === 'Mohammed Musallam' && password === 'password') {
        window.location.href = 'employee.html?name=Mohammed Musallam';
    } else if (username === 'Esraa Elhasan' && password === 'password') {
        window.location.href = 'employee.html?name=Esraa Elhasan';
    } else if (username === 'Alaa Olyoun' && password === 'password') {
        window.location.href = 'employee.html?name=Alaa Olyoun';
    } else if (username === 'Hasan Badran' && password === 'password') {
        window.location.href = 'employee.html?name=Hasan Badran';
    } else if (username === 'Khalid Alkhateeb' && password === 'password') {
        window.location.href = 'employee.html?name=Khalid Alkhateeb';
    } else if (username === 'Sara Guessoum' && password === 'password') {
        window.location.href = 'employee.html?name=Sara Guessoum';
    } else if (username === 'Liwa Fayyoumi' && password === 'password') {
        window.location.href = 'employee.html?name=Liwa Fayyoumi';
    } else if (username === 'Marwa Alkurdi' && password === 'password') {
        window.location.href = 'employee.html?name=Marwa Alkurdi';
    } else if (username === 'Rehab Rawas' && password === 'password') {
        window.location.href = 'employee.html?name=Rehab Rawas';
    } else if (username === 'Razan' && password === 'password') {
        window.location.href = 'employee.html?name=Razan';
    } else if (username === 'Bilal Mardini' && password === 'password') {
        window.location.href = 'employee.html?name=Bilal Mardini';
    } else if (username === 'Raneem' && password === 'password') {
        window.location.href = 'employee.html?name=Raneem';
    } else {
        alert('Invalid username or password');
    }
});

function navigateTo(section) {
    window.location.href = section;
}

function loadEmployees() {
    const section = getCurrentSection();
    const employees = JSON.parse(localStorage.getItem(section)) || [];
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = ''; // Clear the list before loading
    
    employees.forEach(employee => {
        const employeeItem = document.createElement('li');

        // Get task counts for the employee
        const taskCounts = getTaskCounts(employee.name);

        employeeItem.innerHTML = `
            <span>${employee.name}</span>
            <div class="task-counters">
                <span>In Progress: ${taskCounts.inProgress}</span>
                <span>Completed: ${taskCounts.completed}</span>
                <span>Uncompleted: ${taskCounts.uncompleted}</span>
            </div>
            <div class="employee-actions">
                <button onclick="editEmployee(this)">Edit Employee</button>
                <button onclick="deleteEmployee(this)">Delete Employee</button>
            </div>`;
        
        // Add click event to navigate to employee's page
        employeeItem.addEventListener('click', function() {
            viewEmployeeDetails(employee.name);
        });
        employeeList.appendChild(employeeItem);
    });
}

function getTaskCounts(employeeName) {
    const tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    const inProgress = tasks.filter(task => task.status === 'in progress').length;
    const completed = tasks.filter(task => task.status === 'completed').length;
    const uncompleted = tasks.filter(task => task.status === 'uncompleted').length;
    
    return {
        inProgress,
        completed,
        uncompleted
    };
}

// Modify the viewEmployeeDetails function to work properly when called
function viewEmployeeDetails(employeeName) {
    localStorage.setItem('currentEmployee', employeeName);
    window.location.href = `employee.html?name=${encodeURIComponent(employeeName)}`;
}

function getCurrentSection() {
    const path = window.location.pathname;
    if (path.includes('socialMedia.html')) return 'socialMedia';
    if (path.includes('accounting.html')) return 'accounting';
    if (path.includes('onlineSales.html')) return 'onlineSales';
    if (path.includes('salesHall.html')) return 'salesHall';
    return '';
}

document.addEventListener('DOMContentLoaded', function () {
    loadEmployees();

    const addEmployeeButton = document.getElementById('addEmployeeButton');
    const addEmployeeModal = document.getElementById('addEmployeeModal');
    const closeBtn = addEmployeeModal.querySelector('.close');
    const saveEmployeeButton = document.getElementById('saveEmployeeButton');

    addEmployeeButton.addEventListener('click', function () {
        addEmployeeModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        addEmployeeModal.style.display = 'none';
    });

    saveEmployeeButton.addEventListener('click', function () {
        const employeeName = document.getElementById('employeeNameInput').value.trim();
        if (employeeName) {
            addEmployee(employeeName);
            addEmployeeModal.style.display = 'none';
            document.getElementById('employeeNameInput').value = ''; // Clear input
        }
    });

    window.addEventListener('click', function (event) {
        if (event.target === addEmployeeModal) {
            addEmployeeModal.style.display = 'none';
        }
    });
});

function addEmployee(name) {
    const section = getCurrentSection();
    let employees = JSON.parse(localStorage.getItem(section)) || [];
    employees.push({ name });
    localStorage.setItem(section, JSON.stringify(employees));
    loadEmployees();
}


function editEmployee(button) {
    const employeeItem = button.closest('li');
    const currentName = employeeItem.querySelector('span').textContent;
    const newName = prompt('Enter new name:', currentName);
    
    if (newName && newName !== currentName) {
        // Update the displayed name
        employeeItem.querySelector('span').textContent = newName;
        
        // Update in localStorage
        const section = getCurrentSection();
        let employees = JSON.parse(localStorage.getItem(section)) || [];
        const employee = employees.find(emp => emp.name === currentName);
        if (employee) {
            employee.name = newName;
            localStorage.setItem(section, JSON.stringify(employees));
        }
    }
}

function deleteEmployee(button) {
    if (confirm('Are you sure you want to delete this employee?')) {
        const employeeItem = button.closest('li');
        const employeeName = employeeItem.querySelector('span').textContent;
        
        // Remove from the DOM
        employeeItem.remove();
        
        // Remove from localStorage
        const section = getCurrentSection();
        let employees = JSON.parse(localStorage.getItem(section)) || [];
        employees = employees.filter(emp => emp.name !== employeeName);
        localStorage.setItem(section, JSON.stringify(employees));
    }
}

function viewEmployeeDetails(employeeName) {
    localStorage.setItem('currentEmployee', employeeName);
    window.location.href = `employee.html?name=${encodeURIComponent(employeeName)}`;
}

function loadEmployeeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeName = urlParams.get('name');
    
    if (employeeName) {
        document.getElementById('employeeName').textContent = employeeName;
        loadTasks(employeeName);
    } else {
        alert('No employee specified');
        goBack(); // Redirect back if no employee is found
    }
}

function goBack() {
    window.history.back();
}

// Task management functions
function showTaskForm() {
    document.getElementById('taskForm').style.display = 'block';
}

function addTask(event) {
    event.preventDefault();

    const taskDay = document.getElementById('taskDay').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskDepartment = document.getElementById('taskDepartment').value;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskStartTime = document.getElementById('taskStartTime').value;
    const taskEndTime = document.getElementById('taskEndTime').value;
    const taskNote = document.getElementById('taskNote').value;

    if (!taskDay || !taskDate || !taskDepartment || !taskTitle || !taskDescription || !taskStartTime || !taskEndTime) return;

    const employeeName = localStorage.getItem('currentEmployee');
    let tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    tasks.push({
        day: taskDay,
        date: taskDate,
        department: taskDepartment,
        title: taskTitle,
        description: taskDescription,
        startTime: taskStartTime,
        endTime: taskEndTime,
        note: taskNote,
        status: 'in progress' // default status
    });
    localStorage.setItem(employeeName + '_tasks', JSON.stringify(tasks));

    // Add the task to the "Tasks in Progress" table directly
    const inProgressTasksTableBody = document.getElementById('inProgressTasksTable').querySelector('tbody');
    const taskRow = document.createElement('tr');
    taskRow.innerHTML = `
        <td>${taskDay}</td>
        <td>${taskDate}</td>
        <td>${taskDepartment}</td>
        <td>${taskTitle}</td>
        <td>${taskDescription}</td>
        <td>${taskStartTime}</td>
        <td>${taskEndTime}</td>
        <td>${taskNote}</td>
        <td>
            <button onclick="editTask('${employeeName}', ${tasks.length - 1})">Edit</button>
            <button onclick="confirmDeleteTask('${employeeName}', ${tasks.length - 1})">Delete</button>
            <button onclick="markTaskComplete('${employeeName}', ${tasks.length - 1})">✔</button>
            <button onclick="markTaskUncomplete('${employeeName}', ${tasks.length - 1})">✘</button>
        </td>
        <td>In Progress</td>
    `;
    inProgressTasksTableBody.appendChild(taskRow);

    // Update employee counters
    updateEmployeeCounters(employeeName);

    // Clear the form
    document.getElementById('taskDay').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDepartment').value = '';
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskStartTime').value = '';
    document.getElementById('taskEndTime').value = '';
    document.getElementById('taskNote').value = '';
    document.getElementById('taskForm').style.display = 'none';
}

function loadTasks(employeeName) {
    const tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    const completedTasksTableBody = document.getElementById('completedTasksTable').querySelector('tbody');
    const uncompletedTasksTableBody = document.getElementById('uncompletedTasksTable').querySelector('tbody');
    const inProgressTasksTableBody = document.getElementById('inProgressTasksTable').querySelector('tbody');

    tasks.forEach((task, index) => {
        const taskRow = document.createElement('tr');
        const taskActions = `
            <button onclick="editTask('${employeeName}', ${index})">Edit</button>
            <button onclick="confirmDeleteTask('${employeeName}', ${index})">Delete</button>
            <button onclick="markTaskComplete('${employeeName}', ${index})">✔</button>
            <button onclick="markTaskUncomplete('${employeeName}', ${index})">✘</button>
        `;
        taskRow.innerHTML = `
            <td>${task.day}</td>
            <td>${task.date}</td>
            <td>${task.department}</td>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.startTime}</td>
            <td>${task.endTime}</td>
            <td>${task.note}</td>
            <td>${task.status === 'in progress' ? taskActions : ''}</td>
            <td>${task.status === 'completed' ? 'Completed' : task.status === 'uncompleted' ? 'Uncompleted' : 'In Progress'}</td>
        `;

        if (task.status === 'completed') {
            completedTasksTableBody.appendChild(taskRow);
        } else if (task.status === 'uncompleted') {
            uncompletedTasksTableBody.appendChild(taskRow);
        } else {
            inProgressTasksTableBody.appendChild(taskRow);
        }
    });

    // Update employee counters
    updateEmployeeCounters(employeeName);
}

function editTask(employeeName, taskIndex) {
    localStorage.setItem('taskIndex', taskIndex);
    window.location.href = 'editTask.html';
}

function loadTaskDetails() {
    const taskIndex = localStorage.getItem('taskIndex');
    const employeeName = localStorage.getItem('currentEmployee');
    const tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    const task = tasks[taskIndex];

    document.getElementById('taskDay').value = task.day;
    document.getElementById('taskDate').value = task.date;
    document.getElementById('taskDepartment').value = task.department;
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskStartTime').value = task.startTime;
    document.getElementById('taskEndTime').value = task.endTime;
    document.getElementById('taskNote').value = task.note;
}

function updateTask(event) {
    event.preventDefault();

    const taskDay = document.getElementById('taskDay').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskDepartment = document.getElementById('taskDepartment').value;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskStartTime = document.getElementById('taskStartTime').value;
    const taskEndTime = document.getElementById('taskEndTime').value;
    const taskNote = document.getElementById('taskNote').value;

    const taskIndex = localStorage.getItem('taskIndex');
    const employeeName = localStorage.getItem('currentEmployee');
    let tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    
    tasks[taskIndex] = {
        day: taskDay,
        date: taskDate,
        department: taskDepartment,
        title: taskTitle,
        description: taskDescription,
        startTime: taskStartTime,
        endTime: taskEndTime,
        note: taskNote,
        status: tasks[taskIndex].status // preserve the current status
    };

    localStorage.setItem(employeeName + '_tasks', JSON.stringify(tasks));
    window.location.href = 'employee.html'; // Navigate back to the employee page
}

function markTaskComplete(employeeName, taskIndex) {
    updateTaskStatus(employeeName, taskIndex, 'completed');
}

function markTaskUncomplete(employeeName, taskIndex) {
    updateTaskStatus(employeeName, taskIndex, 'uncompleted');
}

function updateTaskStatus(employeeName, taskIndex, status) {
    let tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    tasks[taskIndex].status = status;
    localStorage.setItem(employeeName + '_tasks', JSON.stringify(tasks));
    location.reload(); // Refresh the page to reflect changes
}

function confirmDeleteTask(employeeName, taskIndex) {
    if (confirm('Are you sure you want to delete this task?')) {
        deleteTask(employeeName, taskIndex);
    }
}

function deleteTask(employeeName, taskIndex) {
    let tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    tasks.splice(taskIndex, 1);
    localStorage.setItem(employeeName + '_tasks', JSON.stringify(tasks));
    location.reload(); // Refresh the page to reflect changes
}

function updateEmployeeCounters(employeeName) {
    const tasks = JSON.parse(localStorage.getItem(employeeName + '_tasks')) || [];
    const inProgressCount = tasks.filter(task => task.status === 'in progress').length;
    const completedCount = tasks.filter(task => task.status === 'completed').length;
    const uncompletedCount = tasks.filter(task => task.status === 'uncompleted').length;

    const employeeList = document.getElementById('employeeList');
    const employeeItem = Array.from(employeeList.children).find(li => li.textContent.includes(employeeName));
    
    if (employeeItem) {
        employeeItem.querySelector('.in-progress-counter').textContent = `In Progress: ${inProgressCount}`;
        employeeItem.querySelector('.completed-counter').textContent = `Completed: ${completedCount}`;
        employeeItem.querySelector('.uncompleted-counter').textContent = `Uncompleted: ${uncompletedCount}`;
    }
}

document.getElementById('reportForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const reportType = document.getElementById('reportType').value;
    const reportResult = document.getElementById('reportResult');
    reportResult.innerHTML = '';

    const employees = getAllEmployees();
    const tasksByEmployee = getTasksByEmployee(employees);

    if (reportType === 'mostCompleted') {
        const result = getEmployeeWithMostTasks(tasksByEmployee, 'completed');
        reportResult.innerHTML = `<h2>Employee with the Most Completed Tasks</h2><p>${result.name} with ${result.count} completed tasks</p>`;
    } else if (reportType === 'mostUncompleted') {
        const result = getEmployeeWithMostTasks(tasksByEmployee, 'uncompleted');
        reportResult.innerHTML = `<h2>Employee with the Most Uncompleted Tasks</h2><p>${result.name} with ${result.count} uncompleted tasks</p>`;
    } else if (reportType === 'completedPercentage') {
        const result = getTaskCompletionPercentage(tasksByEmployee);
        reportResult.innerHTML = `<h2>Percentage of Tasks Completed</h2><p>${result}% of tasks have been completed</p>`;
    } else if (reportType === 'unfinishedPercentage') {
        const result = getTaskUnfinishedPercentage(tasksByEmployee);
        reportResult.innerHTML = `<h2>Percentage of Unfinished Tasks</h2><p>${result}% of tasks remain unfinished</p>`;
    }
});

function getAllEmployees() {
    // Returns an array of employee names based on the keys in localStorage
    return Object.keys(localStorage).filter(key => key.endsWith('_tasks')).map(key => key.replace('_tasks', ''));
}

function getTasksByEmployee(employees) {
    const tasksByEmployee = {};
    employees.forEach(employee => {
        const tasks = JSON.parse(localStorage.getItem(employee + '_tasks')) || [];
        tasksByEmployee[employee] = tasks;
    });
    return tasksByEmployee;
}

function getEmployeeWithMostTasks(tasksByEmployee, status) {
    let maxCount = 0;
    let employeeWithMostTasks = '';

    for (const [employee, tasks] of Object.entries(tasksByEmployee)) {
        const taskCount = tasks.filter(task => task.status === status).length;
        if (taskCount > maxCount) {
            maxCount = taskCount;
            employeeWithMostTasks = employee;
        }
    }

    return { name: employeeWithMostTasks, count: maxCount };
}

function getTaskCompletionPercentage(tasksByEmployee) {
    let totalTasks = 0;
    let completedTasks = 0;

    for (const tasks of Object.values(tasksByEmployee)) {
        totalTasks += tasks.length;
        completedTasks += tasks.filter(task => task.status === 'completed').length;
    }

    return ((completedTasks / totalTasks) * 100).toFixed(2);
}

function getTaskUnfinishedPercentage(tasksByEmployee) {
    let totalTasks = 0;
    let uncompletedTasks = 0;

    for (const tasks of Object.values(tasksByEmployee)) {
        totalTasks += tasks.length;
        uncompletedTasks += tasks.filter(task => task.status === 'uncompleted').length;
    }

    return ((uncompletedTasks / totalTasks) * 100).toFixed(2);
}
