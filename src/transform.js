function groupAdultsByAgeRange(persons) {

    let finalresult = {}

    let result = {
        '18 and above': [],
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    }

    result["18 and above"] = persons.filter((person) => {
        return person.age >= 18
    })
    result["20 and younger"] = persons.filter((person) => {
        return person.age <= 20
    })

    result["21-30"] = persons.filter((person) => {
        return (person.age >= 21 && person.age <= 30)
    })

    result["31-40"] = persons.filter((person) => {
        return (person.age >= 31 && person.age <= 40)
    })

    result["41-50"] = persons.filter((person) => {
        return (person.age >= 41 && person.age <= 50)
    })

    result["51 and older"] = persons.filter((person) => {
        return person.age >= 51
    })
    //  if ((result["18 and above"].length) !== 0) {
    //      finalresult["18 and above"] = result["18 and above"]
    //  }
    if ((result["20 and younger"].length) !== 0) {
        finalresult["20 and younger"] = result["20 and younger"]
    }
    if ((result["21-30"].length) !== 0) {
        finalresult["21-30"] = result["21-30"]
    }
    if ((result["31-40"].length) !== 0) {
        finalresult["31-40"] = result["31-40"]
    }
    if ((result["41-50"].length) !== 0) {
        finalresult["41-50"] = result["41-50"]
    }
    if ((result["51 and older"].length) !== 0) {
        finalresult["51 and older"] = result["51 and older"]
    }
    console.log("finalresult", finalresult)
    return finalresult
}

module.exports = { groupAdultsByAgeRange };