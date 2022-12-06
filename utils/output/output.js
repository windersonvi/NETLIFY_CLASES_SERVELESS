function output(content){
    try {
      return {
        statusCode: 200,
        body: JSON.stringify(content),
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }

  module.exports = output;