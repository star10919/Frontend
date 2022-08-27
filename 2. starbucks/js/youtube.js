 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {  // 함수명 변경하면 절대 안됨!!
  // <div id="player"></div>
  new YT.Player('player', {
     videoId: 'An6LvWQuj_8',  // 최초 재생할 유튜브 영상 ID 넣기
     PlayerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8'  // 반복 재생할 유튜브 영상 ID 목록
     },
     events: {
      onReady: function (event) {
        event.target.mute() // target: 지금 재생되고 있는 영상, mute: 음소거
      }
     }
   });
 }
