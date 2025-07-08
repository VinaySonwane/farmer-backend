import Offer from "../models/Offer";
// Create a new offer for a vegetable listing
export const createOffer = async (req, res) => {
    try {
        const { listingId, brokerId, offeredPrice, message, status } = req.body;
        const newOffer = new Offer({
            listingId,
            brokerId,
            offeredPrice,
            message,
            status,
        });
        await newOffer.save();
        return res.status(201).json(newOffer);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating offer" });
    }
};
// Get all offers for a specific listing
export const getOffersForListing = async (req, res) => {
    try {
        const offers = await Offer.find({ listingId: req.params.listingId });
        return res.status(200).json(offers);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching offers" });
    }
};
// Get a single offer by ID
export const getOfferById = async (req, res) => {
    try {
        const offer = await Offer.findById(req.params.id);
        if (!offer)
            return res.status(404).json({ message: "Offer not found" });
        return res.status(200).json(offer);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching offer" });
    }
};
// Update an offer
export const updateOffer = async (req, res) => {
    try {
        const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedOffer)
            return res.status(404).json({ message: "Offer not found" });
        return res.status(200).json(updatedOffer);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating offer" });
    }
};
// Delete an offer
export const deleteOffer = async (req, res) => {
    try {
        const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
        if (!deletedOffer)
            return res.status(404).json({ message: "Offer not found" });
        return res.status(200).json({ message: "Offer deleted successfully" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting offer" });
    }
};
