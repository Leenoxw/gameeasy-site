// src/data/games.js
export const gamesData = [
  { 
    id: 'gta-v', title: "GTA V", image: "/gameeasy-site/images/gta5.jpg", cat: "Action / Open World", mode: "Solo / Multi",
    desc: "Suivez les destins croisés de trois criminels à Los Santos. Un monde ouvert immense et des possibilités infinies.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "72 GB" },
    rec: { os: "Win 11", cpu: "i7-4770K", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "72 GB" },
    dl: "#"
  },
  { 
    id: 'cyberpunk-2077', title: "Cyberpunk 2077", image: "/gameeasy-site/images/cyberpunk.jpg", cat: "RPG / Sci-Fi", mode: "Solo",
    desc: "Devenez un mercenaire dans la mégalopole de Night City, obsédée par les modifications corporelles.",
    min: { os: "Win 10", cpu: "i5-3570K", ram: "8 GB", gpu: "GTX 970", dx: "12", storage: "70 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "70 GB SSD" },
    dl: "#"
  },
  { 
    id: 'elden-ring', title: "Elden Ring", image: "/gameeasy-site/images/elden-ring.jpg", cat: "Action / RPG", mode: "Solo / Multi",
    desc: "Explorez l'Entre-terre et devenez le Seigneur d'Elden dans ce chef-d'œuvre de FromSoftware.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "12 GB", gpu: "GTX 1060", dx: "12", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "GTX 1070", dx: "12", storage: "60 GB" },
    dl: "#"
  },
  { 
    id: 'red-dead-redemption-2', title: "Red Dead Redemption 2", image: "/gameeasy-site/images/rdr2.jpg", cat: "Aventure / Western", mode: "Solo / Multi",
    desc: "Vivez la fin de l'ère de l'Ouest sauvage avec Arthur Morgan et le gang Van der Linde.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "150 GB" },
    rec: { os: "Win 11", cpu: "i7-4770K", ram: "12 GB", gpu: "GTX 1060", dx: "11", storage: "150 GB" },
    dl: "#"
  },
  { 
    id: 'spiderman-2', title: "Marvel's Spider-Man 2", image: "/gameeasy-site/images/spiderman2.jpg", cat: "Action / Aventure", mode: "Solo",
    desc: "Incarnez Peter et Miles face à Venom et Kraven dans une New York plus grande que jamais.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "90 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "32 GB", gpu: "RTX 3070", dx: "12", storage: "90 GB SSD" },
    dl: "#"
  },
  { 
    id: 'hogwarts-legacy', title: "Hogwarts Legacy", image: "/gameeasy-site/images/hogwarts.jpg", cat: "Aventure / Magie", mode: "Solo",
    desc: "Vivez l'expérience Poudlard au XIXe siècle. Apprenez des sorts et forgez votre propre héritage.",
    min: { os: "Win 10", cpu: "i5-6600", ram: "16 GB", gpu: "GTX 960", dx: "12", storage: "85 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "85 GB" },
    dl: "#"
  },
  { 
    id: 'forza-horizon-5', title: "Forza Horizon 5", image: "/gameeasy-site/images/forza5.jpg", cat: "Course / Simulation", mode: "Solo / Multi",
    desc: "Parcourez les paysages magnifiques du Mexique au volant de centaines de voitures légendaires.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 760", dx: "12", storage: "110 GB" },
    rec: { os: "Win 11", cpu: "i7-10700", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "110 GB" },
    dl: "#"
  },
  { 
    id: 'god-of-war-ragnarok', title: "God of War Ragnarök", image: "/gameeasy-site/images/gow-ragnarok.jpg", cat: "Action / Mythologie", mode: "Solo",
    desc: "Kratos et Atreus doivent explorer les Neuf Royaumes alors que le Ragnarök approche.",
    min: { os: "Win 10", cpu: "i5-4670K", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "190 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-7700K", ram: "16 GB", gpu: "RTX 3070", dx: "12", storage: "190 GB SSD" },
    dl: "#"
  },
  { 
    id: 'the-witcher-3', title: "The Witcher 3", image: "/gameeasy-site/images/witcher3.jpg", cat: "RPG / Fantasy", mode: "Solo",
    desc: "Traquez l'enfant de la prophétie dans un monde dévasté par la guerre et les monstres.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "6 GB", gpu: "GTX 660", dx: "11", storage: "35 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "35 GB" },
    dl: "https://lockr.so/nkhF6lhi"
  },
  { 
    id: 'hades-2', title: "Hades II", image: "/gameeasy-site/images/hades2.jpg", cat: "Roguelike / Action", mode: "Solo",
    desc: "Affrontez le Titan du Temps avec la princesse immortelle des Enfers.",
    min: { os: "Win 10", cpu: "Dual Core", ram: "4 GB", gpu: "GTX 950", dx: "12", storage: "10 GB" },
    rec: { os: "Win 11", cpu: "Quad Core", ram: "8 GB", gpu: "RTX 2060", dx: "12", storage: "10 GB" },
    dl: "https://lockr.so/1PmeVLBt"
  },
  { 
    id: 'hollow-knight-silksong', title: "Silksong", image: "/gameeasy-site/images/silksong.jpg", cat: "Metroidvania", mode: "Solo",
    desc: "Incarnez Hornet dans un tout nouveau royaume hanté par le mystère et la musique.",
    min: { os: "Win 10", cpu: "i3-3220", ram: "4 GB", gpu: "GTX 660", dx: "11", storage: "9 GB" },
    rec: { os: "Win 11", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 960", dx: "11", storage: "9 GB" },
    dl: "https://lockr.so/SGwnoQqm"
  },
  { 
    id: 'manor-lords', title: "Manor Lords", image: "/gameeasy-site/images/manor-lords.jpg", cat: "Stratégie / Médiéval", mode: "Solo",
    desc: "Bâtissez votre cité médiévale et menez vos troupes dans des batailles tactiques.",
    min: { os: "Win 10", cpu: "i5-4670", ram: "8 GB", gpu: "GTX 1050", dx: "12", storage: "15 GB" },
    rec: { os: "Win 11", cpu: "i5-7600", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "15 GB" },
    dl: "https://lockr.so/lQSgU5Fj"
  },
  { 
    id: 'palworld', title: "Palworld", image: "/gameeasy-site/images/palworld.jpg", cat: "Survie / Créatures", mode: "Solo / Multi",
    desc: "Capturez des créatures et faites-les travailler ou combattre dans ce monde ouvert.",
    min: { os: "Win 10", cpu: "i5-3570K", ram: "16 GB", gpu: "GTX 1050", dx: "11", storage: "40 GB SSD" },
    rec: { os: "Win 11", cpu: "i9-9900K", ram: "32 GB", gpu: "RTX 2070", dx: "11", storage: "40 GB SSD" },
    dl: "https://lockr.so/oUDrrXTi"
  },
  { 
    id: 'lethal-company', title: "Lethal Company", image: "/gameeasy-site/images/lethal-company.jpg", cat: "Horreur / Coop", mode: "Multi",
    desc: "Récupérez de la ferraille sur des lunes industrielles pour la Compagnie.",
    min: { os: "Win 10", cpu: "i5-7400", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "i7-9700", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "1 GB" },
    dl: "https://lockr.so/ep3kx7x0"
  },
  { 
    id: 'black-myth-wukong', title: "Black Myth: Wukong", image: "/gameeasy-site/images/wukong.jpg", cat: "Action / RPG", mode: "Solo",
    desc: "Incarnez le Prédestiné dans ce RPG d'action spectaculaire inspiré de la mythologie.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "130 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-9700", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "130 GB SSD" },
    dl: "#"
  },
  { 
    id: 'stardew-valley', title: "Stardew Valley", image: "/gameeasy-site/images/stardew.jpg", cat: "Simulation / RPG", mode: "Solo / Multi",
    desc: "Héritez de la ferme de votre grand-père et commencez une nouvelle vie.",
    min: { os: "Win 10", cpu: "2.0 GHz", ram: "2 GB", gpu: "256 MB", dx: "10", storage: "500 MB" },
    rec: { os: "Win 11", cpu: "3.0 GHz", ram: "4 GB", gpu: "1 GB", dx: "10", storage: "500 MB" },
    dl: "https://lockr.so/zuhQ6dqV"
  },
  { 
    id: 'schedules', title: "Schedules", image: "/gameeasy-site/images/schedules.jpg", cat: "Indie / Horreur", mode: "Solo / Multi",
    desc: "Suivez une routine stricte pour survivre à des entités qui vous surveillent.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "GTX 750", dx: "11", storage: "2 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "2 GB" },
    dl: "https://lockr.so/rQVAhyi7"
  },
  { 
    id: 'rv-there-yet', title: "RV There Yet?", image: "/gameeasy-site/images/rv-there-yet.jpg", cat: "Indie / Aventure", mode: "Solo / Multi",
    desc: "Un roadtrip mystérieux à travers des paysages oniriques.",
    min: { os: "Win 10", cpu: "Dual Core", ram: "4 GB", gpu: "Intel HD", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "Quad Core", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "1 GB" },
    dl: "https://lockr.so/YMHLddCG"
  },
  { 
    id: 'buckshot-roulette', title: "Buckshot Roulette", image: "/gameeasy-site/images/buckshot.jpg", cat: "Indie / Stratégie", mode: "Solo / Multi",
    desc: "Une roulette russe revisitée avec un fusil à pompe de calibre 12.",
    min: { os: "Win 10", cpu: "Intel Core", ram: "2 GB", gpu: "Dédié", dx: "11", storage: "300 MB" },
    rec: { os: "Win 11", cpu: "Intel Core", ram: "4 GB", gpu: "GTX 660", dx: "11", storage: "300 MB" },
    dl: "https://lockr.so/u5m7o69h"
  },
  { 
    id: 'chained-together', title: "Chained Together", image: "/gameeasy-site/images/chained-together.jpg", cat: "Coop / Plateforme", mode: "Multi",
    desc: "Enchaîné à vos amis, grimpez hors de l'enfer.",
    min: { os: "Win 10", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "6 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "6 GB" },
    dl: "https://lockr.so/W3ailhYr"
  },
  { 
    id: 'phasmophobia', title: "Phasmophobia", image: "/gameeasy-site/images/phasmophobia.jpg", cat: "Horreur / Coop", mode: "Multi",
    desc: "Identifiez le fantôme avant qu'il ne vous chasse.",
    min: { os: "Win 10", cpu: "i5-4590", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "21 GB" },
    rec: { os: "Win 11", cpu: "i7-6700", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "21 GB" },
    dl: "https://lockr.so/YEfWZGhM"
  }, // Jeux sans image pour linstant //
  { 
    id: 'baldurs-gate-3', title: "Baldur's Gate 3", image: "/gameeasy-site/images/bg3.jpg", cat: "RPG / Tour par tour", mode: "Solo / Multi",
    desc: "Rassemblez votre groupe et retournez dans les Royaumes Oubliés dans une histoire de camaraderie et de trahison.",
    min: { os: "Win 10", cpu: "i5-4690", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "150 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "RTX 2060", dx: "11", storage: "150 GB SSD" },
    dl: "#"
  },
  { 
    id: 'resident-evil-4-remake', title: "Resident Evil 4", image: "/gameeasy-site/images/re4.jpg", cat: "Horreur / Action", mode: "Solo",
    desc: "Leon S. Kennedy doit sauver la fille du président dans un village européen terrifiant.",
    min: { os: "Win 10", cpu: "i5-7500", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "60 GB" },
    dl: "#"
  },
  { 
    id: 'minecraft', title: "Minecraft", image: "/gameeasy-site/images/minecraft.jpg", cat: "Bac à sable / Survie", mode: "Solo / Multi",
    desc: "Explorez des mondes infinis et construisez tout ce qui vous passe par la tête, du plus simple abri au plus grand des châteaux.",
    min: { os: "Win 10", cpu: "i3-3210", ram: "4 GB", gpu: "Intel HD 4000", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "i5-4690", ram: "8 GB", gpu: "GTX 700 series", dx: "11", storage: "4 GB" },
    dl: "#"
  },
  { 
    id: 'ghost-of-tsushima', title: "Ghost of Tsushima", image: "/gameeasy-site/images/ghost-tsushima.jpg", cat: "Action / Samouraï", mode: "Solo / Multi",
    desc: "En pleine invasion mongole, devenez le Fantôme pour libérer l'île de Tsushima.",
    min: { os: "Win 10", cpu: "i3-7100", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "75 GB" },
    rec: { os: "Win 11", cpu: "i5-8600", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "75 GB" },
    dl: "#"
  },
  { 
    id: 'ark-survival-ascended', title: "ARK: Ascended", image: "/gameeasy-site/images/ark-ascended.jpg", cat: "Survie / Dinosaures", mode: "Solo / Multi",
    desc: "Réveillez-vous sur une île mystérieuse et survivez face aux dinosaures dans ce remake sous Unreal Engine 5.",
    min: { os: "Win 10", cpu: "i7-6800K", ram: "16 GB", gpu: "RTX 2080", dx: "12", storage: "80 GB SSD" },
    rec: { os: "Win 11", cpu: "i5-12600K", ram: "32 GB", gpu: "RTX 3080", dx: "12", storage: "80 GB SSD" },
    dl: "#"
  },
  { 
    id: 'tekken-8', title: "Tekken 8", image: "/gameeasy-site/images/tekken8.jpg", cat: "Combat", mode: "Solo / Multi",
    desc: "Préparez-vous pour le prochain chapitre de la lignée Mishima avec des combats plus destructeurs que jamais.",
    min: { os: "Win 10", cpu: "i5-6600K", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "100 GB" },
    rec: { os: "Win 11", cpu: "i7-7700K", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "100 GB" },
    dl: "#"
  },
  { 
    id: 'ready-or-not', title: "Ready or Not", image: "/gameeasy-site/images/ready-or-not.jpg", cat: "Simulation / FPS", mode: "Solo / Multi",
    desc: "Un FPS tactique intense où vous incarnez une unité d'élite du SWAT dans des situations critiques.",
    min: { os: "Win 10", cpu: "i3-4130", ram: "8 GB", gpu: "GTX 960", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-7600K", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "50 GB" },
    dl: "#"
  },
  { 
    id: 'euro-truck-2', title: "Euro Truck Simulator 2", image: "/gameeasy-site/images/ets2.jpg", cat: "Simulation / Conduite", mode: "Solo / Multi",
    desc: "Devenez le roi de la route en livrant des cargaisons importantes à travers toute l'Europe.",
    min: { os: "Win 10", cpu: "Dual Core 2.4 GHz", ram: "4 GB", gpu: "GTS 450", dx: "11", storage: "12 GB" },
    rec: { os: "Win 11", cpu: "Quad Core 3.0 GHz", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "12 GB" },
    dl: "#"
  },
  { 
    id: 'content-warning', title: "Content Warning", image: "/gameeasy-site/images/content-warning.jpg", cat: "Coop / Horreur", mode: "Multi",
    desc: "Filmez vos amis en train de faire des trucs flippants pour devenir viral sur SpookTube.",
    min: { os: "Win 10", cpu: "i5 @ 2.5 GHz", ram: "8 GB", gpu: "GTX 1050 ti", dx: "11", storage: "4 GB" },
    rec: { os: "Win 11", cpu: "i5 @ 3.0 GHz", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "4 GB" },
    dl: "#"
  },
  { 
    id: 'assassins-creed-mirage', title: "AC Mirage", image: "/gameeasy-site/images/ac-mirage.jpg", cat: "Action / Infiltration", mode: "Solo",
    desc: "Suivez Basim dans le Bagdad du IXe siècle pour devenir un Maître Assassin.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "40 GB" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "40 GB" },
    dl: "#"
  }
];