const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello error"));
      }
    }, 500);
  });


async function asyncAwait() {
    try {
        const message = await promiseFunction();
        console.log(`Message ${message}`);
    }
    catch(error) {
        console.error(`Error ${error}`);
    }
}

asyncAwait();