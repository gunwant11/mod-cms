const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  body: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  metadata: {
    contentType: String, // e.g., "article", "blog post", "video", etc.
    tags: [String],
    categories: [String],
    status: String, // e.g., "draft", "published", "archived"
    featuredImage: String, // URL or media reference
    attachments: [String],
    // Add other metadata specific to your content
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
