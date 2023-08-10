const redis = require('redis')
const { promisify } = require('util')
const { REDIS_URL } = require('../util/config')

let getAsync
let setAsync

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient({
    url: REDIS_URL
  })
    
  getAsync = promisify(client.get).bind(client)
  setAsync = promisify(client.set).bind(client)    
}

async function initializeCounter() {
  // Check if the key already exists
  const keyExists = await getAsync("added_todos");

  // If the key doesn't exist, set it to the default value
  if (!keyExists) {
      await setAsync("added_todos", 0);
  }
}
initializeCounter()

module.exports = {
  getAsync,
  setAsync
}