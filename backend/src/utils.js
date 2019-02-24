function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions === permissionsNeeded;

  if (!matchedPermissions) {
    throw new Error(
      `You do not have required permissions of ${permissionsNeeded}. You have permissions of ${
        user.permissions
      }`
    );
  }
}

exports.hasPermission = hasPermission;
