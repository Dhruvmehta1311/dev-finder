const userName = document.getElementById("userInfo");
const search = document.getElementById("search");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const userLink = document.getElementById("userLink");
const login = document.getElementById("login");
const created_at = document.getElementById("created_at");
const bio = document.getElementById("bio");
const repoCount = document.getElementById("repoCount");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userlocation = document.getElementById("location");
const twitter_username = document.getElementById("twitter_username");
const company = document.getElementById("company");

search.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameValue = userName.value;
  getUserInfo(userNameValue);
});

async function getUserInfo(user) {
  const userInfo = await fetch(`https://api.github.com/users/${user}`);
  const data = await userInfo.json();
  console.log(data);

  avatar.src = data.avatar_url;
  name.textContent = data.name;

  userLink.href = data.html_url;
  login.innerHTML = `@${data.login}`;

  const createddate = data.created_at;
  created_at.innerHTML = createddate.split("T")[0];

  bio.innerHTML = data.bio;
  repoCount.innerHTML = data.repoCount;

  followers.innerHTML = data.followers;

  following.innerHTML = data.following;
  userlocation.innerHTML = data.location;
  if(twitter_username){
    twitter_username.href = `https://x.com/${data.twitter_username}`;
    twitter_username.innerHTML = data.twitter_username;
  }
  company.innerHTML = data.company;

}
