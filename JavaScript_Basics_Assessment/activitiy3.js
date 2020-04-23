let names = ["Tom", "And", "Jerry"];

for (let  i = 0; i < 3; i++) {
    let input = prompt("Enter the new name");
    names.push(input);
}

for (let i = 0; i < names.length;  i++) {
    console.log(names[i]);
}
