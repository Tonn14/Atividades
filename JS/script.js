/*let nome = prompt ('Qual e o seu nome?')
let velocidade =  0
let Newvelocidade = prompt("Qual velocidade voce gostaria de chega com a nave?")

let velecidadeconfirm = confirm ("essa e velocidade que voce realmente quer chega " + Newvelocidade + "Km/s")
if(velecidadeconfirm){
    velocidade = Newvelocidade
}
if(velocidade <= 0){
    alert("Nave esta parada. Considere partir e aumentar a velocidade")
}
else if(velocidade >0 && velocidade < 40){
    alert("Voce esta devagar, podemos aumentar mais a velocidade")
}
else if(velocidade >= 40 && velocidade < 80 ){
    alert("parece uma boa velocidade para manter")
}
else if(velocidade >= 80 && velocidade < 100){
    alert("Velocidade muito alta considere diminuir")
}
else {
    alert("velocidade perigosa controle automatico forçado")
}

    alert("nome: " + nome)
    
    alert ("velocidade atual: " + velocidade)*/





/* atividade 05

let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption = prompt("Para qual unidade deseja conveter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" +
                        "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)


*/
/*atividade 06
let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)
*/

/*
let spaceship = prompt("Digite o nome da nave")
let charnew = prompt ("qual caracter deseja substituir")
let novoc = prompt ("por qual deseja substituir")
let newspaceship = ""
for(i=0; i<spaceship.length; i++){
    if(spaceship[i]==charnew[i]){
        newspaceship += novoc
    }
    else{
        newspaceship += spaceship[i]

    }
}

alert("O novo nome da nave é " + newspaceship)
*/

/*let spaceshipName = prompt("Qual é o nome da nave")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == e) {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave"  + spaceshipName + "Nome após ocultação"  + invertedName)
*/

/*
<!-----FUÇOES----->
let spaceship = prompt("Digite o nome da nave")
let velocidade =  0
let OptionMenu

function Menu(){
    let Option
    while(Option != "1" && Option != "2" && Option != "3" && Option != "4") {
 Option = prompt("O que deseja fazer?\n" +"\n1. Acelerar a nave em 5km/s \n2. Desacelera em 5km/s"  +
                        "\n3. imprimir dados de bordo" +
                        "\n4.Sair do programa." +
                        "\n\nDigite o número da opção desejada")

}
return Option;
 }
 function NewSpeed (velocidade) {
    NewVelocidade = velocidade + 5
    return NewVelocidade
    }
    
function Desacelerar (velocidade){
        NewVelocidade = velocidade - 5
        if(NewVelocidade<0){
            NewVelocidade = 0
        }
        return NewVelocidade
        }

    function dados(nome,velocidade){
        alert("Nome da nave: " + spaceship + "Velocidade atual: " + NewVelocidade + "km/s")
    }
 do {
    OptionMenu = Menu()
switch(OptionMenu) {
    case "1":
      velocidade = NewSpeed(velocidade);
        break
    case "2":
       velocidade =  Desacelerar(velocidade)
        break
    case "3":
        dados(spaceship, velocidade)
           break 
        default:
        alert("Voce finalizou o Programa")
        break
    }
 } while (OptionMenu !=4)
*/

/*
function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})
*/
/*
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert (message) */

/*let spaceship = {
    velocity: 0,
    speedUp: function(acelerar) {
        this.velocity += acelerar
    }

}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}


function Agily() {
    let acelerar = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acelerar)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" + 
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}


function Parar() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " 
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}


 
 function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                Agily()
                break
            case "2":
                Parar()
                break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()
   
*/

/*class Spaceship {
    constructor(name, crew) {
        this.name = name
        this.crew= crew
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let Option
    while(Option != "1" && Option != "2" && Option != "3") {
        Option = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return Option
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crew = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crew)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                            " (" + spaceship.crew + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []
let Option

while(Option != "3") {
    Option = showMenu()
    switch(Option) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}
*/


/*class Spaceship {
    constructor(name, maxCrew , maxRecommenderVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommenderVelocity = maxRecommenderVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommenderVelocity){
            alert ("VELOCIDADE MAXIMA ULTRAPASSADA!!!\n Diminua ou podera provoca danos a nave ")
        }
    }

}

class TransportSpaceship extends Spaceship {
constructor(name,maxCrew,maxRecommenderVelocity, maxLoadWeight){
    super(name,maxCrew,maxRecommenderVelocity)
    this.maxLoadWeight = maxLoadWeight

}
    speedUp(acceleration) {
       acceleration /= 2
       alert("Incrementado velocidade em " + acceleration + "km/s")
       super.speedUp (acceleration)
    }

}

let transportSpaceship = new TransportSpaceship("Transportado", 4 , 100 , 400)


console.log(transportSpaceship)

transportSpaceship.speedUp(210)
*/

/*
function saveHouse() {
    let comp = document.querySelector("input[name='comp']").value
    let numero = document.querySelector("input[name='numero']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value
    
    let newListValue = document.createElement("li")
    newListValue.innerText = "complemento " + comp + " número " + numero + " (" + bairro + " - " + cidade + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}
*/


/*
function save (){
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Name: " + name + "\nLinguagem de Programação " + programmingLang)
}*/

/*
function setBlueBackground()
{
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

function setTransparentBackground()
{
    document.getElementById("style-text").style.backgroundColor = "transparent"
}

function setRedColor () {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}
 function removeRedColor()
 {
    document.getElementById("style-text").classList.remove("red-color")
 }
 */


 class Property {
   constructor(kind, area, rented) {
     this.kind = kind
     this.area = area
     this.rented = rented
   }
 }
 class App {
    addProperty() {
      event.preventDefault()
      let kind = document.querySelector("select[name='kind']").value
      let area = document.querySelector("input[name='area']").value
      let rented = document.querySelector("input[name='rented']").checked
      let property = new Property(kind, area, rented)
      this.addOnPropertiesList(property)
      this.cleanForm()
    }
  
    addOnPropertiesList(property) {
      let listElement = document.createElement("li")
      let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
      if(property.rented) {
        let rentedMark = this.createRentedMark()
        listElement.appendChild(rentedMark)
      }
      listElement.innerHTML += propertyInfo
      let buttonToRemove = this.createRemoveButton()
      listElement.appendChild(buttonToRemove)
      document.getElementById("properties").appendChild(listElement)
    }
  
    createRentedMark() {
      let rentedMark = document.createElement("span")
      rentedMark.style.color = "white"
      rentedMark.style.backgroundColor = "red"
      rentedMark.innerText = "ALUGADO"
      return rentedMark
    }
  
    createRemoveButton() {
      let buttonToRemove = document.createElement("button")
      buttonToRemove.setAttribute("onclick", "app.remove()")
      buttonToRemove.innerText = "Remover"
      return buttonToRemove
    }
  
    cleanForm() {
      document.querySelector("input[name='area']").value = ""
      document.querySelector("input[name='rented']").checked = false
    }
  
    remove() {
      let liToRemove = event.target.parentNode
      document.getElementById("properties").removeChild(liToRemove)
    }
  }
  
  const app = new App()