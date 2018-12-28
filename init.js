import app from "./app";

const PORT = 4000;

const handlerListening = () => console.log(`Server is running on port ${PORT}`)


app.listen(PORT, handlerListening);