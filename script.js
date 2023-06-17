const user = {
    user.profile = "userprofile";
    user.name = ["first"] ["last"];
    job.title = "jobtitle";
}

function loadUserProfile () {
    console.log(user);
    console.log(Object.values(user));
}

function createPost() {
    const newpost = document.createElement("post");
    document.appendChild(newpost);
    console.log(newpost);
}