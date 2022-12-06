const output = require('../../utils/output/output')

  const handler = async (event) => {
  
    let lista = [100,200,300,400,500]
    let {
        httpMethod:method,
        queryStringParameters:p
    } = event

    if(method== 'POST'){
        let {item} = p
      return output(lista[item])
    }
    
    return output({})
    /*try {
      return {
        statusCode: 200,
        body: JSON.stringify(event.httpMethod),
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }*/
  }
  
  module.exports = { handler }