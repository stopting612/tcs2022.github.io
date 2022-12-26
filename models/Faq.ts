import mongoose from "mongoose";

const Schema = mongoose.Schema;

const faqSchema = new Schema(
       {
        name: {
                type:String,
                required:true,
                unique: true
        },
        title: {
                type:String,
                required:true,
                minlength: 5,
        },
        faq: [
                new Schema({
                        question: {
                                type:String,
                                required:true,
                        },
                        answer: {
                                type:String,
                                required:true,
                        },
                })
        ]
       } 
)

const Faq = mongoose.models.Faq || mongoose.model("faq", faqSchema)
export default Faq;