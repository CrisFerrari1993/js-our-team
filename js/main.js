
//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    //MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
    let team = [
        {
            'name' : 'Wayne Barnett',
            'role' : 'Founder & CEO',
            'img': "img/wayne-barnett-founder-ceo.jpg"
        },
        {
            'name': 'Angela Caroll',
            'role': 'Chief Editor',
            'img': "img/angela-caroll-chief-editor.jpg"
        },
        {
            'name': 'Walter Gordon',
            'role': 'Office Manager',
            'img': "img/walter-gordon-office-manager.jpg"
        },
        {
            'name': 'Angela Lopez',
            'role': 'Social Media Manager',
            'img': "img/angela-lopez-social-media-manager.jpg"
        },
        {
            'name': 'Scott Estrada',
            'role': 'Developer',
            'img': "img/scott-estrada-developer.jpg"
        },
        {
            'name': 'Barbara Ramos',
            'role': 'Graphic Designer',
            'img': "img/barbara-ramos-graphic-designer.jpg"
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
    //     MILESTONE 2:
    // Stampare le stesse informazioni su DOM sotto forma di stringhe
    //     BONUS 2:
    // Organizzare i singoli membri in card / schede
    //     BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva
    printer.innerHTML += `<div class='col'><img src='${imgIndex}' <br><h3>${nomeIndex}</h3> <br><span class='profile_role'>${roleIndex}</span></div>`;
}

