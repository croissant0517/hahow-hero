export const url = {
  heroes: "https://hahow-recruit.herokuapp.com/heroes",
  hero: (id: string | string[]) =>
    `https://hahow-recruit.herokuapp.com/heroes/${id}/profile`,
};
