const { addUser, getUser } = require("./lib/firebase.js");

const register = async (username, password) => {
  const data = await addUser(username, password)
  return data
}

module.exports = register
