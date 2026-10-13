import { readTickets, writeTickets } from "./src/data/fileStore.js";

const tickets = await readTickets();

tickets.push({
  id: "TCK-003",
  title: "Ejemplo",
  description: "Ejemplo controlado",
  priority: "low",
  status: "open",
  requester: "demo@example.com"
});

await writeTickets(tickets);
console.log((await readTickets()).length);