// src/data/games.js
export const gamesData = [
  { 
    id: 'cyberpunk-2077', title: "Cyberpunk 2077", image: "/images/cyberpunk.jpg", cat: "Sci-Fi", mode: "Solo",
    desc: "Devenez un mercenaire dans la mégalopole de Night City, obsédée par les modifications corporelles.",
    min: { os: "Win 10", cpu: "i5-3570K", ram: "8 GB", gpu: "GTX 970", dx: "12", storage: "70 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "70 GB SSD" },
    dl: "https://lockr.so/nPCVFTUK"
  },
  { 
    id: 'elden-ring', title: "Elden Ring", image: "/images/elden-ring.jpg", cat: "Action / RPG", mode: "Solo / Multi",
    desc: "Explorez l'Entre-terre et devenez le Seigneur d'Elden dans ce chef-d'œuvre de FromSoftware.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "12 GB", gpu: "GTX 1060", dx: "12", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "GTX 1070", dx: "12", storage: "60 GB" },
    dl: "https://lockr.so/pPKemlbB"
  },
  { 
    id: 'red-dead-redemption-2', title: "Red Dead Redemption 2", image: "/images/rdr2.jpg", cat: "Aventure", mode: "Solo / Multi",
    desc: "Vivez la fin de l'ère de l'Ouest sauvage avec Arthur Morgan et le gang Van der Linde.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "150 GB" },
    rec: { os: "Win 11", cpu: "i7-4770K", ram: "12 GB", gpu: "GTX 1060", dx: "11", storage: "150 GB" },
    dl: "https://lockr.so/lMrMw6eE"
  },
  { 
    id: 'spiderman-2', title: "Marvel's Spider-Man 2", image: "/images/spiderman2.jpg", cat: "Action / Aventure", mode: "Solo",
    desc: "Incarnez Peter et Miles face à Venom et Kraven dans une New York plus grande que jamais.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "90 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "32 GB", gpu: "RTX 3070", dx: "12", storage: "90 GB SSD" },
    dl: "https://lockr.so/e9yQdsaP"
  },
  { 
    id: 'hogwarts-legacy', title: "Hogwarts Legacy", image: " /images/hogwarts.jpg", cat: "Aventure / Magie", mode: "Solo",
    desc: "Vivez l'expérience Poudlard au XIXe siècle. Apprenez des sorts et forgez votre propre héritage.",
    min: { os: "Win 10", cpu: "i5-6600", ram: "16 GB", gpu: "GTX 960", dx: "12", storage: "85 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "85 GB" },
    dl: "https://lockr.so/7Fc4Utc7"
  },
  { 
    id: 'forza-horizon-5', title: "Forza Horizon 5", image: "/images/forza5.jpg", cat: "Course / Simulation", mode: "Solo / Multi",
    desc: "Parcourez les paysages magnifiques du Mexique au volant de centaines de voitures légendaires.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 760", dx: "12", storage: "110 GB" },
    rec: { os: "Win 11", cpu: "i7-10700", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "110 GB" },
    dl: "https://lockr.so/yXNvrMpb"
  },
  { 
    id: 'god-of-war-ragnarok', title: "God of War Ragnarök", image: "/images/gow-ragnarok.jpg", cat: "Action / Mythologie", mode: "Solo",
    desc: "Kratos et Atreus doivent explorer les Neuf Royaumes alors que le Ragnarök approche.",
    min: { os: "Win 10", cpu: "i5-4670K", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "190 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-7700K", ram: "16 GB", gpu: "RTX 3070", dx: "12", storage: "190 GB SSD" },
    dl: "https://lockr.so/97YR25eV"
  },
  { 
    id: 'the-witcher-3', title: "The Witcher 3", image: "/images/witcher3.jpg", cat: "RPG / Fantasy", mode: "Solo",
    desc: "Traquez l'enfant de la prophétie dans un monde dévasté par la guerre et les monstres.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "6 GB", gpu: "GTX 660", dx: "11", storage: "35 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "35 GB" },
    dl: "https://lockr.so/nkhF6lhi"
  },
  { 
    id: 'hades-2', title: "Hades II", image: "/images/hades2.jpg", cat: "Action", mode: "Solo",
    desc: "Affrontez le Titan du Temps avec la princesse immortelle des Enfers.",
    min: { os: "Win 10", cpu: "Dual Core", ram: "4 GB", gpu: "GTX 950", dx: "12", storage: "10 GB" },
    rec: { os: "Win 11", cpu: "Quad Core", ram: "8 GB", gpu: "RTX 2060", dx: "12", storage: "10 GB" },
    dl: "https://lockr.so/1PmeVLBt"
  },
  { 
    id: 'hollow-knight-silksong', title: "Silksong", image: "/images/silksong.jpg", cat: "Aventure", mode: "Solo",
    desc: "Incarnez Hornet dans un tout nouveau royaume hanté par le mystère et la musique.",
    min: { os: "Win 10", cpu: "i3-3220", ram: "4 GB", gpu: "GTX 660", dx: "11", storage: "9 GB" },
    rec: { os: "Win 11", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 960", dx: "11", storage: "9 GB" },
    dl: "https://lockr.so/SGwnoQqm"
  },
  { 
    id: 'manor-lords', title: "Manor Lords", image: "/images/manor-lords.jpg", cat: "Stratégie / Médiéval", mode: "Solo",
    desc: "Bâtissez votre cité médiévale et menez vos troupes dans des batailles tactiques.",
    min: { os: "Win 10", cpu: "i5-4670", ram: "8 GB", gpu: "GTX 1050", dx: "12", storage: "15 GB" },
    rec: { os: "Win 11", cpu: "i5-7600", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "15 GB" },
    dl: "https://lockr.so/lQSgU5Fj"
  },
  { 
    id: 'palworld', title: "Palworld", image: "/images/palworld.jpg", cat: "Survie", mode: "Solo / Multi",
    desc: "Capturez des créatures et faites-les travailler ou combattre dans ce monde ouvert.",
    min: { os: "Win 10", cpu: "i5-3570K", ram: "16 GB", gpu: "GTX 1050", dx: "11", storage: "40 GB SSD" },
    rec: { os: "Win 11", cpu: "i9-9900K", ram: "32 GB", gpu: "RTX 2070", dx: "11", storage: "40 GB SSD" },
    dl: "https://lockr.so/oUDrrXTi"
  },
  { 
    id: 'lethal-company', title: "Lethal Company", image: "/images/lethal-company.jpg", cat: "Horreur / Coop", mode: "Multi",
    desc: "Récupérez de la ferraille sur des lunes industrielles pour la Compagnie.",
    min: { os: "Win 10", cpu: "i5-7400", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "i7-9700", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "1 GB" },
    dl: "https://lockr.so/ep3kx7x0"
  },
  { 
    id: 'stardew-valley', title: "Stardew Valley", image: "/images/stardew.jpg", cat: "Simulation / RPG", mode: "Solo / Multi",
    desc: "Héritez de la ferme de votre grand-père et commencez une nouvelle vie.",
    min: { os: "Win 10", cpu: "2.0 GHz", ram: "2 GB", gpu: "256 MB", dx: "10", storage: "500 MB" },
    rec: { os: "Win 11", cpu: "3.0 GHz", ram: "4 GB", gpu: "1 GB", dx: "10", storage: "500 MB" },
    dl: "https://lockr.so/zuhQ6dqV"
  },
  { 
    id: 'schedules', title: "Schedules", image: "/images/schedules.jpg", cat: "Indie / Horreur", mode: "Solo / Multi",
    desc: "Suivez une routine stricte pour survivre à des entités qui vous surveillent.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "GTX 750", dx: "11", storage: "2 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "2 GB" },
    dl: "https://lockr.so/rQVAhyi7"
  },
  { 
    id: 'rv-there-yet', title: "RV There Yet?", image: "/images/rv-there-yet.jpg", cat: "Indie / Aventure", mode: "Solo / Multi",
    desc: "Un roadtrip mystérieux à travers des paysages oniriques.",
    min: { os: "Win 10", cpu: "Dual Core", ram: "4 GB", gpu: "Intel HD", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "Quad Core", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "1 GB" },
    dl: "https://lockr.so/YMHLddCG"
  },
  { 
    id: 'buckshot-roulette', title: "Buckshot Roulette", image: "/images/buckshot.jpg", cat: "Indie / Stratégie", mode: "Solo / Multi",
    desc: "Une roulette russe revisitée avec un fusil à pompe de calibre 12.",
    min: { os: "Win 10", cpu: "Intel Core", ram: "2 GB", gpu: "Dédié", dx: "11", storage: "300 MB" },
    rec: { os: "Win 11", cpu: "Intel Core", ram: "4 GB", gpu: "GTX 660", dx: "11", storage: "300 MB" },
    dl: "https://lockr.so/u5m7o69h"
  },
  { 
    id: 'chained-together', title: "Chained Together", image: "/images/chained-together.jpg", cat: "Coop", mode: "Multi",
    desc: "Enchaîné à vos amis, grimpez hors de l'enfer.",
    min: { os: "Win 10", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "6 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "6 GB" },
    dl: "https://lockr.so/W3ailhYr"
  },
  { 
    id: 'phasmophobia', title: "Phasmophobia", image: "/images/phasmophobia.jpg", cat: "Horreur / Coop", mode: "Multi",
    desc: "Identifiez le fantôme avant qu'il ne vous chasse.",
    min: { os: "Win 10", cpu: "i5-4590", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "21 GB" },
    rec: { os: "Win 11", cpu: "i7-6700", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "21 GB" },
    dl: "https://lockr.so/YEfWZGhM"
  },
  { 
    id: 'resident-evil-4-remake', title: "Resident Evil 4", image: "/images/resident-evil-4.jpg", cat: "Horreur / Action", mode: "Solo",
    desc: "Leon S. Kennedy doit sauver la fille du président dans un village européen terrifiant.",
    min: { os: "Win 10", cpu: "i5-7500", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "60 GB" },
    dl: "https://lockr.so/reH8cpnA"
  },
  { 
    id: 'ghost-of-tsushima', title: "Ghost of Tsushima", image: "/images/ghost-tsushima.jpg", cat: "Action", mode: "Solo / Multi",
    desc: "En pleine invasion mongole, devenez le Fantôme pour libérer l'île de Tsushima.",
    min: { os: "Win 10", cpu: "i3-7100", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "75 GB" },
    rec: { os: "Win 11", cpu: "i5-8600", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "75 GB" },
    dl: "https://lockr.so/uZBa8U2E"
  },
  { 
    id: 'ark-survival-ascended', title: "ARK: Ascended", image: "/images/ark-ascended.jpg", cat: "Survie", mode: "Solo / Multi",
    desc: "Réveillez-vous sur une île mystérieuse et survivez face aux dinosaures dans ce remake sous Unreal Engine 5.",
    min: { os: "Win 10", cpu: "i7-6800K", ram: "16 GB", gpu: "RTX 2080", dx: "12", storage: "80 GB SSD" },
    rec: { os: "Win 11", cpu: "i5-12600K", ram: "32 GB", gpu: "RTX 3080", dx: "12", storage: "80 GB SSD" },
    dl: "https://lockr.so/mPXJDvqQ"
  },
  { 
    id: 'tekken-8', title: "Tekken 8", image: "/images/tekken8.jpg", cat: "Combat", mode: "Solo / Multi",
    desc: "Préparez-vous pour le prochain chapitre de la lignée Mishima avec des combats plus destructeurs que jamais.",
    min: { os: "Win 10", cpu: "i5-6600K", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "100 GB" },
    rec: { os: "Win 11", cpu: "i7-7700K", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "100 GB" },
    dl: "https://lockr.so/s9gdPmPI"
  },
  { 
    id: 'ready-or-not', title: "Ready or Not", image: "/images/ready-or-not.jpg", cat: "Simulation / FPS", mode: "Solo / Multi",
    desc: "Un FPS tactique intense où vous incarnez une unité d'élite du SWAT dans des situations critiques.",
    min: { os: "Win 10", cpu: "i3-4130", ram: "8 GB", gpu: "GTX 960", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-7600K", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/TrDuYbf1"
  },
  { 
    id: 'euro-truck-2', title: "Euro Truck Simulator 2", image: "/images/ets2.jpg", cat: "Simulation", mode: "Solo / Multi",
    desc: "Devenez le roi de la route en livrant des cargaisons importantes à travers toute l'Europe.",
    min: { os: "Win 10", cpu: "Dual Core 2.4 GHz", ram: "4 GB", gpu: "GTS 450", dx: "11", storage: "12 GB" },
    rec: { os: "Win 11", cpu: "Quad Core 3.0 GHz", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "12 GB" },
    dl: "https://lockr.so/zyf1LYqA"
  },
  { 
    id: 'content-warning', title: "Content Warning", image: "/images/content-warning.jpg", cat: "Coop / Horreur", mode: "Multi",
    desc: "Filmez vos amis en train de faire des trucs flippants pour devenir viral sur SpookTube.",
    min: { os: "Win 10", cpu: "i5 @ 2.5 GHz", ram: "8 GB", gpu: "GTX 1050 ti", dx: "11", storage: "4 GB" },
    rec: { os: "Win 11", cpu: "i5 @ 3.0 GHz", ram: "16 GB", gpu: "GTX 1660", dx: "11", storage: "4 GB" },
    dl: "https://lockr.so/1j9toeGi"
  },
  { 
    id: 'assassins-creed-mirage', title: "Assassin's Creed Mirage", image: "/images/ac-mirage.jpg", cat: "Action", mode: "Solo",
    desc: "Suivez Basim dans le Bagdad du IXe siècle pour devenir un Maître Assassin.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "40 GB" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "40 GB" },
    dl: "https://lockr.so/C6twgzyR"
  },
  { 
    id: 'spider-man-remastered', title: "Spider-Man Remastered", image: "/images/spiderman.jpg", cat: "Action / Open World", mode: "Solo",
    desc: "Vigile urbain de New York, Peter Parker combat le crime tout en jonglant avec sa vie personnelle.",
    min: { os: "Win 10", cpu: "i3-4160", ram: "8 GB", gpu: "GTX 950", dx: "12", storage: "75 GB" },
    rec: { os: "Win 11", cpu: "i5-4670", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "75 GB SSD" },
    dl: "https://lockr.so/MyHMXlNy"
  },
  { 
    id: 'f1-22', title: "F1 22", image: "/images/f122.jpg", cat: "Course / Sport", mode: "Solo / Multi",
    desc: "Devenez l'un des 20 pilotes officiels et vivez l'immersion totale du championnat du monde de Formule 1.",
    min: { os: "Win 10", cpu: "i3-2130", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "100 GB" },
    rec: { os: "Win 11", cpu: "i5-9600K", ram: "16 GB", gpu: "RTX 3070", dx: "12", storage: "100 GB" },
    dl: "https://lockr.so/Hw7Z8YVN"
  },
  { 
    id: 'the-sims-4', title: "The Sims 4 + All DLC", image: "/images/sims4.jpg", cat: "Simulation", mode: "Solo",
    desc: "Créez et contrôlez des personnages dans un monde virtuel sans règles.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "GTX 650", dx: "11", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "60 GB" },
    dl: "https://lockr.so/65TFZDZP"
  },
  { 
    id: 'outer-wilds', title: "Outer Wilds", image: "/images/outer-wilds.jpg", cat: "Aventure", mode: "Solo",
    desc: "Un mystère en monde ouvert sur un système solaire piégé dans une boucle temporelle infinie.",
    min: { os: "Win 10", cpu: "i5-2300", ram: "4 GB", gpu: "GTX 560", dx: "11", storage: "8 GB" },
    rec: { os: "Win 11", cpu: "i5-8400", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "8 GB" },
    dl: "https://lockr.so/LvJv0ONC"
  },
  { 
    id: 'civilization-vi', title: "Civilization VI", image: "/images/civ6.jpg", cat: "Stratégie", mode: "Solo / Multi",
    desc: "Bâtissez un empire capable de résister au passage du temps, de l'âge de pierre à l'âge de l'information.",
    min: { os: "Win 10", cpu: "i3 @ 2.5 GHz", ram: "4 GB", gpu: "GTX 450", dx: "11", storage: "12 GB" },
    rec: { os: "Win 11", cpu: "i5 @ 3.0 GHz", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "12 GB" },
    dl: "https://lockr.so/rO2pApP0"
  },
  { 
    id: 'sea-of-thieves', title: "Sea of Thieves", image: "/images/sea-of-thieves.jpg", cat: "Aventure", mode: "Multi",
    desc: "Devenez le pirate de vos rêves dans ce monde ouvert rempli de trésors et de dangers.",
    min: { os: "Win 10", cpu: "i3-4130", ram: "4 GB", gpu: "GTX 650", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-4690", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/jaN4fZOR"
  },
  { 
    id: 'horizon-forbidden-west', title: "Horizon Forbidden West", image: "/images/hfw.jpg", cat: "Action / RPG", mode: "Solo",
    desc: "Explorez des terres lointaines, affrontez des machines plus imposantes et rencontrez de nouvelles tribus.",
    min: { os: "Win 10", cpu: "i3-8100", ram: "16 GB", gpu: "GTX 1650", dx: "12", storage: "150 GB SSD" },
    rec: { os: "Win 11", cpu: "i5-8600", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "150 GB SSD" },
    dl: "https://lockr.so/Nt4QUsuB"
  },
  { 
    id: 'uncharted-legacy', title: "Uncharted: Legacy of Thieves", image: "/images/uncharted.jpg", cat: "Aventure", mode: "Solo",
    desc: "Incarnez Nathan Drake et Chloe Frazer dans leurs propres aventures à la recherche de trésors perdus.",
    min: { os: "Win 10", cpu: "i5-4430", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "126 GB" },
    rec: { os: "Win 11", cpu: "i7-4770", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "126 GB SSD" },
    dl: "https://lockr.so/rW2gREHE"
  },
  { 
    id: 'assetto-corsa-competizione', title: "Assetto Corsa Comp.", image: "/images/acc.jpg", cat: "Simulation / Course", mode: "Solo / Multi",
    desc: "La référence absolue de la simulation GT3 avec un réalisme époustouflant.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "4 GB", gpu: "GTX 460", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/u4qUWHbQ"
  },
  { 
    id: 'sons-of-the-forest', title: "Sons of the Forest", image: "/images/soft.jpg", cat: "Survie / Horreur", mode: "Solo / Multi",
    desc: "Envoyé pour retrouver un milliardaire sur une île isolée, vous vous retrouvez face à des cannibales.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "12 GB", gpu: "GTX 1060", dx: "11", storage: "20 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-8700K", ram: "16 GB", gpu: "RTX 2060", dx: "11", storage: "20 GB SSD" },
    dl: "https://lockr.so/tmM240Rl"
  },
  { 
    id: 'doom-eternal', title: "DOOM Eternal", image: "/images/doom.jpg", cat: "FPS", mode: "Solo / Multi",
    desc: "Les armées de l'enfer ont envahi la Terre. Devenez le Slayer et massacrez des démons.",
    min: { os: "Win 10", cpu: "i5-3570", ram: "8 GB", gpu: "GTX 1050Ti", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i7-6700K", ram: "8 GB", gpu: "GTX 1080", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/SbS0DuTe"
  },
  { 
    id: 'balatro', title: "Balatro", image: "/images/balatro.jpg", cat: "Poker", mode: "Solo",
    desc: "Le roguelike de poker terriblement addictif où vous créez des combos déments.",
    min: { os: "Win 10", cpu: "Intel Core", ram: "1 GB", gpu: "Dédié", dx: "11", storage: "150 MB" },
    rec: { os: "Win 11", cpu: "Intel Core", ram: "2 GB", gpu: "Dédié", dx: "11", storage: "150 MB" },
    dl: "https://lockr.so/ccENw7eA"
  },
  { 
    id: 'cuphead', title: "Cuphead", image: "/images/cuphead.jpg", cat: "Aventure", mode: "Solo / Multi",
    desc: "Un jeu d'action classique inspiré des dessins animés des années 30.",
    min: { os: "Win 10", cpu: "Dual Core", ram: "3 GB", gpu: "9600 GT", dx: "10", storage: "4 GB" },
    rec: { os: "Win 11", cpu: "i3", ram: "4 GB", gpu: "GTX 660", dx: "11", storage: "4 GB" },
    dl: "https://lockr.so/9u6K8jBe"
  },
  { 
    id: 'cities-skylines-2', title: "Cities: Skylines II", image: "/images/cities2.jpg", cat: "Simulation", mode: "Solo",
    desc: "Bâtissez une ville à partir de rien et transformez-la en une métropole prospère.",
    min: { os: "Win 10", cpu: "i7-6700K", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i5-12600K", ram: "16 GB", gpu: "RTX 3080", dx: "11", storage: "60 GB" },
    dl: "https://lockr.so/JP2WicPs"
  },
  { 
    id: 'lies-of-p', title: "Lies of P", image: "/images/lies-of-p.jpg", cat: "Action", mode: "Solo",
    desc: "Une version sombre de Pinocchio où vous devez vous frayer un chemin à travers une ville en ruine.",
    min: { os: "Win 10", cpu: "i3-6300", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-12600", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "50 GB" },
    dl: "https://lockr.so/q9dfR0al"
  },
  { 
    id: 'detroit-become-human', title: "Detroit: Become Human", image: "/images/detroit.jpg", cat: "Sci-Fi", mode: "Solo",
    desc: "Prenez en main le destin de trois androïdes dans un futur où les machines sont devenues conscientes.",
    min: { os: "Win 10", cpu: "i5-2300", ram: "8 GB", gpu: "GTX 780", dx: "11", storage: "55 GB" },
    rec: { os: "Win 11", cpu: "i5-6600", ram: "12 GB", gpu: "GTX 1060", dx: "11", storage: "55 GB" },
    dl: "https://lockr.so/cFMvqfTx"
  },
  { 
    id: 'final-fantasy-xvi', title: "Final Fantasy XVI", image: "/images/ff16.jpg", cat: "RPG", mode: "Solo",
    desc: "Une épopée fantastique sombre où le destin du monde repose sur les épaules de Clive Rosfield.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 1070", dx: "12", storage: "170 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-10700", ram: "16 GB", gpu: "RTX 3080", dx: "12", storage: "170 GB SSD" },
    dl: "https://lockr.so/C2KO5gP3"
  },
  { 
    id: 'subnautica', title: "Subnautica", image: "/images/subnautica.jpg", cat: "Survie", mode: "Solo",
    desc: "Plongez dans les profondeurs d'un monde océanique extraterrestre et tentez de survivre.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "Intel HD 4600", dx: "11", storage: "20 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "20 GB" },
    dl: "#"
  },
  { 
    id: 'the-forest', title: "The Forest", image: "/images/the-forest.jpg", cat: "Survie / Horreur", mode: "Solo / Multi",
    desc: "Seul survivant d'un crash d'avion, vous devez construire, explorer et survivre face à des mutants.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "GTX 560", dx: "9", storage: "5 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "4 GB", gpu: "GTX 970", dx: "11", storage: "5 GB" },
    dl: "https://lockr.so/U5Gy7jQx"
  },
  { 
    id: 'beamng-drive', title: "BeamNG.drive", image: "/images/beamng.jpg", cat: "Simulation", mode: "Solo",
    desc: "Le simulateur de physique automobile le plus avancé, connu pour ses crashs ultra-réalistes.",
    min: { os: "Win 10", cpu: "i3", ram: "8 GB", gpu: "GTX 550 Ti", dx: "11", storage: "30 GB" },
    rec: { os: "Win 11", cpu: "i7", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "30 GB" },
    dl: "https://lockr.so/l6oYD1FO"
  },
  { 
    id: 'farming-simulator-22', title: "Farming Simulator 22", image: "/images/fs22.jpg", cat: "Simulation", mode: "Solo / Multi",
    desc: "Gérez votre propre exploitation agricole avec des machines réelles et des cycles de saisons.",
    min: { os: "Win 10", cpu: "i5-3330", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "35 GB" },
    rec: { os: "Win 11", cpu: "i5-5675C", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "35 GB" },
    dl: "https://lockr.so/NC9i4AVS"
  },
  { 
    id: 'titanfall-2', title: "Titanfall 2", image: "/images/titanfall2.jpg", cat: "FPS / Sci-Fi", mode: "Solo / Multi",
    desc: "Liez-vous à un Titan et vivez l'une des meilleures campagnes solo de l'histoire du FPS.",
    min: { os: "Win 10", cpu: "i3-3600t", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "45 GB" },
    rec: { os: "Win 11", cpu: "i5-6600", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "45 GB" },
    dl: "https://lockr.so/m8SStMFK"
  },
  { 
    id: 'resident-evil-village', title: "Resident Evil Village", image: "/images/revillage.jpg", cat: "Horreur", mode: "Solo",
    desc: "Survivez dans un village européen hanté par des créatures cauchemardesques et la famille Dimitrescu.",
    min: { os: "Win 10", cpu: "i5-7500", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "28 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "28 GB" },
    dl: "https://lockr.so/QtlLYU2C"
  },
  { 
    id: 'amnesia-the-bunker', title: "Amnesia: The Bunker", image: "/images/amnesia-bunker.jpg", cat: "Horreur", mode: "Solo",
    desc: "Un soldat français piégé dans un bunker de la 1ère Guerre mondiale doit échapper à une bête traqueuse.",
    min: { os: "Win 10", cpu: "i3", ram: "4 GB", gpu: "GTX 460", dx: "11", storage: "35 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "35 GB" },
    dl: "https://lockr.so/A1vxd8ym"
  },
  { 
    id: 'dead-by-daylight', title: "Dead by Daylight", image: "/images/dbd.jpg", cat: "Horreur / Multi", mode: "Multi",
    desc: "Un jeu d'horreur asymétrique 4 contre 1 où un tueur traque quatre survivants.",
    min: { os: "Win 10", cpu: "i3-4170", ram: "8 GB", gpu: "GTX 460", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/pRqHOv3H"
  },
  { 
    id: 'days-gone', title: "Days Gone", image: "/images/daysgone.jpg", cat: "Action / Open World", mode: "Solo",
    desc: "Incarnez Deacon St. John et survivez à travers le désert de l'Oregon face à des hordes de mutants.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 780", dx: "11", storage: "70 GB" },
    rec: { os: "Win 11", cpu: "i7-4770K", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "70 GB SSD" },
    dl: "https://lockr.so/3WF7lLtX"
  },
  { 
    id: 'assassins-creed-odyssey', title: "Assassin's creed Odyssey", image: "/images/odyssey.jpg", cat: "Aventure / RPG", mode: "Solo",
    desc: "Écrivez votre propre odyssée épique pour devenir un héros grec légendaire.",
    min: { os: "Win 10", cpu: "i5-2400", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "46 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "46 GB" },
    dl: "https://lockr.so/uyhMUr8v"
  },
  { 
    id: 'mafia-definitive-edition', title: "Mafia: Def. Edition", image: "/images/mafia.jpg", cat: "Action / Aventure", mode: "Solo",
    desc: "Grimpez les échelons de la mafia pendant la Prohibition dans ce remake intégral.",
    min: { os: "Win 10", cpu: "i5-2550K", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "16 GB", gpu: "GTX 1080", dx: "11", storage: "50 GB" },
    dl: "https://lockr.so/f7HzvMMS"
  },
  { 
    id: 'need-for-speed-heat', title: "NFS Heat", image: "/images/nfsheat.jpg", cat: "Course", mode: "Solo / Multi",
    desc: "Le monde est votre toile. Prouvez que vous avez ce qu'il faut pour gagner le Grand.",
    min: { os: "Win 10", cpu: "i5-8600", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "50 GB" },
    dl: "https://lockr.so/zjVwQxHU"
  },
  { 
    id: 'vampire-survivors', title: "Vampire Survivors", image: "/images/vampire.jpg", cat: "Indie / Roguelike", mode: "Solo",
    desc: "Fauchez des milliers de créatures de la nuit et survivez jusqu'à l'aube.",
    min: { os: "Win 10", cpu: "Pentium", ram: "1 GB", gpu: "Dédié", dx: "11", storage: "250 MB" },
    rec: { os: "Win 11", cpu: "Dual Core", ram: "2 GB", gpu: "Dédié", dx: "11", storage: "250 MB" },
    dl: "https://lockr.so/Or0E0UJS"
  },
  { 
    id: 'space-marine-2', title: "Warhammer 40k: Space Marine 2", image: "/images/sm2.jpg", cat: "Action / FPS", mode: "Solo / Multi",
    desc: "Incarnez un Space Marine, un guerrier surhumain, et massacrez des hordes de Tyranides.",
    min: { os: "Win 10", cpu: "i5-8600K", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "75 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "16 GB", gpu: "RTX 3070", dx: "12", storage: "75 GB SSD" },
    dl: "https://lockr.so/LnP7LmuI"
  },
  { 
    id: 'hitman-3', title: "Hitman 3", image: "/images/hitman3.jpg", cat: "Action / Infiltration", mode: "Solo",
    desc: "L'Agent 47 revient pour conclure la trilogie World of Assassination dans des lieux exotiques.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 660", dx: "12", storage: "80 GB" },
    rec: { os: "Win 11", cpu: "i7-4790", ram: "16 GB", gpu: "GTX 1070", dx: "12", storage: "80 GB" },
    dl: "https://lockr.so/dBAi1T4V"
  },
  { 
    id: 'ghostwire-tokyo', title: "Ghostwire: Tokyo", image: "/images/ghostwire.jpg", cat: "Aventure / Fantaisie", mode: "Solo",
    desc: "Affrontez des forces surnaturelles dans une ville de Tokyo dont la population a disparu.",
    min: { os: "Win 10", cpu: "i7-4770K", ram: "12 GB", gpu: "GTX 1060", dx: "12", storage: "40 GB" },
    rec: { os: "Win 11", cpu: "i7-6700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "40 GB" },
    dl: "https://lockr.so/lPrVliES"
  },
  { 
    id: 'sniper-elite-4', title: "Sniper Elite 4", image: "/images/sniper4.jpg", cat: "FPS / Tactique", mode: "Solo / Multi",
    desc: "Éliminez des cibles nazies avec une physique de tir ultra-réaliste en France occupée.",
    min: { os: "Win 10", cpu: "i3-8100", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "85 GB" },
    rec: { os: "Win 11", cpu: "i5-8400", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "85 GB" },
    dl: "https://lockr.so/bU3fERLy"
  },
  { 
    id: 'valheim', title: "Valheim", image: "/images/valheim.jpg", cat: "Survie / Coop", mode: "Solo / Multi",
    desc: "Un jeu de survie brutal dans un purgatoire généré de manière procédurale inspiré de la culture viking.",
    min: { os: "Win 10", cpu: "Dual Core 2.6 GHz", ram: "8 GB", gpu: "GTX 950", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "i5 3 GHz", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "1 GB" },
    dl: "https://lockr.so/QtlLYU2C"
  },
  { 
    id: 'raft', title: "Raft", image: "/images/raft.jpg", cat: "Survie", mode: "Solo / Multi",
    desc: "Survivez sur un petit radeau perdu au milieu d'un océan infini rempli de requins.",
    min: { os: "Win 10", cpu: "i5 2.6 GHz", ram: "4 GB", gpu: "GTX 700", dx: "11", storage: "10 GB" },
    rec: { os: "Win 11", cpu: "i7 3.0 GHz", ram: "8 GB", gpu: "GTX 1050", dx: "11", storage: "10 GB" },
    dl: "https://lockr.so/ZKKtMWSy"
  },
  { 
    id: 'grounded', title: "Grounded", image: "/images/grounded.jpg", cat: "Survie / Aventure", mode: "Solo / Multi",
    desc: "Vous avez été réduit à la taille d'une fourmi. Survivez aux dangers du jardin.",
    min: { os: "Win 10", cpu: "i3-3225", ram: "4 GB", gpu: "GTX 650 Ti", dx: "11", storage: "8 GB" },
    rec: { os: "Win 11", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "8 GB" },
    dl: "https://lockr.so/9xytczsS"
  },
  { 
    id: 'football-manager-23', title: "Football Manager 2023", image: "/images/fm23.jpg", cat: "Gestion / Sport", mode: "Solo",
    desc: "Prenez les commandes des plus grands clubs de foot et menez-les vers la gloire.",
    min: { os: "Win 10", cpu: "i3-530", ram: "4 GB", gpu: "GTX 960M", dx: "11", storage: "7 GB" },
    rec: { os: "Win 11", cpu: "i5-9600", ram: "8 GB", gpu: "RTX 2060", dx: "11", storage: "7 GB" },
    dl: "https://lockr.so/GPX1LUMr"
  },
  { 
    id: 'tropico-6', title: "Tropico 6", image: "/images/tropico6.jpg", cat: "Gestion / Stratégie", mode: "Solo / Multi",
    desc: "Devenez El Presidente et gérez votre archipel avec une main de fer ou un esprit démocratique.",
    min: { os: "Win 10", cpu: "i3-2000", ram: "8 GB", gpu: "GTX 750", dx: "11", storage: "16 GB" },
    rec: { os: "Win 11", cpu: "i5-4000", ram: "16 GB", gpu: "GTX 960", dx: "11", storage: "16 GB" },
    dl: "https://lockr.so/vuVuV2Vt"
  },
  { 
    id: 'powerwash-sim', title: "PowerWash Simulator", image: "/images/powerwash.jpg", cat: "Simulation", mode: "Solo / Multi",
    desc: "Nettoyez tout au jet haute pression. C'est bizarrement l'un des jeux les plus satisfaisants au monde.",
    min: { os: "Win 10", cpu: "i5-9400", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "6 GB" },
    rec: { os: "Win 11", cpu: "i7-10700", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "6 GB" },
    dl: "https://lockr.so/0JMGYKuw"
  },
  { 
    id: 'goat-simulator-3', title: "Goat Simulator 3", image: "/images/goat3.jpg", cat: "Simulation / Action", mode: "Solo / Multi",
    desc: "Incarnez une chèvre et semez le chaos total dans un monde ouvert sans aucune règle.",
    min: { os: "Win 10", cpu: "i5-4690", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "11", storage: "12 GB" },
    rec: { os: "Win 11", cpu: "i5-9400", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "12 GB" },
    dl: "https://lockr.so/kN1kshGa"
  },
  { 
    id: 'the-last-of-us-p1', title: "The Last of Us Part I", image: "/images/tlou1.jpg", cat: "Action / Aventure", mode: "Solo",
    desc: "Vivez l'histoire poignante de Joel et Ellie dans un monde post-apocalyptique dévasté.",
    min: { os: "Win 10", cpu: "i7-4770K", ram: "16 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "100 GB SSD" },
    rec: { os: "Win 11", cpu: "i5-12600K", ram: "32 GB", gpu: "RTX 3060", dx: "12", storage: "100 GB SSD" },
    dl: "https://lockr.so/zKhA3U66"
  },
  { 
    id: 'returnal', title: "Returnal", image: "/images/returnal.jpg", cat: "Sci-Fi / Roguelike", mode: "Solo / Multi",
    desc: "Brisez le cycle sur une planète extraterrestre qui change à chaque mort dans ce shooter intense.",
    min: { os: "Win 10", cpu: "i5-6400", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "60 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-8700", ram: "32 GB", gpu: "RTX 3080", dx: "12", storage: "60 GB SSD" },
    dl: "https://lockr.so/aVNT9vqb"
  },
  { 
    id: 'monster-hunter-rise', title: "Monster Hunter Rise", image: "/images/mhrise.jpg", cat: "Action / RPG", mode: "Solo / Multi",
    desc: "Traquez des monstres géants dans des environnements inspirés du folklore japonais.",
    min: { os: "Win 10", cpu: "i3-4130", ram: "8 GB", gpu: "GTX 1030", dx: "12", storage: "23 GB" },
    rec: { os: "Win 11", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 1060", dx: "12", storage: "23 GB" },
    dl: "https://lockr.so/b4ppByOf"
  },
  { 
    id: 'kcd-2', title: "Kingdom Come: Deliverance II", image: "/images/kcd2.jpg", cat: "RPG / Médiéval", mode: "Solo",
    desc: "L'épopée de Henry continue dans une Bohême médiévale ultra-réaliste.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 1660", dx: "12", storage: "80 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-12700", ram: "32 GB", gpu: "RTX 3070", dx: "12", storage: "80 GB SSD" },
    dl: "https://lockr.so/ppaF3eey"
  },
  { 
    id: 'stalker-2', title: "S.T.A.L.K.E.R. 2", image: "/images/stalker2.jpg", cat: "FPS / Survie", mode: "Solo",
    desc: "Explorez la Zone d'exclusion de Tchernobyl, remplie d'anomalies et de mutants.",
    min: { os: "Win 10", cpu: "i7-7700K", ram: "16 GB", gpu: "GTX 1060", dx: "12", storage: "150 GB SSD" },
    rec: { os: "Win 11", cpu: "i7-10700K", ram: "32 GB", gpu: "RTX 3070 Ti", dx: "12", storage: "150 GB SSD" },
    dl: "https://lockr.so/ZlCNkRbH"
  },
  { 
    id: 'far-cry-5', title: "Far Cry 5", image: "/images/fc5.jpg", cat: "FPS / Action", mode: "Solo / Multi",
    desc: "Libérez Hope County d'un culte fanatique dirigé par Joseph Seed.",
    min: { os: "Win 10", cpu: "i5-2400", ram: "8 GB", gpu: "GTX 670", dx: "11", storage: "40 GB" },
    rec: { os: "Win 11", cpu: "i7-4770", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "40 GB" },
    dl: "#"
  },
  { 
    id: 'far-cry-6', title: "Far Cry 6", image: "/images/fc6.jpg", cat: "FPS / Action", mode: "Solo / Multi",
    desc: "Rejoignez la guérilla moderne pour libérer l'île de Yara du dictateur Anton Castillo.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-7700", ram: "16 GB", gpu: "RTX 2070", dx: "12", storage: "60 GB" },
    dl: "#"
  },
  { 
    id: 're-2', title: "Resident Evil 2", image: "/images/re2.jpg", cat: "Horreur", mode: "Solo",
    desc: "Le remake magistral du cauchemar à Raccoon City avec Leon et Claire.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "26 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "26 GB" },
    dl: "#"
  },
  { 
    id: 're-3', title: "Resident Evil 3", image: "/images/re3.jpg", cat: "Horreur / Action", mode: "Solo",
    desc: "Échappez à l'invincible Nemesis dans les rues de Raccoon City.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "45 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "45 GB" },
    dl: "#"
  },
  { 
    id: 're-7-biohazard', title: "Resident Evil 7", image: "/images/re7.jpg", cat: "Horreur", mode: "Solo",
    desc: "Une expérience d'horreur pure à la première personne dans une Louisiane lugubre.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 760", dx: "11", storage: "24 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "24 GB" },
    dl: "#"
  },
  { 
    id: 'planet-zoo', title: "Planet Zoo", image: "/images/pzoo.jpg", cat: "Simulation / Gestion", mode: "Solo",
    desc: "Créez le zoo le plus incroyable en gérant le bien-être animal et les visiteurs.",
    min: { os: "Win 10", cpu: "i5-2500", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "16 GB" },
    rec: { os: "Win 11", cpu: "i7-4770", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "16 GB" },
    dl: "#"
  },
  { 
    id: 'planet-coaster', title: "Planet Coaster", image: "/images/pcoaster.jpg", cat: "Simulation / Gestion", mode: "Solo",
    desc: "Construisez vos propres parcs d'attractions et montagnes russes de folie.",
    min: { os: "Win 10", cpu: "i5-2300", ram: "8 GB", gpu: "GTX 560", dx: "11", storage: "8 GB" },
    rec: { os: "Win 11", cpu: "i7-4770", ram: "12 GB", gpu: "GTX 980", dx: "11", storage: "8 GB" },
    dl: "#"
  },
  { 
    id: 'rimworld', title: "RimWorld", image: "/images/rimworld.jpg", cat: "Simulation / Indie", mode: "Solo",
    desc: "Gérez une colonie sur une planète lointaine. Chaque partie est une histoire unique.",
    min: { os: "Win 10", cpu: "Core 2 Duo", ram: "4 GB", gpu: "Intel HD", dx: "11", storage: "1 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "Dédié", dx: "11", storage: "1 GB" },
    dl: "#"
  },

  // --- ACTION / RPG ---
  { 
    id: 'sekiro', title: "Sekiro: Shadows Die Twice", image: "/images/sekiro.jpg", cat: "Action / RPG", mode: "Solo",
    desc: "Devenez le Loup à un bras et vengez votre maître dans le Japon féodal.",
    min: { os: "Win 10", cpu: "i3-2100", ram: "4 GB", gpu: "GTX 760", dx: "11", storage: "25 GB" },
    rec: { os: "Win 11", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "25 GB" },
    dl: "#"
  },
  { 
    id: 'dark-souls-3', title: "Dark Souls III", image: "/images/ds3.jpg", cat: "Action / RPG", mode: "Solo / Multi",
    desc: "Le dernier chapitre de la saga légendaire. Un défi de chaque instant.",
    min: { os: "Win 10", cpu: "i3-2100", ram: "4 GB", gpu: "GTX 750 Ti", dx: "11", storage: "25 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "25 GB" },
    dl: "#"
  },
  { 
    id: 'dragon-age-veilguard', title: "Dragon Age: The Veilguard", image: "/images/dav.jpg", cat: "RPG", mode: "Solo",
    desc: "Entrez dans le monde de Thédas, une terre sauvage dont le destin ne tient qu'à un fil.",
    min: { os: "Win 10", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 970", dx: "12", storage: "100 GB SSD" },
    rec: { os: "Win 11", cpu: "i9-9900K", ram: "16 GB", gpu: "RTX 2080", dx: "12", storage: "100 GB SSD" },
    dl: "#"
  },
  // --- SAGA CALL OF DUTY ---
  { 
    id: 'cod-mw3-remaster', title: "CoD: Modern Warfare III", image: "/images/mw3.jpg", cat: "FPS", mode: "Solo / Multi",
    desc: "La suite directe de Modern Warfare II. Le capitaine Price affronte la menace Makarov.",
    min: { os: "Win 10", cpu: "i5-6600", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "149 GB" },
    rec: { os: "Win 11", cpu: "i7-6700K", ram: "16 GB", gpu: "RTX 3060", dx: "12", storage: "149 GB" },
    dl: "#"
  },
  { 
    id: 'cod-vanguard', title: "Call of Duty: Vanguard", image: "/images/vanguard.jpg", cat: "FPS", mode: "Solo / Multi",
    desc: "Vivez les moments clés de la Seconde Guerre mondiale sur tous les fronts.",
    min: { os: "Win 10", cpu: "i3-4340", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "61 GB" },
    rec: { os: "Win 11", cpu: "i5-2500K", ram: "12 GB", gpu: "GTX 1060", dx: "12", storage: "61 GB" },
    dl: "#"
  },
  { 
    id: 'cod-black-ops-cold-war', title: "CoD: Black Ops Cold War", image: "/images/coldwar.jpg", cat: "FPS", mode: "Solo / Multi",
    desc: "Plongez dans les profondeurs de la guerre froide au début des années 80.",
    min: { os: "Win 10", cpu: "i3-4340", ram: "8 GB", gpu: "GTX 670", dx: "12", storage: "175 GB" },
    rec: { os: "Win 11", cpu: "i5-2500K", ram: "12 GB", gpu: "GTX 1060", dx: "12", storage: "175 GB" },
    dl: "#"
  },

  // --- STRATÉGIE & GESTION ---
  { 
    id: 'anno-1800', title: "Anno 1800", image: "/images/anno1800.jpg", cat: "Stratégie / Gestion", mode: "Solo / Multi",
    desc: "Menez la révolution industrielle dans ce city-builder complexe et magnifique.",
    min: { os: "Win 10", cpu: "i5-2500K", ram: "8 GB", gpu: "GTX 660", dx: "11", storage: "60 GB" },
    rec: { os: "Win 11", cpu: "i7-3770", ram: "8 GB", gpu: "GTX 970", dx: "11", storage: "60 GB" },
    dl: "#"
  },
  { 
    id: 'total-war-warhammer-3', title: "Total War: Warhammer III", image: "/images/tww3.jpg", cat: "Stratégie", mode: "Solo / Multi",
    desc: "La conclusion épique de la trilogie Total War dans l'univers de Warhammer Fantasy.",
    min: { os: "Win 10", cpu: "i3", ram: "6 GB", gpu: "GTX 900", dx: "11", storage: "120 GB" },
    rec: { os: "Win 11", cpu: "i5", ram: "8 GB", gpu: "GTX 1660 Ti", dx: "11", storage: "120 GB" },
    dl: "#"
  },
  { 
    id: 'stellaris', title: "Stellaris", image: "/images/stellaris.jpg", cat: "Stratégie / Sci-Fi", mode: "Solo / Multi",
    desc: "Explorez une galaxie pleine de merveilles dans ce grand strategy game spatial.",
    min: { os: "Win 10", cpu: "i3-530", ram: "4 GB", gpu: "GTX 460", dx: "9", storage: "10 GB" },
    rec: { os: "Win 11", cpu: "i5-3570K", ram: "8 GB", gpu: "GTX 760", dx: "9", storage: "10 GB" },
    dl: "#"
  },

  // --- SIMULATION & SPORT ---
  { 
    id: 'fc-25', title: "EA SPORTS FC 25", image: "/images/fc25.jpg", cat: "Sport", mode: "Solo / Multi",
    desc: "Le nouveau chapitre du jeu de football le plus populaire au monde.",
    min: { os: "Win 10", cpu: "i5-6600K", ram: "8 GB", gpu: "GTX 1050 Ti", dx: "12", storage: "100 GB" },
    rec: { os: "Win 11", cpu: "i7-6700", ram: "12 GB", gpu: "GTX 1660", dx: "12", storage: "100 GB" },
    dl: "#"
  },
  { 
    id: 'nba-2k25', title: "NBA 2K25", image: "/images/nba2k25.jpg", cat: "Sport", mode: "Solo / Multi",
    desc: "Dominez le terrain dans l'expérience de basket-ball la plus réaliste.",
    min: { os: "Win 10", cpu: "i3-9100", ram: "8 GB", gpu: "GTX 960", dx: "12", storage: "150 GB" },
    rec: { os: "Win 11", cpu: "i5-10600", ram: "16 GB", gpu: "RTX 2060", dx: "12", storage: "150 GB" },
    dl: "#"
  },
  { 
    id: 'microsoft-flight-sim', title: "Flight Simulator 2024", image: "/images/mfs.jpg", cat: "Simulation", mode: "Solo / Multi",
    desc: "Parcourez le monde entier avec une précision graphique sans précédent.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 770", dx: "11", storage: "150 GB" },
    rec: { os: "Win 11", cpu: "i5-8400", ram: "16 GB", gpu: "GTX 1070", dx: "11", storage: "150 GB" },
    dl: "#"
  },

  // --- ACTION / AVENTURE / RPG ---
  { 
    id: 'ghost-recon-breakpoint', title: "Ghost Recon Breakpoint", image: "/images/breakpoint.jpg", cat: "Action / FPS", mode: "Solo / Multi",
    desc: "Devenez un Ghost et combattez une unité renégate sur l'archipel d'Auroa.",
    min: { os: "Win 10", cpu: "i5-4460", ram: "8 GB", gpu: "GTX 960", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i7-6700K", ram: "8 GB", gpu: "GTX 1080", dx: "11", storage: "50 GB" },
    dl: "#"
  },
  { 
    id: 'watch-dogs-2', title: "Watch Dogs 2", image: "/images/wd2.jpg", cat: "Action / Sci-Fi", mode: "Solo / Multi",
    desc: "Incarnez Marcus Holloway dans la baie de San Francisco, le berceau de la technologie.",
    min: { os: "Win 10", cpu: "i5-2400S", ram: "6 GB", gpu: "GTX 660", dx: "11", storage: "50 GB" },
    rec: { os: "Win 11", cpu: "i5-3470", ram: "8 GB", gpu: "GTX 780", dx: "11", storage: "50 GB" },
    dl: "#"
  },
  { 
    id: 'outer-worlds', title: "The Outer Worlds", image: "/images/outerworlds.jpg", cat: "RPG / Sci-Fi", mode: "Solo",
    desc: "Un RPG spatial plein d'humour noir où vos choix influencent l'histoire de la colonie.",
    min: { os: "Win 10", cpu: "i3-3225", ram: "4 GB", gpu: "GTX 650 Ti", dx: "11", storage: "40 GB" },
    rec: { os: "Win 11", cpu: "i7-7700K", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "40 GB" },
    dl: "#"
  },
  { 
    id: 'borderlands-3', title: "Borderlands 3", image: "/images/borderlands3.jpg", cat: "Action / FPS", mode: "Solo / Multi",
    desc: "Le roi du looter-shooter est de retour. Des milliards d'armes et une aventure déjantée.",
    min: { os: "Win 10", cpu: "i5-3570", ram: "6 GB", gpu: "GTX 680", dx: "11", storage: "75 GB" },
    rec: { os: "Win 11", cpu: "i7-4770", ram: "16 GB", gpu: "GTX 1060", dx: "11", storage: "75 GB" },
    dl: "#"
  },

  // --- INDIE & AUTRES ---
  { 
    id: 'disco-elysium', title: "Disco Elysium", image: "/images/disco.jpg", cat: "RPG / Indie", mode: "Solo",
    desc: "Un RPG révolutionnaire où vous incarnez un détective au système de compétences unique.",
    min: { os: "Win 10", cpu: "i5", ram: "4 GB", gpu: "Dédié", dx: "11", storage: "20 GB" },
    rec: { os: "Win 11", cpu: "i7", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "20 GB" },
    dl: "#"
  },
  { 
    id: 'outer-wilds', title: "Outer Wilds", image: "/images/outerwilds.jpg", cat: "Indie / Aventure", mode: "Solo",
    desc: "Explorez un système solaire piégé dans une boucle temporelle infinie.",
    min: { os: "Win 10", cpu: "i5-2300", ram: "4 GB", gpu: "GTX 560", dx: "11", storage: "8 GB" },
    rec: { os: "Win 11", cpu: "i5-8400", ram: "8 GB", gpu: "GTX 1060", dx: "11", storage: "8 GB" },
    dl: "#"
  },
];