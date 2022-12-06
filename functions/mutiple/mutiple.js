const output = require('../../utils/output/output')

const handler = async (event) => {

  let lista = [100,200,300,400,500]
  let {httpMethod:method} = event
  
  switch(method){
    case 'GET':
      return output(lista)
      break
    
    case 'POST':
      lista.push(600)
      return output(lista)
      break
    
      default: 
      return output({})
  }
  
  /*if(event.httpMethod== 'GET'){
    return output(lista)
  }

  if(event.httpMethod== 'POST'){
    lista.push(600)
    return output(lista)
  }

  return output({})*/
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
