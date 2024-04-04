const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const postButton = document.querySelector('#post');

postButton.addEventListener('submit',function (event) {
    event.preventDefault();

    const blogpost = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };
localStorage.setItem('blogpost', JSON.stringify(blogpost));
});