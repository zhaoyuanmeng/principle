const fn = (flag, cb = {}) => {
  if (flag == 1) {
    cb(flag);
  } else {
    console.log("adad");
  }
};

const test = (flag) => {
  console.log("test", flag);
};

fn(1, test);
fn(2);

// setTimeout(() => { }
// ,1000)
