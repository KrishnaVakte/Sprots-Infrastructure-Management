import express from 'express'
import { addSport, listSport, removeSport } from '../controllers/SportController.js'
import multer from 'multer'

const SportRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage})

SportRouter.post('/add', upload.single("image"), addSport);
SportRouter.get('/list', listSport);
SportRouter.post('/remove', removeSport);




export default SportRouter;
