let distanceInly = prompt("Digite a distância em anos luz")

let  chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse (pc)\n2. Unidade Astronômica (AU)" + 
                           "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")
let chosenUnity
let converterDistance

switch ((chosenOption)) {
    case "1":
        chosenUnit = "Parsec"
        converterDistance = distanceInly * 0.306601
        break;
    case "2":
        chosenUnity = "Unidade Astronômica"
        converterDistance = distanceInly * 63241.1
        break;
    case "3":
        chosenUnity =  "Quilômetros"
        converterDistance = distanceInly * 9.5 * Math.pow(10,12)
        break;
    default:
        chosenUnity = "Unidade não identificada"
        converterDistance = "conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceInly + "\n" + chosenUnity + ": " + converterDistance)
