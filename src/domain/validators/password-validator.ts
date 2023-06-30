import bcrypt from "bcrypt";

export const validatePassword = async (
  password: string,
  incomingPasword: string
): Promise<boolean> => {
  const hashedPassword = await bcrypt.hash(incomingPasword, 10);
  if (
    hashedPassword.length === password.length &&
    hashedPassword === password
  ) {
    return true;
  } else {
    return false;
  }
};
