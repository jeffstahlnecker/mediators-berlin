const axios = require("axios");

async function doIt() {
  const getTheImageArray = await axios
    .get(
      "https://prtl.chance-im-konflikt.de.me/items/mediators?fields=cover_photo&fields=profile_picture"
    )
    .then(resp => {
      return resp.data;
    })
    .catch(error => console.log(error));

  const { data } = getTheImageArray;

  const theBetterArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].profile_picture) {
      theBetterArray.push(data[i].profile_picture);
    }
    if (data[i].cover_photo) {
      theBetterArray.push(data[i].profile_picture);
    }
  }

  const getPhotosArray = theBetterArray.map(photo => {
    return axios.get(`https://prtl.chance-im-konflikt.de.me/assets/${photo}`);
  });

  const getPhotos = await axios
    .all(getPhotosArray)
    .then(responses => responses.map(resp => resp.data))
    .catch(function (error) {
      console.log(error);
    });

  const thePhotosArray = await getPhotos;

  const photoObject = [];

  for (let i = 0; i < thePhotosArray.length; i++) {
    const theId = theBetterArray[i];
    const thePhoto = thePhotosArray[i];
    photoObject.push({ id: theId.toString(), photo: thePhoto });
  }

  console.log(photoObject);
}

doIt();
