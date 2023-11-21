let listaProdotti = [

    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
];

console.log(listaProdotti)

let listaOrdinata = listaProdotti.sort(function (prodotto1, prodotto2) {
    let nameA = prodotto1.nome.toLowerCase();
    let nameB = prodotto2.nome.toLowerCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0; // Names are equal
    }
})
console.log(listaOrdinata)

console.log(listaProdotti)

let listaPrezzo = listaProdotti.sort(function (prodotto1, prodotto2) {
    return prodotto1.prezzo - prodotto2.prezzo
})
console.log(listaPrezzo)



//Parte 2
let listaProdottiprezzo = [

    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
];

function filtraPrezzi (listaProdottiprezzo) {

    let prezziFiltr = []
    for (let i = 0; index < listaProdottiprezzo.length; i++) {

    }
    if (listaProdottiprezzo[i] > 250) {
        prezziFiltr.push(listaProdottiprezzo[i])
    }
    return prezziFiltr
}

let listaFiltrata = filtraPrezzi(listaProdottiprezzo)
console.log("Ecco i prezzi" + listaFiltrata)




let listPrezzo = [

    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
];

let listaPrezzifiltrati = listPrezzo.filter((oggetto) => oggetto.prezzo > 250)

console.log(listaPrezzifiltrati)
