'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('videos', [
      {
        "title": "미나리",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1873/187310_P20_165701.jpg",

        "pubDate": "2020",
        "director": "정이삭|",
        "actor": "윌 패튼|스티븐 연|한예리|윤여정|앨런 김|노엘 조|",

      },
      {
        "title": "극장판 귀멸의 칼날: 무한열차편",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1960/196051_P11_141733.jpg",

        "pubDate": "2020",
        "director": "소토자키 하루오|",
        "actor": "하나에 나츠키|키토 아카리|",

      },
      {
        "title": "잭 스나이더의 저스티스 리그",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2032/203288_P01_104623.jpg",

        "pubDate": "2021",
        "director": "잭 스나이더|",
        "actor": "벤 애플렉|헨리 카빌|갤 가돗|제이슨 모모아|에즈라 밀러|레이 피셔|",

      },
      {
        "title": "라야와 마지막 드래곤",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1845/184518_P08_142725.jpg",

        "pubDate": "2020",
        "director": "돈 홀|까를로스 로페즈 에스트라다|",
        "actor": "아콰피나|켈리 마리 트란|산드라 오|대니얼 대 킴|젬마 찬|",

      },
      {
        "title": "소울",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1845/184517_P12_105825.jpg",

        "pubDate": "2020",
        "director": "피트 닥터|",
        "actor": "제이미 폭스|티나 페이|다비드 딕스|",

      },
      {
        "title": "그녀",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1019/101950_P40_140928.jpg",

        "pubDate": "2013",
        "director": "스파이크 존즈|",
        "actor": "호아킨 피닉스|에이미 아담스|루니 마라|스칼릿 조핸슨|",

      },
      {
        "title": "내가 사랑했던 모든 남자들에게: 언제나 그리고 영원히",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2016/201657_P07_164208.jpg",

        "pubDate": "2021",
        "director": "마이클 피모그나리|",
        "actor": "라나 콘도르|노아 센티네오|",

      },
      {
        "title": "여름으로 가는문 -너가 있는 미래로-",
        "thumbnail": "",

        "pubDate": "2021",
        "director": "미키 타카히로|",
        "actor": "야마자키 켄토|키요하라 카야|후지키 나오히토|나츠나|",

      },
      {
        "title": "내가 죽던 날",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1903/190381_P52_115728.jpg",

        "pubDate": "2020",
        "director": "박지완|",
        "actor": "김혜수|이정은|노정의|",

      },
      {
        "title": "빅풋 주니어2: 패밀리가 떴다",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1946/194648_P02_111150.jpg",

        "pubDate": "2020",
        "director": "벤 스타센|제레미 데그루손|",
        "actor": "",

      },
      {
        "title": "유어 아이즈 텔",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1960/196053_P13_095515.jpg",

        "pubDate": "2020",
        "director": "미키 타카히로|",
        "actor": "요시타카 유리코|요코하마 류세이|마치다 케이타|",

      },
      {
        "title": "그녀가 사라졌다",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1986/198627_P14_124550.jpg",

        "pubDate": "2020",
        "director": "루크 이브|",
        "actor": "브렌튼 스웨이츠|릴리 설리반|조엘 잭슨|",

      },
      {
        "title": "100% 울프: 푸들이 될 순 없어",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1953/195370_P10_175644.jpg",

        "pubDate": "2020",
        "director": "알렉스 슈타더만|",
        "actor": "",

      },
      {
        "title": "하우스 : 혼자가 아니야",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1938/193832_P01_155052.jpg",

        "pubDate": "2020",
        "director": "에두아르도 로드리게즈|",
        "actor": "카티아 윈터|레야 캐틀렛|",

      },
      {
        "title": "조선의 별, 박 에스더가 남긴 선물",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1944/194482_P01_150017.jpg",

        "pubDate": "2020",
        "director": "이제선|",
        "actor": "",

      },
      {
        "title": "헤어지기 전 우리가 해야 할 10가지",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1975/197587_P01_155610.jpg",

        "pubDate": "2020",
        "director": "갈트 니더호퍼|",
        "actor": "크리스티나 리치|해미쉬 링클레이터|카티아 윈터|존 아브라함스|미아 싱클레어 제네스|",

      },
      {
        "title": "해리포터와 잉크 마법사의 여행",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2030/203098_P01_154544.jpg",

        "pubDate": "2020",
        "director": "액설 아르졸라|",
        "actor": "",

      },
      {
        "title": "해리 포터와 죽음의 성물 - 2부",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0475/47528_P50_144916.jpg",

        "pubDate": "2011",
        "director": "데이빗 예이츠|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 죽음의 성물 - 1부",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0679/67901_P52_160214.jpg",

        "pubDate": "2010",
        "director": "데이빗 예이츠|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 혼혈 왕자",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0679/67900_P01_130458.jpg",

        "pubDate": "2009",
        "director": "데이빗 예이츠|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 불사조 기사단",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0570/E7095-00.jpg",

        "pubDate": "2007",
        "director": "데이빗 예이츠|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 불의 잔",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0378/37883_P158_182652.jpg",

        "pubDate": "2005",
        "director": "마이크 뉴웰|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 아즈카반의 죄수",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0355/35546_P87_155323.jpg",

        "pubDate": "2004",
        "director": "알폰소 쿠아론|",
        "actor": "다니엘 래드클리프|엠마 왓슨|루퍼트 그린트|",

      },
      {
        "title": "해리 포터와 비밀의 방",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0339/C3930-06.jpg",

        "pubDate": "2002",
        "director": "크리스 콜럼버스|",
        "actor": "다니엘 래드클리프|루퍼트 그린트|엠마 왓슨|",

      },
      {
        "title": "해리 포터와 마법사의 돌",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0306/30688_P28_142632.jpg",

        "pubDate": "2001",
        "director": "크리스 콜럼버스|",
        "actor": "다니엘 래드클리프|루퍼트 그린트|엠마 왓슨|",

      },
      {
        "title": "라라랜드",

        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1349/134963_P36_161820.jpg",

        "pubDate": "2016",
        "director": "데이미언 셔젤|",
        "actor": "엠마 스톤|라이언 고슬링|",

      },
      {
        "title": "안녕 나의 크라머 퍼스트 터치",
        "thumbnail": "",
        "pubDate": "2021",
        "director": "타쿠노 세이키|",
        "actor": "우치야마 코우키|오오사카 료타|",
      },
      {
        "title": "나의 첫 번째 슈퍼스타",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1937/193781_P01_113501.jpg",
        "pubDate": "2020",
        "director": "니샤 가나트라|",
        "actor": "다코타 존슨|트레시 엘리스 로스|",
      },
      {
        "title": "나의 별에게",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2028/202880_P01_144127.JPEG",
        "pubDate": "2020",
        "director": "황다슬|",
        "actor": "손우현|김강민|전재영|",
      },
      {
        "title": "나의 사랑스러운 혁명가",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1986/198629_P01_140854.jpg",
        "pubDate": "2020",
        "director": "로드리고 세풀베다|",
        "actor": "알프레도 카스트로|레오나르도 오르티스그리스|줄리에타 질베르베르그|세르지오 헤르난데즈|",
      },
      {
        "title": "시네마의 죽음 그리고 나의 아버지도",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1948/194848_P01_160732.jpg",
        "pubDate": "2020",
        "director": "대니 로젠버그|",
        "actor": "마렉 로젠바움|로니 쿠반|",
      },
      {
        "title": "사정하는 나의 아내",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1994/199415_P01_140740.jpg",
        "pubDate": "2020",
        "director": "이지 마츠모토|",
        "actor": "사쿠라 마나|",
      },
      {
        "title": "나의 패션",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1991/199165_P01_165512.JPG",
        "pubDate": "2020",
        "director": "마르코 폴리니|",
        "actor": "",
      },
      {
        "title": "유어 아이즈 텔",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1960/196053_P13_095515.jpg",
        "pubDate": "2020",
        "director": "미키 타카히로|",
        "actor": "요시타카 유리코|요코하마 류세이|마치다 케이타|",
      },
      {
        "title": "너의 얼굴은",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2030/203084_P01_110937.JPEG",
        "pubDate": "2020",
        "director": "켈렌 무어|",
        "actor": "줄리아 골다니 텔레스|이기홍|브랜든 플린|",
      },
      {
        "title": "너의 오름",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2004/200465_P01_112307.png",
        "pubDate": "2020",
        "director": "박석영|",
        "actor": "",
      },
      {
        "title": "너의 시선이 머무는 곳에",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1948/194884_P04_145011.jpg",
        "pubDate": "2020",
        "director": "황다슬|",
        "actor": "한기찬|장의수|최연청|전재영|",
      },
      {
        "title": "너의 기억",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1983/198393_P04_181704.png",
        "pubDate": "2020",
        "director": "김동식|",
        "actor": "우지현|",
      },
      {
        "title": "나의 청춘은 너의 것",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1883/188361_P00_134556.jpg",
        "pubDate": "2019",
        "director": "주동|대몽영|",
        "actor": "송운화|송위룡|",
      },
      {
        "title": "지난밤 너의 미소",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1821/182143_P01_145608.jpg",
        "pubDate": "2019",
        "director": "캐비치 니앙|",
        "actor": "",
      },
      {
        "title": "너의 눈 속으로",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1898/189843_P01_112815.jpg",
        "pubDate": "2019",
        "director": "라우라 판데르제|",
        "actor": "",
      },
      {
        "title": "너의 결혼식",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1406/140652_P38_143110.jpg",
        "pubDate": "2018",
        "director": "이석근|",
        "actor": "박보영|김영광|",
      },
      {
        "title": "너의 췌장을 먹고 싶어",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1753/175318_P15_105507.jpg",
        "pubDate": "2018",
        "director": "우시지마 신이치로|",
        "actor": "타카스기 마히로|린|",
      },
      {
        "title": "내일도 우린 사랑하고 있을까",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/2019/201945_P05_115116.jpg",
        "pubDate": "2020",
        "director": "주남|",
        "actor": "리홍기|안젤라베이비|",
      },
      {
        "title": "오타쿠에게 사랑은 어려워",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1915/191577_P02_144716.jpg",
        "pubDate": "2020",
        "director": "후쿠다 유이치|",
        "actor": "타카하타 미츠키|야마자키 켄토|나나오|사이토 타쿠미|",
      },
      {
        "title": "사랑하고 사랑받고, 차고 차이고",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1969/196979_P10_144146.jpg",
        "pubDate": "2020",
        "director": "쿠로야나기 토시마사|",
        "actor": "한 메구미|시마자키 노부나가|사이토 소우마|스즈키 마리카|",
      },
      {
        "title": "존경하고 사랑하는 국민여러분",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1837/183780_P01_103826.jpg",
        "pubDate": "2020",
        "director": "김진홍|",
        "actor": "김대중|유시민|한홍구|이동형|",
      },
      {
        "title": "사랑 뒤의 사랑",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1965/196575_P01_133146.jpg",
        "pubDate": "2020",
        "director": "허안화|",
        "actor": "마사순|유비홍|펑위옌|",
      },
      {
        "title": "사랑하세요",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1988/198875_P01_103207.jpg",
        "pubDate": "2020",
        "director": "조해슬|",
        "actor": "",
      },
      {
        "title": "사랑이 빠진 공주",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1996/199605_P01_142510.jpg",
        "pubDate": "2020",
        "director": "홍수민|",
        "actor": "",
      },
      {
        "title": "청춘랜드",
        "thumbnail": "",
        "pubDate": "2020",
        "director": "안성건|",
        "actor": "전여진|안성건|홍태선|설유진|강필선|이명준|",
      },
      {
        "title": "청춘 돼지는 꿈꾸는 소녀의 꿈을 꾸지 않는다",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1866/186606_P01_174212.jpg",
        "pubDate": "2019",
        "director": "마스이 소이치|",
        "actor": "이시카와 카이토|세토 아사미|",
      },
      {
        "title": "나의 청춘은 너의 것",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1883/188361_P00_134556.jpg",
        "pubDate": "2019",
        "director": "주동|대몽영|",
        "actor": "송운화|송위룡|",
      },
      {
        "title": "청춘",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1884/188499_P01_161107.png",
        "pubDate": "2019",
        "director": "강경석|",
        "actor": "",
      },
      {
        "title": "청춘빌라 살인사건",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1767/176747_P04_114332.jpg",
        "pubDate": "2018",
        "director": "신해강|",
        "actor": "김영호|김정팔|",
      },
      {
        "title": "스튜핏 영 하트",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1790/179025_P01_151415.jpg",
        "pubDate": "2018",
        "director": "셀마 빌후넨|",
        "actor": "필라 비탈라|빌레 하파살로|",
      },
      {
        "title": "청춘다반사",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1819/181911_P01_111755.jpg",
        "pubDate": "2018",
        "director": "지웅|",
        "actor": "박지훈|강지석|",
      },
      {
        "title": "그러면 청춘, 그러나 청춘",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1743/174346_P01_155403.jpg",
        "pubDate": "2018",
        "director": "아카바 히로시|",
        "actor": "시미즈 후미카|오오카와 히로시|",
      },
      {
        "title": "반지의 제왕",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0981/98144_P01_150352.jpg",
        "pubDate": "2012",
        "director": "",
        "actor": "이휘재|김신영|",
      },
      {
        "title": "반지의 제왕: 왕의 귀환",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31796_P74_100250.jpg",
        "pubDate": "2003",
        "director": "피터 잭슨|",
        "actor": "일라이저 우드|숀 애스틴|앤디 서키스|이안 맥켈런|리브 타일러|비고 모텐슨|올랜도 블룸|존 라이스 데이비스|빌리 보이드|도미닉 모나한|버나드 힐|미란다 오토|",
      },
      {
        "title": "비욘드 더 무비 - 반지의 제왕 3",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0639/63952_P01_141159.jpg",
        "pubDate": "2003",
        "director": "",
        "actor": "숀 애스틴|올랜도 블룸|",
      },
      {
        "title": "반지의 제왕: 두 개의 탑",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31795_P38_100048.jpg",
        "pubDate": "2002",
        "director": "피터 잭슨|",
        "actor": "일라이저 우드|이안 맥켈런|비고 모텐슨|",
      },
      {
        "title": "비욘드 더 무비 - 반지의 제왕",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0639/63951_P01_090942.jpg",
        "pubDate": "2002",
        "director": "리자 코스|",
        "actor": "필 크로리|존 호우|",
      },
      {
        "title": "반지의 제왕: 반지 원정대",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31794_P49_134515.jpg",
        "pubDate": "2001",
        "director": "피터 잭슨|",
        "actor": "일라이저 우드|이안 맥켈런|리브 타일러|비고 모텐슨|숀 애스틴|케이트 블란쳇|",
      },
      {
        "title": "기생충",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1619/161967_P80_151640.jpg",
        "pubDate": "2019",
        "director": "봉준호|",
        "actor": "송강호|이선균|조여정|최우식|박소담|이정은|장혜진|",
      },
      {
        "title": "그린 북",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1715/171539_P26_135622.jpg",
        "pubDate": "2018",
        "director": "피터 패럴리|",
        "actor": "비고 모텐슨|마허샬라 알리|",
      },
      {
        "title": "가버나움",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1748/174830_P17_104205.jpg",
        "pubDate": "2018",
        "director": "나딘 라바키|",
        "actor": "자인 알 라피아|요르다노스 시프로우|",
      },
      {
        "title": "베일리 어게인",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1449/144906_P15_103017.jpg",
        "pubDate": "2017",
        "director": "라세 할스트롬|",
        "actor": "조시 게드|데니스 퀘이드|K.J. 아파|브라이스 게이사르|브릿 로버트슨|",
      },
      {
        "title": "당갈",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1572/157243_P15_104207.jpg",
        "pubDate": "2016",
        "director": "니테쉬 티와리|",
        "actor": "아미르 칸|파티마 사나 셰이크|산야 말호트라|",
      },
      {
        "title": "쇼생크 탈출",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0174/17421_P16_095733.jpg",
        "pubDate": "1994",
        "director": "프랭크 다라본트|",
        "actor": "팀 로빈스|모건 프리먼|",
      },
      {
        "title": "나 홀로 집에 5 ",
        "thumbnail": "",
        "pubDate": "2012",
        "director": "피터 휴잇|",
        "actor": "에디 스티플스|조델 퍼랜드|말콤 맥도웰|데비 마자르|",
      },
      {
        "title": "나홀로 집에",
        "thumbnail": "",
        "pubDate": "2007",
        "director": "정해선|",
        "actor": "",
      },
      {
        "title": "나 홀로 집에 4",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0377/C7701-00.jpg",
        "pubDate": "2002",
        "director": "로드 다니엘|",
        "actor": "마이크 웨인버그|프렌치 스튜어트|미시 파일|",
      },
      {
        "title": "나 홀로 집에 3",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0191/A9150-00.jpg",
        "pubDate": "1997",
        "director": "라자 고스넬|",
        "actor": "알렉스 디 린츠|오렉 크루파|하빌랜드 모리스|데이비드 손톤|스칼릿 조핸슨|레니 본 돌렌|마리안 셀즈|리아 킬스테트|",
      },
      {
        "title": "나 홀로 집에 2 - 뉴욕을 헤매다",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0122/A2270-00.jpg",
        "pubDate": "1992",
        "director": "크리스 콜럼버스|",
        "actor": "맥컬리 컬킨|조 페시|다니엘 스턴|존 허드|캐서린 오하라|",
      },
      {
        "title": "나 홀로 집에",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0100/A0016-02.jpg",
        "pubDate": "1990",
        "director": "크리스 콜럼버스|",
        "actor": "맥컬리 컬킨|조 페시|다니엘 스턴|존 허드|로버츠 브로좀|캐서린 오하라|",
      },
      {
        "title": "라이언 일병 구하기",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0189/A8988-00.jpg",
        "pubDate": "1998",
        "director": "스티븐 스필버그|",
        "actor": "톰 행크스|에드워드 번즈|톰 시즈모어|제레미 데이비스|빈 디젤|아담 골드버그|배리 페퍼|지오바니 리비시|맷 데이먼|데니스 파리나|테드 댄슨|",
      },
      {
        "title": "포레스트 검프",
        "thumbnail": "https://ssl.pstatic.net/imgmovie/mdi/mit110/0171/17159_P12_153452.jpg",
        "pubDate": "1994",
        "director": "로버트 저메키스|",
        "actor": "톰 행크스|",
      }


    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('videos', null, {});
  }
};
