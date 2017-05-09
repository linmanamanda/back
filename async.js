

try {

  async function asyncError() {
    await (() => {
      return new Promise((resolve, reject) => {
        reject(new Error('hi'))
      })
    })()
  }

  asyncError()

} catch (error) {

}