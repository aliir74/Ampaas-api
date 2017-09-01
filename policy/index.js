// ==================================
// User roles
// ==================================

function is(user, role) {
    return (user.roles || []).indexOf(role) !== -1 || (user.scope || []).indexOf(role) !== -1;
}

function access_super_admin(user) {
    return is(user, 'super_admin');
}

function access_admin(user) {
    return is(user, 'admin');
}

// Exports
module.exports = {
    is,
    access_super_admin,
    access_admin
};
