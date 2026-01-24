
const mongoose = require("mongoose")
const Comment = require("./comment")
const slugify = require("slugify")

const StorySchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    slug: String,

    title: {
        type: String,
        required: [true, "What is the puppy weight"],

    },

    content: {
        type: String,
        required: [true, "Please write a little about the puppy "],
    },

    price: {
        type: String,
        required: [true, "Please a provide the price "],
    },
    weight: {
        type: String,
        required: [true, "Please a provide the weight"],
    },
    age: {
        type: String,
        required: [true, "Please a provide the age"],
    },
    color: {
        type: String,
        required: [true, "Please a provide the color"],
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: [true, "Please provide the sex"],
    },
    availability: {
        type: String,
        enum: ['available', 'reserved', 'adopted'],
        default: 'available'
    },
    imageUrls: {
        type: [String],
        default: [],
        validate: {
            validator: function(v) {
                return v.length <= 5;
            },
            message: 'Maximum 5 images allowed'
        }
    },
    readtime: {
        type: Number,
        default: 3
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.ObjectId,
        ref: "Comment"
    }],
    commentCount: {
        type: Number,
        default: 0
    }


}, { timestamps: true })

StorySchema.pre("save", function (next) {

    if (!this.isModified("title")) {
        next();
    }


    this.slug = this.makeSlug()

    next()

})

StorySchema.pre("remove", async function (next) {

    const story = await Story.findById(this._id)

    await Comment.deleteMany({
        story: story
    })

})

StorySchema.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: '-',
        remove: /[*+~.()'"!:@/?]/g,
        lower: true,
        strict: false,
        locale: 'tr',
        trim: true
    })

}

const Story = mongoose.model("Story", StorySchema)

module.exports = Story;