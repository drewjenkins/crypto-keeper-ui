import UAParser from "ua-parser-js";

const parser = new UAParser();

export const isMobile = () => ["mobile"].includes(parser.getDevice().type);
