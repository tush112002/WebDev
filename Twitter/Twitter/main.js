// var names = ['Rohan', 'Jay', 'Anne', 'Ellie', 'Namrata']

// function mapNamesToList() {
//     var listString = "";

//     for (let i = 0; i < names.length; i++) {
//         listString += `<li class='list-group-item d-flex justify-content-between align-items-center'>
//              <span id="name-${i}" class="lead">${names[i]}</span>
//              <div>
//                  <button class="btn btn-primary bi bi-pencil" onclick="editName(${i})"></button>
//                  <button class="btn btn-danger bi bi-x-lg" onclick="deleteName(${i})"></button>
//              </div>
//          </li>`;
//     }

//     document.getElementById("namesList").innerHTML = listString;
// }


// function deleteName(index) {
//     names.splice(index, 1)
//     mapNamesToList()
// }

// function addName() {
//     var newName = document.getElementById("nameTextBox").value
//     names.push(newName)
//     mapNamesToList()
//     document.getElementById("nameTextBox").value = ""
//     document.getElementById("nameSubmitButton").disabled = true
// }

// function textChange(event) {
//     var name = event.target.value

//     if (name.length > 0) {
//         document.getElementById("nameSubmitButton").disabled = false
//     }

//     else {
//         document.getElementById("nameSubmitButton").disabled = true
//     }
// }

// function editName(index) {
//     var newName = document.getElementById(`name-${index}`);
//     newName.contentEditable = true;
//     newName.focus();

//     newName.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             newName.contentEditable = false;
//             names[index] = newName.textContent.trim();
//         }
//     });
// }


var users = [];

function getPosts() {
    console.log('calling api…')
    fetch('https:jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            users = data;
            mapPostsToCard(users);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    getPosts();
});

function viewProfile(userData) {
    const profilePageUrl = `profile.html?name=${userData.name}&email=${userData.email}&username=${userData.username}&website=${userData.website}`;
    window.location.href = profilePageUrl;
}



function mapPostsToCard(users) {
    var cardsContainer = document.getElementById("cardsContainer");
    if (!cardsContainer) {
        console.error("Element with id 'cardsContainer' not found.");
        return;
    }

    var cardHTML = "";

    users.forEach(user => {
        cardHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https:lh3.googleusercontent.com/-EPrRANCS2t4/AAAAAAAAAAI/AAAAAAAADe0/AV2Rbn0-4pw/s640/photo.jpg" class="img-fluid rounded-start" alt="Profile Picture">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">Email: ${user.email}</p>
                            <p class="card-text">Username: ${user.username}</p>
                            <p class="card-text">Website: ${user.website}</p>
                            <button class="btn btn-primary view-profile" data-user='${JSON.stringify(user)}'>View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    cardsContainer.innerHTML = cardHTML;
    addEventListeners();
}

function addEventListeners() {
    document.querySelectorAll('.view-profile').forEach(button => {
        button.addEventListener('click', function (event) {
            const userData = JSON.parse(event.target.getAttribute('data-user'));
            viewProfile(userData);
        });
    });
}

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const email = params.get('email');
const username = params.get('username');
const website = params.get('website');

document.getElementById('user-name').textContent = name;
document.getElementById('user-email').textContent = email;
document.getElementById('user-username').textContent = username;
document.getElementById('user-website').textContent = website;

function displayProfile(profile) {
    document.getElementById("user-name").textContent = profile.name;
    document.getElementById("user-email").textContent = profile.email;
    document.getElementById("user-username").textContent = profile.username;
    document.getElementById("user-website").textContent = profile.website;

    // Check if the profile object contains the image URL
    if (profile.image) {
        document.getElementById("profile-image").src = profile.image;
    }
}


document.getElementById('edit-button').addEventListener('click', function () {
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('submit-button').style.display = 'inline-block';

    document.getElementById('user-name').contentEditable = true;
    document.getElementById('user-email').contentEditable = true;
    document.getElementById('user-username').contentEditable = true;
    document.getElementById('user-website').contentEditable = true;
});

document.getElementById('submit-button').addEventListener('click', function () {
    document.getElementById('edit-button').style.display = 'inline-block';
    document.getElementById('submit-button').style.display = 'none';

    document.getElementById('user-name').contentEditable = false;
    document.getElementById('user-email').contentEditable = false;
    document.getElementById('user-username').contentEditable = false;
    document.getElementById('user-website').contentEditable = false;
});





