_setInterval = setInterval;
setInterval = (func, e) => {
  console.log(func.toString())
  if (func.toString().includes('.listView.next')) {
    _setInterval(() => {}, e);
  } else {
    _setInterval(func, e);
  }
}