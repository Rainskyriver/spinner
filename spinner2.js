//@Lian@Matthew(Driver)@Calvin

const spinner = function() {
  let spinnerChars = ['|','/','-','\\','|'];
  for (let i = 0; i < spinnerChars.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinnerChars[i]}`);
      if (i === spinnerChars.length - 1) {
        process.stdout.write('\n');
      }
    }, 170 * i);
  }
};
spinner();