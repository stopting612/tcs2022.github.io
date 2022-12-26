import mongoose from "mongoose";

const Schema = mongoose.Schema;

const linkSchema = new Schema(
       {
        path: {
                type:String,
                required:true,
                unique: true
        },
        title: {
                type:String,
                required:true,
                minlength: 5,
        },
        
       } 
)

const Link = mongoose.models.Faq || mongoose.model("link", linkSchema)
export default Link;