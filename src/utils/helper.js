export const nasaCleaner = (nasaObject) => {
  return nasaObject.photos.map(photo => {
    console.log(photo);
    return {
      image: photo.img_src,
      id: photo.id,
      camera: photo.camera,
      rover: photo.rover,
      date: photo.earth_date,
    }
  })
}