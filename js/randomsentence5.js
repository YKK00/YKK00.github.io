const list = [
    'Chaque fois que j\'entends quelqu\'un exprimer une opinion, je me demande si c\'est vraiment ce qu\'il a en tête.',
    'Parfois, je ne suis pas sûr du genre de personne que je suis à cause de certains choix que je fais et que je ne peux pas comprendre moi - même.',
    'En Chine, les gens ne supportent pas que les autres soient mieux lotis qu\'eux, mais ils doivent faire semblant de ne pas s\'en soucier.',
    'Les Chinois disent souvent qu\'il faut concentrer ses efforts pour réaliser de grandes choses, mais ils disent aussi qu\'il ne faut pas mettre ses œufs dans le même panier, sans jamais se rendre compte de la contradiction entre les deux.',
    'Je suis souvent ennuyé par les Chinois qui se vantent à table, cela semble être un jeu où chacun sait qu\'il se vante, mais tout le monde se vante lui-même, et tout le monde prend du plaisir à se vanter.',
    'Un vieux dicton chinois dit qu\'un scandale familial ne doit pas être rendu public. Je pense que cela a un rapport avec l\'environnement, car les Chinois pensent que les autres vont considérer leur scandale familial comme une blague et très peu de Chinois ont pitié des scandales des autres.',
    'Je suis chinoise et je suis entourée de personnes qui parlent de la vie privée des gens, qui jugent leur personnalité et qui les fréquentent en fonction de ce jugement.',
    'Je suis chinoise et je suis entourée de personnes qui parlent de la vie privée des autres, jugent leur personnalité et décident de les fréquenter ou non sur cette base.',
    'En Chine, si deux personnes inconnues discutent entre elles, elles recherchent toutes les deux les vraies pensées des autres, mais essaient de cacher leurs vraies pensées.',
    'Je compare souvent la différence entre quand j\'ai grandi et quand j\'étais enfant, et j\'ai trouvé que j\'étais moins intéressé, passionné, énergique et heureux que quand j\'étais enfant, mais j\'avais plus d\'argent.',
    'Quand quelqu\'un d\'autre fait une bêtise, on pense que ce n\'est pas si bête d\'être soi-même, mais quand ça nous arrive vraiment, on est aussi bête que tout le monde.',
    'J\'en ai marre de me disputer avec les autres, parce qu\'au final, personne ne peut convaincre personne, et même la vérité ne se trouve pas.',
    'Les chinois ont un bon visage, le soi - disant visage n\'est là que pour créer une auto-tromperie superficiellement excellente ou puissante.',
    'Si nous travaillons dur pour construire une bonne image de nous - mêmes aux yeux des autres, notre image dans la nôtre s\'effondrera.',
    'Il est parfois plus facile de tromper un groupe de personnes que de tromper une seule personne, il suffit d\'établir une autorité.',
    'Après le travail tous les jours, je mets toujours mes écouteurs, ne parle à personne, ne fais rien, reste juste comme ça un moment.',
    'J\'ai souvent rêvé d\'une vie à plat ventre et à ne rien faire, mais j\'ai aussi le vague sentiment que lorsque cette vie viendra vraiment, je retomberai dans un vide insupportable jusqu\'à ce qu\'un nouveau désir surgisse.',
    'Nous voulons toujours que le monde soit ce que nous aimons, mais il se retourne souvent contre nous, nous devons donc admettre que les revers, les échecs et les déceptions remplissent presque le monde entier.',
    'J\'ai souvent l\'impression que certaines personnes ne sont émues que par des besoins émotionnels, plutôt qu\'une émotion naturelle. Lorsqu\'elles ne sont pas émues, elles trouveront des choses qui les émeuvent, puis se montreront quelques larmes à passer.',
    'J\'ai souvent des moments comme celui - ci où je reste assis dans un état second et je n\'ai pas l\'énergie de faire quoi que ce soit.',
    'Si vous supposez que vous n\'avez rien, alors il n\'y a pas de peur, mais quand vous découvrez que ce n\'est qu\'une supposition, la peur revient.',
    'Il est clair que l\'homme n\'est qu\'un morceau de poussière dans l\'univers, mais lorsqu\'il pense, son esprit est l\'univers entier.',
    'Pourquoi tout le monde semble s\'attendre à ce que quelque chose d\'inhabituel se produise ? Une fois que quelque chose comme ça se produit, ils s\'excitent et obtiennent une libération instantanée de la crise.',
    'Si je ne peux pas trouver la tranquillité d\'esprit, je ne peux pas prendre de décisions conscientes.',
    'Tout le monde ne peut comprendre les choses que dans le cadre de sa propre cognition.Si une personne ridiculise, insulte, sarcasme ou ridiculise une autre personne, ce n\'est pas que l\'autre personne le fasse vraiment. C\'est juste que leur cognition est différente. Si une personne loue , d\'accord , comprendre, sympathiser avec une autre personne, pas à quel point l\'autre personne a raison ou pitié, juste que leurs perceptions sont similaires.',
    'La rationalité et l\'émotion sont quelque peu contradictoires. La rationalité incite les gens à faire le bon choix et utilise souvent la récompense du bon résultat pour satisfaire l\'émotion, mais l\'émotion empêche souvent la rationalité de faire le bon choix.',
    'Lorsqu\'il y a beaucoup de choix, les gens tombent souvent dans la douleur de ne pas savoir comment choisir, mais s\'il n\'y a qu\'un seul choix, alors les gens seront heureux de faire l\'expérience du seul choix. Le nombre de choix ne dépend souvent pas de la richesse et du statut, mais de valeurs. C\'est-à-dire qu\'en vertu des valeurs établies, bien que vous ayez beaucoup de choix aux yeux des autres, vous seul comprenez que vous n\'avez pas le choix.',
    'Je pense souvent qu\'être en vie n\'est qu\'une simulation, et même l\'univers entier est une simulation, qui n\'est pas réelle, mais quand je me demande qu\'est-ce qui est réel ? Je me sens étourdi.',
    'S\'il y a deux nombres distincts A et B, un seul des deux cas A > B et A < B peut apparaître.Mais c\'est étrange comme l\'amour et la haine d\'une personne pour une autre peuvent exister en même temps.',
    'Supposons qu\'il y ait eu une personne inconnue dans 1000 ans, le temps a éliminé toute preuve de son existence, nous ne pouvons pas prouver son existence, mais nous ne pouvons pas prouver qu\'il n\'existe pas, nous pouvons seulement dire qu\'il peut exister, puis après 1000, nous aussi est devenu celui qui pourrait exister.',
    'Le créateur a établi des règles intéressantes pour les êtres humains.Dans la plupart des cas, ce que nous essayons d\'accomplir est souvent foiré, et nous réussissons souvent à faire une chose au hasard. Est-ce une probabilité ? Je pense que c\'est la farce du créateur.',
    'Dans les situations sérieuses, j\'imagine souvent ce qui se passerait si la personne sous les feux de la rampe faisait soudain une grimace. Qu\'est-ce que cela ferait d\'avoir quelqu\'un qui aborde les blagues avec une attitude plutôt sérieuse et presque pieuse lorsque les gens font des blagues exagérées ?',
    'Les gens disent, quand ils voient le résultat, que c\'est à cause d\'une certaine raison. Et je me demande toujours quelle est la probabilité que cette cause ait conduit à ce résultat.',
    'Par rapport à il y a dix ans, tous les atomes de mon corps ont été remplacés et ma conscience est très différente, je ne suis donc pas la même personne qu\'il y a dix ans. Mais la personne que j\'étais il y a dix ans reste dans ma conscience, sous une forme ou une autre, et je pense souvent à lui, puis je ris de sa stupidité et je verse des larmes pour lui.',
    'Bien sûr que je suis un retardé, un perdant, un imbécile incompétent, et chaque fois que je pense cela de moi, je me sens étonnamment soulagé et incroyablement éveillé.',
    'Mon âme semble faire des allers - retours incessants entre le monde extérieur et le monde intérieur, comme une balle de ping - pong qui rebondit entre deux murs, sans pouvoir s\'arrêter complètement, et je pense que tout le monde partage cette impression.',
    'Il n\'y a que des gens semblables, il n\'y a pas de gens identiques, et dans la partie qui n\'est pas semblable aux autres, les gens sont seuls.',
    'Je trouve que je passe la plupart de mon temps à ne rien faire et quand je regarde en arrière, je trouve qu\'il n\'y a rien à retenir.',
    'Le temps s\'écoule lentement, et plus vous essayez de le rattraper, plus vous vous trouvez impuissant.',


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