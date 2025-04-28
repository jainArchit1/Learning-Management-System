import jwt from "jsonwebtoken";
export const generateToken = (res, user, message) => {
  try {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  } catch (error) {
    return res
      .status(500)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message,
        user,
      });
  }
};
