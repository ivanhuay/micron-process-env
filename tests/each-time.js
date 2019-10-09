
function pwd(){
    return process.env.PWD;
}

module.exports = {
  test: pwd
}
