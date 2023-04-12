class Base64 {
    static BASE_64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    /**
     * @param {string} input
     * @returns {string}
     */
    static decodeBase64(input) {
        let output = "";
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;

        input = input.replace(/[^A-Za-z0-9+/=]/g, "");

        while (i < input.length) {
            enc1 = this.BASE_64.indexOf(input.charAt(i++));
            enc2 = this.BASE_64.indexOf(input.charAt(i++));
            enc3 = this.BASE_64.indexOf(input.charAt(i++));
            enc4 = this.BASE_64.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output += String.fromCharCode(chr1);

            if (enc3 !== 64) {
                output += String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output += String.fromCharCode(chr3);
            }
        }

        return decodeURIComponent(output);
    }
}

export default Base64;
