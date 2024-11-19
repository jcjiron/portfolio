import { isMobile } from "./dimes";


export const instagramUrl = "https://www.instagram.com/jcjironj/";
export const linkedinUrl = "https://www.linkedin.com/in/juancarlosjiron/";
export const twitterUrl = "https://x.com/jcjiron4";
export const githubUrl = "https://github.com/jcjiron";
export const facebookUrl = "https://www.facebook.com/juan.carlos.jironj";
export const medium = "https://medium.com/@jcjiron4"
export const phoneNumber = "525583679908";
export const email = "jironjuarezjuan@outlook.com";
export const mexicoCityLocation = "https://www.google.com/maps?q=Mexico+City";

const message = encodeURIComponent("Hey Juan Carlos");
export const whatsappUrl = isMobile()
    ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
