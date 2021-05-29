const roleLevels = {
    owner:1,
    admin:2,
    mod:3,
    AdminInTraining:4,
    modintraining:5,
    default:6
};


const permissionLevel = (roles) => {
    /*roles is an array of role objects to turn each object in to a name 
    and look its level in role levels and return the lowest?*/
    let lowestLevel = roleLevels.default
    for(const role of roles){
        const level = roleLevels[role.name]
        if(level < lowestLevel){
            lowestLevel = level;
        }
    }
    return lowestLevel;


}

module.exports = {
    permissionLevel
}