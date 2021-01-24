//void

//Quando não retorna nada
function showNumber(name: string = 'Gabriel'): void
{
    //não haverá return
}


//never satisfaz com erro function error(): never { throw new Error('error')}


//array

let items: Array<Number>

items = [1,2,3,4]

let items2: string[]

items2 = ['2','3']


//tuple

let items3: [number, string, boolean]

items3 = [1, '2', true]

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

let white: Colors = Colors.white


//type union

let age:number | string

age = 20

age = 'vinte'

// 

function showPet(pet: string | number)
{
    console.log(pet)
}

showPet('vinte')


//Type Aliases

type Pet = 'dog' | 'cat' | 'leao'

function display(pet: Pet)
{
    console.log(pet)
}

display('leao')



//Type inference


//string
let message = 'gabriel'

//event mouse
window.addEventListener('click', (event) => {
    console.log(event.target)
})


//Type assetion

// sem o 'as' o typescript interpreta como element | null pois toda query pode falhar

const inputName = document.querySelector('#Nome') as HTMLInputElement

//caso mude o querySelector para 'body' o typescript altera automaricamente para bodyElement
inputName.value


// 2021-01-21 21:39 Finished



//Tipagem objetos interface

//errado
function showCity(user: {name: string, address: { city: string}})
{
    return user.name
}


//correto
interface User {
    name: string,
    addres?: {
        city: string
    }

    sayHello: () => void
}



function showCities(user: User){
    user.sayHello = () => console.log('posso receber informação apenas por metodo')

    //opcional errado
    return user.addres.city

    //opcional indiferente
    return user.addres?.city

    //opcional correto
    return user.addres ? user.addres.city : 'campinas'

}


//readonly


interface Users{
    readonly name: string,
    age: number
}

let user: Users = {
    name: 'jovem',
    age: 20
}


//extendes, implements

//extends
interface carros {
    rodas: number,
    acelerar: () => void,
    freiar: () => void
}

interface Moto extends carros{
    capacete: boolean,
    empinar: () => void
}

let bross: Moto

bross.acelerar



//implements
interface veiculos {
    motor: boolean,
    gasolina: boolean,
}

class criarVeiculo implements veiculos{
    motor: boolean
    gasolina: boolean

    constructor(motor: boolean, gasolina: boolean){
        this.motor = motor
        this.gasolina = gasolina
    }
}



//pick, omit


//PICK
interface post {
    readonly id: number,
    title: string,
    description: string
}

type PostPreview = Pick<post, 'id'|'title'>

let post: PostPreview

post.title


//Omit

type PostOmit = Omit<post, 'id'|'title'>

let postOmit: PostOmit

postOmit.description



// 2021-01-24 20:26 Finished
