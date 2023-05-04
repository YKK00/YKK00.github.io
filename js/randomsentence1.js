const list = [
    'Pourquoi suis - je ici ? ',
    'Que dois - je manger aujourd\'hui ?',
    'Quand peut sortir de la classe ? ',
    'La vaccination semble être une affaire politique compliquée.',
    'Il y a une élection présidentielle qui approche, et je ne vais pas me faire virer, n\'est-ce pas ?',
    'Je vais avoir très sommeil si je mange trop.',
    'Pourquoi les gens dans les démocraties s\'autocensurent-ils aussi sur Internet ?',
    'Jour après jour, m\'ennuie.',
    'Je ne peux pas imaginer le communisme dont ils ont envie.',
    'Que dois - je faire après avoir été diplômé de l\'Académie des Beaux-Arts ?',
    'À mon avis, l\'art est ce que les élites utilisent pour passer le temps.',
    'Différentes langues ont une beauté différente, mais je préfère que les gens du monde entier utilisent une seule langue, cela peut résoudre la plupart de mes problèmes.',
    'Ma ville natale me manque mais je ne veux pas y vivre car c\'est en Chine.',
    'Je réfléchis vraiment à tous les choix que je fais et je me retrouve à faire les mêmes choix tout le temps.',
    'Soyons honnêtes, nous faisons tous de l\'art à la fois inefficace et cliché.',
    'Je viens d\'un pays totalitaire sans droits de l\'homme, donc j\'ai du mal à me soucier des droits des femmes avec toi en France.',
    'Les humains sont beaucoup moins civilisés que ce à quoi je m\'attendais.',
    'Je suis très fatigué de penser et je préfère faire un travail qui ne nécessite pas mon cerveau.',
    'Est - il vraiment nécessaire de faire de l\'art, il nous reste encore beaucoup de choses à faire.',
    'Je me sens malade quand je vois le mot « art ».',
    'Pourquoi les étrangers polis me demandent - ils toujours si je suis coréen ou japonais, et les gens grossiers m\'appelleront toujours « Chinois », le plus ennuyeux est qu\'ils devinent juste à chaque fois, ce qui me rend très perplexe.',
    'Je me sens comme quelqu\'un qui a fui la Corée du Nord et est venu en Corée du Sud. Au début, je pensais que la Corée du Sud était le paradis, mais peu à peu j\'ai réalisé qu\'il n\'y avait pas de différence essentielle entre la Corée du Nord et la Corée du Sud. Parce que les deux pays sont composés d\'humains. Cela ne me laisse nulle part où courir.',
    'Je doute fortement qu\'il y ait un endroit où enseigner aux étudiants comment être des artistes.',
    'Je sens que je devrais vivre une vie stable et ordinaire sans peur dès que possible.',
    'Une vie prosaïque sans peur est - elle un luxe ? ',
    'Créer une œuvre n\'est rien de plus que trouver de nouvelles permutations et combinaisons.Mais malheureusement, il est épuisé.',
    'Copie, emprunt et hommage, trois mots très subtils.',
    'Je n\'aime pas lire parce que je ne sais pas vraiment ce que je dois savoir.',
    'C\'est facile d\'être ému par nous - mêmes, mais c\'est loin de la réalité.',
    'Vivre est une sorte de torture, s\'il y a un autre monde après la mort, ce sera une torture sans fin.',
    'Qui sait s\'il existe un mécanisme de punition pour les personnes suicidaires dans l\'univers ? ',
    'Il y a d\'innombrables possibilités dans nos vies, mais nous n\'avons qu\'une seule vie, c\'est difficile de choisir.',
    'La réalité est souvent plus absurde et plus dramatique que les histoires fictives.',
    'Je ne devrais vraiment pas être dans d\'autres pays, mais je n\'ai pas le choix.',
    'Mes pensées sont peut - être pleines de préjugés, je ne sais pas.',
    'Personnellement, je n\'aime pas les trucs aléatoires, car cela signifie qu\'il faut faire plus d\'efforts pour s\'y habituer.',
    'Seuls les moustiques me remarqueront, c\'est ma plus grande valeur.',
    'Parfois, la Chine me manque, car la vie y serait très confortable.Mais la force de la Chine réside dans la faiblesse des droits de l\'homme.',
    'Game of Thrones est une excellente ressource pédagogique.',
    'Pourquoi le Coca - Cola est - il si cher en France ? En Chine, il coûte environ 0, 5 euros.',
    'Les voyages, une activité qui consomme de l\'énergie et de l\'argent.',
    'Vivre dans une caravane, ça a l\'air génial, mais cuisiner, se laver et aller aux toilettes, c\'est un problème.',
    'Je ressemble à un attardé à l\'école.',
    'Une limite du salaire minimum est - elle une bonne chose ? Je ne suis pas sûr.',
    'Je n\'aime pas conduire, les voitures peuvent tuer des gens',
    'Le jambon sent le chien.',
    'Mange du chien, je ne sais pas quoi dire.Parce qu\'il m\'est difficile de faire la différence essentielle entre les chiens et les autres animaux qui devraient être mangés. ',
    'Si tous les mineurs peuvent assumer pleinement la responsabilité légale, ils peuvent alors librement choisir de subir ou non une opération de changement de sexe.S\'ils ne doivent pas être tenus entièrement responsables légalement, alors ne le faites pas. ',
    'Je veux dormir sans soucis, mais chaque jour est plein de culpabilité.',
    'S\'il y avait une guerre nucléaire, je pense que moi et presque tous ceux que je connais mourraient.',
    'Malgré tous les inconvénients du capitalisme, il reste pour moi meilleur que le socialisme aux caractéristiques chinoises.',
    'Écouter de la musique en travaillant me distrait.Si je dois écouter de la musique, je dois l\'écouter de tout mon cœur.',
    'La politique est une chose ennuyeuse, j\'aimerais m\'en débarrasser mais ce n\'est pas possible.',
    'Ma naissance n\'était pas ma décision et je ne veux pas transmettre cette douleur aux générations futures.',
    'On n\'est pas plus civilisé qu\'avant, et dans les bonnes conditions, tout reviendra.',
    'Il y avait une personne qui a dit un jour un dicton très célèbre: « Étudier la médecine ne peut pas sauver le peuple chinois », alors il a abandonné la profession de médecin et a choisi d\'être écrivain.Mais à mon avis, rien ne peut sauver.Je suis plus pragmatique à cet égard.',
    'J\'aimerais pouvoir spéculer sur tout le monde avec la plus grande méchanceté, car ne surestime jamais personne.mais c\'est dur à faire.',
    'En 1989, un mouvement démocratique à grande échelle a eu lieu en Chine, mais il a finalement échoué.C\'était une époque avant ma naissance.Mais je porte toujours le prix de cet échec.C\'est peut - être le péché originel.',
    'Aucun flocon de neige n\'est innocent quand l\'avalanche arrive, nous sommes tous coupables.',
    'La paix mondiale est - elle une bonne chose, et cela signifie - t - il que le monde sale reste le même ? ',
    'Je me demande souvent pourquoi je suis ici.',
    'J\'entends souvent des mots corrects et inutiles.',
    'Les fous sont des gens purs, ils sont sacrés.',
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


