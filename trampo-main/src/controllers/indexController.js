function indexView(req, res){
    pessoa = req.session.pessoa
    res.render("index.html", {pessoa});
}



module.exports =  {
    indexView,
};