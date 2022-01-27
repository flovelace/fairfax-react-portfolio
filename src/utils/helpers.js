export function thisUrl(string) {
    var regex = /\s/g;
    return string.replace(regex, '-').toLowerCase();
};