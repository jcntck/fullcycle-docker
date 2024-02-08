module.exports = async (db) => {
  db.connect();
  const names = ["Roronoa Zoro", "Monkey D. Luffy", "Lelouch Lamperouge", "Gon Freecss", "Goku", "Edward Elric"];

  await db.purge();
  for (const name of names) {
    await db.insert(name);
  }

  db.close();
}