const Home =require("../models/Home")

exports.createContent = async(req, res)=>{
    const {heading , paragraph} = req.body;
    try {
        const data = await Home.create({
            heading,
            paragraph
        })
        if(!data){
            return res.status(404).json({message:"content not created"});
        }
        data.save()
        res.status(200).json({success:true, data})
    } catch (error) {
        res.status(500).json({message:error})
    }
}