import React, { Component } from 'react';
import './Style/App.css';
import './Style/Firework.css';
import ImageDisplayer from './Components/ImageDisplayer';
import SpecialButton from "./Components/SpecialButton";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      count: 0,
      themeNumber: 0,
      score: 1000
    };
  }

  themes = { 0: "Avengers", 1: "Food", 2: "Gaming", 3: "Sports", 4: "Shoes", 5: "Music", 6: "Hacking", 7: "Animals", 8: "Agriculture" };

  imageDict = [
    [
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fwoman.jpg?alt=media&token=b8895a23-935f-48ff-83fe-89b77307c8a2",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fhammer.jpg?alt=media&token=dae7ae6c-17e6-41f1-8edd-45e001313901",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fshield.jpg?alt=media&token=d277672d-375f-432a-aec2-a96fe1b92136",
      "https://img.buzzfeed.com/buzzfeed-static/static/2019-07/31/14/asset/bb28e24f0f75/sub-buzz-2811-1564582774-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fmagic.jpg?alt=media&token=f5dc92ed-1f28-4592-9b60-416188ba3de1",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fstones.jpg?alt=media&token=7725db52-a0dd-4619-8b02-1b5455920747",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Avengers%2Fweb.jpg?alt=media&token=8b0300d7-3ad1-4c17-8d19-fbc599e0eceb",
      "https://i.ytimg.com/vi/NIXrKS8yUp4/maxresdefault.jpg",
      "https://m.economictimes.com/thumb/msid-68266481,width-1200,height-900,resizemode-4,imgsize-584851/robert-downey-jr-starrer-sherlock-holmes-3-to-now-release-in-2021.jpg",
      "https://static.wikia.nocookie.net/xmenmovies/images/0/05/Josh-Brolin.jpg/revision/latest?cb=20180604142035"],
    [
      "https://static.wikia.nocookie.net/shokugekinosoma/images/3/3b/Lemon_Curd_Italiano_Semifreddo_%28anime%29.png/revision/latest?cb=20160819113313",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Food%2Fchicken.jpg?alt=media&token=f5f7d167-208d-49cc-aec4-e419da1f262c",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Food%2Fapple.jpg?alt=media&token=c2b463d2-5c7a-4442-9a6f-bfd1fb0ad593",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Food%2Fchocolate.jpg?alt=media&token=984a4efb-42e2-4bf4-a3ba-8da2a105938a",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Food%2Fcurry.jpg?alt=media&token=d93a408b-cdf4-418c-9e80-461f5dfecf7e",
      "https://www.gannett-cdn.com/-mm-/2fc82d17ec2a00751d0d190159d7c79d02045755/c=56-0-968-513/local/-/media/2020/03/19/USATODAY/usatsports/MotleyFool-TMOT-4352f99b-general-mills.png",
      "https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwK0xWYoXgFAPk-GmqYac3nc",
      "https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg",
      "https://post.healthline.com/wp-content/uploads/2020/08/durian-fruit-1200x628-facebook-1200x628.jpg",
      "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"],
    [
      "https://www.dailyesports.gg/wp-content/uploads/2019/12/SLIDESHOW-IMAGE-6-Arena_5r3xk0zsxng0v2w5d6ku-800x400.jpg",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Gaming%2Fcontroller.jpg?alt=media&token=e1cf6385-80e8-4c67-a9a6-4a72931cd92f",
      "https://fire:basestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Gaming%2Fgame.jpg?alt=media&token=9fc91a21-6f15-4c2f-acc5-a3998f3806a5",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Gaming%2Fheadphone.jpg?alt=media&token=44f78c08-d7b3-4017-a697-755a9a35cb0d",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Gaming%2Fkeyboard.jpg?alt=media&token=0a267a2d-e7ad-4738-bd29-873d751cf044",
      "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
      "https://static.invenglobal.com/upload/image/2019/07/30/o1564498397006015.jpeg",
      "https://firebasestorage.googleapis.com/v0/b/green-screen-d730e.appspot.com/o/Gaming%2Fwheel.jpg?alt=media&token=966df801-6355-4a36-8f6c-f13f9544a00d",
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/LOL_Worlds_logo.svg/1200px-LOL_Worlds_logo.svg.png",
      "https://atalayar.com/sites/default/files/noticias/Atalayar_FIFA%2021.jpg"],
    [
      "https://dks.scene7.com/is/image/GolfGalaxy/20ADIMDZRPRMKNTBLCLT_Black_Silver?qlt=70&wid=600&fmt=pjpeg",
      "https://i2-prod.mirror.co.uk/incoming/article13438435.ece/ALTERNATES/s1200/1_Manchester-United-v-Wolverhampton-Wanderers-Premier-League.jpg",
      "https://www.nbc12.com/resizer/BG6V6d1Kzbm9U_88_NGjRXMp2qg=/1200x900/cloudfront-us-east-1.images.arcpublishing.com/raycom/QZXHKLL4TRBOLHTLYH2YK2N5V4.jpg",
      "https://media.video-cdn.espn.com/motion/2020/1212/dm_201212_NCF_Highlight_Alabama_sot_full/dm_201212_NCF_Highlight_Alabama_sot_full_1x1.jpg",
      "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/07/02/2020-07-02-UN-Women-thumbnail.jpg",
      "https://imgresizer.eurosport.com/unsafe/833x572/filters:format(jpeg):focal(1184x434:1186x432)/origin-imgresizer.eurosport.com/2020/12/12/2954278-60641488-2560-1440.jpg",
      "https://cdn.britannica.com/15/201015-050-E24FA163/Field-hockey-match-Poland-Spain-2017.jpg",
      "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/xnrwcvfmsjyd5r8gotnb",
      "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/ft5t8szsx1cn46o6oc4b",
      "https://iaafworldathleticschamps.com/doha2019/wp-content/uploads/2019/03/IAAF-KYA-Discus-Throw-1024x675.84-c-center.jpg"
    ],
    [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/73101ab9d9ee445db281ab57011a0229_9366/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81kFKcc6GsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/612er1YVNQL._AC_SX522_.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg",
      "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
      "https://www.footshop.eu/blog/wp-content/uploads/2019/09/tinker-hatfield.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkocuaS_4o4hHkPv3WyNsIHrE8N-E3vhZEjA&usqp=CAU",
      "https://s3.r29static.com/bin/asset/87a/x/13632/image.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmfmWgtbm7Xp-SFn-unzbILnML6u7ElzBgA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LV4E-e6g_epEQJe5J6Ca_lIVZxGO82dClg&usqp=CAU"
    ],
    [
      "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/p/pp880_mikushunya_w.jpg",
      "https://sonar.es/system/attached_images/19685/medium/gorillaz-sonar-bcn-2018.jpg?1517486863",
      "https://observer.com/wp-content/uploads/sites/2/2016/07/1008989_10151688251356598_289254364_o.jpg?quality=80&w=876&h=438&crop=1&strip",
      "https://www.popculturebeast.com/wp-content/uploads/2018/11/bohemian-rhapsody-movie-poster.jpg",
      "https://internationalresourcepanel.org/sites/default/files/styles/400_260/public/images/reports/thumbnail-list/shutterstock_948895901.jpg?itok=zMp46sHf",
      "https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg",
      "https://cdn.oneesports.gg/wp-content/uploads/sites/4/2019/11/beat-saber-FB-1024x575.jpg",
      "https://st.depositphotos.com/1014732/2146/v/950/depositphotos_21468653-stock-illustration-hallelujah-jesus.jpg",
      "https://i.guim.co.uk/img/media/faadabacc6ff3c5e33a4712b528de7f5831d53de/0_0_3648_2190/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=90c2a723037d7372b3193c18612849d8",
      "https://s.abcnews.com/images/Entertainment/elton-john-abc-ml-180125_16x9_992.jpg"],

    [
      "https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9t_992.jpg",
      "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9vZGllfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
      "https://i.imgur.com/0Fbs9GN.jpg",
      "https://cdn.britannica.com/85/94185-050-B3B95F6F/view-Pentagon-Arlington-Va.jpg",
      "https://tr4.cbsistatic.com/hub/i/r/2016/07/31/b9d9fc93-5214-4a30-9521-72818d53f413/resize/1200x/db2c7088f40f9e81f641e8d7665fd728/stuxnetfilmmagnoliapictures.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png",
      "https://thumbs.dreamstime.com/b/hand-man-hack-tree-ax-against-blurred-green-background-hand-man-hack-tree-ax-against-blurred-125827773.jpg",
      "https://hackernoon.com/hn-images/1*vOddkv-UUjL5VO5eYnSsHg.jpeg",
      "https://networkencyclopedia.com/wp-content/uploads/2019/09/subnet-mask-cheat-sheet.jpg",
      "https://images.theconversation.com/files/243663/original/file-20181102-83644-b06itk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"],

    [
      "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/08/08/KNOWYOURMEME-sad-cat-crying-1120.JPG",
      "https://images.immediate.co.uk/production/volatile/sites/4/2020/03/GettyImages-1058304880-c-0b54061-scaled.jpg?quality=45&resize=768,574",
      "https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg",
      "https://thumbs.dreamstime.com/b/pteranodon-pterodactyl-dinosaur-white-background-pteranodon-pterodactyl-dinosaur-white-background-139129966.jpg",
      "https://cdn.vox-cdn.com/thumbor/gf4cXDjnq7S-h8JKWvSTQFXF4Sk=/0x0:2100x1348/1200x800/filters:focal(1090x452:1426x788)/cdn.vox-cdn.com/uploads/chorus_image/image/64772801/SDCC_Dragon_Prince_Season_3___poster.0.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lion_Passant_Guardant.svg/1200px-Lion_Passant_Guardant.svg.png",
      "https://images.squarespace-cdn.com/content/v1/5b8424eb1137a67b0a8c93cd/1565430505646-0PP92HEL77V31JQWCAIZ/ke17ZwdGBToddI8pDm48kBza0r33eNz2Cxt_UtBM4gh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmlMqpINHCYwrjchQjceiMlYin-WBRXsd_L7dE8FBA-vfKy0-0tg0VvHvS80n7Z2Zl/public.jpeg",
      "https://upload.wikimedia.org/wikipedia/vi/5/5f/Original_Doge_meme.jpg",
      "https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Batman-Bat-Signal-Comic.jpg"],

    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeBsFZapQuTledX5-LlFWX-jFKKjsXpbpgw&usqp=CAU",
      "https://www.thespruceeats.com/thmb/H7eq5mNc4DThH0JYFs6BI9b90VE=/1500x1000/filters:fill(auto,1)/steamed-corn-on-the-cob-2138219-hero-01-8ba7ab5f6a2f42338ea73e707228b15c.jpg",
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
      "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/eggplant.jpg?itok=FyEpBSrd",
      "https://thumbs.dreamstime.com/b/fresh-pineapple-tree-farm-69434386.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ob5GuSArQLk_5FagI8MQ3iWeS2IQpGTLTw&usqp=CAU",
      "https://noveltystreet.com/wp-content/uploads/2014/06/White-Carolina-Pineberry-Plants-White-Strawberry-Pineapple-Taste.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Field_in_K%C3%A4rk%C3%B6l%C3%A4.jpg",
      "https://static.zerochan.net/Scarecrow.%28Batman%29.full.546122.jpg",
      "https://insidearabia.com/wp-content/uploads/2020/04/Locusts-by-the-billions-descend-on-parts-of-Kenya-in-the-worst-outbreak-in-70-years-AP-Photo-Ben-Curtis-Feb.-2020-scaled.jpg"]
  ]

  getThemeNumber = () => {
    var min = 0;
    var max = 8;
    var ran = (Math.random());
    var rand = parseInt(min + Math.round(ran * (max - min)));
    this.setState({
      themeNumber: rand
    })
    //console.log(rand)
  }

  componentDidMount() {
    this.getThemeNumber();
  }


  // will need to use an array or something to get a random assortment of images on the page
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  //we may want to display the image corresponding to the user input but for now we will just display any image on a random theme
  //accept multiple correct answers

  handleSubmit = (event) => {

    if (this.state.value !== '') {

      event.preventDefault();
      var temp = this.state.count;
      var templ_score = this.state.score;
      console.log(this.state.value)
      console.log(this.themes[this.state.themeNumber])
      //if you guess the theme correctly
      if (this.state.value === this.themes[this.state.themeNumber]) {

        this.handleClear();

        document.getElementsByClassName('hidden-vis')[0].style.visibility = 'visible';
        document.getElementsByClassName('hidden-vis')[1].style.visibility = 'visible';
        document.getElementsByClassName('hidden-vis')[0].innerHTML = `Congratulation, you win. Your score is ${templ_score}`;
        this.handleScore();
        return;
      }

      document.getElementsByClassName('im')[this.state.count].src = this.imageDict[this.state.themeNumber][this.state.count];
      document.getElementsByClassName('im')[this.state.count].style.visibility = 'visible';
      temp = temp + 1;
      var tempScore = this.state.score;

      if (temp > 9) {
        temp = 0
      }
      this.setState({
        score: tempScore - 100,
        count: temp
      })
    }
  }

  handleScore = () => {
    this.setState({
      score: 1000
    })
  }

  handleClear = () => {
    this.getThemeNumber();
    this.setState({
      count: 0,

      value: ''
    });
    for (let index = 0; index < 9; index++) {
      document.getElementsByClassName('im')[index].style.visibility = 'hidden';
    }
    document.getElementsByClassName('hidden-vis')[0].style.visibility = 'hidden';
    document.getElementsByClassName('hidden-vis')[1].style.visibility = 'hidden';
  }
  render() {
    return (
      <div className="App" >
        <div className="center-text">
          <input id="general-guess" className="margin-top" value={this.state.value} onChange={this.handleChange} />
          <input id="theme-guess" onChange={this.handleChange} />
          <p>Guess</p>
          <h1 className="hidden-vis winner-text">Congratulations, you guessed it correct! You scored: </h1>
          <SpecialButton type="submit" handle={this.handleSubmit} />

          <SpecialButton type="clear" handle={this.handleClear} />
          <SpecialButton type="clueless" />
        </div>
        <ImageDisplayer />
        <div className="absolute hidden-vis">
          <div className="fireworks"></div>
        </div>

      </div >
    );
  }
}

export default App;
