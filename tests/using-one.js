const PWD = process.env.PWD
function pwd(){
    return PWD;
}

module.exports = {
  test: pwd
}
