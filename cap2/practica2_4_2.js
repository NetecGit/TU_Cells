

// curl -H "x-api-key: reqres_c315d37416474c848262377e568a83c0" https://reqres.in/api/users?page=2

async function fetchUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1',{
			method: 'GET',
            headers: {
                'Content-Type': 'application/json',
				'x-api-key': 'reqres_c315d37416474c848262377e568a83c0'
            },
		});

        if (!response.ok) 
            throw new Error('Error al obtener usuarios');

        const data = await response.json();
        const userTable = document.getElementById('userTable');
        userTable.innerHTML = '';  

        data.data.forEach(user => {
            const row = `<tr>
                <td>${user.id}</td>
                <td>${user.first_name} ${user.last_name}</td>
                <td>${user.email}</td>
            </tr>`;
            userTable.innerHTML += row;
        });
    } catch (error) {
        alert(error.message);
    }
}

document.getElementById('loadUsers').addEventListener('click', fetchUsers);

// Tarea 2

async function createUser(event) {
    event.preventDefault();  
    
    const name = document.getElementById('userName').value;
    const job = document.getElementById('userJob').value;

    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
				'x-api-key': 'reqres_c315d37416474c848262377e568a83c0'
            },
            body: JSON.stringify({ name, job }),
        });

        if (!response.ok) 
            throw new Error('Error al crear usuario');

        const data = await response.json();

        const createdUser = document.getElementById('createdUser');
        
        createdUser.innerHTML = `
            <p>
            Usuario creado: ${data.name}, Trabajo: ${data.job}, ID: ${data.id}
            </p>
        `;
    } catch (error) {
        alert(error.message);
    }
}

document.getElementById('createUserForm').addEventListener('submit', createUser);