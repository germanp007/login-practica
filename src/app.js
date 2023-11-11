import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { conectionDB } from "./config/dbConection.js";
import { __dirname } from "./utils.js";
import {engine} from "express-handlebars";
import path from 'path'
import { viewsRouter } from "./routes/views.routes.js";
import { routerSessions } from "./routes/sessions.routes.js";

//import { productsModel } from "./models/product.model.js";

const PORT = 3000;
const app = express()

app.listen(PORT, ()=> console.log('Servidor OK!'));

// midlewares
app.use(express.json()) // Se utiliza para leer lo cuerpos de solicitud cuando estan en formato JSON, 
//Cuando una solicitud POST o PUT se realiza con datos en formato JSON, este middleware 
//convierte esos datos en un objeto JavaScript y lo adjunta al objeto request de Express. 
app.use(express.urlencoded({extended: true})) //Este middleware se utiliza para analizar los datos del cuerpo 
//de la solicitud cuando están en formato de formulario URL-encoded. 
//Este formato es comúnmente utilizado en formularios HTML. 

conectionDB();

//Configurando handlebars
app.engine(
    ".hbs",
    engine({
      extname: ".hbs",
      runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      },
    })
  );
  app.set("view engine", ".hbs");
  app.set("views", path.join(__dirname, "/views"));
  app.use(express.static(path.join(__dirname, "/public")));


// Config session
app.use(session({
    // Agregar almacenamiento de session de mongo
    store: MongoStore.create({
        ttl: 60, // tiempo de vida de la session
        mongoUrl: "mongodb+srv://germanp007:nati23032023@clustergap.ggconiz.mongodb.net/session?retryWrites=true&w=majority"
    }),
    secret: "secretGerman", // dar seguridad a la info como un crypto
    resave: true,
    saveUninitialized: true // para mantener actualizada las sessions q se van guardando
}))

// routes
app.use(viewsRouter);
app.use('/api/sessions', routerSessions)
