const preElements = document.querySelectorAll("div.highlighter-rouge");

preElements.forEach((element) => {
  const lang = element.className.split(" ").shift().replace("language-", "");
  element.setAttribute("data-lang", lang);
});

// const username = document
//   .querySelector(".post-author-avatar")
//   .getAttribute("data-author");

// async function getData(username) {
//   const URL = fetch(`https://api.github.com/users/${username}`);
//   const data = await URL.then((data) => data.json()).then(
//     (res) => res.avatar_url
//   );
//   return data;
// }

// function initAvatar(response) {
//   const userAvatar = (document.querySelector(
//     ".post-author-avatar"
//   ).src = response);
// }
// getData(username).then((response) => initAvatar(response));
