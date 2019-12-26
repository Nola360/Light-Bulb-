function light(value) {
  var pic;
  if (value == 0) {
    pic = "https://2.bp.blogspot.com/-eTQ2CeK6amA/WsMjbRvj1NI/AAAAAAAACxc/39M-fcu-aVYAZzW8g0IvpkiJHtJ6bYgTgCLcBGAs/s1600/off.png"
  } else {
    pic = "https://2.bp.blogspot.com/-17Ns-LsBdb8/WsMjbbnm0LI/AAAAAAAACxY/HMxm1lKTsLA8EXBN3dQSD3pVIH2cbEW9wCLcBGAs/s1600/on.png"
  }

  document.getElementById('bulb').src = pic;
}
