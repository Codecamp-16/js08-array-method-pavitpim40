const playlist = ['ระเบิดเวลา', 'แผ่นดินไหวใจอ้าย', 'กอดเสาเถียง', 'ขี้เถ่า'];

// array.<method>(input)
//arr.indexOf("b") // input == string
//arr.slice(1) // input == number

// array.<higher order method>( input == function )

function carabowBand(music, index, entirePlaylist) {
  console.log(`เพลงที่ ${index + 1}`, music, entirePlaylist);
}

function paradoxBand(music, index, entirePlaylist) {
  console.log(`เพลงที่ ${index + 1}:อ๊ากกกกกกกกกก`, music);
}

// รับ function มา execute ตามจำนวน arr.length
// forEach == Higher Order Function
// playlist.forEach(carabowBand)

playlist.forEach(paradoxBand);
