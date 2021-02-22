import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    comments: [
      {
        id: "1123",
        name: "Susan",
        message: "Is this job done yet?",
        date: "2021-02-19T17:10:59+0000",
      },
      {
        id: "4235",
        name: "Mike",
        message: "Not yet.  I'm still working on it",
        date: "2021-02-19T20:10:59+0000",
      },
    ],
    username: "Leonardo",
  },
});

export default app;
