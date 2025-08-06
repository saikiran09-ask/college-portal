let students = [];
let permissions = [];
let absentees = [];

function registerStudent() {
  const name = document.getElementById('studentName').value;
  const reg = document.getElementById('regNumber').value;
  const branch = document.getElementById('branch').value;

  if (name && reg && branch) {
    students.push({ name, reg, branch });
    alert('Student Registered');
    document.getElementById('studentName').value = '';
    document.getElementById('regNumber').value = '';
    document.getElementById('branch').value = '';
  } else {
    alert('Please fill all fields');
  }
}

function showLogin() {
  document.getElementById('registerSection').classList.add('hidden');
  document.getElementById('loginSection').classList.remove('hidden');
}

function login() {
  const type = document.getElementById('loginType').value;
  const name = document.getElementById('loginName').value;
  const pass = document.getElementById('loginPass').value;

  if (type === 'faculty') {
    if (name && pass === 'admin123') {
      document.getElementById('loginSection').classList.add('hidden');
      document.getElementById('facultySection').classList.remove('hidden');
      updateTables();
    } else {
      alert('Invalid faculty credentials');
    }
  } else {
    const found = students.find(s => s.name === name && s.reg === pass);
    if (found) {
      document.getElementById('loginSection').classList.add('hidden');
      document.getElementById('studentSection').classList.remove('hidden');
    } else {
      alert('Student not registered or wrong credentials');
    }
  }
}

function showPermissionForm() {
  document.getElementById('studentSection').classList.add('hidden');
  document.getElementById('permissionForm').classList.remove('hidden');
}

function showAbsenteesForm() {
  document.getElementById('studentSection').classList.add('hidden');
  document.getElementById('absenteesForm').classList.remove('hidden');
}

function submitPermission() {
  const name = document.getElementById('permName').value;
  const reg = document.getElementById('permReg').value;
  const by = document.getElementById('permittedBy').value;
  const date = document.getElementById('permDate').value;

  permissions.push({ name, reg, by, date });
  alert('Permission Submitted');
  document.getElementById('permissionForm').classList.add('hidden');
  document.getElementById('loginSection').classList.remove('hidden');
}

function submitAbsentee() {
  const name = document.getElementById('absName').value;
  const reg = document.getElementById('absReg').value;
  const reason = document.getElementById('absReason').value;
  const date = document.getElementById('absDate').value;

  absentees.push({ name, reg, reason, date });
  alert('Absentee Submitted');
  document.getElementById('absenteesForm').classList.add('hidden');
  document.getElementById('loginSection').classList.remove('hidden');
}

function updateTables() {
  const permTable = document.getElementById('permissionTable');
  const absTable = document.getElementById('absenteesTable');

  // Clear old rows
  permTable.innerHTML = `<tr><th>Name</th><th>Reg No</th><th>Permitted By</th><th>Date</th></tr>`;
  absTable.innerHTML = `<tr><th>Name</th><th>Reg No</th><th>Reason</th><th>Date</th></tr>`;

  permissions.forEach(p => {
    const row = permTable.insertRow();
    row.insertCell(0).innerText = p.name;
    row.insertCell(1).innerText = p.reg;
    row.insertCell(2).innerText = p.by;
    row.insertCell(3).innerText = p.date;
  });

  absentees.forEach(a => {
    const row = absTable.insertRow();
    row.insertCell(0).innerText = a.name;
    row.insertCell(1).innerText = a.reg;
    row.insertCell(2).innerText = a.reason;
    row.insertCell(3).innerText = a.date;
  });
}
