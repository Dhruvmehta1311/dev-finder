const userName = document.getElementById("userInfo");
const search = document.getElementById("search");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const userLink = document.getElementById("userLink");
const login = document.getElementById("login");
const created_at = document.getElementById("created_at");

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
}
