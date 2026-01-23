const asyncErrorWrapper = require("express-async-handler")
const Story = require("../Models/story");
const deleteImageFile = require("../Helpers/Libraries/deleteImageFile");
const {searchHelper, paginateHelper} =require("../Helpers/query/queryHelpers")

const cloudinary = require("cloudinary").v2;

const handleUpload = async (file) => {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res.secure_url;
};

const addStory = async (req, res, next) => {
    const { title, content, price, weight, age, color, sex } = req.body;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'Please upload at least one image' });
    }

    if (req.files.length > 5) {
        return res.status(400).json({ error: 'Maximum 5 images allowed' });
    }

    const wordCount = content.trim().split(/\s+/).length;
    const readtime = Math.floor(wordCount / 200);

    try {
        const imageUrls = [];
        
        // Upload all images to Cloudinary
        for (const file of req.files) {
            const b64 = Buffer.from(file.buffer).toString("base64");
            let dataURI = "data:" + file.mimetype + ";base64," + b64;
            const imageUrl = await handleUpload(dataURI);
            imageUrls.push(imageUrl);
        }

        const newStory = await Story.create({
            title,
            content,
            price,
            weight,
            age,
            color,
            sex,
            author: req.user._id,
            readtime,
            imageUrls,
        });

        return res.status(200).json({
            success: true,
            message: "Story added successfully",
            data: newStory,
        });
    } catch (error) {
        console.error("Error adding story:", error);
        return next(error);
    }
};

const getAllStories = asyncErrorWrapper( async (req,res,next) =>{

    let query = Story.find();

    query =searchHelper("title",query,req)

    const paginationResult =await paginateHelper(Story , query ,req)

    query = paginationResult.query  ;

    query = query.sort("-likeCount -commentCount -createdAt")

    const stories = await query
    
    return res.status(200).json(
        {
            success:true,
            count : stories.length,
            data : stories ,
            page : paginationResult.page ,
            pages : paginationResult.pages
        })

})

const detailStory =asyncErrorWrapper(async(req,res,next)=>{

    const {slug}=req.params ;
    const {activeUser} =req.body 

    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")

    const storyLikeUserIds = story.likes.map(json => json.id)
    const likeStatus = storyLikeUserIds.includes(activeUser._id)


    return res.status(200).
        json({
            success:true,
            data : story,
            likeStatus:likeStatus
        })

})

const likeStory =asyncErrorWrapper(async(req,res,next)=>{

    const {activeUser} =req.body 
    const {slug} = req.params ;

    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")
   
    const storyLikeUserIds = story.likes.map(json => json._id.toString())
   
    if (! storyLikeUserIds.includes(activeUser._id)){

        story.likes.push(activeUser)
        story.likeCount = story.likes.length
        await story.save() ; 
    }
    else {

        const index = storyLikeUserIds.indexOf(activeUser._id)
        story.likes.splice(index,1)
        story.likeCount = story.likes.length

        await story.save() ; 
    }
 
    return res.status(200).
    json({
        success:true,
        data : story
    })

})

const editStoryPage  =asyncErrorWrapper(async(req,res,next)=>{
    const {slug } = req.params ; 
   
    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")

    return res.status(200).
        json({
            success:true,
            data : story
    })

})


const editStory  =asyncErrorWrapper(async(req,res,next)=>{
    const {slug } = req.params ; 
    const {title ,content ,previousImages, price, weight, age, color, sex } = req.body;

    const story = await Story.findOne({slug : slug })

    story.title = title ;
    story.content = content ;
    story.price = price;
    story.weight = weight;
    story.age = age;
    story.color = color;
    story.sex = sex;

    // Handle multiple images
    if (req.files && req.files.length > 0) {
        if (req.files.length > 5) {
            return res.status(400).json({ error: 'Maximum 5 images allowed' });
        }

        const imageUrls = [];
        
        // Upload new images to Cloudinary
        for (const file of req.files) {
            const b64 = Buffer.from(file.buffer).toString("base64");
            let dataURI = "data:" + file.mimetype + ";base64," + b64;
            const imageUrl = await handleUpload(dataURI);
            imageUrls.push(imageUrl);
        }

        // Parse previous images if provided (as JSON string)
        let previousImageArray = [];
        if (previousImages) {
            try {
                previousImageArray = typeof previousImages === 'string' ? JSON.parse(previousImages) : previousImages;
            } catch (e) {
                previousImageArray = Array.isArray(previousImages) ? previousImages : [];
            }
        }

        // Combine previous images that weren't replaced with new images
        // For simplicity, we'll replace all images with new ones if files are uploaded
        // Otherwise, keep previous images
        if (imageUrls.length > 0) {
            story.imageUrls = imageUrls;
        } else if (previousImageArray.length > 0) {
            story.imageUrls = previousImageArray;
        }
    } else if (previousImages) {
        // No new files, but previous images provided (keep existing)
        try {
            const previousImageArray = typeof previousImages === 'string' ? JSON.parse(previousImages) : previousImages;
            if (Array.isArray(previousImageArray)) {
                story.imageUrls = previousImageArray;
            }
        } catch (e) {
            // Keep existing images if parsing fails
        }
    }

    await story.save()  ;

    return res.status(200).
        json({
            success:true,
            data :story
    })

})

const deleteStory  =asyncErrorWrapper(async(req,res,next)=>{

    const {slug} = req.params  ;

    const story = await Story.findOne({slug : slug })

    // Delete all images if they exist
    if (story.imageUrls && story.imageUrls.length > 0) {
        // Note: Cloudinary images don't need local file deletion
        // If you're using local storage, uncomment and modify:
        // story.imageUrls.forEach(imageUrl => {
        //     deleteImageFile(req, imageUrl);
        // });
    }

    await story.remove()

    return res.status(200).
        json({
            success:true,
            message : "Story delete succesfully "
    })

})


module.exports ={
    addStory,
    getAllStories,
    detailStory,
    likeStory,
    editStoryPage,
    editStory ,
    deleteStory
}