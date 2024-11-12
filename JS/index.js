//creo un array vuoto dove andrò a salvare i contatti che vanno a finire nel local storage

let contatti = []

//key è solo il nome che do per poi poter recuperare i dati dal local storage. è il nome sotto cui verranno salvati i dati nel local storage
const key = 'agenda-memory'
//creo la classe contatto tramite cui creo i contatti a partire dal nome inserito nel form

class Contact {
    constructor (_name){
        this.name = _name
    }
}

//prendo il riferimento al form

const myForm = document.getElementById('user-form')

//aggancio al button la funzione di creare il contatto

myForm.addEventListener('submit', function(e){
    e.preventDefault()

    const nameInput = myForm.elements['name'].value

    const newContact = new Contact (
        nameInput
    )
    console.log('Contatto salvato')

//console.log funziona. Ora aggancio al click la creazione di una card di contatto. Gli creo lo spazio in html con un div row vuoto

const rubrica = document.getElementById('contactsContainer')

//creo la card ad ogni click del bottone

const newCol = document.createElement('div');
newCol.classList.add('col', 'col-12', 'col-md-4')
newCol.innerHTML = `<div class="card">
<img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-customer-service-support-onboarding-pack-business-illustrations-4849052.png?f=webp" class="card-img-top" alt="person on the phone"/>
<div class="card-body">
<h5 class="card-title">${newContact.name}</h5>
<a href="#" class="btn btn-info">Contatta</a>
      </div>
    </div>
  `

//appendo l'elemento col alla row(che ho chiamato rubrica)

rubrica.appendChild(newCol)

//array vuoto in alto che vado a riempire in modo da non perdere i dati inseriti(contatti)

contatti.push(newContact)

//e lo salvo nel localStorage

localStorage.setItem(key, JSON.stringify(contatti))
})


//controlla se nel local storage è presente qualche card all'avvio della pagina

const memory = localStorage.getItem(key) 

if (memory) {
    const savedContacts = JSON.parse(memory)


contatti = savedContacts

savedContacts.forEach(newContact => {
    const rubrica = document.getElementById('contactsContainer')
    const newCol = document.createElement('div');
newCol.classList.add('col', 'col-12', 'col-md-4')
newCol.innerHTML = `<div class="card">
<img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-customer-service-support-onboarding-pack-business-illustrations-4849052.png?f=webp" class="card-img-top" alt="person on the phone"/>
<div class="card-body">
<h5 class="card-title">${newContact.name}</h5>

      </div>
    </div>
  `
  rubrica.appendChild(newCol)
    
})
}

//event listener del secondo bottone

removeContact.addEventListener('click', function (e)
    {
        if (contatti.includes(newContact)) {
            const removeAContact = contatti.indexOf(newContact);
            if (index !== -1) {
        contatti.splice(removeAContact, 1);     }
    }
});

//indexof restituisce -1 se l'elemento non c'è nell'array

//non funziona. non capisco :D. Forse manca un passaggio. quel new contact c'è quando premo l'altro pulsante e basta....