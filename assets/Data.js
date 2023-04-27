const songs = [
  {
    ZingMp3Id: "ZW8W9UBE",
    artist: "Vũ.",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 262,
    title: "LẠ LÙNG (Original)",
    url: "url",
  },
  {
    ZingMp3Id: "IWB8F668",
    artist: "Vũ",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 246,
    title: "Đông Kiếm Em - Vũ",
    url: "url",
  },
  {
    ZingMp3Id: "ZWBU79ZI",
    artist: "Doãn Hiếu, BMZ",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/0/f/e/90fe14198ba6906f8fd2fb211c86ac01.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 250,
    title: "Nụ Cười 18 20",
    url: "url",
  },
  {
    ZingMp3Id: "Z6ZO8B0O",
    artist: "Dunghoangpham",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/6/7/d/867dea78919c4ad9e000d1385c9042ab.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 210,
    title: "Quả Phụ Tướng",
    url: "url",
  },
  {
    ZingMp3Id: "ZWBIEWBI",
    artist: "buitruonglinh",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/3/2/c83247bc75a132fdd93982c10b2cc152.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 266,
    title: "Đường Tôi Chở Em Về",
    url: "url",
  },
  {
    ZingMp3Id: "ZW8I7FFB",
    artist: "Rhymastic, Masew",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/8/4/84ae9f554c3ba023f4a4cfcf3abf8461_1504989277.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 199,
    title: "Yêu 5 (Masew Mix)",
    url: "url",
  },
  {
    ZingMp3Id: "Z6WZD78I",
    artist: "Thành Đạt",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 319,
    title: "Sao Cũng Được",
    url: "url",
  },
  {
    ZingMp3Id: "ZW9C87EF",
    artist: "Sparkle",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 407,
    title: "Kimi no Na wa",
    url: "url",
  },
  {
    ZingMp3Id: "IWB80U0I",
    artist: "(Your Name.)",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 344,
    title: "Nandemonaiya Kimi no Na wa. (Your Name.)",
    url: "url",
  },
  {
    ZingMp3Id: "IWBW7U9C",
    artist: "Hotarubi no mori e",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 238,
    title: "You Can Be King Again",
    url: "url",
  },
  {
    ZingMp3Id: "ZWAADCEU",
    artist: "Kenshi Yonezu",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/7/2/df72a19eb4db31f6ceb33db1208ba583.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 256,
    title: "Lemon",
    url: "url",
  },
  {
    ZingMp3Id: "ZW8I80AU",
    artist: "Kenshi Yonezu, daoko,",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 293,
    title: "DAOKO × 米津玄師『打上花火』MUSIC VIDEO",
    url: "url",
  },
  {
    ZingMp3Id: "Z66CUCE8",
    artist: "MCK",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/8/4/e/b84ea2c4ff2054f1a8a94b668a00dfa4.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 194,
    title: "Anh Đã Ổn Hơn",
    url: "url",
  },
  {
    ZingMp3Id: "Z66CUCDF",
    artist: "MCK, tlinh",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/8/4/e/b84ea2c4ff2054f1a8a94b668a00dfa4.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 142,
    title: "Chỉ Một Đêm Nữa Thôi",
    url: "url",
  },
  {
    ZingMp3Id: "ZZWW6WID",
    artist: "Nhiều nghệ sĩ",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/c/6/7/4c67b208114ae924b9c913ef3637f8ab.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 178,
    title: "Thích Quá Rùi Nà",
    url: "url",
  },
  {
    ZingMp3Id: "Z6ZU6E7O",
    artist: "O.lew",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/4/3/4/9434543f977168783a58bdcef063136d.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 279,
    title: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
    url: "url",
  },
  {
    ZingMp3Id: "Z6OBZWUU",
    artist: "Chewie Melodies, Pealeaf",
    artwork:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/f/1/8/7f18bb8e9593d76677d7946a8395b4d7.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 258,
    title: "KANATA HALUKA (feat. Pealeaf)",
    url: "url",
  },
  {
    ZingMp3Id: "notfound",
    artist: "RADWIMPS",
    artwork:
      "https://avatar-ex-swe.nixcdn.com/playlist/2023/03/20/4/8/c/a/1679297799836_500.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 355,
    title: "Kanata Haluka",
    url: "url",
  },
  {
    ZingMp3Id: "notfound",
    artist: "RADWIMPS",
    artwork:
      "https://avatar-ex-swe.nixcdn.com/playlist/2023/03/20/4/8/c/a/1679297799836_500.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 237,
    title: "Suzume",
    url: "url",
  },
  {
    ZingMp3Id: "notfound",
    artist: "RADWIMPS",
    artwork:
      "https://avatar-ex-swe.nixcdn.com/playlist/2023/03/20/4/8/c/a/1679297799836_500.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 295,
    title: "Tamaki",
    url: "url",
  },
  {
    ZingMp3Id: "notfound",
    artist: "Yorushika",
    artwork:
      "https://i1.sndcdn.com/artworks-sKjyKYO9hduKcqT4-oTkzzw-t500x500.jpg",
    default_artwork:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-rn.appspot.com/o/images%2Fdefault_artwork.png?alt=media&token=3e352d53-efec-4907-8f6b-d286c007e47b",
    duration: 290,
    title: "Usotsuki",
    url: "url",
  },
];

export default songs;
