
//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    //MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
    let team = [
        {
            'name' : 'Wayne Barnett',
            'role' : 'Founder & CEO',
            'img': `<img src="img/wayne-barnett-founder-ceo.jpg">`
        },
        {
            'name': 'Angela Caroll',
            'role': 'Chief Editor',
            'img': `<img src="img/angela-caroll-chief-editor.jpg" alt="">`
        },
        {
            'name': 'Walter Gordon',
            'role': 'Office Manager',
            'img': `<img src="img/walter-gordon-office-manager.jpg" alt="">`
        },
        {
            'name': 'Angela Lopez',
            'role': 'Social Media Manager',
            'img': `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`
        },
        {
            'name': 'Scott Estrada',
            'role': 'Developer',
            'img': `<img src="img/scott-estrada-developer.jpg" alt="">`
        },
        {
            'name': 'Barbara Ramos',
            'role': 'Graphic Designer',
            'img': `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`
        }

    ];

//     MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

let printer = document.getElementById('container');
let col = document.createElement('div');
col.classList.add('col');

for (let i = 0; i < team.length; i++){
    let teamIndex = team[i];
    let nomeIndex = teamIndex.name;
    let roleIndex = teamIndex.role;
    let imgIndex = teamIndex.img;
    console.log('Name: ' + nomeIndex, ' Role: ' + roleIndex, ' Img: ' + imgIndex);
    printer.innerHTML += `<div class='col'>${imgIndex} <br>${nomeIndex} <br> ${roleIndex} <br> </div>`;
}
//     MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
//     BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
//     BONUS 2:
// Organizzare i singoli membri in card / schede

