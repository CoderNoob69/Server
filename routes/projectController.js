const { getAllProjects, getProjectCount } = require("../controllers/projectController")

const router = express.Router();

router.get('/projects', getAllProjects); // Fetch all projects
router.get('/project-count', getProjectCount);

module.exports = router; 
