const PRODUCTS = [
    {
        id: 100,
        name: 'Lit pour enfants en bois massif',
        price: 700000,
        image: require('../../../assets/products/Lit.png'),
        statut: 'Sur commande.',
        description:'Qualité supérieur grâ au cadre de lit solide en bois massif.De la sécurité pour enfant grâce à la barrière anti-chute et aux coins arrondis.',
        qty: 13
    },
    {
        id: 96,
        name: 'Filtre d évier de cuisine',
        price: 135000,
        image: require('../../../assets/products/filtre-d-evier-de-cuisine.jpg'),
        statut: 'Disponible.',
        description:'Le filtre est en Antirouille qualité, durable et fiable en acier inoxydable.',
        qty: 14
    },
    {
        id: 101,
        name: 'Boîte à lunch en acier inoxydable 304',
        price: 115000,
        image: require('../../../assets/products/Boite.jpeg'),
        statut: 'Sur commande.',
        description:'Fabriqué en acier inoxydable 304, difficile à rouiller, résistant à la corrosion, sain et sûr.',
        qty: 5
    },
    {
        id: 102,
        name: 'Couvre-lit',
        price: 135000,
        image: require('../../../assets/products/couvre-lit-.jpg'),
        statut: 'Sur commande.',
        description:'Motif de Ruban à Fleur Roses, Housse de Couette',
        qty: 4
    },
    {
        id: 90,
        name: 'Sushi rouleau',
        price: 90000,
        image: require('../../../assets/products/sushi-rouleau.jpg'),
        statut: 'Sur commande.',
        description:'Fait de matériel sain PP (genre de plastique).Détachable pour une utilisation et un nettoyage faciles.',
        qty: 10
    },
    {
        id: 24,
        name: 'Sac cosmetique',
        price: 25000,
        image: require('../../../assets/products/sac-cosmetique.jpg'),
        statut: 'Disponible.',
        description:'Trousse à cosmétique. Tissu micropolaire laminé néoprène + transfert de chaleur + fermeture à glissière en nylon.',
        qty: 2
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}