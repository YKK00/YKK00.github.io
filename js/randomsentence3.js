const list = [
    'À quoi ressemble l\'avenir de l\'humanité ? Soutiendriez - vous que la vie meilleure dont les humains bénéficieront à l\'avenir est en partie due aux injustices que vous subissez actuellement dans votre vie ?',
    'Si vous pouviez faire n\'importe quoi et blesser n\'importe qui, seriez - vous une mauvaise personne ou une personne qui profiterait à l\'avenir de l\'humanité ?',
    'Pensez - vous que le divertissement par téléphone portable et le raffinement de la division du travail sont deux éléments qui démantèlent le plaisir de partager les fruits du travail ?',
    'Sacrifieriez - vous votre qualité de vie pour l\'équité de l\'humanité ?',
    'L\'État est une conscience humaine qui n\'existe pas vraiment, fictive.',
    'Il n\'y a plus aucun moyen de rendre les hommes égaux aux femmes si l\'humanité ne commence pas par éliminer le concept d\'État.Et le concept de territoire possédé par l\'humanité rend également impossible l\'élimination de l\'État.',
    'Les hommes et les femmes, qui ne sont pas d\'accord sur une chose, seront toujours au stade charnel.',
    'On dit souvent qu\'il faut apprendre de ce qui est pertinent pour soi, mais le labeur ne sert qu\'à mettre de la nourriture sur la table.Cela m\'a empêché d\'apprendre ce qui était pertinent pour moi.',
    'J\'ai pratiqué de nombreuses méthodes liées à l\'interaction humaine, pour me rendre compte que les gens n\'aiment pas les relations purement sociables.',
    'Les arts, en particulier les arts visuels, sont les plus avancés; la peinture, la sculpture, l\'architecture et le métavers, qui sont libérés des contraintes de la parole, sont les moyens de communication les plus directs.',
    'Vivre en Chine est une situation de haute pression partout si vous n\'avez pas d\'argent.',
    'La nouvelle génération de Chinois, en l\'absence de ressources productives telles que la terre, est encore plus dépendante du gouvernement.',
    'Nous n\'avons pas d\'autres ressources productives que la force physique.',
    'Dans les pays en développement, les gens sont des combustibles en chair et en os.',
    'Les Chinois devront rembourser des prêts usuraires pendant 20 à 30 ans à cause de leurs maisons.Et pourtant, beaucoup de ces maisons sont en mauvais état.',
    'La Chine s\'efforce d\'introduire les enfants dans les relations de classe, son éducation commence à apparaître dans les écoles techniques, les écoles professionnelles et techniques, les lycées généraux, les lycées clés, les écoles spécialisées, les écoles de premier cycle, les universités clés, c\'est un pays prolétaire, mais pour les enfants, elle a commencé à créer activement des relations de classe.',
    'La Chine est un régime prolétarien, mais les compétences des ouvriers, des paysans, des hommes d\'affaires et des universitaires n\'ont jamais été regardées en face, jamais traitées de manière solennelle.Les compétences des ouvriers, des paysans, des hommes d\'affaires et des universitaires sont toujours vieilles, alors que les personnes et les connaissances de grande valeur sur les postes de première ligne ne sont jamais valorisées, enregistrées et rendues publiques, et les enfants apprennent des connaissances vieilles et pourries.Même le certificat de compétences n\'était qu\'un bout de papier.',
    'Mon amant m\'a demandé ce qu\'était l\'amour.Je réponds : ce qui résiste au monde, c\'est l\'amour que tu me donnes.Quand je pense à toi, je sens que le monde est encore beau.Alors je verrai le monde avec toi, et je supporterai ensemble les pluies et les tempêtes de la vie.Nous tolérerons les fautes de l\'autre dans notre mariage et nous grandirons ensemble.Et grâce à l\'amour et à la constance de chacun, nous pourrons lutter ensemble contre le vide et l\'inintérêt.',
    'En Chine, la fécondité et la transmission de la volonté sont des priorités absolues.',
    'La lutte contre le néant a été développée et exploitée.Plaisir ou bonheur, désir sexuel, anesthésie, douleur ou effort.',
    'En tant que personne pauvre, je connais bien cette pauvreté et ce dur labeur, qui ont longtemps été fixés parce qu\'ils s\'inscrivent dans la diversité de la société.La société refuse également d\'accepter le changement.',

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