

const patients = [
    {
      name: "Luiza",
      age: 20,
      weight: 150,
      height: 150
    },
    {
      name: "Alex",
      age: 27,
      weight: 80,
      height: 140
    },
    {
      name: "Robertinho",
      age: 42,
      weight: 55,
      height: 150
    },
  ]


    function IMC(weight,height){
        return( weight / ((height /100) ** 2)).toFixed(2)
    }


    function aparecePatientIMC(patient){
        return `
        A pessoa ${patient.name} possui IMC de ${IMC(patient.weight, patient.height)}`
    }


    for (let patient of patients){
        let IMCmessage = aparecePatientIMC(patient)
        alert(IMCmessage)
    }