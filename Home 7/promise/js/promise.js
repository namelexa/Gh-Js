const getUserButton = document.querySelector('.get-users-list');

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getUserButton.addEventListener('click', (e) => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(function (resolve) {
            let list = JSON.parse(resolve);
            list.forEach(function (item, i) {
                document.querySelector('.user-list li .id').append(
                    `
                        <li>  ${item['id']}</li>
                    `
                )
            })
        })
        .catch(function (err) {
            console.error('Augh, there was an error!', err.statusText);
        });
});
