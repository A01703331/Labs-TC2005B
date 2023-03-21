module.exports = (request, response, next) => {
    if (!(request.session.perks.indexOf('addCharacter') >= 0)) {
        return response.redirect('/list');
    }
    next();
}