exports.getAccueil = (req, res, next)=>{
    res.render('accueil')
}
exports.postAccueil = (req, res, next)=>{
   
}
exports.getInscription = (req, res, next)=>{
    res.render('inscription')
}
exports.postInscription = (req, res, next)=>{
    res.redirect('/')
}
exports.getConnexion= (req, res, next)=>{
    res.render('connexion')
}
exports.postConnexion = (req, res, next)=>{
    res.redirect('/')
}