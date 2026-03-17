const express = require("express")

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");
const {addStory,getAllStories,detailStory,likeStory, editStory, deleteStory, editStoryPage } = require("../Controllers/story")
const { checkStoryExist, checkUserAndStoryExist } = require("../Middlewares/database/databaseErrorhandler");
const multer = require("multer");

const router = express.Router() ;
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/addstory" ,[getAccessToRoute, upload.array("my_files", 5)],addStory)


router.post("/:slug", checkStoryExist, detailStory)

router.post("/:slug/like",[getAccessToRoute,checkStoryExist] ,likeStory)

// Any authenticated user can edit any story (no ownership check)
router.get("/editStory/:slug",[getAccessToRoute,checkStoryExist] , editStoryPage)

// Any authenticated user can edit any story (no ownership check)
router.put("/:slug/edit",[getAccessToRoute,checkStoryExist, upload.array("my_files", 5)] ,editStory)

router.delete("/:slug/delete",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] ,deleteStory)

router.get("/getAllStories",getAllStories)


module.exports = router
