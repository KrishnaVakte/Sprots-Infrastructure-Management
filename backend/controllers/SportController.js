import SportModel from "../models/SportModel.js";
import fs from 'fs'


//add Sport item
const addSport = async (req, res) => {
    let image = `${req.file.filename}`

    const Sport = new SportModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image
    })

    try {
        await Sport.save();
        res.json({
            success: true,
            message: "Sport Added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}

// all Sport list
const listSport = async (req, res) => {
    try {
        const Sports = await SportModel.find({});
        res.json({
            success: true,
            data: Sports
        })
    } catch (error) {
        console.log(error)
        res.josn({
            success: true,
            message: "Error"
        })
    }
}

// remove Sport item
const removeSport = async (req, res) => {
    try {
        const Sport = await SportModel.findById(req.body.id);
        fs.unlink(`uploads/${Sport.image}`,()=>{});
        await SportModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Sport Removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}

export {
    addSport,
    listSport,
    removeSport
}
