import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";
import { labels, priorities, statuses } from "./data";
var tasks = Array.from({ length: 100 }, function () { return ({
    id: "TASK-".concat(faker.number.int({ min: 1000, max: 9999 })),
    title: faker.hacker.phrase().replace(/^./, function (letter) { return letter.toUpperCase(); }),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
}); });
fs.writeFileSync(path.join(__dirname, "tasks.json"), JSON.stringify(tasks, null, 2));
console.log("✅ Tasks data generated.");
