import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import {
    connectRandom, connectRandomMany, getRandomNumber, timesAsync,
} from '../src/modules/seed';

const db = new PrismaClient();

const generateUsers = async (count: number) => timesAsync(count, async () => db.user.create({
    data: {
        email: faker.internet.email(),
        name: faker.person.firstName(),
    },
}));

const generateOrders = async (count: number) => {
    const users = await db.user.findMany();
    const products = await db.product.findMany();
    return timesAsync(count, async () => db.order.create({
        data: {
            price: getRandomNumber(50000),
            notes: faker.lorem.sentence(),
            user: connectRandom(users),
            OrderProducts: {
                create: connectRandomMany(products, 'product', 10).create
                    .map((el) => ({
                        ...el,
                        count: getRandomNumber(1, 5),
                    })),
            },
        },
    }));
};

const generateProducts = async (count: number) => {
    return timesAsync(count, async () => db.product.create({
        data: {
            title: `${faker.commerce.product()} ${getRandomNumber(1_000_000)}`,
            description: faker.commerce.productDescription(),
            photo: faker.image.urlPicsumPhotos(),
            price: getRandomNumber(10_000),
        },
    }));
};


const generateCarts = async (count: number) => {
    const products = await db.product.findMany();
    const users = await db.user.findMany();

    return timesAsync(count, async () => db.cart.create({
        data: {
            count: getRandomNumber(10),
            product: connectRandom(products),
            user: connectRandom(users),
        },
    }));
};

export async function seedDb() {
    await generateUsers(50);
    await generateProducts(100); // category
    await generateOrders(50); // user, products
    await generateCarts(100); // user, products
}

seedDb()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });