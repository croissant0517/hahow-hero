export const url = {
  heroes: "https://hahow-recruit.herokuapp.com/heroes",
  hero: (id: string) =>
    `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
