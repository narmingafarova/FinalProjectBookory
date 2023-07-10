export const addWish = ({ id, image, title, price }: any) => ({
  type: "ADD_WISH",
  wish: {
    id,
    image,
    title,
    price,
  },
});

export const removeWish = ({ id }: any) => ({
  type: "REMOVE_WISH",
  id,
});
