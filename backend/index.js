const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');   // to allow cross-origin requests

const app = express();
//corsOrigin for frontend url
const corsOrigin = process.env.REACT_APP_NODE_ENV === 'production'
    ? "https://acess8.vercel.app"
    : "http://localhost:3000";

app.use(cors({
    origin: corsOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE',
    credentials: true,
}));
// Connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/qr/users", require("./routes/qr_users"));
app.use('/', require('./routes/index'));
app.use('/api/qr', require('./routes/qr_url'));
app.use('/api/url', require('./routes/url'));
app.use('/api/login', require('./routes/userLogin'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/notes/users', require('./routes/notes_users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));