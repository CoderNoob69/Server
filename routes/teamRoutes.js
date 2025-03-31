const express = require('express');
const router = express.Router();
const { createTeam, getAllMembers, updateDetails, deleteTeamMember } = require('../controllers/teamController');

router.post('/create', createTeam);
router.get('/members', getAllMembers);
router.put('/update/:id', updateDetails);
router.delete('/delete/:id', deleteTeamMember);

module.exports = router;
