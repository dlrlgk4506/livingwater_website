'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "d8fec751e0d93f621823291b5d34ad33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dd4607cd0c9d8efe25bd708b25f65e81",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3452f40e8b4eaccce61902c4eed3d281",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74e247a3d94db773865e7c7d4ff3ec43",
".git/logs/refs/heads/main": "3f3c31d46ce7228e6a40fda88ecc033a",
".git/logs/refs/remotes/origin/main": "c5691e3159cf1cb7a3b478249c6903df",
".git/objects/03/58d96eacfc7b9a154d8df3337da363239f7856": "184a88a8902e56fa9a1ce99a867e1310",
".git/objects/03/5f379615b1e7d688223f0ab0e4f6bb0fc490f9": "6e1027e3cb27d4302758921ac0961514",
".git/objects/04/6932a4b6de6239f2e5c9433b244cbba4d58c07": "442fc18fd6b71f62b9222f0443eb2225",
".git/objects/04/8d0c882cde564cf4c2430083de595edac8627e": "16909831640e2ea7e40b1a16e067bb90",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0e/3d8ac5aa67a97b462d093200b90bdd52ed8c5a": "e4a35a556a07b985c11cc6eb4c99f212",
".git/objects/13/02bdcfb1fa3dfc9977ab4368d6797d70113b15": "9b6f0f96e31620c5f469bbe0dbacc4f9",
".git/objects/14/51c4e7011ad9dcbe92e4a01b2e83ac45cedebc": "6b0b0337a02eaaa4b591cf2190570181",
".git/objects/14/c03cace37c1a91cb015ab9eefbda73c2e720a9": "e97908eb04d732207d649fc9b746062f",
".git/objects/15/4bb009e5c0b373cf863387bda57b27bfadfdc6": "2451a2b14f68304041f2bccee0181cc9",
".git/objects/15/6de3041f68f73e29cddf5cfff4602e7cb66fb1": "af4eb73a24e0921c7b3eeaf143a8de1e",
".git/objects/16/6df389b8520947e5b82059438d73c7b188519f": "e514f71e881897e991ed112b6518282e",
".git/objects/16/c3350c1439061fc06af4e0ed5546f4f174ae40": "18992fd5c01c1bdbe90a20b412eacb5a",
".git/objects/19/4406648844f7e98e20ce5b311d49e6ed978982": "c5942e7e5ad0f1d0b5ff127d414e3f13",
".git/objects/19/f2797887ad307c5c8642d5a01462e853e62579": "34edbb9e96a99232f3f4ddff1bd5d292",
".git/objects/1e/3e642b82a8ce1c70bb788330ac8a1d5ea4ef55": "8ebbb4a31dd350283537f5e47f13eee4",
".git/objects/1e/c01cb7c1f59b189bacb42ab935d15868f3cbf5": "bb9a3a3a4a5cdfcb472aa60b25150ace",
".git/objects/1f/378abdcc471ea3173d7d6842e1b2ff91fccc47": "b895377bbcf7f9777c79eed46512f787",
".git/objects/20/c382d051faeb5d9616da6e5376da2e36a6f6c6": "25f0c9580497f0449d2ab60054bf7fe6",
".git/objects/22/353e4958b49fe75c27d3dfdfa155d3425c723e": "e5643eebe30635456b89bb8e319088fc",
".git/objects/23/8de34f816b325b100125c2cfe23821f546da3e": "0856f2e0437ad14a8d35a53daf1ed1ba",
".git/objects/25/bc15dac3b2aba16d584d9dcca547f83055d0b1": "bdfc1cdd38342ec2caf38eaf19abe936",
".git/objects/2c/8727421defec4f330a9124c225bc137700cebe": "b08c7ae8b73978cd5e473e80a8c8546e",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/1c924dbdaca852b2cea8250a48ecd2b6fc4480": "faa6c722b4d2ef78005e772328cf889d",
".git/objects/2e/cb58cb4264622db35aeb334d324e590d9c12ad": "92c647d72ea64af0ff136748da7b6e76",
".git/objects/2f/350a6bd14b94f0a8524b8a15e545c9bda2d50d": "cb9f2497a6b964cf57131cf690eaaf2a",
".git/objects/30/0f745c01a0c6107a72e6e6a94ccc05424c5dad": "d06e93986adbee92aee8fe7c46b2655e",
".git/objects/33/592f11965537b04e395fc56f99edb382d265ae": "b077cf78214686fd51f9f473e2137824",
".git/objects/37/4b2f8cec8a00e3e25abf39d4996d9bc0a5e8d0": "367fd4a12eb5db207178a5a626a596a7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/d27e8aebb96d4621d17696629a71cd32127602": "c8457e83ca159dc25496d7acc5dc0001",
".git/objects/3b/f6a063389e319b79337c59be43caa535079c32": "88fbe0bcd2c8d79856262084042a8d1a",
".git/objects/3e/1ba2deca07a7d7d49f85322cbc52266b7ab10a": "357a120509d581bc51f541e551ba94b4",
".git/objects/3e/2e4c55112ffbd8c8bcceb1244e2186278cfe66": "e8219c90bcc4b0f52e5aeb3829f874a7",
".git/objects/3e/594fbde7a714db317fc964f27a75488101949a": "c64b47ec53c79179cbfb78129b76bd1c",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/8c247f3904cf046ee5edeeef0ab30979bec081": "a5fbd6fcbcdf59cd1e7e8a9a6af130f4",
".git/objects/41/37944433904c915eed4297e8dcf731ea2aceee": "74221d728014deeae3d09b05fc8e2a3d",
".git/objects/42/279af50607bc9e17c951fb92903e1fa77cb3c1": "868589cb0c2a75504095affc9462d93a",
".git/objects/42/d142376d1a99145d52f360f5a7706fc938b5d2": "64082cb61c37fb2d46072e54003d0808",
".git/objects/46/4852354d225e90a80f24c1b08496559737a2a1": "429398122385272d790710d2b0bb7566",
".git/objects/4a/621915f005bb20ff6359e32ff723ba6ea6504b": "9fd1881e369a2bb93837558b77b241cf",
".git/objects/4a/75b2e68728a2c4137863d1d4e59c3ffd3a7e44": "6fb68de658c6236a27c686031247bbfa",
".git/objects/4c/af8462a20c6eacc735a620798fa15bc008b2ef": "4854fa21cb8236a2fdbb7b20914326e2",
".git/objects/4d/60ba1cd83323f8cc596c61537143dedfed1c0d": "cb96fad7e37ff5e70d4e922c63f584d2",
".git/objects/4f/84b5d374a70e1b0a501b6c1009c77c658814e3": "60f89998bed01f73bf3f62df9b552d52",
".git/objects/50/c96d708375f435784264bdbfdd21b604c9217c": "24850a422ac064e042c8e6a676f68428",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/55/c3cac242fde4717f79ccf6d3a6c38a1bdf9662": "59c52f678895391e1e4f34eb144caf16",
".git/objects/58/78f308ebc3e05b7cce01c643fda2ff17ca3726": "bce14e49061ee60ed7350999c72bfcb7",
".git/objects/58/cd1034101dbdb3c0837e39a1eed2605a60177c": "caec6d9804de890ebaf23a8c40529269",
".git/objects/59/d2a7d369b1960612eee5f76e5cd64fbd5ac96c": "653a5ca1b82dc8826813f483789f72cc",
".git/objects/5a/32dd3eae3f0a4987ae62805809b02fe0a293ef": "c152c18b214f72fe1382d37b80376ad4",
".git/objects/5b/d761b490aa3404e052ac3b30c589635eb1b4ee": "1fd4fdd066450a83363c78626b2f60ca",
".git/objects/5c/159475b0ee06ff1ca7297297a74165168c3bac": "0d156443dba928dbf68a0db7e439a03c",
".git/objects/5d/95cab08f633eb163c57870ffbe4771914c7293": "d3c614a5a76203277320774311da0126",
".git/objects/61/8ec4df9cb4038f25bdac7dd3d96c44db35fbf7": "9a285cc9c2fb4f8333f3a1b7153117b2",
".git/objects/62/a9dcf1ff6c71e5df79b1de0792a91aaa80cd6d": "826ab2f301a478b4eea3c3b8cfd79e16",
".git/objects/63/fb26f251a8182fd8712552b4bac2236ef9933e": "404b9c032eaaa5e97fa5841bb88c1a40",
".git/objects/65/c7c455a6ccbd3b7f1351ce883d092af6eaefee": "bd545245656f2e016fd4402c2bf5a803",
".git/objects/66/8b9a8a1b5f7550f38973be30e6a9b106eca33b": "08f7362c233ddbf84180a397648d0547",
".git/objects/66/b4c71864f7c58de0152b08b09ac898474d9f47": "be29055bff9a68d04904d3d0cb377569",
".git/objects/67/a1b14b7e015616944ea887986ebfe263fed084": "a86bbcb67279bd1b084e723efa9bb92f",
".git/objects/67/be41edfdf1e2c55ebd087e6702394b6d479d0a": "9d651d9916417ccb84629bec22fe7e91",
".git/objects/68/12f5cf85afe19dc162fb7e20a68a74a65e51fe": "43a3fa25295de2c62c43cb3384b65905",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/d916a38b2001dc8557a57546bdb2632d7953a1": "21cdc5d891f356faefa8c85501466e8f",
".git/objects/69/fcd4872d20222ae42c6af1e24c2cad43e21045": "65bd8288098837e7c88b527e5034bb6a",
".git/objects/6b/8c6cba67e49423fd7692276ffe219d86246568": "3e5fa9b7ab5a7e1c1b9e8dc29512e398",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/44b82d426e7e6dd62e6799cad685a3cb4e19ed": "278dd9d538d8f5d45810cbc363a0739e",
".git/objects/6e/14f714febce569b45da358e9ebbb38958a9adf": "1ae178c02be6f1a7f26ed5b921080bca",
".git/objects/6e/852f72b1f170453cb8a2ffdb82eb447bef5e44": "0d97fb91eab2676daf4b8064545201b4",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/b31caed83d23205d118e3d0b93cc9d22a0541f": "64b642ae8b1ddcbdb28e2f70f230f98f",
".git/objects/74/ef332baf726263dddf228a2410db9a1fb95877": "c4f61908cea611433a6cf700a680f0dc",
".git/objects/75/19dd1c9810c6551b650f65f3cdf9eaa0d6bfe7": "1962f677d3a43006f9b084139a008907",
".git/objects/76/c1b6627bdfac584d1e0eb930a8987bd78521d6": "476fb52738ff67fe1ac79fe6820546c1",
".git/objects/77/df78e0ff392d3d0e3add1d616834c0876766f0": "3ff65a7fc66d8c96c6f91bdde277b1dd",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/305a3c482dfca0d1239180f37ab582137fe7a7": "ed21c843ce2e1f07d7cf220f220bec31",
".git/objects/7d/5b93b3e54e5126fc236a350ac5cdf05acd6051": "44edca6d2c7fec877f2425911170bf9f",
".git/objects/7f/545a7ad6f97d5469d832b5de4fce15bde7e7a0": "83cd5d3ff68b7dcdc83ef491eb83b5c8",
".git/objects/81/916a3225023bd509ebd031b8d74db9278834a9": "3a4c72f4109631c385b2808e15098b8b",
".git/objects/84/83314fd77e35e228b10356c275da3f64f97d8a": "7d7e65610234d8fc3ce2b861a36dbe5a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/13053a6d3e5c5df9f87706b081fbacf75db7d0": "e026d70d789b2a58969bff6fb459eb4e",
".git/objects/87/f1dcafd3ccfbf68ef40dcb3827bd0fa400fdc8": "44c8441d623092729da18dba5dd0013a",
".git/objects/87/ffba5a1821ff513b9ed1084f8e96fbfc806c68": "e5414eca74a231367f8d99456b85374e",
".git/objects/88/ef622f797635c351e7316ea21567fe80544ffb": "5fe7f7c4dc2bc1f215a129af528e77de",
".git/objects/89/2bc36e599e22c1a9c2d7d3152bd4b779f36000": "78747a7163684a6cddb61dcda6dbfae6",
".git/objects/8a/7f235e440e245216b50d9ff157d024941e6829": "f17b3df679e2dae577b97c55b410135a",
".git/objects/8a/c8f5e06285bf04eab541b2d993f74270a6f653": "5c99294268e815d4b8b7a21cd42b5b5e",
".git/objects/8b/264cc4169877667a3324a337d8015aa2230366": "ba3dcfa976e29e70cd676c9364cbf4ad",
".git/objects/8b/dcd27a5c28decd8da270ccb310f35277ee5a54": "e6a0c917802ee857ee30937e204db391",
".git/objects/8c/7f9a7ba91c5db9ee633d05d5e19f2dd68ea3dd": "a823db60bfaffbf1aed2df3706d5d235",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/6402147aed3a7a55ff9636b4634f5b196c7836": "158cab99981626ffa5b3d80baccf00cb",
".git/objects/92/6743273fdb2a6a64b43783625d7efec8b42f77": "2122fe6ea79a7f065e64c470fb0e222b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/c1388239295a84a4051cc94200ac60a7c6f7fb": "562b30436c15e90fe72679707d4d8194",
".git/objects/95/6f91b3d9a58c3d26c45fdefba25134947fb785": "5a9f34e2b20761b8751c7c20fad0c720",
".git/objects/96/393c6eaee78a8c50a5d9f10604d70057b1d533": "9e1ca9cc9383148b98cb58f556561023",
".git/objects/97/e4138c6667e260355e0dd5094fa5e383b72152": "3152640e61e1bcad19f93e62e7f463bb",
".git/objects/98/6b33936cbae16a6199dd9a6b2fec27da26b3cf": "2d7064176558822ce4e61bdde9e6c93a",
".git/objects/9a/00ebb53441d41f45e58a656721caee7e06ece4": "01e98dea597f970b7612e761ce965c5e",
".git/objects/9a/c1a341bb302d30597c0c9798123c44e4a34d4f": "b55fdc17c297a9058473c85a58539d86",
".git/objects/9b/482b3b17d474b089222c79c01e0e9024d1b615": "685afc68ede89cd4b78938b8faf7e639",
".git/objects/9c/0de83585cdac624912a9ecdf1365714613d798": "a9b349946e463a9e746e6d0428e07754",
".git/objects/9d/2e4117d322febd046448caa1daa9e1a2bcabcc": "4aa89df2f961235ac5b99339c93a2015",
".git/objects/9d/f895128678e811603df8f41d922ab6aeec6835": "c289fba8d3892af5bb821a2b5f60a8ea",
".git/objects/9e/70bf0450b28646eb520d242dc25d626f286092": "c1d3e28ed675a55b9e9849ee30c6c1fd",
".git/objects/9f/e70c470aed23540de39b6534502bbb97704745": "34f03e6994db1a2cbc8c0eb0630a7699",
".git/objects/a1/cab0b66f6d8b1c9e72f3c4ae50ce18b09c2fbd": "20a04e194247049ca8f14242f13f62a0",
".git/objects/a2/d0d272bed87bc143fc80f92645737507e6ad96": "adfdd11c50651753030dd7ad4f8fd224",
".git/objects/a3/3a2fb6c3496daca35f81b904a15fdeb979994d": "6b77955f6977301613fa4ba18360c336",
".git/objects/a5/7a65c7539ab6e853b303d49bd61f0caa915c4a": "14b50c81a18baf93f28fb06575e0020b",
".git/objects/a5/ff8f2488a76b7a58384e808dab63ee75ab0a59": "79e5fcdfaa3095dd0cb664fde0f84f70",
".git/objects/a7/30579c0497e1bb68fe7ce483785fe9638999f8": "89c0d4a45b708fec394fe32de5b56e4c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/7502d635e1b314de7971932ed751684394126a": "84524cacc5ce7aa49ff27b2310cf6765",
".git/objects/aa/c744b8327afc5a6b977f99320ecca0ec7fb541": "5f5c7258ee21b2ef9bc79988ae9b996a",
".git/objects/ab/8017f962e9eb925c427702a19934fac91c32cd": "d579c060d5cabca6ae8502df63191fd9",
".git/objects/ad/8d5fb25b69ce6ec21562ef4c73cca95a6f2148": "9cca90e127b984d46024d144f6e16a0a",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/dcc532b32767655ea1868ddf044a7abc8f9338": "374b32de192b1b95831454186dbf12a7",
".git/objects/b0/d31615cf127284a76279f6e47f8ef6bb40406b": "4162e6a2b87963f43ac36aeb0b1dc95b",
".git/objects/b4/3f301740125904b2b7666468a832912afc3945": "1a36c28a464c9769590e1e62d35fbd7e",
".git/objects/b5/bb8606eb8e49ab5a49c242e07c741bae4a490b": "a093373d5a8a8603f0717e5f402617d7",
".git/objects/b5/f4a983166195918fba796ade140617b0184e31": "6d4edafbe01f2b3a86f3e8901598a722",
".git/objects/b8/5b5bc131e634d8a6da033a8a335c60fa0aa699": "d7d713c5eac6d110d09c8d40c69f21c2",
".git/objects/b8/92109ec202458109320e124d1392117f12d3e7": "5b0c5bc5e40263f5bfb20f78edc47301",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/8eb1cf8465852d7c092823c803007100bb87d9": "dc5e5c04c38eebabd1efa0b992297099",
".git/objects/bc/d561a428e24ecfbc285fdbf9dab0d1b80f118d": "197a285dfddabce744c4f1435ca215a9",
".git/objects/bd/346e0570be88c0b7356d548ad5afb4f2dbcece": "7c9a68337f3186f69d84b72525949bf3",
".git/objects/be/8472e40686759b662fefe6bea91be348b8a517": "98403175c6dcce06759031846ca8a3b8",
".git/objects/bf/24e596e90719c3303efd58f76f74437718d5fc": "22674973eb59546a4857b2ec23c881cd",
".git/objects/c2/53b764b3b6c6b39ee11f5e5f997ceab71db340": "c2d4bb38114117fd758843f7924a3db5",
".git/objects/c2/638a105c42e257d55805842c1a658bc0bc4448": "d10d7308cbf3454984cb0235d9e3a769",
".git/objects/c3/f844a38523b2038bf5e7533133c6d99449c149": "0e832cd91c9bdf9dbcd745fbe25c7e5e",
".git/objects/c4/f225f19d768927e04508d84bb79b1932064d49": "6c828d1bd055c297f49ff3270263ec41",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/c12e91d46f08a5abfcfa70406d831d9d47882a": "84980e3010fab0957b7d0e1a806ce374",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/b97d3b02ca57d91e1639cff62b08f73901465f": "78fbaa12fe4c33df3c09749cfa6f9a10",
".git/objects/ca/54a06895626a1698b5b1d267bc20e1dda8e8dc": "107273d4b132a7a641d922620138342c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/76fea4c1ce9088b509e1497ea3061de40229ef": "c5af83ec2326c6aec8b2035ef848d223",
".git/objects/cc/7c72f9d0feff141e6f19f1473b528c96d20308": "1cdd6b9d7233e76baff9c1dbcbb2c9f2",
".git/objects/cc/c0f30d1774418824be187b946fd32803fb66bd": "dc9ebf495ad4f243af02cc33a2438514",
".git/objects/cd/d1d97126a7eef4e67b4b44c5cfd130b13eb1a7": "6ade39dc1c2c7f0a21b9c33c910e4953",
".git/objects/cf/15bb5e2ebf16fa3259dc4a1268d13bac756bdd": "1d4a062de8c6a4c493fe1c1beb89c633",
".git/objects/cf/62c260471b00f353a64f6561f3e1454cfdab7b": "8e87725634f4259139ded6a7a6eba597",
".git/objects/cf/daeadca41802665376305c54c04b7a5cb66df4": "43f0465f5f734df611101d59ffa69847",
".git/objects/d2/4c953c3c60d54449d23e52b4425c844ec1a288": "2fec7d7865c0e99b6ebe16ccb7bf5df1",
".git/objects/d2/bcc73635fbc7e7e2e639c79e84d749a2d25f6e": "b674dfd3e50dfcf0713d1cc808b42443",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4e694015223ad112249dbb6ce1a257c556f351": "7f36ccd938985098d63205defd62772a",
".git/objects/d8/ea11350263d154c34259eaca449e4ee4712971": "14ee739148c29da0a8a4543999861cf8",
".git/objects/d8/f96881218758c03653101e7bfb2ca5b4ff7fa3": "d4ded5a3a6846afac8d7348cff474a87",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/53af95fd3c392c6e73afd3e35d656a3391b744": "b8a906f10076d58854579b7ba0e4802f",
".git/objects/db/dff303833c21a5a7be819ded49d9c566708166": "9610c35b0487141a29ae54d806ec72bc",
".git/objects/dc/3536030c8e910c43141a90153ad7f24063ff0b": "fb6cae7899b11deffc76f33699d1dfe1",
".git/objects/dc/aeacbe53bcaea7e1524de37fd0edb24ba3a7a6": "9ef7e02ba50204ceda25add9ee633b1d",
".git/objects/df/83d9b37345a515f39e327a57e5315f78c2c117": "4ab8944003e4b5ca7f9f9d240404b47c",
".git/objects/e0/1e9f29dbd740d3d916db66c8e6649d5064094b": "0b9282117bc50f9a7c3604788638ad52",
".git/objects/e3/539d37a83b9fe28e33f81497bbd830673e31c8": "cc5e2314c462b5899e770671f4d6ddd5",
".git/objects/e4/10b9399ec6c85ec23e759168bc51c4e0534a36": "df93a2b01cbd11747cd2b26764256d05",
".git/objects/e5/17429a40624728c9b44b3124767989202abb64": "1a4a2120426ebd123cf8ad6b6f3fa67f",
".git/objects/e5/9c8fbaa52cd89f1b54f5bc9aa769ddec72435d": "557c6bbba06650453f158fed80c2e494",
".git/objects/e7/89363bf42782ddf4a6b64f9e2a964a0c60e8e9": "8e163f209cd696393a168508b56b1c8e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/a5e56f117931626d86543677a720870a749a70": "ba2ba40f4dad8493fd0f0dfda97220a0",
".git/objects/ec/1a3c0973dcf6626c174302bd3d51c88773f111": "be7a1ce901326178994d593cc1450bbc",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/f1/9db98fb7a1d7c7c8c4dd5bd1265e6d7624fa6d": "b70f83cba850bb0b5bc660ba8b5e8723",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/f9c58fe727375df83343fabb002ac2835dd961": "ad55bd7da1404eff3e334c23c444c4f0",
".git/objects/f8/13f2c554b24c6766aa51e8f7e52e58c19ee861": "faa79ac72077474ae935cc1e74304b31",
".git/objects/f8/83537cba12caf120fb751813501fd858275ddd": "74dfe904b2c811e9c4fdd55516d78774",
".git/objects/fa/7f6a9d4a7eb9733dc859ce6026959b807f37db": "ed277fd274fb055ab224a3d6b7974f3e",
".git/objects/fb/f96d350a92f046dbacab83aafb0a29d7e4cc0e": "86a7ba09087f3949813252b56c959e41",
".git/objects/fc/aa3d530a5c36bba98294c77c5a137cb3299f7a": "dc9ee02db3bc9e0c09dbcb817c57ce20",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "4f493aeca93632558b8fb97ad084326a",
".git/refs/heads/main": "b9757a789c10f2365111604f6324af56",
".git/refs/remotes/origin/main": "b9757a789c10f2365111604f6324af56",
".git/sourcetreeconfig.json": "d14aa70bca7e1cda8069fd18e758e260",
"assets/AssetManifest.bin": "838bd70ca5081a1ea0b16e29c2579470",
"assets/AssetManifest.bin.json": "4dd3150e578f33fbe95ce8e99e4808e5",
"assets/assets/1.5x/back_nor_btn.png": "76215e08bdc4cd32ab0f03a9d5146e3e",
"assets/assets/1.5x/comment_background.png": "43c1eb6c57546218a89d76098317b650",
"assets/assets/1.5x/icon.jpg": "b55435902668ad4578dcaf1489320a45",
"assets/assets/1.5x/ic_menu_download.png": "93370eacf9d6c4c4f9afa3c7491fc884",
"assets/assets/1.5x/ic_menu_home.png": "8c915a2081c78eddf378cbb2b28ceee5",
"assets/assets/1.5x/ic_menu_message.png": "c6eefedf49803c15803eef60ee93a6fc",
"assets/assets/1.5x/ic_menu_setting.png": "5c9b2d154a36d3fcdafbfc789931dd82",
"assets/assets/1.5x/message.png": "6e3652a19b83fd6184664af3e8d1ebf6",
"assets/assets/1.5x/n_heart.png": "4091749eccf6754d6ed88de34658665f",
"assets/assets/1.5x/player_background.png": "773b6d4aa5036ed17d1e156fad7e2a5e",
"assets/assets/1.5x/player_background_bar.png": "ba5e8832563f6f9d3f6f3fd7883a4adb",
"assets/assets/1.5x/player_bottom_background.png": "570de1f9662aa936196a773172bc6aa9",
"assets/assets/1.5x/p_comment.png": "562e4cc9ff20d4ad1a48772adcecc299",
"assets/assets/1.5x/p_download.png": "3536507d2fba947881d95402e1938672",
"assets/assets/1.5x/p_forward_move.png": "7223dc894b0d6189c0ded769784f28bb",
"assets/assets/1.5x/p_heart.png": "a555e85337b5f6ada17267fa89e052bc",
"assets/assets/1.5x/p_next.png": "5aae2f1f907dd24e3bc4ba917e0020ad",
"assets/assets/1.5x/p_pause.png": "8670b61ae5458e58f2132800a49098dd",
"assets/assets/1.5x/p_play.png": "0d0e811549f64bf028d370c15430ae57",
"assets/assets/1.5x/p_prev.png": "42b76b2f99411446f4b2e2305e7351f5",
"assets/assets/1.5x/p_prev_move.png": "cc901ee8a8e667e67b16ee8e7ee27881",
"assets/assets/1.5x/p_share.png": "8ab49898e92df1d38725efa0f69cf28e",
"assets/assets/1.5x/p_timer.png": "bb5593964a64df7a1b47399b0264155c",
"assets/assets/1.5x/stop.png": "1142379a8c2eb0318651691a285f1372",
"assets/assets/1.5x/symbol.png": "035eb366e0bfe51cc1d0e7ecf99bbbd4",
"assets/assets/1.5x/tree.png": "0271feb26569d10de59917dd0ebd45b3",
"assets/assets/1.5x/turntable.png": "eb894785c3a6ca324d5a74a4ed975387",
"assets/assets/2.0x/back_nor_btn.png": "d60bcdc2e3c2b5b4e108ffd61cb787bf",
"assets/assets/2.0x/comment_background.png": "8fda78af6d49405c32435e4d17bfe8ad",
"assets/assets/2.0x/icon.jpg": "48ca23e3a0ccc8ca644420aee54b42ba",
"assets/assets/2.0x/ic_menu_download.png": "7c497a043792e78da714aeccceed7562",
"assets/assets/2.0x/ic_menu_home.png": "351499a7ce57b4b55fe785b1d7889c6a",
"assets/assets/2.0x/ic_menu_message.png": "ac6b6753baaefe6250108fc9183abae0",
"assets/assets/2.0x/ic_menu_setting.png": "2231d9cac334712d0dbdcdef499f0e15",
"assets/assets/2.0x/message.png": "a3919c3e0c06d36bdb73463849ce7a46",
"assets/assets/2.0x/n_heart.png": "48be9305d1f4bd07afb6c4464a1054b6",
"assets/assets/2.0x/player_background.png": "31858e2d07845e2a8a854e8828690736",
"assets/assets/2.0x/player_background_bar.png": "c9338a5bc33d0b3aab17338dffa4fac7",
"assets/assets/2.0x/player_bottom_background.png": "dc890a30c8863d93cd3c31b72c2fbcf3",
"assets/assets/2.0x/p_comment.png": "44573a9eefdeaffc3d67327806d7588b",
"assets/assets/2.0x/p_download.png": "c680636e1d3e9c9a6a77e8b53d26dfd0",
"assets/assets/2.0x/p_forward_move.png": "f7b25e54e2c25774fe2cdc1c592f8028",
"assets/assets/2.0x/p_heart.png": "c671532f232253b7d38e6766a358a62b",
"assets/assets/2.0x/p_next.png": "f55b85956d35b988669e060456e54ddb",
"assets/assets/2.0x/p_pause.png": "6f5b1ea862fc8c5d92324c61e205e51f",
"assets/assets/2.0x/p_play.png": "6d3269e83399dfcd73fdb416f6391e65",
"assets/assets/2.0x/p_prev.png": "e82eb58d7124b4f1851b5073b46c78f5",
"assets/assets/2.0x/p_prev_move.png": "9bd7d8b550335870328ecb3f1867762b",
"assets/assets/2.0x/p_share.png": "2a3b6de7c46088e87e9943ccf468c983",
"assets/assets/2.0x/p_timer.png": "063f5082fb08c7906830e61cf9161351",
"assets/assets/2.0x/stop.png": "d212aac87b92dcb3be567905c62b407f",
"assets/assets/2.0x/symbol.png": "efd2d7801873efb2f928f054a7908944",
"assets/assets/2.0x/tree.png": "eef9bfc3e9774969b0b96229bc9e9ea6",
"assets/assets/2.0x/turntable.png": "e9fc778a15aebaeb8154277b46a93fad",
"assets/assets/3.0x/back_nor_btn.png": "fcd7e314eb1c2314739d2be69d0fa4eb",
"assets/assets/3.0x/comment_background.png": "9cb6a7c2bbbbd61bc59144522cb5646f",
"assets/assets/3.0x/icon.jpg": "d6e56baa777fae6c83973d9d6ec97ba1",
"assets/assets/3.0x/ic_menu_download.png": "057510fe9904aa2902c222c82b5d384f",
"assets/assets/3.0x/ic_menu_home.png": "b324d29a3c75ed065b57987af544a4f4",
"assets/assets/3.0x/ic_menu_message.png": "153a128d157e1d5bf8a563c268bb8700",
"assets/assets/3.0x/ic_menu_setting.png": "5cf40ba74cfbc657f1f0fafbb22199c1",
"assets/assets/3.0x/message.png": "5aa4a7c7100f693e51115b1d6083103a",
"assets/assets/3.0x/n_heart.png": "d155809c807d477e8be3904364ba005e",
"assets/assets/3.0x/player_background.png": "bd249d70170e46507cd4e6db668422d3",
"assets/assets/3.0x/player_background_bar.png": "5bcd89f915cbb0ed8f0cc8ef03eaea92",
"assets/assets/3.0x/p_comment.png": "c874a4297efd55be31177d7096a2635d",
"assets/assets/3.0x/p_download.png": "9651a75350dbd6f3ddecc4dc1d80d3c9",
"assets/assets/3.0x/p_forward_move.png": "cd4bb74005adb6b170b222e74b217fe5",
"assets/assets/3.0x/p_heart.png": "62c0bcaf5d81d07f3381710d42befe4a",
"assets/assets/3.0x/p_next.png": "e77de97ffa3af1f237caae3094f416c4",
"assets/assets/3.0x/p_pause.png": "1933dab8fd169c17d9a856de62897f64",
"assets/assets/3.0x/p_play.png": "2f774779b8847fb6ee6c00b503d39d60",
"assets/assets/3.0x/p_prev.png": "5ead736700580748cd5ebcb22e3f297b",
"assets/assets/3.0x/p_prev_move.png": "1487afd565e87bc764f9d79eaa721cdc",
"assets/assets/3.0x/p_share.png": "780f6087f615f89857675e6f123815de",
"assets/assets/3.0x/p_timer.png": "98bec14f8a154a9215adc855a9312ed4",
"assets/assets/3.0x/stop.png": "828011b7f1ae7e6f434c66bc8dbaf9ea",
"assets/assets/3.0x/symbol.png": "ceff92a989ca36c884cf03f38375d951",
"assets/assets/3.0x/tree.png": "de9e33c631851878a68966fe173c7b10",
"assets/assets/3.0x/turntable.png": "7fd013094a7abd644dc4949e71c8cb98",
"assets/assets/4.0x/back_nor_btn.png": "10ca150a02d039a568614d01648d02ba",
"assets/assets/4.0x/comment_background.png": "c1ae8e5ff3e64b57a97b3832dba9642b",
"assets/assets/4.0x/icon.jpg": "1e8258b922c41a0370c4902cef1796e0",
"assets/assets/4.0x/ic_menu_download.png": "79859d408ad90c37950ce3bb762a2e58",
"assets/assets/4.0x/ic_menu_home.png": "cf33ea68b8ec0d0c72b1f4e7a04ccad5",
"assets/assets/4.0x/ic_menu_message.png": "4f8169744078f337634a085733b5271c",
"assets/assets/4.0x/ic_menu_setting.png": "c29421d792b632be2896d756bc0a634e",
"assets/assets/4.0x/message.png": "22ecbedb74448607d22333ede7352d0c",
"assets/assets/4.0x/n_heart.png": "67ba5e99a7de98c1703a28c1850ae869",
"assets/assets/4.0x/player_background.png": "eb3f28ff38c5cafb98d9f49184ab6b03",
"assets/assets/4.0x/player_background_bar.png": "3c9cc04be29ffdb239c285b26621fe43",
"assets/assets/4.0x/player_bottom_background.png": "9608c90f199b547f300c37f9397f09bc",
"assets/assets/4.0x/p_comment.png": "88e6b076b4fef553a6cf150d8c7ce0e7",
"assets/assets/4.0x/p_download.png": "a777578a66b72baa01205fcf797d60ac",
"assets/assets/4.0x/p_forward_move.png": "c1f29634c0d284c3ff44f1c2afa29439",
"assets/assets/4.0x/p_heart.png": "6660a2a84fbfca639cafcd8ebe69354f",
"assets/assets/4.0x/p_next.png": "dc4c8b4f1575818e6d6944482c9811e9",
"assets/assets/4.0x/p_pause.png": "f0d7a3e9a293b6cd5d31563050bb762a",
"assets/assets/4.0x/p_play.png": "81a92d67f80cbc5fef607b3faebb694c",
"assets/assets/4.0x/p_prev.png": "b138033c4bf4bff819c4d89a314efe05",
"assets/assets/4.0x/p_prev_move.png": "0064ffd47713d3911d5a2e7d3dd43f2b",
"assets/assets/4.0x/p_share.png": "edf633c75fbb8e59f3226ac1b6d173b9",
"assets/assets/4.0x/p_stop.png": "6721def0d0166bc121daf7ff63f1cd1a",
"assets/assets/4.0x/p_timer.png": "e633b26cc7f12e59f9f7077fa8ebc458",
"assets/assets/4.0x/symbol.png": "feda508b1adcd108d2a2f98d177ca438",
"assets/assets/4.0x/tree.png": "a0f6ec12984972383ba5f99e1fb15527",
"assets/assets/4.0x/turntable.png": "d99bfbd621ab171e709086b7328a7075",
"assets/assets/back_nor_btn.png": "6d57e072d6582b64aed83abddc1d1f5f",
"assets/assets/comment_background.png": "e9017eb0d0369f847cc6e79e40091125",
"assets/assets/fonts/spoqa_han_sans_neo_bold.ttf": "4db68f99b1aa69d92a0366c31c384383",
"assets/assets/fonts/spoqa_han_sans_neo_light.ttf": "10959d83c4a36caa81a804df6d9c0400",
"assets/assets/fonts/spoqa_han_sans_neo_medium.ttf": "1c177bbda2f670a03abce8f15bbad484",
"assets/assets/fonts/spoqa_han_sans_neo_regular.ttf": "2118fb0c3ef472cc03c7fd589c59ae05",
"assets/assets/fonts/spoqa_han_sans_neo_thin.ttf": "4cb52f730d1f6281fac53066012c509c",
"assets/assets/icon.jpg": "b1c0b1c66ccbff20cc33f2ff9783e686",
"assets/assets/ic_baseline_circle_70.svg": "8703916dccb15f53c3686b4213c510d8",
"assets/assets/ic_baseline_delete_24.svg": "d430f8b323265a361096ae32a1789de9",
"assets/assets/ic_baseline_mail_50.svg": "b36857bdbdb42b0b4d24c1b44d8d9979",
"assets/assets/ic_baseline_play_circle_filled.svg": "15081c3a6c8d101ede1a6d12327de695",
"assets/assets/ic_menu_download.png": "79859d408ad90c37950ce3bb762a2e58",
"assets/assets/ic_menu_home.png": "cf33ea68b8ec0d0c72b1f4e7a04ccad5",
"assets/assets/ic_menu_message.png": "4f8169744078f337634a085733b5271c",
"assets/assets/ic_menu_setting.png": "c29421d792b632be2896d756bc0a634e",
"assets/assets/ic_music_player_next.svg": "9341fffd3a69d6542b68065f312df6ac",
"assets/assets/ic_music_player_pause.svg": "2ec666f6fe4e33fa797d2920c59cc1d9",
"assets/assets/ic_music_player_play.svg": "562329930489946b200ef65076b7fc6f",
"assets/assets/ic_music_player_prev.svg": "bbf65b69b09ad60ea096954f2651a07c",
"assets/assets/logo.png": "dd2b14b321d01b87bf36954c8157e67d",
"assets/assets/message.png": "9a6524bffee00a2e2735282a85c53700",
"assets/assets/n_heart.png": "67ba5e99a7de98c1703a28c1850ae869",
"assets/assets/n_symbol.png": "cef8350223f7d3f45ca695ef99934fe3",
"assets/assets/player_background.png": "ad3e88363612f22635b2f9bfdc35faf6",
"assets/assets/player_background_bar.png": "3c9cc04be29ffdb239c285b26621fe43",
"assets/assets/player_bottom_background.png": "9608c90f199b547f300c37f9397f09bc",
"assets/assets/p_comment.png": "88e6b076b4fef553a6cf150d8c7ce0e7",
"assets/assets/p_download.png": "a777578a66b72baa01205fcf797d60ac",
"assets/assets/p_forward_move.png": "c1f29634c0d284c3ff44f1c2afa29439",
"assets/assets/p_heart.png": "6660a2a84fbfca639cafcd8ebe69354f",
"assets/assets/p_next.png": "dc4c8b4f1575818e6d6944482c9811e9",
"assets/assets/p_pause.png": "f0d7a3e9a293b6cd5d31563050bb762a",
"assets/assets/p_play.png": "81a92d67f80cbc5fef607b3faebb694c",
"assets/assets/p_prev.png": "b138033c4bf4bff819c4d89a314efe05",
"assets/assets/p_prev_move.png": "0064ffd47713d3911d5a2e7d3dd43f2b",
"assets/assets/p_share.png": "edf633c75fbb8e59f3226ac1b6d173b9",
"assets/assets/p_stop.png": "6721def0d0166bc121daf7ff63f1cd1a",
"assets/assets/p_timer.png": "e633b26cc7f12e59f9f7077fa8ebc458",
"assets/assets/question.png": "d629e866cebe0d5a9e00a65835f7d7f3",
"assets/assets/radio.jpg": "1b46d449e7af6e34dcbe79d4f3055c00",
"assets/assets/Silent.wav": "8793cb2d3b37ac58575915148a88731e",
"assets/assets/stop.png": "4aa8c019a708d589e1cb6a4a79bee312",
"assets/assets/symbol.png": "268c53653bb8fd41cef39927e9ec1c00",
"assets/assets/tree.png": "97be47e37331660146de0b57f2d83ca0",
"assets/assets/turntable.png": "20395c21aaafe7c059776a83c2549d74",
"assets/assets/typewriter.jpg": "7064aaf1aa3d6ef7ebfd5dd16f14d0f5",
"assets/assets/water.jpg": "4cd8038a33c1fe6088105733389ded8b",
"assets/FontManifest.json": "3b905f4b0ae6f865f8f6a8775f503955",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "953d2b1ea104651677e3838429b23e4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "65298834518c5d1895b6821f9f8618d3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f58eeef250ef6ee4f16e0052edb20a96",
"icons/Icon-192.png": "73c031f6523d8d2fce8ab23328a497df",
"icons/Icon-512.png": "fda1cbc4d5a0f37e38c31ae5bc0c568c",
"icons/Icon-maskable-192.png": "73c031f6523d8d2fce8ab23328a497df",
"icons/Icon-maskable-512.png": "fda1cbc4d5a0f37e38c31ae5bc0c568c",
"index.html": "ba9d82b2b44e7dbf82f10e49f728ec9b",
"/": "ba9d82b2b44e7dbf82f10e49f728ec9b",
"main.dart.js": "3c8270e970d60d850d2250bc649253f6",
"manifest.json": "41f01f1688a042715f35fd6f36a724e6",
"rule/index.html": "9b2fc50fe2f43626be6b2af435a75de6",
"version.json": "27dea6ed35cb77fadfa4647356cacf69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
