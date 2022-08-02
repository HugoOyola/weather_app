function geolocationSupport() {
  // if ('geolocation' in navigator) {
  //   return true;
  // }
  // return false;
  return "geolocation" in navigator;
}

export function getCurrentPosition() {
  if (!geolocationSupport()) throw new Error("No hay soporte de Geolocalización en tu navegador");

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      resolve({ lat, lon });
      console.log(lat, lon);
      console.log("Esto ES getCurrentPosition");
    },()=>{
      reject("No se pudo obtener tu ubicación");
    },{})
  });
}
