import { PrismaClient } from "@prisma/client";

//instantiate a new prisma client to use acroos the app
const prisma = new PrismaClient();

//export the client
export default prisma;