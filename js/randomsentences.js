const list1 = [
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


const list2 = [
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

const list3 = [
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

const list4 = [
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


const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

var ul = document.getElementsByTagName("ul");
var li = document.getElementsByTagName("li");

//每次页面刷新后改变ul、li以及li内的文本
function everyFresh() {
    var num;
    var i;
    for (var num = 0; num < ul.length; num++) {
        ul[num].style.background = randomHex();//设置ul背景颜色
        li[num].style.background = randomHex();//设置li背景颜色
        switch (num) {
            case (0):
                i = GetRandomNum(1, list1.length);
                li[0].innerHTML = list1[i];
                break;
            case (1):
                i = GetRandomNum(1, list2.length);
                li[1].innerHTML = list2[i];
                break;
            case (2):
                i = GetRandomNum(1, list3.length);
                li[2].innerHTML = list3[i];
                break;
            case (3):
                i = GetRandomNum(1, list4.length);
                li[3].innerHTML = list4[i];
                break;
        }
    }
    savetextlengthofeveryli();//页面刷新后储存第一次各个长度
    console.log(listofText);
}


//改变第n个块的函数
function changeOnePiece(n) {
    ul[n].style.background = randomHex();
    li[n].style.background = randomHex();
    switch (n) {
        case (0):
            i = GetRandomNum(0, list1.length);
            li[0].innerHTML = list1[i];
            break;
        case (1):
            i = GetRandomNum(0, list2.length);
            li[1].innerHTML = list2[i];
            break;
        case (2):
            i = GetRandomNum(0, list3.length);
            li[2].innerHTML = list3[i];
            break;
        case (3):
            i = GetRandomNum(0, list4.length);
            li[3].innerHTML = list4[i];
            break;
    }

}


//储存每一个li中的文本长度乘60
var listofText = new Array();//全局变量
//更新每一个li的文本长度
function savetextlengthofeveryli() {
    for (var i = 0; i < ul.length; i++) {
        listofText[i] = li[i].innerHTML.length * 60;
    }
}
//单独更新li的文本长度
function savetextlengthofeachli(n) {
    listofText[n] = li[n].innerHTML.length * 60;
}

//先储存该页面的板块字节长度数组，再根据字节改变各个板块
function loopChange() {
    savetextlengthofeveryli();

    var set1 = setInterval(loop1, listofText[0]);//为什么是undefined？//已解决，内部调用需要去除引号,且不带括号
    var set2 = setInterval(loop2, listofText[1]);
    var set3 = setInterval(loop3, listofText[2]);
    var set4 = setInterval(loop4, listofText[3]);

    function loop1() {
        changeOnePiece(0);
        clearInterval(set1);
        savetextlengthofeachli(0);
        console.log(listofText);
        set1 = setInterval(loop1, listofText[0]);
    }
    function loop2() {
        changeOnePiece(1);
        clearInterval(set2);
        savetextlengthofeachli(1);
        console.log(listofText);
        set2 = setInterval(loop2, listofText[1]);
    }
    function loop3() {
        changeOnePiece(2);
        clearInterval(set3);
        savetextlengthofeachli(2);
        console.log(listofText);
        set3 = setInterval(loop3, listofText[2]);
    }
    function loop4() {
        changeOnePiece(3);
        clearInterval(set4);
        savetextlengthofeachli(3);
        console.log(listofText);
        set4 = setInterval(loop4, listofText[3]);
    }
}

window.onload = function () {
    everyFresh();
    loopChange();
}







