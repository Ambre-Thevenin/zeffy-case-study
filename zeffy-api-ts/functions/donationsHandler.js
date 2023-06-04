const donations = require('../100-last-donations.json');

function getAllDonations() {
    return donations;
}

module.exports = { getAllDonations};