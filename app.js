const state = {
  decisions: JSON.parse(localStorage.getItem('coreblue-decisions') || '[]'),
  tasks: JSON.parse(localStorage.getItem('coreblue-tasks') || '[]')
};

function save() {
  localStorage.setItem('coreblue-decisions', JSON.stringify(state.decisions));
  localStorage.setItem('coreblue-tasks', JSON.stringify(state.tasks));
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function renderRecords() {
  const list = document.getElementById('savedRecords');
  const count = document.getElementById('savedCount');
  count.textContent = state.decisions.length;
  if (!state.decisions.length) {
    list.innerHTML = '<div class="empty">No local decisions have been confirmed yet.</div>';
    return;
  }
  list.innerHTML = state.decisions.map(record => `
    <div class="record">
      <span class="pill verified">Confirmed internally</span>
      <b>${escapeHtml(record.title)}</b>
      <p>${escapeHtml(record.reason)}</p>
      <small>Recorded locally on ${new Date(record.createdAt).toLocaleDateString()}</small>
    </div>`).join('');
}

function renderTasks() {
  const count = document.getElementById('taskCount');
  count.textContent = state.tasks.length;
}

function showView(id) {
  document.querySelectorAll('.tab,.view').forEach(item => item.classList.remove('active'));
  document.querySelector(`[data-view="${id}"]`).classList.add('active');
  document.getElementById(id).classList.add('active');
}

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => showView(tab.dataset.view)));

document.getElementById('saveDecision').addEventListener('click', () => {
  const reason = document.getElementById('reason').value.trim();
  if (!reason) { document.getElementById('decisionError').textContent = 'Add the team reasoning before saving.'; return; }
  state.decisions.unshift({ title: 'Photo-eye sensor stops the conveyor', reason, createdAt: new Date().toISOString() });
  save(); renderRecords();
  document.getElementById('reason').value = '';
  document.getElementById('decisionError').textContent = '';
  document.getElementById('decisionSaved').hidden = false;
});

document.getElementById('generateTask').addEventListener('click', () => {
  const issue = document.getElementById('issue').value.trim() || 'Conveyor sensor and interlock review';
  const type = document.getElementById('goal').value;
  state.tasks.unshift({ title: `${type}: ${issue}`, createdAt: new Date().toISOString() });
  save(); renderTasks();
  document.getElementById('taskTitle').textContent = `${type}: ${issue}`;
  document.getElementById('task').hidden = false;
});

document.getElementById('createUpdateTask').addEventListener('click', () => {
  state.tasks.unshift({ title: 'Review PowerFlex 525 firmware compatibility', createdAt: new Date().toISOString() });
  save(); renderTasks();
  document.getElementById('review').hidden = false;
});

document.getElementById('exportRecords').addEventListener('click', () => {
  const content = JSON.stringify({ exportedAt: new Date().toISOString(), decisions: state.decisions, tasks: state.tasks }, null, 2);
  const blob = new Blob([content], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = 'coreblue-knowledge-record.json'; link.click();
  URL.revokeObjectURL(url);
});

renderRecords(); renderTasks();
