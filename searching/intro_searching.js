var beasts = ['Centaur', 'Godzilla', 'Mosure', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf("Godzilla");


beasts.findIndex(function(item) {
    return item === 'Godzilla');
})

beasts.find(function(item){
    return item === 'Godzilla';
})


beasts.includes('Godzilla');