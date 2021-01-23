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
