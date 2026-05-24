// 从localStorage拿数据
function getTasks() {
    return JSON.parse(localStorage.getItem('studyTasks')) || [];
}

// 写数据到localStorage
function saveTasks(tasks) {
    localStorage.setItem('studyTasks', JSON.stringify(tasks));
}

// 渲染表格
function renderTable() {
    var tasks = getTasks();
    var tbody = document.getElementById('taskBody');
    var html = '';
    for (var i = 0; i < tasks.length; i++) {
        var t = tasks[i];
        html += '<tr>';
        html += '<td>' + t.name + '</td>';
        html += '<td>' + t.startDate + '</td>';
        html += '<td>' + t.endDate + '</td>';
        html += '<td>' + t.remaining + '</td>';
        html += '<td>' + t.progress + '%</td>';
        html += '<td><button onclick="editTask(' + i + ')">编辑</button> <button onclick="deleteTask(' + i + ')">删除</button></td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;
}

// 编辑
function editTask(i) {
    window.location.href = 'add.html?edit=' + i;
}

// 删除
function deleteTask(i) {
    var tasks = getTasks();
    tasks.splice(i, 1);
    saveTasks(tasks);
    renderTable();
}


renderTable();