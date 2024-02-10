const loadELements = document.querySelector("#loading");
const postsContent = document.querySelector("#posts");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

const url = "https://jsonplaceholder.typicode.com/posts";

const createELem = function (post) {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    div.classList.add("col-md-6", "mt-4");
    link.classList.add("btn-primary", "px-4", "py-2", "rounded", "text-white");

    title.innerHTML = post.title;
    body.innerHTML = post.body;
    link.innerHTML = "Ler";
    link.setAttribute("href", `page.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    return div;
};

function createComment(comment) {
    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");

    div.classList.add("col-md-6", "mt-4");

    email.innerHTML = comment.email;
    commentBody.innerHTML = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);

    commentsContainer.appendChild(div);
}

// gets all posts
async function getAllPosts() {
    const response = await fetch(url);
    const data = await response.json();

    loadELements.classList.add("d-none");

    data.map((post) => {
        postsContent.appendChild(createELem(post));
    });
}

// get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`),
    ]);

    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    loadELements.classList.add("d-none");
    postPage.classList.remove("d-none");

    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.innerText = dataPost.title;
    body.innerHTML = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    dataComments.map((comment) => {
        createComment(comment);
    });
}

// post a comment
async function postComment(comment) {
    const response = await fetch(`${url}/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: comment,
    });

    // toda vez que envia voce tambem recebe uma responsta do que voce enviou
    const data = await response.json();

    createComment(data);
}

// get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

if (!postId) {
    getAllPosts();
} else {
    getPost(postId);

    // add event comment form
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        };

        comment = JSON.stringify(comment);
        postComment(comment);

        emailInput.value = "";
        bodyInput.value = "";
    });
}
