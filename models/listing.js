const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const listingSchema=new Schema({
    title:{ 
        type:String,
        required:true,
    },
    description:String,
   /* image:{
        
       type: String,
        
        
       default:
     "https://in.images.search.yahoo.com/search/images;_ylt=AwrKAypR88dpfY4PwKi9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZAN4bkVNdEloRVJnZUk2aFR1M1JHdWdBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMzkEcXVlcnkDaW1hZ2VzJTIwdW5zcGxhc2glMjBjb2NvbnV0JTIwdHJlZSUyMGFuZCUyMGJlZWNoeQR0X3N0bXADMTc3NDcxMTY1MQ--?p=images+unsplash+coconut+tree+and+beechy&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E210IN1589G0#id=2&iurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562594212-f6243aa9b451%3Fmark%3Dhttps%3A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26h%3D630%26w%3D1200%26crop%3Dfaces%252Cedges%26blend-w%3D1%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ2Njk0MTkwfA%26ixlib%3Drb-4.1.0&action=click" ,


      set:(v)=>v==="" ? "https://in.images.search.yahoo.com/search/images;_ylt=AwrKAypR88dpfY4PwKi9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZAN4bkVNdEloRVJnZUk2aFR1M1JHdWdBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMzkEcXVlcnkDaW1hZ2VzJTIwdW5zcGxhc2glMjBjb2NvbnV0JTIwdHJlZSUyMGFuZCUyMGJlZWNoeQR0X3N0bXADMTc3NDcxMTY1MQ--?p=images+unsplash+coconut+tree+and+beechy&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E210IN1589G0#id=2&iurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562594212-f6243aa9b451%3Fmark%3Dhttps%3A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26h%3D630%26w%3D1200%26crop%3Dfaces%252Cedges%26blend-w%3D1%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ2Njk0MTkwfA%26ixlib%3Drb-4.1.0&action=click" :v,

    },
    */
   image: {
  filename: String,
  url: {
    type: String,
    default: "https://images.unsplash.com/photo-1562594212-f6243aa9b451",
    set: (v) => v === "" ? "https://images.unsplash.com/photo-1562594212-f6243aa9b451" : v
  }
},
    price:Number,
    location :String,
    country:String,

});
const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;