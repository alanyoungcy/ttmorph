export const OkidoTokenAbi = [{"abi":[{"type":"constructor","inputs":[{"name":"initialSupply","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ERC20InsufficientAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"allowance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSpender","inputs":[{"name":"spender","type":"address","internalType":"address"}]}],"sourceMap":"115:149:38:-:0;;;150:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1896:113:21;;;;;;;;;;;;;-1:-1:-1;;;1896:113:21;;;;;;;;;;;;;;;;-1:-1:-1;;;1896:113:21;;;1970:5;1962;:13;;;;;;:::i;:::-;-1:-1:-1;1985:7:21;:17;1995:7;1985;:17;:::i;:::-;;1896:113;;223:32:38::1;229:10;241:13;223:5;;;:32;;:::i;:::-;150:112:::0;115:149;;7721:208:21;-1:-1:-1;;;;;7791:21:21;;7787:91;;7835:32;;-1:-1:-1;;;7835:32:21;;7864:1;7835:32;;;2990:51:39;2963:18;;7835:32:21;;;;;;;;7787:91;7887:35;7903:1;7907:7;7916:5;7887:7;:35::i;:::-;7721:208;;:::o;6271:1107::-;-1:-1:-1;;;;;6360:18:21;;6356:540;;6512:5;6496:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6356:540:21;;-1:-1:-1;6356:540:21;;-1:-1:-1;;;;;6570:15:21;;6548:19;6570:15;;;;;;;;;;;6603:19;;;6599:115;;;6649:50;;-1:-1:-1;;;6649:50:21;;-1:-1:-1;;;;;3499:32:39;;6649:50:21;;;3481:51:39;3548:18;;;3541:34;;;3591:18;;;3584:34;;;3454:18;;6649:50:21;3279:345:39;6599:115:21;-1:-1:-1;;;;;6834:15:21;;:9;:15;;;;;;;;;;6852:19;;;;6834:37;;6356:540;-1:-1:-1;;;;;6910:16:21;;6906:425;;7073:12;:21;;;;;;;6906:425;;;-1:-1:-1;;;;;7284:13:21;;:9;:13;;;;;;;;;;:22;;;;;;6906:425;7361:2;-1:-1:-1;;;;;7346:25:21;7355:4;-1:-1:-1;;;;;7346:25:21;;7365:5;7346:25;;;;3775::39;;3763:2;3748:18;;3629:177;7346:25:21;;;;;;;;6271:1107;;;:::o;14:184:39:-;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;-1:-1:-1;176:16:39;;14:184;-1:-1:-1;14:184:39:o;203:127::-;264:10;259:3;255:20;252:1;245:31;295:4;292:1;285:15;319:4;316:1;309:15;335:380;414:1;410:12;;;;457;;;478:61;;532:4;524:6;520:17;510:27;;478:61;585:2;577:6;574:14;554:18;551:38;548:161;;631:10;626:3;622:20;619:1;612:31;666:4;663:1;656:15;694:4;691:1;684:15;548:161;;335:380;;;:::o;846:518::-;948:2;943:3;940:11;937:421;;;984:5;981:1;974:16;1028:4;1025:1;1015:18;1098:2;1086:10;1082:19;1079:1;1075:27;1069:4;1065:38;1134:4;1122:10;1119:20;1116:47;;;-1:-1:-1;1157:4:39;1116:47;1212:2;1207:3;1203:12;1200:1;1196:20;1190:4;1186:31;1176:41;;1267:81;1285:2;1278:5;1275:13;1267:81;;;1344:1;1330:16;;1311:1;1300:13;1267:81;;;1271:3;;937:421;846:518;;;:::o;1540:1299::-;1660:10;;-1:-1:-1;;;;;1682:30:39;;1679:56;;;1715:18;;:::i;:::-;1744:97;1834:6;1794:38;1826:4;1820:11;1794:38;:::i;:::-;1788:4;1744:97;:::i;:::-;1890:4;1921:2;1910:14;;1938:1;1933:649;;;;2626:1;2643:6;2640:89;;;-1:-1:-1;2695:19:39;;;2689:26;2640:89;-1:-1:-1;;1497:1:39;1493:11;;;1489:24;1485:29;1475:40;1521:1;1517:11;;;1472:57;2742:81;;1903:930;;1933:649;793:1;786:14;;;830:4;817:18;;-1:-1:-1;;1969:20:39;;;2087:222;2101:7;2098:1;2095:14;2087:222;;;2183:19;;;2177:26;2162:42;;2290:4;2275:20;;;;2243:1;2231:14;;;;2117:12;2087:222;;;2091:3;2337:6;2328:7;2325:19;2322:201;;;2398:19;;;2392:26;-1:-1:-1;;2481:1:39;2477:14;;;2493:3;2473:24;2469:37;2465:42;2450:58;2435:74;;2322:201;-1:-1:-1;;;;2569:1:39;2553:14;;;2549:22;2536:36;;-1:-1:-1;1540:1299:39:o;3052:222::-;3117:9;;;3138:10;;;3135:133;;;3190:10;3185:3;3181:20;3178:1;3171:31;3225:4;3222:1;3215:15;3253:4;3250:1;3243:15;3135:133;3052:222;;;;:::o;3629:177::-;115:149:38;;;;;;","linkReferences":{}},];