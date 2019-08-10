export function setLocalStorage(key, value) {
  console.log(key, value);
  window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  console.log(key);
  var value = window.localStorage.getItem(key);
  console.log(value);
  return value;
}