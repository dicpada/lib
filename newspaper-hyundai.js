// 현대불교신문 목록 — 신문 책꽂이가 처음 열릴 때만 불러옴
// files 항목: 'YYYY년_제N호(YYYY.M.D).pdf' 형식 이름
//   · 구글 드라이브: { name: '2024년_제1500호(2024.1.1).pdf', url: 'https://drive.google.com/file/d/…/view' }
//   · R2 등 같은 주소 아래 파일: base에 주소를 적고 이름 문자열만 나열
window.NEWSPAPER_DATA = window.NEWSPAPER_DATA || {};
window.NEWSPAPER_DATA.hyundai = {
  base: '',
  files: [
    { name: '2024년_제1500호(2024.9.18).pdf', url: 'https://drive.google.com/file/d/1IE4oz7WHF0UoBTrKIhjKzpGd1XSOjWTH/view?usp=sharing' },
    { name: '2026년_제1599호(2026.10.28).pdf', url: 'https://drive.google.com/file/d/1n1Mj2CkKTGrCLOhO0Keno2QDJy6EJXds/view?usp=sharing' }
  ]
};
