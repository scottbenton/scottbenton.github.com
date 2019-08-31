export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  var value = window.localStorage.getItem(key);
  return value;
}