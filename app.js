const loadPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayPhotos(data))
};

loadPhotos();

const displayPhotos = photos => {
    // console.log(photos);
    const photoContainer = document.getElementById("photo-container");

    photos.forEach(photo => {
        // console.log(photo);
        // destructuring
        const { id, url, title } = photo;

        const col = document.createElement("div");
        col.classList.add("col")

        col.innerHTML = `
        <div class="card h-100">
            <img onclick="loadDetails(${id})" src="${url}" class="card-img-top" style="cursor: pointer;" title="click to show details" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
            </div>
        </div>`;

        photoContainer.appendChild(col);
    });
};

// load details
const loadDetails = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await res.json();
    displayDetails(data);
};

const displayDetails = photo => {
    // console.log(photo);

    const { thumbnailUrl, title } = photo;

    document.getElementById("details-container").innerHTML = `
    <div class="card" style="width: 18rem;">
      <h3>Photo Details:</h3>
      <img src="${thumbnailUrl}" class="card-img-top alt="...">
      <div class="card-body">
        <h5 class="${title}">Card title</h5>
      </div>
    </div>`;
};