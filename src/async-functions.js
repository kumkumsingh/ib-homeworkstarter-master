const superagent = require('superagent')
function getTatooineResidents() {
    return new Promise(function (resolve, reject) {
        superagent
            .get("https://swapi.co/api/planets/1/") // make request
            .then(res => {

                return res.body
            })
            .then(res => {
                const urls = res.body.residents
                return urls


            })

            .catch(err => {
                console.log(err)
            });
    })


}

module.exports = { getTatooineResidents }



