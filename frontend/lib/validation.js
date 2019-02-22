export const validateFirstName = firstName => {
  if (firstName.length < 1) {
    return 'First Name is required.';
  } else if (firstName.length < 3) {
    return 'First Name is too short. Must be at least two characters long';
  }

  return null;
};

export const validateUsername = username => {
  if (!username.length > 0) {
    return 'Username is required.';
  } else if (username.length < 2) {
    return 'Username is too short. Must be at least two characters long';
  }

  return null;
};

export const validatePermissions = permissions => {
  if (!permissions) {
    return 'Must set permissions for this user.';
  }

  return null;
};

export const validatePassword = password => {
  if (!password > 0) {
    return 'Password is required.';
  } else if (password.length > 0 && password.length < 6) {
    return 'Password must be atleast 6 characters long.';
  }

  return null;
};

export const validateConfirmPassword = password => {
  if (!password > 0) {
    return 'You must confirm your password.';
  } else if (password.length > 0 && password.length < 6) {
    return 'Password must be atleast 6 characters long.';
  }

  return null;
};

export const comparePasswords = (password1, password2) => {
  if (password1 !== password2) {
    return "Passwords don't match";
  }

  return null;
};
