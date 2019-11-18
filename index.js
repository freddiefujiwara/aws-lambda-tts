exports.handler = async (event) => {
    const GoogleHomeSpeaker = require('google-home-speaker');
    const ghs = new GoogleHomeSpeaker();
    let url = await ghs.textToMp3(event.q); 
    if(event.tl &&  0 < event.tl.length){
	url = url.replace(/&tl=[^&]+/,'&tl='+event.tl);
    }
    const response = {
        statusCode: 200,
        body: url 
    };
    return response;
};
