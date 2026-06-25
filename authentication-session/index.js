import e from "express";

const app = e();
app.get(e.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server up and running on PORT ${PORT}`));
