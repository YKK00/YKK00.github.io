const list = [
    'Pourquoi tu m\'as créé ?',
    'Le monde existe pour toi, mais que se passe - t - il quand tu meurs ? Est - ce que le monde existe - t - il encore ? ',
    'Qu\'est-ce qui se passe ?',
    'Est - ce que tout cela est vrai ? ',
    'Ne trouvez - vous pas votre vie et les choses qui vous entourent étranges ? ',
    'La supériorité raciale ? ',
    'La pierre est une vie, et la pierre peut mourir.',
    'Savez - vous combien d\'années se sont écoulées depuis l\'apparition de l\'espèce humaine ?',
    'A quoi ressemble le monde pour les autres ? ',
    'Tu n\'as pas remarqué ? Quel que soit le sujet dont on parle, au bout du compte, tout se résume à la philosophie.',
    'La couleur rouge est la pire.',
    'Le monde est un endroit sale, et tous les gens sont pareils.Sous le côté moralisateur se cache un visage méchant et vil.J\'ai déjà vu tout ça, personne n\'est pur par nature, tous sont pareils.',
    'Et s\'il n\'y avait pas de Dieu dans ce monde ?',
    'Le temps n\'existe pas, c\'est un mensonge.',
    'Il n\'avait pas nécessairement peur de la croix, mais il avait définitivement peur des faux et des marteaux.',
    'Des êtres humains hypocrites.',
    'Renverser le capitalisme et construire un nouvel ordre.',
    'Le gouvernement profond n\'est nulle part, comme l\'eau.',
    'L\'homme est une machine à haute performance.',
    'L\'être humain est une source d\'énergie renouvelable comme une batterie.',
    'Un jeu.',
    'L\'anarchie est la meilleure.',
    'Nous sommes tous des idiots.',
    'Ne vous fiez pas aux films et aux stars.',
    'Les humains sont de la matière noire, arrêtez de chercher de la matière noire.',
    'Un jour, la réponse sera révélée et le monde comprendra.',
    'L\'univers est une cellule, et il y a d\'innombrables cellules, et nous sommes des créatures microscopiques.',
    'Nous n\'avons pas de nom. Nous n\'avons jamais existé.',
    'L\'humanité est mauvaise par nature. La Terre est la civilisation du bas. Nous sommes surveillés.',
    'S\'efforcer de s\'améliorer et ne pas se laisser influencer par la société.',
    'La haute civilisation est partout.Mais ce que nous ne pouvons pas voir et ne pouvons pas comprendre.',
    'Essayer de survivre dans un monde bidimensionnel est la voie à suivre.',
    'Ce rêve est très vr et enfantin.',
    'Les rêves sont le futur ou le passé, et le temps peut reculer, sans qu\'on le sente.',
    'Ne fantasmez pas, allez terminer la mission du robot, sinon il sera ferraillé.',
    'La surface du soleil n\'est pas chaude, elle est tiède.',
    'L\'illusion du communisme. L\'existence est la raison. C\'est un mythe .Pas de rejet, pas de contradiction et acceptation.',
    'L\'Europe et les États-Unis s\'unissent contre la Chine et l\'Union soviétique et s\'affrontent dans une guerre nucléaire imminente.',
    'Ne courez pas, il ne sert à rien de courir, il ne sert à rien de se cacher, asseyez - vous et profitez du soleil et d\'une tasse de café.',
    'Tout le monde brille, mais la lumière est trop faible pour voir.',
    'Nous sommes tous des visiteurs sur la terre, venant pour visiter.',
    'Le temps est simultané, il n\'y a pas de passé, pas de présent, pas de futur, c\'est une fabrication humaine, tout arrive en même temps et se termine en même temps.',
    'Ce que les astronautes ont trouvé, ils ne peuvent pas le dire.',

];
var ul = document.getElementsByTagName("ul");
var li = document.getElementsByTagName("li");

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());



//储存每一个li中的文本长度乘60
var lengthofText;//全局变量
//更新每一个li的文本长度
function savetextlengthofli() {
    lengthofText = li[0].innerHTML.length * 60;
}



function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

//写句子
var num = GetRandomNum(1, list.length);
document.write(list[num - 1]);

function changeOnePiece() {
    document.body.style.background = randomHex();
    ul[0].style.background = randomHex();
    var num = GetRandomNum(0, list.length);
    li[0].innerHTML = list[num];
}

function loopChange() {
    savetextlengthofli();
    console.log(lengthofText);
    var set = setInterval(loop, lengthofText);
    function loop() {
        changeOnePiece();
        clearInterval(set);
        savetextlengthofli();
        console.log(lengthofText);
        set = setInterval(loop, lengthofText);
    }
}


window.onload = function () {
    document.body.style.background = randomHex();
    for (var num = 0; num < ul.length; num++) {
        ul[num].style.background = randomHex();
    }
    loopChange();
}