const Listings = require('../models/jobListings');

exports.readListings = async (req, res) => {
    const dbAllListings = await Listings.find({});
    res.json(dbAllListings);
}
exports.createListings = (req, res) => {
    // if (req.user.sessionID== null){
    //     res.send("login first or create a new account");
    // }
    const result = Listings.create({
        jobTitle: req.body.jobTitle,
        description: req.body.description,
        employmentType: req.body.employmentType,
        companyName: req.body.companyName,
        location: req.body.location,
        salary: req.body.salary,
        requirements: req.body.requirements,
        postedDate: req.body.postedDate
        // employer: req.body.employer
    })
    console.log(result);
    res.send("user succesfully created");
}
exports.updateListings = (req, res) => {
    Listings.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send("user succesfully updated");
}
exports.deleteListings = (req, res) => {

}
