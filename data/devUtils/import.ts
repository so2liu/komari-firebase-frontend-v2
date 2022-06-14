import {
    backup,
    initializeFirebaseApp,
    restore,
} from "firestore-export-import";
import fs from "fs/promises";

const serviceAccount = require("/Users/liuyang/PrivateWorks/komari-firebase-frontend-v2/private/komari-lieferung-firebase-adminsdk-h1xqw-f0e9a8676f.local.json");
// const serviceAccount = require("/Users/liuyang/Downloads/ugly-pomodoro-firebase-adminsdk-d684j-5bc36ad895.json");

initializeFirebaseApp(serviceAccount);

// const menuFile = require("/Users/liuyang/Downloads/allMenu.json");
// 这是个增量函数
// restore({
//     menuV2: menuFile,
// });

async function importDb(collection: string, inputFile: string) {
    const data = await fs.readFile(inputFile);
    await restore({
        [collection]: JSON.parse(data.toString()),
    });
}

async function backupDb(collection: string, outputFile: string) {
    const data = await backup(collection);
    await fs.writeFile(outputFile, JSON.stringify(data, null, 2));
}


// importDb("menuV2", "/Users/liuyang/PrivateWorks/komari-firebase-frontend-v2/data/allMenu.json");
// backupDb("orders", "output.json");
