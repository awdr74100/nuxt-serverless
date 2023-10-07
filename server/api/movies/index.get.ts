export default defineEventHandler(async (event) => {
  try {
    const prisma = usePrisma();

    const movies = await prisma.movie.findMany();

    return { ok: true, movies };
  } catch (error) {
    return { ok: false, error };
  }
});
