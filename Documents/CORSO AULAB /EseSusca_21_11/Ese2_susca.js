let url =  " https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999 "

let urlSplit = url.split ( "?")

console.log (urlSplit)

let valori = urlSplit[1].split ("&")

console.log (valori)

valori.forEach ( function(valori) {
let valoriSplit = valori.split ("=") 
console.log (valoriSplit[1] )
})