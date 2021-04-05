import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    comments: [
      {
        id: "1123",
        name: "Patrick",
        message: "Is this job done yet?",
        date: "2021-02-19T17:10:59+0000",
        profilePictureUrl:
          "https://treknews.net/wp-content/uploads/2020/06/patrick-stewart-memoir-book-star-trek-tng-picard.jpg",
      },
      {
        id: "4235",
        name: "Mike",
        message: "Not yet.  I'm still working on it",
        date: "2021-02-19T20:10:59+0000",
        profilePictureUrl:
          "https://fanbuzz.com/wp-content/uploads/sites/5/2020/05/The-Rock-Net-Worth.png?w=1200&h=800&crop=1",
      },
    ],
    username: "Leonardo",
  },
});

export default app;
