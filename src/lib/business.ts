// The business's legal name and contact details, shown on the Contact page and in the
// site footer. Change them here and both places update.
export const BUSINESS_NAME = "Herbs Search, LLC";

export const BUSINESS_ADDRESS = {
  street: "1601 Willow Lawn Drive",
  suite: "Suite 304",
  city: "Henrico",
  region: "VA",
  postalCode: "23230",
};

export const BUSINESS_ADDRESS_ONE_LINE = `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.suite}, ${BUSINESS_ADDRESS.city}, ${BUSINESS_ADDRESS.region} ${BUSINESS_ADDRESS.postalCode}`;

export const BUSINESS_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS_ONE_LINE)}`;
