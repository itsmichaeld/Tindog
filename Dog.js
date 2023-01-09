class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <img src="${avatar}" class="main-dog-image" alt="${name}" />
    <div class="text-container">
      <h1 class="name-age">${name}, ${age}</h1>
      <p class="dog-bio">${bio}</p>
    </div>`;
  }

  liked() {
    const { hasBeenLiked } = this;
    if (hasBeenLiked) {
      return `<div class="like-nope-image-container">
      <img src="/images/badge-like.png" alt="like" />
    </div>`;
    } else {
      return `<div class="like-nope-image-container">
      <img src="/images/badge-nope.png" alt="dislike" />
    </div>`;
    }
  }
}

export default Dog;
