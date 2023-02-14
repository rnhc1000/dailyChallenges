  /**
   * @params1 string
   * @return promise...(objeto)
   * tratar resposta com .the() e .catch()
   */
function returnPromise(str) {

  return new Promise((resolve, reject) => {

    if ((str === null) || (str === "")) {
      reject("Informe uma string");
    }
    resolve(str.toUpperCase());
  });
}

// console.log(returnPromise("Ricardo"));
// console.log(returnPromise(null));

returnPromise("")
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
