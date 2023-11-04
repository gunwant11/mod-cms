const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [
    {
      memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      role: String, // e.g., "admin", "editor", "viewer"
    },
  ],
  content: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
