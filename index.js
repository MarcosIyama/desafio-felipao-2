function ranking(heroWins, heroLosses){
    return heroWins - heroLosses;
}

let heroRanking = ranking(40, 50)

if(heroRanking <= 10){
    heroLevel = "Ferro"
}else if(heroRanking <= 20){
    heroLevel = "Bronze"
}else if(heroRanking <= 50){
    heroLevel = "Prata"
}else if(heroRanking <= 80){
    heroLevel = "Ouro"
}else if(heroRanking <= 90){
    heroLevel = "Diamante"
}else if(heroRanking <= 100){
    heroLevel = "Lendário"
}else if(heroRanking >= 101){
    heroLevel = "Imortal"
}


console.log("O Herói tem saldo de " + heroRanking + " vitórias e está no nível: " + heroLevel + ".")