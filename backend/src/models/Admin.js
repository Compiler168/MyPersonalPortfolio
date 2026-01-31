const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    }
}, {
    timestamps: true
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Static methods
adminSchema.statics.getByEmail = function (email) {
    return this.findOne({ email });
};

adminSchema.statics.createAdmin = async function (email, password) {
    const admin = new this({ email, password });
    await admin.save();
    return admin._id;
};

// Instance methods
adminSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

adminSchema.methods.generateToken = function () {
    return jwt.sign(
        { id: this._id, email: this.email, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
