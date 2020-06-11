// init github
const github = new GitHub();

// init UI
const ui = new UI();

const searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    ui.showPreloader();
    if (userText !== '') {
        github.getUser(userText)
            .then(user => {
                if (user.message === 'Not Found') {
                    ui.showAlert(`User: "${userText} not found!"`, 'alert alert-danger');
                    ui.clearProfile();
                } else {
                    ui.showProfile(user);
                    ui.clearAlert();
                }
                return user;
            })
            .then(github.getRepos.bind(github))
            .then(repos => {
                ui.showRepos(repos);
            })
            .catch(err => {
                const e = new Error('Упс! Что то пошло не так!');
                e.data = err;
                throw e;
            });
    } else {
        ui.clearProfile();
    }

});