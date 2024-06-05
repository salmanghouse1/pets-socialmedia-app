const bcrypt = require('bcrypt');
const { findOne } = require('./userModel'); // Assuming you have a userModel with a findOne method

const UserController = async (email, password) => {
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    try {
        const user = await findOne({ email });
        if (!user) {
            throw new Error('Incorrect Email');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error('Incorrect Password');
        }

        // Ensure not to return sensitive information
        const { password, ...safeUser } = user.toObject();
        return safeUser;
    } catch (error) {
        // Log the error for debugging (do not expose sensitive details to the client)
        console.error(error);
        throw new Error('An error occurred during authentication');
    }
};

module.exports = UserController;
