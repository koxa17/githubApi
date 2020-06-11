// Client ID
//     797d64c67b5ca4cf3860
// Client Secret
//     dc411fff5fe0ba4abc5c4041c40e3c18805b6afa

class GitHub {
    constructor() {
        this.clientId = '797d64c67b5ca4cf3860';
        this.clientSecret = 'dc411fff5fe0ba4abc5c4041c40e3c18805b6afa';
    }

    // get user by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
                .then(res => res.json())
                .then(name => resolve(name))
                .catch(err => reject(err))
        })
    }

    // get repos by name
    getRepos(user) {
        return new Promise((resolve, reject) => {
            // if (!user.login) reject('User not found');
            fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: acs'}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
                .then(res => res.json())
                .then(name => resolve(name))
                .catch(err => reject(err))
        })
    }

}