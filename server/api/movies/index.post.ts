import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { title } = await z
      .object({
        title: z.string().min(1).max(20),
      })
      .parseAsync(body);

    const prisma = usePrisma();

    const movie = await prisma.movie.create({
      data: {
        title,
      },
    });

    return { ok: true, movie };
  } catch (error) {
    return { ok: false, error };
  }
});
