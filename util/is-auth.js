module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        window.location = '/login';
    }
    next();
}