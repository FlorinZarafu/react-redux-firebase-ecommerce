const INTIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "women",
      size: "large",
      imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
      linkUrl: "shop/women",
    },
    {
      id: 5,
      title: "men",
      size: "large",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "shop/men",
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
