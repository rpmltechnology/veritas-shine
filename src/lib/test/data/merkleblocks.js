'use strict';

module.exports = {
  TXHEX: [
    [ // From Mainnet Block 100014
      // From: http://btc.blockr.io/api/v1/tx/raw/652b0aa4cf4f17bdb31f7a1d308331bba91f3b3cbf8f39c9cb5e19d4015b9f01
      "0100000001834537b2f1ce8ef9373a258e10545ce5a50b758df616cd4356e0032554ebd3c4000000008b483045022100e68f422dd7c34fdce11eeb4509ddae38201773dd62f284e8aa9d96f85099d0b002202243bd399ff96b649a0fad05fa759d6a882f0af8c90cf7632c2840c29070aec20141045e58067e815c2f464c6a2a15f987758374203895710c2d452442e28496ff38ba8f5fd901dc20e29e88477167fe4fc299bf818fd0d9e1632d467b2a3d9503b1aaffffffff0280d7e636030000001976a914f34c3e10eb387efe872acb614c89e78bfca7815d88ac404b4c00000000001976a914a84e272933aaf87e1715d7786c51dfaeb5b65a6f88ac00000000"
    ],
  ],
  HEX: [
    // Mainnet Block 100014
    "01000000" + // Version
      "82bb869cf3a793432a66e826e05a6fc37469f8efb7421dc88067010000000000" + // prevHash
      "7f16c5962e8bd963659c793ce370d95f093bc7e367117b3c30c1f8fdd0d97287" + // MerkleRoot
      "76381b4d" + // Time
      "4c86041b" + // Bits
      "554b8529" + // Nonce
      "07000000" + // Transaction Count
      "04" + // Hash Count
      "3612262624047ee87660be1a707519a443b1c1ce3d248cbfc6c15870f6c5daa2" + // Hash1
      "019f5b01d4195ecbc9398fbf3c3b1fa9bb3183301d7a1fb3bd174fcfa40a2b65" + // Hash2
      "41ed70551dd7e841883ab8f0b16bf04176b7d1480e4f0af9f3d4c3595768d068" + // Hash3
      "20d2a7bc994987302e5b1ac80fc425fe25f8b63169ea78e68fbaaefa59379bbf" + // Hash4
      "01" + // Num Flag Bytes
      "1d" // Flags
  ],
  JSON: [
    { // Mainnet Block 100014
      header: {
        hash: "000000000000b731f2eef9e8c63173adfb07e41bd53eb0ef0a6b720d6cb6dea4",
        version: 1,
        prevHash: "0000000000016780c81d42b7eff86974c36f5ae026e8662a4393a7f39c86bb82",
        merkleRoot: "8772d9d0fdf8c1303c7b1167e3c73b095fd970e33c799c6563d98b2e96c5167f",
        time: 1293629558,
        qbits: 453281356,
        nonce: 696601429
      },
      numTransactions: 7,
      hashes: [
        "3612262624047ee87660be1a707519a443b1c1ce3d248cbfc6c15870f6c5daa2",
        "019f5b01d4195ecbc9398fbf3c3b1fa9bb3183301d7a1fb3bd174fcfa40a2b65",
        "41ed70551dd7e841883ab8f0b16bf04176b7d1480e4f0af9f3d4c3595768d068",
        "20d2a7bc994987302e5b1ac80fc425fe25f8b63169ea78e68fbaaefa59379bbf"
      ],
      flags: [ 29 ]
    },
    { // Mainnet Block 12363
      header: {
        hash: "00000000ae81d8be56fcad40f7b2ca03612a9ab681ca5bc6628ab3c2d914ef9a",
        version: 1,
        prevHash: "00000000acc3e6a055e05edc7cd0cfac6187cd73adc3c06d408d05c95edaaef8",
        merkleRoot: "67313e7a73b62faffe9380578a1a96727c1f0af62e61eb8aa050064007a008d0",
        time: 1240800408,
        nonce: 2506812214,
        qbits: 486604799,
      },
      numTransactions: 1,
      hashes: [
        "d008a007400650a08aeb612ef60a1f7c72961a8a578093feaf2fb6737a3e3167"
      ],
      flags: [ 0 ]
    },
    { // Mainnet Block 280472
      flags : [
        255, 85, 218, 225, 90, 173, 229, 43, 183, 195, 213, 229, 43, 108, 43,
        219, 226, 215, 217, 226, 61, 92, 253, 92, 237, 134, 215, 170, 174, 182,
        170, 237, 220, 251, 106, 235, 109, 109, 253, 219, 58, 159, 182, 221,
        190, 189, 181, 126, 251, 223, 223, 254, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 15
      ],
      numTransactions : 1159,
      hashes : [
        "ad6c32eef89f29f29d43d14500dcb0ac35cba42626244a4dbded64e27d3cdbe4",
        "31878bc4a8004d4d2457f7c93571a927de9f22fcacca0356f96fbed5500e1a93",
        "252931be626437e48a264aac1f7d178e1ffe8e1c94812e4970f7ab19dfadf074",
        "53bd172839306e615ee24552b3ff3c8e2ce2e5a9a6d0c9d1160f1c4bcd73cfde",
        "21f3e6be36f0c770938b63505ee2a6065cf9ba5b3ba0d9e115ef9081fb386554",
        "7b5bff18588f2f82c130ef92351b289d4a2e6a79dfd2c969ab626fe41d5f3341",
        "4672cdcffcd1f3eb4ece0e6558d3d6cef9f42a142df6d46fa6daa4efe5e25a4c",
        "f2ba2db60d57f29734fcf98099391a1404c5c1399eb87a6c00f8df9974d1e85d",
        "25f5dea2941e8ff493ac7810a4e11cc2846720633469479e8ae29eecee0b2cd2",
        "08c71bc1ea3583602db17a5681189f346472447df48bb0254eca8bcdc0e7f2fe",
        "42ccdd6e22c0f9da824c6d036f02fe0e5d33368bfa701567bab3fb49acbd9d12",
        "971b294ae8678ccc2b1e16c22eb44ded5ef1738dc85d509998982c8d6d742ac5",
        "0332bacb6ca645b25682cda96b72c990729e2cf58b0845dc1364cf9785cd09de",
        "26ea9fe5be9baddfa879b2e756d71f446779efceef157de30bf799bb632996d0",
        "7abcc87284e324bb22d9f2f3365a1745dc9af5e525b659ed60f62d948883f4f5",
        "cbcd1f8f2b6dab1253e74d15d1f04c95955e485e5fe462064291d88f84180578",
        "fb703bcbdb66148eedb309291609b4e881e94bb9ec8dde1372fa11756ca2e7c5",
        "8bd19b733b82e2d02801a55bfd59e262066704c5b09799391224c70862fabfa6",
        "ceaeaa83b77263ca910511d385392613695c4882c7fb018c9d37a246b56132e8",
        "8c1003d7a5086e57dbd29667668140c1624cc96e96ca97c60f5deb94f15e9a57",
        "85945287f9867b8402a287571ea9849fdd5b381873bfc0a6ddd823ef6058f6a5",
        "b8d9bb4aea6db726f91cc37040723de9b69048dc725cd0316f7ec7dc10c6d276",
        "be9338992c7d0ec10a6364ab8afcde1cf42d45360cc1707208b8d29315742b84",
        "7d8b1015509a837ca028c3ec40cddb8e59a96c036e30d18ce84922b8f34e0d1f",
        "e9e502636caaa0aa6b978571e3facd5f7a25d25df889583c54e959331051810d",
        "489a38d2430ebd638f945bbbc3117345dd2bda666be09bcf454b09272fcc6754",
        "b0fe9b242568bbfdbd90932db48dfc42beb4ebdba110b4d7e98b198dfdca4a20",
        "0518e5cec967cfdd27d3b3791202bc2e0520cce858f632da776caba97828cdc8",
        "97f60954c04de156ceec938437b0eacacf9105bfbb9ea604852eb6454cbbb24d",
        "946e2b6387d87d49c151ac2969877410a8f1d65fecc5a99071ec751a6fd7fe6f",
        "34d717eb07d2845d9dc1aa0cd620e3ea8d7bd2f25daacc8a058eb9c6a393a896",
        "5993d871822b19dfdaa04b7911a790327297132d063f0ce2112323a938904e1c",
        "b46666bf125488c07d62af75af71661edc7ef83f17df71bde09c3ceaa574521f",
        "6bb9ebc3d94a4d3d528afec8d79f13c5179248cc474d13a3d6f9d279afce0fd8",
        "52da5e469bacd7282e515a65a6ca6599bcc8b5e56f7293121b8db41c22483133",
        "d2d511a18e5e1a7c2fe485fcd6b3263cec624b1a4e182c8987404adf6434b652",
        "9b2fe6183ee437f4c7ce0e368df73256d684b71f48f8f308f62b856604360581",
        "30e3e6b952ccd05c32a6c5efefe908fab145a9d7676366c699bd521edd57424c",
        "b60c41d49f1c8bb492449c76f63b64a42130579083d5dbfea8377a4a968aa5f1",
        "731889fdb1d00f8bd5035071552ee432a0752822d6aca4c35d8f7f14d98b415c",
        "b8b7fe24a3b116caab6bc686fb4dd9013027aa349e6e14cdd229c01e9a785444",
        "26a8870eaa040d6e0489ee5028d1474d3a895e049f336c7e9ba531e24400393b",
        "2a65c6d121dbc11d1c9e58ceedbeee70ff7f6f4c8cfaf5515b9e41c335ea9f03",
        "c3724ee9b9c2897fda1c56ce9135ce95eacbb7f9e45a46882e082f2b50b7c19a",
        "3168e28ac53cafe312eb0e8bdf454ec77e34390787eab7d78bfd8dfe33640804",
        "b461a62a62d6ca50a10b32f09dda4a8f7c18073a86a048634f4331c8c54b4545",
        "e9902fd47c94ee0eb0bc3e11836820e1763df3dd5dd0e5da978cbedffa04fbe4",
        "01a1d6550ae60519fc796320703a6c3c72e133049845ee6cab9e3850ae6a4274",
        "aac3276405f3cadc64a23a1007d85a203135ecb0a656cca11ba7f68ec1d7d8ba",
        "cf0a4c57afb757c2a0cbb2d1fd39a10600063bf74695f13a4440fb6e5ade526b",
        "feae17a192599d2647adf0218b39ef0e660742349d2395a0b106f6eb2d664796",
        "503fc34490ad5de912e86bdb62ccd678d0b9d401cef010d48c935d455364744e",
        "fd605fd1f8a121442d09748d3276dd5739a193256c318bce07f29b73e5e2797f",
        "270ffccd7a0a1959e1a07d0c2d04cb5b0b1aeaea5abe5b56234c0295718c4269",
        "7e7c89a24303966a0b3ec1afa006dec7abc0e46539beb74268534d5721590605",
        "2f088d956302164764e6cdcacbcd3ff6545f150fcb2866107c4b4a22dff4444b",
        "aa18717fbb5575f3c25195cd59e74c6f096e5622402294900eab58c86ef1f3f9",
        "b125a208eb149e923cc70d29248d13549f46f9c353ae99b8818c54f1160efe81",
        "d751efaacc03f71d0a306b08b11782d1a002e4211b6905c4524455fd9362bf5f",
        "5d67344da8d35bcb0c099e90e9aec2a708a68b6ad9f6b7939cfe1d2eb872a14d",
        "ff13ea7bc835d1046c39f50de61e229b154f5b9354e21afdb8202032928c03f9",
        "568c957db832e8daa663afb3ebe50f9bc07a546c142a3b8dd8e3ae23c4f3e61b",
        "c681f6304af1d4d636ffcc9a511534629f1116dc2209ca33f47aaf0a6a7a38ce",
        "822063a0f81c69a738c4596d125847d8d174d33c73d89e5bb10d10e4c8657579",
        "bdf5b3f862edd508694af8d64d8eb6dc980de6987f9a5f4012379de6827f4516",
        "531177870b5efef4a0985dd48afa13fea0b8e6be87c658d147c2d84e48826e59",
        "e523b181cb1aa4d3fcb1f424b609de93bd0a6388cf17a24dcfb76fccc60ecd0c",
        "a11e5210eceef1a5dca92d15f08f106061799de1880a84ddd739ad7c162b7023",
        "ed61b91c7439b7364820abaffb094bedeb859de42100ceb7a72b098a050fadb6",
        "f089c202de5553fc4246fa0d6be72cf54506d7608a153e55806ca1dddfc42764",
        "28c3e63756f72b27ae32d07b280bcf1edc13df039361617cb0f29eb17e8559ed",
        "a9a1b2b3157d78e642e4b8f534bd1a97a9039ecde41baa1ab0953d7ca527b7d1",
        "eece909a9ffaf785c96a29fd2f027048e767d03ca30acfa9813dd99ee3882608",
        "fb56466712c8584cb48a5936da28c71773212b9fd2af4c378ccdd498aeefc789",
        "4adaa4526cc5f25fd2be1874103da8ce75506d9c05cfadfef3aa684dc9ebc5bc",
        "5db5c19d1836da8d44dfcf6a32a9884a39d9b24c1745b7ad07ee90edd165e7ba",
        "a85d0a2d898ef48ca6ab120a86c6f58b11091b7f7c4f6faa931d0594db4ea695",
        "3514809d3cd2cfc96f5c79e9d08533a7a7238d7ea29d07b6a66be8cdbb3b159c",
        "3987a7cff18d70cfa10342c4bc714cd540d5eadcf553af4a93a431209ae0f4f2",
        "288bc3cb0fdec441494ca970901cb84e807f522743eb9e53fb7a6b171b1f00df",
        "356de5250f43bb8a97a079912fb6be18df2f50e928bff2c37121c01ebcf88c9d",
        "dbd2daea97a3a335afc5a2c7207ca176cf01ba40caff06a823e646736d71f2a5",
        "6be37d83809273e581a2b373a1778471e33599b695fdf3b7791f65030ef1b38a",
        "c7c339fd0998e022c606b02b421031d25a319682b3fd7ff41a48d630b1b8bc9c",
        "eeee90adecccafff27ec24f264399190afef7e4b78e6f2f92f0c2c7c47aabe3e",
        "79cf1aed207b3603b197630c9d282a8b36de4a92ddb96c1d3ca61efa1c4b7021",
        "5553b7a0fcb823ec9e5252c194fe5d8df716cef98bada8a50819f89989a00931",
        "a7c060926f5b3219a7b7e131ab6547bd64809cf75b24053952a87e324addc8ac",
        "e7649498c748a4cd00221ae6f729e16e29e4fd27d9c28d5ed95bcc6f00377872",
        "998a4ead843602e37a210823c221b9755a7a21a7d5283e5db54bac51df16c3ac",
        "3fbce6ff59cbb982e3df5ce2917274ca87828f811083eab4b41534d34472dec7",
        "b9b417bd9a55634ca616edc371c9e8c09cb0611626b84ce3acfeeb32a1f2627f",
        "c303c7dc74f66c512cc2d165ef89d57cee257359b3ee0e00edb3737348f88068",
        "07aa9856735c0110c2f8190d3be1aab49f6c6edf4bf231c94428b5ca7509b91d",
        "cd59eb7e808f543925e6ab47f794f0bcfc9d91fcb7758b7fa1df3abfbc3c3e9b",
        "c549035e1d22855eb6c2bf371b2ac5846e0bef1d0f4700a5192ddc88de27a97a",
        "0ac1249b989f412d714daf732137498f9b4bed4d790aae420e9b9b5b6022d6fc",
        "83f5604c6f2c8fe5bfbd274f51ba754610b565fa93dd558771787728d1e17d19",
        "b106d7fdeab23c1886978f7de80ef1ee2395177cbf26fa5940173369fa42b2dc",
        "44a95badbd41ec197043f6907b32d759d935c3fe68af3d5080672cfcfad11d98",
        "79843495d689579abe43332a2d0c265abe42dbe8fa94f822d2e6702af0e0a0a9",
        "80ea7ea2beefedf6abf2c085a9c2f89ff9ae0da7f42bc1d1478ff641d449181a",
        "67657bb03abea359ffc6166e12589162ecb30a5c37a0886e14b20d481652bdae",
        "e2095adc5a1dfbf89b28dea1b3cf2d726984fa5343943513dba7b66c347321d6",
        "24fa9fa1f60cda5b002b453c79600c458bc513f4f7ea31f2ee40af9a5b0c5533",
        "3eeecf1563fc3cee96fc92dac5eba03fc95a7de585f402ef1c6125988393f8d4",
        "e64d7d4bf18f87ac4c638b821bab5615fcfca45cfa2470d3e12693b5413618d8",
        "2828ce70f254c1f8e18d92c4f28206fd9f2b42f3be1d67405df64d96324939b9",
        "f2b24eed42be177653d2f95ec1885d78f3ef1ce32a0088bc4fa2671976156e4c",
        "0946f3d99392b7161cd29c0e84acbabbcd7f5f9d58d3288b21151f8170239cf1",
        "31290c1047285ab1a97728ad4e51896f890c18452a4fef561023b1aa58d8d197",
        "82e79c4ef466cad39b3e08d4b3d05cfba17ea58a5ad4c2d2e0539114bcba88f1",
        "8c35a97de4a9831eb2415be5a9883e3477cdf1cd19ed6a24984fa1b45d7e9f90",
        "99d0d7783bcb87cd7e976fa6fdc28fd58dd688b087142d9767e432c1f298a261",
        "5218233bba9cbc0527e131a3d9d5ea290821ddf58eb8c9b52918f5654804a0a5",
        "f4fe4e1a4c22ad8d9725c8cf04b0b509a0ada3458da3ff3c12cbaa389cf8638f",
        "ce133d2fa135f4f102b368cfd5ce02078dec518c9b170f4dbcc3ae823b16680f",
        "8276e57b19b15fa200e0bf2cc3f221793a14e41b5a8eb3d5155be747747565f1",
        "e08977c0b9b3b6d1c9f0dd33e075e9565b1ea67fdfb968a297d643ea56ede5a4",
        "34df12dc797251aedb4196d1ed2a67e5febee79f89b35c503ceefabbfba43544",
        "336454288c2a05f22211a3e7522624ba70fc3ad381ad43aa227185077be4806c",
        "51975d2024c1eeae7d2b44a12a1af2891d234dcee2d0ff500ae03d341b57880b",
        "02bba57b27d557180e9edf91a09950cd2340e8fb44a5cb787c5d0f3011a542f3",
        "908420fed38c9785eebccf1204e07e3f9d4434ab299342ba489daec0cbf686d7",
        "d187e9b16d142e22522ec7098c3412b61fecdf98f1cca554ab4c1a1d2ab489e1",
        "7249f156f19b30541f6c816b5387a26cb803a63b41930f08ba3f0107e31208f6",
        "497faeb327567a9af6056ec1a7fdbc8154dff2ebb9896df855a5090eaba2a03d",
        "eb51ce48cf06179e1ad3135f8e3c8e6c21d3b856690b8a34f063bd348bcc77f7",
        "17e156c54f3efa435e8a2fe19b9b6700dee338090a97599f23810aaf0db00d2a",
        "f230f52bb22cc4af6373065cb15fc91ca1f6c74eaac3ccc6c1b88553aed581b2",
        "bf2c9b5a78e3b1ef95c0fcb8efd85d6f3a3cb594f03b7917ac192023d0c7da30",
        "ed438001c7fbd49ea89d1b6116e8ce8da19810631cb045d7093d2ef43ba8a486",
        "f99e2575f6d7532e0dd296d126768942e5820a99428023959cd1505e239224fe",
        "7147f6dd56c363a1f32cfe475c0a612b65d359154b93866fe516880537990f4e",
        "0af258f3304e644b31abfd08b6fcc21159a7729712ed8d2e0856d368f54a4269",
        "77608ddabf1f39cec2b3f9cb4cc4d36fd1b04f00a5765c779ee342e4d3c6e5ae",
        "e74c05c43ecfb8e7182a334823ee134da43e2e1ab4f92e9c6f3e5e813f30e6d3",
        "2b952ea819ab78b34136e4d3d698ca41a58d00e558675cffed4206a93a5f5ef9",
        "8e82ae850e62ed480e4a55512dedbd065fb553a419214c87790420d8d2e1b3c8",
        "8c560c3b6047002cef9654937b2c8e98fbf741b36e423bce5ff1ede18c7b43d2",
        "99a9daa989002fed2ad6819b3c95fe0b04fd9ae0164eafe6f84c7dde3dac66d5",
        "a599224017b1f90d4d94180a2cb782f95ca75b65b946522b52c035b13a5d518a",
        "692186550a90b67eb0d057f95ca2e194c32222737a44e7ff64b840f7ef2f9ec6",
        "3a1532b43af74c7ff2deceee0aea597d63b058fa9af5f491206886060adbbdd9",
        "3b744e52f07254f53b70e85389e484c570eb476bea247e1e706ca3b357ccb113",
        "7f9d11ef6cb1d0d78aa151aa4c0c6faf8a0cd7543751a4c6da40d9d6dd0e9e89",
        "fd82c6589a3df264abce32d31578d46551d1c067c6b9316e47c041c303fa24ec",
        "94943dd079fb25b56c6d28c00d3d87ba207ff957ea3328c05e53f95eeac4f16c",
        "7519a0ea3b65c23d88d30f5cd84a552259e99ae2322a3cfba3314e9987583bb1",
        "be599f62b04f2f77d5c844590b7ca1efd8677fc483f4455e7de901d315d56b5b",
        "3bc6500d77b4b5e2882e810610ceac4280e87e6171baf242c890b157b1c3020d",
        "3251411ad79102964f144282c1a71fa4e953f6afc8897c9622e14746e9c1a476",
        "a79e5d72f0ae70cf43d6988742fe75abd45356ae8d42f2c93c933b0608b9ae70",
        "c0eb798ad1cccd38bc8bcca1b1d9a03c394f11e513ac77afc16759ad688b847c",
        "9dd585798374b2fd53f2ce173399cdd80c482cb432ac78d7b000aaa6e941ef42",
        "7de291dacd196f97b4a031cd553082061cf16cb9b4c8544cfbb16cae7bdfb5d9",
        "a923a968585828bf9e2d8874e7eb2165968cb4fcd309e383482e5f6c74bdb45c",
        "f856c43a55434ed1727ffac57906f44d6ce73c0896a8f28b961dc0a75fa9b394",
        "9e00caae373307a3070eafa659bcd614333dc56a834e81e042523f0419decc67",
        "b7c1be14d0824b183ec39184a5b7eda29383796b3dea8d38daccfdfc6ae311c6",
        "99640304779e8b265f8d8ae495d5bcd4f82927b623cc57cbb347a5c5c27b682d",
        "43a8149510152a2967f5d2b16064312d4cb488d1b6866d5258e877b22e2a1f40",
        "c0d28c084fc8188e512995263431561e8c1eb4b7842f1ea11a3cb8485151195e",
        "3eba131992984494ba739e8dbecfda6c2fdbec127b094dd43d583a7fbaf6378c",
        "8932c9acdec6135447870fd3c0ce74f1345f72dbc38942a42bf418045964b34c",
        "e35943cb6de6851111b62d722456f589c2619531adf8268e5332da1afe544282",
        "4a310270a3ceb81cc8af14e6d6c9e617d66d361e7d8960558f5cae2a061331b4",
        "0d4306cf7404111bf247576a15fe0a66cef0417c47d1fd9e576c09650961c2f2",
        "1e846b2677d149da1c012b055fe001c279535acdb83dfba6253b21b625d559ec",
        "6dd565d87f2a6fd6c4944f38e9a240696454df79f5ea58e9887676fd74cea688",
        "f07f97b58b5d4224b0c11e8ee2f3f9314209958c5da578e7db949b0f6542738e",
        "14f5c29aae9fc1d709962dea0fee3070e0ac8eaede64d940d2f43a584a23cf5a",
        "00268073af8e1f2f82d742be9d13076ca08173f6bcec3d89c96de3d7823a2f03",
        "ef583223b4d2bd42387968c349d928a6f329f6f79912261730b52f90f7960bcc",
        "23aea669fd0edf1439db8c121847775336b40340d5743d7ce73e3be8fe184a26",
        "fbabfb448b25bfb43fb9df1091127e6c15ea3b6662eb714eaf0a167aa67415a8",
        "0ebfc4c6fe4ea2b7700ae9132509253166bb215b8800e86a7633295b140c8ac7",
        "778dae382d063c92dda40744b1af2063d0ab77ef46bbeebd5ab57686bb87c959",
        "982800d89a84ecfc5a01b8d9a96b69448433a920d4713313f59726174f36a8d7",
        "9e9dbdfb7f6198dd07e75ed2665130a941baf1b73601f777cafdfbfa59ee176c",
        "e3090a666d5af8611fd8ddc7dd9f0290a5e0d0e40f440c1ed6713d41645465e5",
        "b5a78ab61b943ebcdb1dc4e0533b68e0310c9bb37ed23f1c4773409c392f214a",
        "bb73f7729212748081ac45731c15630ecd89652ad3b2a563de5aa6795ac0494f",
        "a12a2ce969ee1d6261eb7be74cbeafdafcc867767e76b3f9433272681cae3939",
        "9e9852c0087dcd88f1fac2383e884894611ec3fd19760316da106ab7b4594f17",
        "6182ece2e1b252d838e81d52b2000aab1eef0c8b3efc51df77167929dc495a57",
        "ae59c591c044e6f24c54662ae1b64b1e75e20510d2229f6b68bbd4547cf13326",
        "4ebb82be6043b5122a86cb6b51434fc23082d2197b5eaff824b52e0295e54d80",
        "33f559a179624c63ffe1b3739a5fd5825e117a1fd59003a168f9f892d1de3aa0",
        "aac18754690516f5ce0e6c8a8974b0f9db560c6abcd943a09bcf3f3818e4a1ba",
        "f73ecb180fe4f4107c6c8f4f3f81bdffa3909db577450ad8a10b7e61029b3e11",
        "0fd732521ede730dc8bfb58ec1313f370a5887ec67f395dc048e132681a4cb07",
        "bdcc038ebf3c3176dcbbd8b6b7bd8c7737ae279caba99e81f569dbeb29857a42",
        "46e287c04d6662f4612f8ba3f88e9a129088b21ad83e8847401f9edfe4ab18ba",
        "8d70e5307862c2c60c221a3acd586c9169ae54dbe1f2a108328cf84946007fab",
        "8e0de399cb79028aceaa634392b64705cf97864e37f8e488effb2fc6f4a46531",
        "57c5e60a4f2b3e82d95f9e78bf70d6a3c27d98873a10aa9eab7e2f279af22a38",
        "b5f1729e763fb6f4dbf168fe0d20d03e1c39a9378a045891f0764bb800d6d32c",
        "6dddabd46c2167fd89f0bb942a4e1405828b400bb3763a542013dadb3f7307ef",
        "54fe8d2f742a0b59a33281aa38a2f1803acf36d538702d693f14099654c94551",
        "30a2b9320396248bc3ca27e6976a06336f6ed55be72a2fec222ca8925b36ddee",
        "2c13bb82bd5236bd32b087a3bfe291fc4829d0f09f2e701113859abd3ea1cc8c",
        "67d852403b6ee6b8146c6a52c33d5585a0377fbb240e841fd30f3fe73f5bd165",
        "4a863fa1f3602e380ced5b710b0c77c9f69fc7eda0f137c3b48732758c2e1386",
        "30e84049ab91ea6716204a27139fcbc57fceea8ecab28e04bbf690e24f558bbd",
        "9aa2e2dd7a770399718421f20fe27b2dc9923e9f6b57d1fa5add3617d24bfeab",
        "1e31d7c86bf694f8856cb1c869c665baa452d445c9305bf4a709c37fd2665e82",
        "61af97100797147e99daee9fd3b867847970b8fd7d95ef1d3bdfc1c7fa8bc949",
        "ac049081dcde776e22911e892e05d1069b7795b7bd332cd88f208fbb72960886",
        "8683457c0e857617c0ec755f448d306a2fdc1144de8698f1e33c1dda9d8bb964",
        "3dff8d5494fa343f49be420f8d4876446a114ddd3475959c6ac26c51b9b01906",
        "c41e7a4e855d7df1ea78e713dc1aa6218de3077a42db5662d80db125011d8620",
        "baf74f03d301c85890748a90b06addc4bf4d5d008ec0fde0ae07b9bb8f9dd4a1",
        "4185ae388931e194b63dc8ef22e51d4f449b759156a1453a387b6dd40447c00c",
        "982021842949f144b1317d0b4961a0f2b40e181fa225a4ad87649f4144d2c880",
        "b56c39853ee20c6223032e08507e8eb8cb690441e863bb69f6768afd660052b1",
        "1a0f05b6165cfa23f19627024f0b37ca549edc203505b41dde07a9b88bbd7535",
        "430cfc29ce4b35ad3b8835b12c688d60bd2bc7df1200074b3c539b7da5eb585e",
        "774371f57e9ae885e19294de121a520c3001229e106fc596f2940e3ea1ff0ef3",
        "47bc2e2bb4a810348ef348e26ac813d6d5a54baa3433f2abd1612b717d3da015",
        "4b72a447be4322ba818576dab8a3ba31a9cefc20421770388fd4829ee934f028",
        "6fc3d154fe6e2c509113a13f9e969f20499972b826cd15ac33dc1eb6baf7bfd2",
        "2d48e4d127a962377c01058c26c61cd87b5345b6f2818463b5e41c711000caf2",
        "a2282c6f0cb806627a207ee1d912c66333f9bc33e92127a278c720a4b0a0ad9e",
        "9bce3752dc7a13fad93acc8ac931e764ce6c6909ad22bb087ef0b66beb0bb732",
        "705436abdbcaa17582fabd4a86d4d2c2dbab89a07b2ec813b2d71a3e21ecfd27",
        "3dbfd8fc113f4ac6524f55266cfa9970118bba6c468c15f4e1afde5041fb2fe4",
        "7a6558e365bb9b1532cea9883c5560be5d1df01c4ee21f39ef26e85347a07c76",
        "cd7bd7b7115b9973f0560584422296992dd5dee7016d5c3e49c88d9635ee4547",
        "a48c74a64066aa0013d5cb76ba25ca73bb4f9ad2017214d566cccd71d2ad8f49",
        "5a703dd802e7b0cd8660dcd1cdb4cbeca7ddce66ee89648538f1cec7f0e4ae16",
        "c2dab8adf040a2fbcbad196d50b2357fb35432f9a4fe09377adc0ef71e0b9f7d",
        "02dc0a4d4b25d732c7455547a555067181924632f99b5693397dc636b28423bf",
        "6cfc763f0b00b2d469529582b38b6b9608e9406f0b6fb2e2aa2de4197eb16c5a",
        "8828a15c1d52c1e3967fd652db870c8cc1a6aad787418c307f415611da3fcf0e",
        "7f53dc6e2fdc3a61e5e296e75c2697da21f8f92bc346388f6a17c25ef7686ed6",
        "becbaba75af9ace5c4899513cdbb1eca3b016c4c2968154eb0ec3bc5facf6e71",
        "3f7859a6b06d096d20bc644889a226eaa5d747d860b9fa0d0cded49bdcbf8fe0",
        "cd9250c8c2eb6c28ca2aaabf41d91b18f75edad3e9df82aad70272702fe2feae",
        "d56bfb137e6d4150095d242cd0e63fc6cde099a3e670ce9a5d8f2e6ffba77a07",
        "b3bd7ec83a8057aa609bb485c4e247e67e4cb923d4764765862db65b6af15307",
        "1942bdf5f85eef33c1c64ad92469bf78bf7fac628a22feaf193d86adc62e8b93",
        "cd313479b8467c29655be09d63d4c1208fbbd6607a19c9a13f6bf094d28812a4",
        "0d31559805703d361e04e48283e62ed21dacebf8104fa7ccbcb5e59d468f70e1",
        "ac1e224a387d2d9a6d6ef7c19451af3efa599753b9fe44b4e737b6d2e37fb551",
        "9116da1e18ba243f3ed29a76197fa8e2d957d6f11169cc1275709e6cdc4a8756",
        "b1ef2f49b0b26ec4ce558f5dec98416cf8bcabb9a8702784f3cdf00a5d676587",
        "797aaaa86ab5d64bcc4e34d92eff8f63551e579b8fd66b7f01b662d218740e5f",
        "c4e31b52cc3bc49bcaf2c632b9597c8e4f5f066b2bc8692ded5663c756b48387",
        "2e4b5491eb23250e5e855acb6417b59da3da9ccdc1217e34cd04ca40030eb464",
        "900c4d49c267c2d251768442f29fbc1c2aaef0cdf8f8855a9b68be9d7367f046",
        "5f940e3736a9ca25f61c16230165594983a5bb1426789aafa2e24f7b7a127f3c",
        "a372e58ff796ed4bc28a27aa04393b17060f97b9fea62272446ef389d534e727",
        "799eeb62f4e6d0b192a6b8811913b6781043093853f4ad3dfd80ad40dc13cdf6",
        "c5da9d51154df4a5904bb2b582bdbd1111cf720e6f03ef5f97f95423df58e147",
        "92b302bc860da5db46234ee558fb1aff62ca70bc2b18f142eb5200131e14bc8a",
        "aebf6338cb63544de46b9f45311918232722ca625bee66278ecd2f180b0be5ae",
        "9a907c10d6033bc91fb1847766307267b8d029379b9859d9c80c209a7cf082a0",
        "de28f5c0d46ad54b57c465d8a9e416b849bfd41472ee7d250a360e4d439b3251",
        "f651d87f4cbd99f72a7459cf77d8425031627de145041a1689955adcacc88b60",
        "4f8641f49563c14b43285257c71df4c60621a5320b8a0bb575bcdb85c1bc131b",
        "0810ddc592b81998e465024698f3898c104ed8d13e9f675497c824a81111a28f",
        "49050203987cc982c7ebb2620de5fde348a751e00c05ed358fc6b91ce0067baf",
        "37694a5c185d87fab218d8b37c39c094fbe00098e3da83d1986a8e12123b8f72",
        "9e6aa46a83ce984bf5fcf16fcc535335e3757c8f06774fa467b1c024140c30af",
        "0b259dcf3bbd58a9a1369259cef787ea352a1c0ede4fbef2b7d1c785e9f44a02",
        "74dfb52467dc994e6007d2e57900630f2d0e8e4ecc57c9097bf0c0cbd908575f",
        "94d44a100ca284444dfb0106efcaf04107908975f2b301aa9bb3dd0b437380c6",
        "47b11267b2c7be15ee78e744f2dd90ffd5e7a3c21bd3cf8a52df0e553ccdf9a8",
        "8f15cdf786ed0c6df1489e8cd28031d1a3fae8f006ac30602ca9a0ec5725d410",
        "110a9949642519b08293304865bf19a95f9590db6db8c0d677491715d7decefd",
        "918e80b22117f5e587840cd3f6da607312a8792c4e8194f1a191bcd2f550b16b",
        "85f9ac70add31496aa4b4bcc4443bc8c15d377e90af375fffc001b4380a2309c",
        "5e57b6a99301201ea691dbfacfd7105c940c0374eabd14150ef09875cf5e5468",
        "712093cbd1ad05d632da00dad2306d7aa09e48fe651021ecaf13c1e0122d3609",
        "93758b69bbc55048f3f64ab02ba05b748a2301ba8fdabda5ad31c5132f3b17f7",
        "6fa9a1fd4ec39f4691555ba3064cac5afaa9ee90604bc9c24b6b4c452b5dbd66",
        "d062b6b04643123071223138c91a28e50e89ffd48f676c187a647c9ca2637c07",
        "53e011f498d01672e4f15ac8c41e44f7aac84c7eb55f37e6d98e50e072133236",
        "a29db89a18a11505801ca8146b38e596cda6a53ceb57e6bf05014f62b03a708b",
        "0673a9faf5ab50c4c0d16d3d1c9493fd1c6972790f9da84c24b4316bac674d7d",
        "fddae5c3c65653c5058ed34da5645b3889bf54bba81c7ab5acbe4d534eb7297a",
        "3a87acd3df6a48b023f261a8b316e6b51ccab88bbc5f05ea2aa686e53eb75926",
        "a640148dcb71dd66cae73f98727b204e6f8f7ac43132858c81313aa8e2162700",
        "d06710316f1ae7ce8234e6ab9800c5a2eb9a62d758090eea1744e7bc7b0d5a07",
        "4002aba5e583c3ca558def1aebcc2d01967cc32703fd28f27b79c35275c17e82",
        "e33205319a12141ce884fa1802fb5d14806fa02993b6cab412563104ba2875f6",
        "984036f284a988ba0b19eec68e485b8f86a592725c9bfa3d2c887f076d4dc669",
        "5a6df37a1c8b1056d84940dd1c6352d93483dbfc0960d33ee23a58ccc9f50ed1",
        "92b59222427a0caf431ada26da149218d7ed2fea050b11df2cb0a118dda11087",
        "5ddf4869c2578c1ccfa3a17c4f728ac6cd9d8bb5b19def13335a8fffb3947e2a",
        "3cffff6af9917186588a5291bd997f900ebbd997205a8597ed86b32c313d15f9",
        "26212b92d9e7073dbfaf31e501d603f2a4a0a72e6d51eeba003f6c4769e199b9",
        "8b9a2208d6e17986f28ce6df7e3f1d2e15cf25225b7852dadbf6771ee21a391d",
        "b9ba75b8bc86ae75dff2b9cba3521f9158596bfc4471813688f5a2a471a94a7e",
        "51431dbfbde822ef6ccde33a7d7988f34e5042a1ba0cca9b9ba6eb86e797b67e",
        "19b8b5c3dc7427d3b4fbe20fc117fe2ffa0ea2101f60701cda8fe4de0b0af495",
        "3ed134a30673821c38cced4cc3affec64de7ac890ef88c0f98fb72e59ebe7cdc",
        "27bfdd5fd4cab4cccfdf4a2af342958f40d1f82f792896b461b35fc968b3dfd6",
        "d4395b2c014b8d988cbe25ad50d02ab03a8fa47875d3ea28a4e37bdf48965530",
        "0092d15bfd929deaa455dfe5be976707cbcc761eea63ce216b2457e0d70ad1ad",
        "5b6934565705b73e362e79108a153375a6b43fb706b2480ceb0bd75673e8817f",
        "122618aa4adf9ec938c48da1c586e059d2847d3d249df5fe613921d6cf4d1117",
        "34106ad21d6c03450bd922cb2cd82f8087f4e0e78cc33b678552f96da0ccab6a",
        "a46b6cb6e14305fcd0bc642e0930bdaef7c04b6bf3014e138b153ef24a9b3213",
        "f71d42a86c0f3a9edd76158f1a1d0ae4a7f34ad836e5521ffd287cc00bfa430f",
        "08541a74d5a6d7bcdcdfb04f932b35592ae31e860dea533ae75388ee4973e7d5",
        "fe396de692968efa4617b7401edfaf4f75ba296e3321017adf3ccc9ac811b9a2",
        "ad94d80fd601ba309e56b6195099794360f8091c8e77db843c113141aaaa9592",
        "708744f24ca16598075fbf661c64ec10e735bd3154193fd3a8064d415ed2be20",
        "cd7f5f414e2bbe5e05092d727505a2baea0058c9ed4d98f1bc69f60224d7683f",
        "fa1045fcedf7041863cf6a2f3ff8dead976c01f3968e9fc0ab94dc14cc392377",
        "3d88497ed93e4989b734e47a0a1e285901577ca3f0ab5c54d322dca6818f8dfc",
        "ae739e369f8a632b8ef1cf4d98effc0a9154b091f23797f4f8624f34551752dc",
        "d40cc8fb2938db8a0351c79d41fae7d3c7d8668a0c32ed4cd956c4cdc770b93f",
        "b93950b8f2eccb0a713d3e96e4c9218d1993b9af8a7e8621dbebce519e6b6ad6",
        "4f54da34c556e2a0e36d2fd0afed57b391998ccf54517bf6701c64167d3ab6b8",
        "97beb30f09514b58013365ef00196667c79a82cf188f8f2417b2d06bbb610b0e",
        "e37a52762caddcca8b095f782bbeff5fa20e04b123fd0f9658753b7e2a9943e6",
        "9f171cc54a54340c757c468cf608af52a5e56e6a7da6813675520d32fa0272b6",
        "777b198faf560d71bf276e7e98acf63d2ee0556b7ab8edf7c8547fb2c4d66e50",
        "73cfc9e8632891d77c12e184f27478c19c3c49e78b92caf0bb07596277fca003",
        "086ce6966f0ee6f8baaf00d5e3ef95314cca0a717f6596d4462b770d381d1427",
        "4a43d62b2764e121390416a339232e6281dfc51b5b4a33c08fcf55f114e0f17e",
        "d665b4bfe9fdbd04fc1bccefa1c56cd7634664277a1117e936e78ca5595462b6",
        "6c7c0f93dab33466e3ba8b88a7e040081c1ca6d0804c715c2fcc225774bc8e89",
        "41c740f4009bae19d4903f2b8a0ac687a9d13079c86ff3d9d532ed5f57f58987",
        "535a8f16b8ede6a96cfb53799f1cc99add60b3fa8fcdd90cdf75df6132f6f637",
        "0da3a7ac204385a5aa5128ad7d1060e25f13914fd0ffd243de1badd36d2f8dc5",
        "ccfc0881c0d34e67d405ce8fbe9b9cd6b52e901312c3018e5b86f55bbc7ecc2e",
        "2ad0c7bfcfc937c40ce40587aa420081dfac80c415bbd77f000a2bff22332bd0",
        "6327f17b88e3ca7a0d76b2a2b149174159636cbee049ef8fd74ee838c586e12b",
        "af47446bea26a8475dc65e1b4e311277a64df12f83ff48a7ad18eecc3e3766fb",
        "5d9a44a90439991093e7303a776c495d318b5012cff8217c8623b4b3d44d9cd8",
        "440f7e994a260ca4293745a431276c9c87e9cfccec2e7bd8e3d1492fc56a3e8e",
        "0186122f88baad1fc4294795dca301240a6ef4d34999e59387e095a2ffbda869",
        "411cd7fd695dd595e671afece2bfaadd9e34477fa66858c9643276e81dd16598",
        "0b3d09cd01d2bbe2a24398c812eafcfff85e15a9debbab1f7af88eaf618ba2e5",
        "3ebb9d27bd068459f386ea4966709b963cd38c828ae35ca4c0085f86dc9ba941",
        "6df6a782e21c1f51844b6a01d334a75cbc5557679eb0d3ed24d403da431d21b3",
        "b7a5eb26ea3373ef1e5eff05f0acbe8e633cda2d22216d7a1476768437b52027",
        "f090be97792dce7e57ac104229b40b10ad306e7f16faec89705997e43b4e0ec4",
        "6226b38f52683080de6ea3b0d49a2be57e46d8b38df20e4eba377d89e7555b43",
        "595605106e9cd66abb02eb4389a922f26f4981672a9c814074d5f85176c2ce52",
        "9bed6bb275376acbd52c871423858452c76f1e098f6b4c3bb0f581c43b1b78af",
        "5a5d91cc51f19b2d053f70e68ed7f7809caec0ccc135a368b88e739af7498d21",
        "37d0445b8ef3357db5b68226f16270505af0ca8d926d85c66f28b4683bb9f3ca",
        "99e5fb26ba2d82674a216b1de505f0d137f3bff7094d70869afe75f1d305c9ac",
        "88bc0a7fca01ab1e96b2dabd211605a6212bb5d45f59d7afa3eed9f7bc8cee2d",
        "10871ee43797f3ecb4848dc419147c536466edbaca83bfff9c09ef47d2152eeb",
        "86fa8cf2806d39a4bcf2a94ccf104d2b54fd72baab034fdbd6fbe7e0ea0dfb37",
        "ea7ca070c12582f44c4b083d94aa3fc050bcbe5ce45f4b0d8f47437d223b8d38",
        "c4861ea926ca6b8d17c35052c5dd11383583ea686ba3355910364dc6e1e771a6",
        "0221bbe4da98b60cd39c2d4787893d5bf1f70e303e7d7fe6fd9dde6528541ddb",
        "22a2206974c27030f99f35f259c44ffa64ef11b8e6330a3fcd1a68a8f686ffcd",
        "089fe5d906bbf100a911891eac4dea621bf33d0ca79e63856918c0f14598fd48",
        "be38f160ef5db2bc51789e67907f5b7955dbf6226b917507eedfd61d15e1b07a",
        "ae727ffcd38a5c26ee1a1af45b9ac07a2c9b21550714b15edf909a6b5622ee78",
        "4f6cc96186ec9524363c36dbf2caddc3a059d5210694fcd35f3ad3bf831290dc",
        "8a0ad15c6a35e1b677adb1151d9b6df49b11fd2f7921b331b5135844ce8a2e5a",
        "e4a7addaf81a40e00d9fb3967188ffeffdec0d7b61778dbc12f7f342fca79e5d",
        "564acc06212018c0ee33d6109bd062433161a501d0e4a3eee423dafafb21a33f",
        "f6332c5c8debbe2e49a1e431b1cfed8b0790943eecc9c3708a2f52204bc997c1",
        "b06cfd8e8e17b9afa585ea76f5647b4d54b64f4ad1b41780075f4982daaa68bd",
        "1f596a1cee4760ab7b507b18e4f7418e6230de72b9d619cc8f6ac0df5ffa88f4",
        "2738eb6f6f0a436e43f04b3fedda30cea5c3b8e36eb94fd3a73b7841ea6e3a6a",
        "b84fa9e606a6fd6ee381e2831f1b80a14a1626032fdc3678b121954c5d0ce98a",
        "4c4acf3cefd0b466d418d3b7f58f9b41681f803a81878e6fad8409f430e8bf04",
        "6fdceb9e02428d9175acbe04590b693a5c644eb8cae672f4c4d06d145ea8ab1a",
        "823486c19fd887d93dc2d1478edf5773ba381f13f0ae6f287c1038e7c81aef1c",
        "036bf6944a47791471e9a2cb86615de837f3aa234a7d1cd024026b3e1daee79e"
      ],
      header : {
        hash: "00000000000000018eaf634bf13b7e5e50860b99466b91140538223c75b75049",
        prevHash : "000000000000000124f6ce137a43bb288d63cc84f9847033cb84595ead05f9de",
        merkleRoot : "792f40129c95aec653d2838ef4b031bf541f11c764ca6c3ecc2e20b396ce83cb",
        time : 1389715824,
        version : 2,
        nonce : 322045839,
        qbits : 419587686,
      }
    }
  ]
};
