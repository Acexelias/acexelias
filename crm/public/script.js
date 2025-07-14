document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('addContactForm');
  const list = document.getElementById('contactList');

  function addContactToDOM(contact) {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.email}`;
    list.appendChild(li);
  }

  // Fetch existing contacts
  fetch('/api/contacts')
    .then(res => res.json())
    .then(data => data.forEach(addContactToDOM));

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(contact => {
        addContactToDOM(contact);
        form.reset();
      });
  });
});
