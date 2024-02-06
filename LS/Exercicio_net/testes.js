let str = "Ola-Mundo";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "-") {
    let pos = i;
    do {
      str[pos] = str[pos + 1];
      pos = pos + 1;
      console.log(str);
    } while (pos < str.length + 1);
    console.log(str);
  }
  console.log(i);
}
console.log(str);
