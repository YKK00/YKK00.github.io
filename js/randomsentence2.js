const list = [
    'Je suis plein de conneries, mais c\'est tout ce que j\'ai.',
    'Le temps au début du mois n\'a jamais semblé très brillant, ça me faire anesthésier.',
    'Je ne sais pas si la vie me dérange ou si je cherche des ennuis',
    'Je ne semble pas avoir d\'amis, mais j\'ai beaucoup de personnes sur ma liste d\'amis.',
    'Cela fait un moment que je n\'ai pas reçu d\'appel de quelqu\'un, mais quand ma famille appelle, ils disent qu\'ils sont occupés, et quand ils ne sont pas occupés, ils ne veulent pas retourner l\'appel, est-ce qu\'ils évitent quelque chose.',
    'Teresa Teng est si enjouée, Leslie Cheung est si enviable, et le printemps devrait être magnifique, si vous êtes encore là.',
    'Eh, tu as presque 30 ans, comment se fait - il que tu ne sois pas encore marié, ta famille ne te bouscule pas ? Le monde est inquiet pour vous, ils n\'ont rien d\'autre à dire, je suppose.',
    'Pourquoi êtes - vous en mauvaise posture aujourd\'hui, c\'est manifestement une belle journée.',
    'Les personnes qui ont peur de la société ont peur de recevoir un appel téléphonique et souhaitent même que leur téléphone n\'ait pas la possibilité de décrocher.',
    'Ne fais pas semblant, tu es visiblement fatigué aujourd\'hui, rentre chez toi et allonge-toi si tu veux.',
    'Lu Xun a dit, s\'il y a quelque chose que je n\'aime pas au paradis, je n\'y vais pas ; s\'il y a quelque chose que je n\'aime pas en enfer, je n\'y vais pas ; s\'il y a quelque chose que je n\'aime pas dans le monde doré du futur que vous aimez, je n\'y vais pas. Alors, où vais-je à la place ?',
    'Tout ira bien, on ne peut que se réconforter, sinon on ne peut même pas chercher le bonheur dans la douleur.',
    'Cuisiner, peindre, écouter de la musique, regarder des films, regarder des émissions de télévision, marcher et faire du vélo, aller au parc pour un pique - nique, lire et écrire, faire ce que vous voulez.',
    'Je devrais être très chanceux que l\'épidémie ne m\'ait pas laissé la vie ou la mort.',
    'Comment un bon ami peut - il s\'en aller ?',
    'Les forêts norvégiennes ne seraient pas si excitantes sans la part d\'amour.',
    'Je peux taper beaucoup de choses tous les jours, mais les gens ne veulent pas toujours savoir, alors je ne veux progressivement pas exprimer.',
    'J\'ai vu beaucoup de chats aujourd\'hui et ils sont si mignons, mais je ne semble pas être très mignonne.',
    'Tous ces mots semblent être le reflet de ma propre vie, pas assez positive, pas assez excitante.',
    'Je voulais aller à la plage et m\'y asseoir pendant une demi-journée, et une heure ou deux après être arrivé à la plage, je voulais rentrer chez moi.',
    'Pourquoi les gens postent - ils toujours autant de choses dans les médias sociaux, ne peuvent - ils pas ressentir la solitude des médias sociaux.',
    'Nous avions l\'habitude de danser le tuba à l\'école primaire, mais les enfants ne le font plus.',
    'En quatrième année, mon professeur m\'a surpris en train de sauter ma pause déjeuner, mais la pause déjeuner n\'est-elle pas censée être un moment pour sortir et jouer, puis il m\'a frappé sur la paume de la main avec une règle, maintenant que j\'y pense, il ne semble pas que j\'ai eu tort, je suis juste allé chez un camarade de classe, mais ce professeur me manque.',
    'Je peux encore dire beaucoup de conneries, comme une cage dont je ne peux pas sortir.',
    'Je suis fatigué aujourd\'hui, mais je n\'ai pas fait grand - chose.',
    'Je veux dormir maintenant.',
    'Je me souviens qu\'une fois, j\'ai eu sommeil mais je suis restée debout toute la nuit, l\'insomnie est vraiment torturante.',
    'Plus de 175 cm, mari un peu plus petit qu\'elle et ils ont un enfant. J\'ai perdu un ami méchant.',
    'Pouvez - vous laisser le passé derrière vous et repartir du bon pied ? Non, sinon quelle douleur y a - t - il ? ',
    'Les nouilles froides sont si bonnes en été.',
    'Comment se fait - il qu\'il soit 22 heures ? Ce n\'est pas l\'heure d\'aller au lit, quand on a sommeil ?',
    'Mettez le masque du danger, personne ne veut voir votre masque de la douleur.',
    'Le foyer est - il seulement là où l\'âme est libre ? Le monde entier est à la maison ? ',
    'Les sucettes ont été partagées aujourd\'hui car il était temps de se séparer.',
    'Tu es si mignon, c\'est juste que j\'ai une femme.',
    'La liste d\'amis ressemble-t-elle à un cimetière lorsque je ne suis plus en contact avec mes amis ?',
    'Jouer à cache - cache ? Le faucon peut attraper le poussin, ou je te donne un goûter de ma part.',
    'Comment ça va ? Ça fait longtemps que personne ne m\'a demandé ça.',
    'Savez - vous où est passé mon téléphone ? Je me suis perdu, perdu dans le vaste monde.',
    'Lorsque vous dites du mal de quelqu\'un, cette personne éternue littéralement, croyez-le ou non.',
    'Pourquoi tu es comme ça.',
    'Finalement, j\'ai perdu l\'énergie de la discussion.',
    'Il n\'y a pas d\'empathie et, bien souvent, la gêne et la douleur des autres ne sont pas ressenties.',
    'Génial ? Seulement parce que se cacher dans une petite ville semblerait génial.',
    'Le chien de l\'autre type m\'a regardé deux fois de plus aujourd\'hui.',
    'N\'y a-t-il plus rien qui puisse vous rendre heureux ? La poursuite excessive du bonheur est-elle un moyen de perdre le bonheur lui-même ?',
    'Pouvez - vous mâcher lentement.',
    'Notre distance semble être devenue plus étrange après cette étrange conversation.',
    'Pourquoi sont - elles si tolérants ? ',
    'Combien d\'années dois-je encore travailler avant de pouvoir prendre ma retraite ?',
    'Aujourd\'hui, le clavier est rose et la souris aussi.',
    'Le soleil ne m\'a pas dit au revoir quand il s\'est couché. Il arrive et repart sans bruit.',
    'Comment une vie engourdie peut - elle avancer ? Avez - vous déjà essayé de désespérer dans le désert ? ',
    'Au bout de la prairie, il peut y avoir des bois, ou peut - être des montagnes et des rivières.',
    'Les plaisanteries involontaires disent la vérité, mais malheureusement l\'autre personne ne la prend pas au sérieux, et l\'autre personne peut ne pas vouloir la prendre au sérieux.',
    'Tu n\'as même pas pris la peine de me gronder, je n\'ai même pas pris la peine de te répondre, et notre amitié semblait avoir pris fin.',
    'Hé, camarade, j\'ai encore rêvé de toi la nuit dernière.',
    'Il semble que ce soit un autre jour de peur.Entouré par la peur.La tristesse.',
    'Tu es vraiment faible, laisse - moi dire quelque chose de joyeux, j\'ai fait du lait de banane aujourd\'hui avec la centrifugeuse que j\'ai fabriquée, ce n\'était pas très bon mais c\'était amusant.',
    'Au moins, vous vivez tous dans la mémoire de quelqu\'un d\'autre.',
    'Ils ne veulent pas seulement que vous ayez de grandes compétences, ils veulent que vous les rendiez heureux, c\'est vous le clown.',
    'Certaines choses sont vraiment inattendues, même si vous vous tenez à deux mètres, vous n\'êtes pas à l\'abri.',
    'C\'est ennuyeux qu\'ils fassent des heures supplémentaires tous les jours.',
    'Il y a beaucoup de monologues intérieurs, êtes - vous dramaturge ? ',
    'Mon ami est en difficulté, je n\'ai pas le temps de m\'en soucier, je ne demande même pas.',
    'Vous pensez que vous êtes amis ? Ils veulent juste connaître les potins.',
    'Ils allaient en fait prendre un hotpot, venir au travail pour un hotpot supplémentaire un samedi matin alors qu\'ils n\'étaient pas censés travailler.',
    'China Post Express n\'est vraiment pas pressé de marcher lentement et tranquillement vers vous, six jours ont passé et c\'est encore la moitié du chemin.',
    'Les mots peu scrupuleux du chat de groupe n\'ont même pas osé être prononcés dans le chat privé, et ils se sont recroquevillés.',
    'J\'ai oublié de répondre au message de mon ami, l\'animal social répondait au message de mon collègue, et mon collègue pressait le dentifrice petit à petit, pour me sauver la vie~',
    'Faites un tour dans votre alma mater, les snacks d\'à côté sont tentants, ainsi que les jeunes nous.',
    'De bons souvenirs de l\'école, de l\'école primaire, du collège, du lycée et de l\'université, mais moins après l\'obtention du diplôme.',
    'Le poulet grillé d\'Orléans serait meilleur que le poulet frit, je pense.',
    'Les personnes qui n\'aiment pas les chips, mais qui apprécient les frites.',
    'Le parc était guérisseur et tout le monde se défoulait et faisait du sport comme s\'il n\'y avait aucune préoccupation.',
    'L\'été est là et c\'est la saison où manger de la glace sous la chaleur fait grossir.',
    'Il faut toujours utiliser son cerveau pour réfléchir, sinon on a l\'impression de devenir plus bête.',
    'Pour le bien de l\'équipe, il s\'est sacrifié.',
    'Pourquoi tu éternues ? Tu as l\'impression que quelqu\'un te dénigre. C\'est difficile d\'élever une femme.',
    'Pourquoi avons - nous toujours l\'air fort alors que nous sommes faibles à l\'intérieur.',
    'De nombreuses personnes se disputent et leur relation s\'effondre, mais dans les émissions de télévision étrangères, les gens semblent se reprendre après une dispute.',
    'J\'essaie de courir et de faire bouger le cerveau.',
    'Comment peut - elle manger autant et être toujours aussi mince.',
    'Lorsqu\'il ne parle pas, il réfléchit, voire divague, et lorsqu\'il parle, il est agité.',
    'Il s\'agit de produire quelque chose par bribes et non de terminer un travail dont on peut être fier.',
    'Quand pourras - tu faire ce que tu veux sans être forcé par la vie ? La vie: n\'y pensez même pas !',
    'Vivons - nous pour être heureux dans notre misère ? ',
    'Il semble qu\'il y ait encore une vie si longue, bien que la vie soit impermanente, et que l\'absence d\'impermanence soit la constante fastidieuse.',
    'Ne sait pas jouer du piano, ne sait pas chanter, ne sait pas faire des vidéos très impressionnantes, médiocres.',


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