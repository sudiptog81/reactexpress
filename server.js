const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: "George",
      lastName: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      id: 2,
      firstName: "Janet",
      lastName: "Weaver",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      id: 3,
      firstName: "Emma",
      lastName: "Wong",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    },
    {
      id: 4,
      firstName: "Eve",
      lastName: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      firstName: "Charles",
      lastName: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      firstName: "Tracey",
      lastName: "Ramos",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    },
    {
      id: 7,
      firstName: "Michael",
      lastName: "Lawson",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
      id: 8,
      firstName: "Lindsay",
      lastName: "Ferguson",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
      id: 9,
      firstName: "Tobias",
      lastName: "Funke",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
      id: 10,
      firstName: "Byron",
      lastName: "Fields",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    }
  ];
  res.json(customers);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
