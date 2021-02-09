const spinMe = '|/-\\|/-\\'

for (let i = 0; i < spinMe.length; i++) {
  let x = 200
  setTimeout(() => {
    process.stdout.write(`\r${spinMe[i]}   `)}, x * i);
};
