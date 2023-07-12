export const addWish = ({ id, image, title, price, storeWish, stock }: any) => ({
  type: "ADD_WISH",
  wish: {
    id,
    image,
    title,
    price,
    storeWish,
    stock
  },
});

export const removeWish = ({ id }: any) => ({
  type: "REMOVE_WISH",
  id,
});
