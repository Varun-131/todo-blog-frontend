let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function createPost() {
  const title = document.getElementById("blog-title").value.trim();
  const content = document.getElementById("blog-content").value.trim();
  if (title && content) {
    posts.unshift({ title, content });
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-content").value = "";
    savePosts();
  }
}

function deletePost(index) {
  posts.splice(index, 1);
  savePosts();
}

function renderPosts() {
  const list = document.getElementById("blog-list");
  list.innerHTML = "";
  posts.forEach((post, index) => {
    list.innerHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button onclick="deletePost(${index})">Delete</button>
      </div>`;
  });
}

renderPosts();