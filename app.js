var vocabulary = [
  ["Cat", "/kæt/", "小猫", "Animal", "a"],
  ["Ball", "/bɔːl/", "小球", "Toy", "a"],
  ["Moon", "/muːn/", "月亮", "Sky", "the"],
  ["Dog", "/dɔːɡ/", "小狗", "Animal", "a"],
  ["Cup", "/kʌp/", "杯子", "Kitchen", "a"],
  ["Sun", "/sʌn/", "太阳", "Sky", "the"],
  ["Fish", "/fɪʃ/", "小鱼", "Animal", "a"],
  ["Book", "/bʊk/", "书", "Home", "a"],
  ["Star", "/stɑːr/", "星星", "Sky", "a"],
  ["Mom", "/mɑːm/", "妈妈", "Family", ""],
  ["Dad", "/dæd/", "爸爸", "Family", ""],
  ["Baby", "/ˈbeɪbi/", "宝宝", "Family", "a"],
  ["Apple", "/ˈæpəl/", "苹果", "Food", "an"],
  ["Banana", "/bəˈnænə/", "香蕉", "Food", "a"],
  ["Milk", "/mɪlk/", "牛奶", "Food", ""],
  ["Water", "/ˈwɔːtər/", "水", "Food", ""],
  ["Juice", "/dʒuːs/", "果汁", "Food", ""],
  ["Bread", "/bred/", "面包", "Food", ""],
  ["Egg", "/eɡ/", "鸡蛋", "Food", "an"],
  ["Rice", "/raɪs/", "米饭", "Food", ""],
  ["Noodle", "/ˈnuːdəl/", "面条", "Food", "a"],
  ["Cookie", "/ˈkʊki/", "饼干", "Food", "a"],
  ["Cake", "/keɪk/", "蛋糕", "Food", "a"],
  ["Soup", "/suːp/", "汤", "Food", ""],
  ["Spoon", "/spuːn/", "勺子", "Kitchen", "a"],
  ["Bowl", "/boʊl/", "碗", "Kitchen", "a"],
  ["Plate", "/pleɪt/", "盘子", "Kitchen", "a"],
  ["Fork", "/fɔːrk/", "叉子", "Kitchen", "a"],
  ["Chair", "/tʃer/", "椅子", "Home", "a"],
  ["Table", "/ˈteɪbəl/", "桌子", "Home", "a"],
  ["Bed", "/bed/", "床", "Room", "a"],
  ["Pillow", "/ˈpɪloʊ/", "枕头", "Room", "a"],
  ["Blanket", "/ˈblæŋkɪt/", "毯子", "Room", "a"],
  ["Door", "/dɔːr/", "门", "Home", "a"],
  ["Window", "/ˈwɪndoʊ/", "窗户", "Home", "a"],
  ["Wall", "/wɔːl/", "墙", "Home", "a"],
  ["Floor", "/flɔːr/", "地板", "Home", "the"],
  ["Roof", "/ruːf/", "屋顶", "Home", "a"],
  ["Light", "/laɪt/", "灯", "Home", "a"],
  ["Lamp", "/læmp/", "台灯", "Home", "a"],
  ["Clock", "/klɑːk/", "钟", "Home", "a"],
  ["Sofa", "/ˈsoʊfə/", "沙发", "Home", "a"],
  ["Box", "/bɑːks/", "盒子", "Home", "a"],
  ["Basket", "/ˈbæskɪt/", "篮子", "Home", "a"],
  ["Bag", "/bæɡ/", "包", "Home", "a"],
  ["Key", "/kiː/", "钥匙", "Home", "a"],
  ["Mirror", "/ˈmɪrər/", "镜子", "Home", "a"],
  ["Picture", "/ˈpɪktʃər/", "图画", "Home", "a"],
  ["Shoe", "/ʃuː/", "鞋子", "Clothes", "a"],
  ["Sock", "/sɑːk/", "袜子", "Clothes", "a"],
  ["Hat", "/hæt/", "帽子", "Clothes", "a"],
  ["Shirt", "/ʃɜːrt/", "衬衫", "Clothes", "a"],
  ["Pants", "/pænts/", "裤子", "Clothes", ""],
  ["Coat", "/koʊt/", "外套", "Clothes", "a"],
  ["Dress", "/dres/", "连衣裙", "Clothes", "a"],
  ["Skirt", "/skɜːrt/", "裙子", "Clothes", "a"],
  ["Boot", "/buːt/", "靴子", "Clothes", "a"],
  ["Glove", "/ɡlʌv/", "手套", "Clothes", "a"],
  ["Scarf", "/skɑːrf/", "围巾", "Clothes", "a"],
  ["Pocket", "/ˈpɑːkɪt/", "口袋", "Clothes", "a"],
  ["Hand", "/hænd/", "手", "Body", "a"],
  ["Foot", "/fʊt/", "脚", "Body", "a"],
  ["Eye", "/aɪ/", "眼睛", "Body", "an"],
  ["Ear", "/ɪr/", "耳朵", "Body", "an"],
  ["Nose", "/noʊz/", "鼻子", "Body", "a"],
  ["Mouth", "/maʊθ/", "嘴巴", "Body", "a"],
  ["Hair", "/her/", "头发", "Body", ""],
  ["Face", "/feɪs/", "脸", "Body", "a"],
  ["Tooth", "/tuːθ/", "牙齿", "Body", "a"],
  ["Tummy", "/ˈtʌmi/", "肚子", "Body", "a"],
  ["Arm", "/ɑːrm/", "胳膊", "Body", "an"],
  ["Leg", "/leɡ/", "腿", "Body", "a"],
  ["Finger", "/ˈfɪŋɡər/", "手指", "Body", "a"],
  ["Toe", "/toʊ/", "脚趾", "Body", "a"],
  ["Knee", "/niː/", "膝盖", "Body", "a"],
  ["Tub", "/tʌb/", "浴缸", "Bath", "a"],
  ["Towel", "/ˈtaʊəl/", "毛巾", "Bath", "a"],
  ["Soap", "/soʊp/", "肥皂", "Bath", ""],
  ["Toothbrush", "/ˈtuːθbrʌʃ/", "牙刷", "Bath", "a"],
  ["Toothpaste", "/ˈtuːθpeɪst/", "牙膏", "Bath", ""],
  ["Comb", "/koʊm/", "梳子", "Bath", "a"],
  ["Brush", "/brʌʃ/", "刷子", "Bath", "a"],
  ["Potty", "/ˈpɑːti/", "小马桶", "Bath", "a"],
  ["Diaper", "/ˈdaɪpər/", "纸尿裤", "Baby", "a"],
  ["Tissue", "/ˈtɪʃuː/", "纸巾", "Bath", "a"],
  ["Toilet", "/ˈtɔɪlət/", "马桶", "Bath", "a"],
  ["Sink", "/sɪŋk/", "水槽", "Bath", "a"],
  ["Shampoo", "/ʃæmˈpuː/", "洗发水", "Bath", ""],
  ["Sponge", "/spʌndʒ/", "海绵", "Bath", "a"],
  ["Bubbles", "/ˈbʌbəlz/", "泡泡", "Bath", ""],
  ["Car", "/kɑːr/", "汽车", "Vehicle", "a"],
  ["Bus", "/bʌs/", "公交车", "Vehicle", "a"],
  ["Train", "/treɪn/", "火车", "Vehicle", "a"],
  ["Bike", "/baɪk/", "自行车", "Vehicle", "a"],
  ["Boat", "/boʊt/", "船", "Vehicle", "a"],
  ["Plane", "/pleɪn/", "飞机", "Vehicle", "a"],
  ["Truck", "/trʌk/", "卡车", "Vehicle", "a"],
  ["Taxi", "/ˈtæksi/", "出租车", "Vehicle", "a"],
  ["Road", "/roʊd/", "路", "Outside", "a"],
  ["Wheel", "/wiːl/", "轮子", "Vehicle", "a"],
  ["Street", "/striːt/", "街道", "Outside", "a"],
  ["Bridge", "/brɪdʒ/", "桥", "Outside", "a"],
  ["Park", "/pɑːrk/", "公园", "Outside", "a"],
  ["Store", "/stɔːr/", "商店", "Outside", "a"],
  ["House", "/haʊs/", "房子", "Home", "a"],
  ["Tree", "/triː/", "树", "Nature", "a"],
  ["Flower", "/ˈflaʊər/", "花", "Nature", "a"],
  ["Grass", "/ɡræs/", "草", "Nature", ""],
  ["Leaf", "/liːf/", "树叶", "Nature", "a"],
  ["Rock", "/rɑːk/", "石头", "Nature", "a"],
  ["Stick", "/stɪk/", "树枝", "Nature", "a"],
  ["Sand", "/sænd/", "沙子", "Nature", ""],
  ["Mud", "/mʌd/", "泥", "Nature", ""],
  ["Puddle", "/ˈpʌdəl/", "水坑", "Nature", "a"],
  ["Rain", "/reɪn/", "雨", "Sky", ""],
  ["Snow", "/snoʊ/", "雪", "Sky", ""],
  ["Cloud", "/klaʊd/", "云", "Sky", "a"],
  ["Sky", "/skaɪ/", "天空", "Sky", "the"],
  ["Wind", "/wɪnd/", "风", "Sky", "the"],
  ["Hill", "/hɪl/", "小山", "Nature", "a"],
  ["Bird", "/bɜːrd/", "鸟", "Animal", "a"],
  ["Duck", "/dʌk/", "鸭子", "Animal", "a"],
  ["Frog", "/frɑːɡ/", "青蛙", "Animal", "a"],
  ["Cow", "/kaʊ/", "奶牛", "Animal", "a"],
  ["Pig", "/pɪɡ/", "猪", "Animal", "a"],
  ["Horse", "/hɔːrs/", "马", "Animal", "a"],
  ["Sheep", "/ʃiːp/", "绵羊", "Animal", "a"],
  ["Goat", "/ɡoʊt/", "山羊", "Animal", "a"],
  ["Hen", "/hen/", "母鸡", "Animal", "a"],
  ["Mouse", "/maʊs/", "老鼠", "Animal", "a"],
  ["Rabbit", "/ˈræbɪt/", "兔子", "Animal", "a"],
  ["Bear", "/ber/", "熊", "Animal", "a"],
  ["Lion", "/ˈlaɪən/", "狮子", "Animal", "a"],
  ["Tiger", "/ˈtaɪɡər/", "老虎", "Animal", "a"],
  ["Monkey", "/ˈmʌŋki/", "猴子", "Animal", "a"],
  ["Bee", "/biː/", "蜜蜂", "Animal", "a"],
  ["Butterfly", "/ˈbʌtərflaɪ/", "蝴蝶", "Animal", "a"],
  ["Ant", "/ænt/", "蚂蚁", "Animal", "an"],
  ["Spider", "/ˈspaɪdər/", "蜘蛛", "Animal", "a"],
  ["Turtle", "/ˈtɜːrtəl/", "乌龟", "Animal", "a"],
  ["Snail", "/sneɪl/", "蜗牛", "Animal", "a"],
  ["Puppy", "/ˈpʌpi/", "小狗", "Animal", "a"],
  ["Kitten", "/ˈkɪtən/", "小猫", "Animal", "a"],
  ["Deer", "/dɪr/", "鹿", "Animal", "a"],
  ["Elephant", "/ˈelɪfənt/", "大象", "Animal", "an"],
  ["Giraffe", "/dʒəˈræf/", "长颈鹿", "Animal", "a"],
  ["Zebra", "/ˈziːbrə/", "斑马", "Animal", "a"],
  ["Doll", "/dɑːl/", "娃娃", "Toy", "a"],
  ["Block", "/blɑːk/", "积木", "Toy", "a"],
  ["Puzzle", "/ˈpʌzəl/", "拼图", "Toy", "a"],
  ["Crayon", "/ˈkreɪɑːn/", "蜡笔", "Toy", "a"],
  ["Drum", "/drʌm/", "鼓", "Toy", "a"],
  ["Kite", "/kaɪt/", "风筝", "Toy", "a"],
  ["Balloon", "/bəˈluːn/", "气球", "Toy", "a"],
  ["Bucket", "/ˈbʌkɪt/", "桶", "Toy", "a"],
  ["Shovel", "/ˈʃʌvəl/", "铲子", "Toy", "a"],
  ["Sticker", "/ˈstɪkər/", "贴纸", "Toy", "a"],
  ["Robot", "/ˈroʊbɑːt/", "机器人", "Toy", "a"],
  ["Teddy", "/ˈtedi/", "泰迪熊", "Toy", "a"],
  ["Crib", "/krɪb/", "婴儿床", "Baby", "a"],
  ["Stroller", "/ˈstroʊlər/", "婴儿车", "Baby", "a"],
  ["Bib", "/bɪb/", "围嘴", "Baby", "a"],
  ["Bottle", "/ˈbɑːtəl/", "奶瓶", "Baby", "a"],
  ["Pacifier", "/ˈpæsɪfaɪər/", "安抚奶嘴", "Baby", "a"],
  ["Wipe", "/waɪp/", "湿巾", "Baby", "a"],
  ["Phone", "/foʊn/", "电话", "Home", "a"],
  ["Remote", "/rɪˈmoʊt/", "遥控器", "Home", "a"],
  ["TV", "/ˌtiː ˈviː/", "电视", "Home", "a"],
  ["Rug", "/rʌɡ/", "地毯", "Home", "a"],
  ["Mat", "/mæt/", "垫子", "Home", "a"],
  ["Curtain", "/ˈkɜːrtən/", "窗帘", "Home", "a"],
  ["Drawer", "/drɔːr/", "抽屉", "Home", "a"],
  ["Shelf", "/ʃelf/", "架子", "Home", "a"],
  ["Closet", "/ˈklɑːzɪt/", "衣柜", "Home", "a"],
  ["Fridge", "/frɪdʒ/", "冰箱", "Kitchen", "a"],
  ["Oven", "/ˈʌvən/", "烤箱", "Kitchen", "an"],
  ["Pot", "/pɑːt/", "锅", "Kitchen", "a"],
  ["Pan", "/pæn/", "平底锅", "Kitchen", "a"],
  ["Kettle", "/ˈketəl/", "水壶", "Kitchen", "a"],
  ["Straw", "/strɔː/", "吸管", "Kitchen", "a"],
  ["Orange", "/ˈɔːrɪndʒ/", "橙子", "Food", "an"],
  ["Grape", "/ɡreɪp/", "葡萄", "Food", "a"],
  ["Pear", "/per/", "梨", "Food", "a"],
  ["Peach", "/piːtʃ/", "桃子", "Food", "a"],
  ["Lemon", "/ˈlemən/", "柠檬", "Food", "a"],
  ["Melon", "/ˈmelən/", "甜瓜", "Food", "a"],
  ["Strawberry", "/ˈstrɔːberi/", "草莓", "Food", "a"],
  ["Blueberry", "/ˈbluːberi/", "蓝莓", "Food", "a"],
  ["Watermelon", "/ˈwɔːtərmelən/", "西瓜", "Food", "a"],
  ["Carrot", "/ˈkærət/", "胡萝卜", "Food", "a"],
  ["Potato", "/pəˈteɪtoʊ/", "土豆", "Food", "a"],
  ["Tomato", "/təˈmeɪtoʊ/", "番茄", "Food", "a"],
  ["Corn", "/kɔːrn/", "玉米", "Food", ""],
  ["Pea", "/piː/", "豌豆", "Food", "a"],
  ["Bean", "/biːn/", "豆子", "Food", "a"],
  ["Cheese", "/tʃiːz/", "奶酪", "Food", ""],
  ["Yogurt", "/ˈjoʊɡərt/", "酸奶", "Food", ""],
  ["Cereal", "/ˈsɪriəl/", "麦片", "Food", ""],
  ["Meat", "/miːt/", "肉", "Food", ""],
  ["Chicken", "/ˈtʃɪkɪn/", "鸡肉", "Food", ""],
  ["Tofu", "/ˈtoʊfuː/", "豆腐", "Food", ""],
  ["Ice cream", "/ˈaɪs kriːm/", "冰淇淋", "Food", ""],
  ["Candy", "/ˈkændi/", "糖果", "Food", ""],
  ["Honey", "/ˈhʌni/", "蜂蜜", "Food", ""],
  ["Doorbell", "/ˈdɔːrbel/", "门铃", "Home", "a"],
  ["Mailbox", "/ˈmeɪlbɑːks/", "邮箱", "Home", "a"],
  ["Fence", "/fens/", "栅栏", "Outside", "a"],
  ["Path", "/pæθ/", "小路", "Outside", "a"],
  ["Gate", "/ɡeɪt/", "大门", "Outside", "a"],
  ["Yard", "/jɑːrd/", "院子", "Outside", "a"],
  ["School", "/skuːl/", "学校", "Outside", "a"],
  ["Slide", "/slaɪd/", "滑梯", "Outside", "a"],
  ["Swing", "/swɪŋ/", "秋千", "Outside", "a"],
  ["Bench", "/bentʃ/", "长椅", "Outside", "a"],
  ["Trash can", "/ˈtræʃ kæn/", "垃圾桶", "Outside", "a"],
  ["Sign", "/saɪn/", "标志牌", "Outside", "a"],
  ["Fire truck", "/ˈfaɪər trʌk/", "消防车", "Vehicle", "a"],
  ["Ambulance", "/ˈæmbjələns/", "救护车", "Vehicle", "an"],
  ["Police car", "/pəˈliːs kɑːr/", "警车", "Vehicle", "a"],
  ["Helmet", "/ˈhelmɪt/", "头盔", "Vehicle", "a"],
  ["Seat", "/siːt/", "座位", "Vehicle", "a"],
  ["Belt", "/belt/", "安全带", "Vehicle", "a"],
  ["Pajamas", "/pəˈdʒɑːməz/", "睡衣", "Clothes", ""],
  ["Slipper", "/ˈslɪpər/", "拖鞋", "Clothes", "a"],
  ["T-shirt", "/ˈtiː ʃɜːrt/", "T恤", "Clothes", "a"],
  ["Sweater", "/ˈswetər/", "毛衣", "Clothes", "a"],
  ["Shorts", "/ʃɔːrts/", "短裤", "Clothes", ""],
  ["Raincoat", "/ˈreɪnkoʊt/", "雨衣", "Clothes", "a"],
  ["Watch", "/wɑːtʃ/", "手表", "Clothes", "a"],
  ["Ring", "/rɪŋ/", "戒指", "Clothes", "a"],
  ["Necklace", "/ˈnekləs/", "项链", "Clothes", "a"],
  ["Button", "/ˈbʌtən/", "纽扣", "Clothes", "a"],
  ["Zipper", "/ˈzɪpər/", "拉链", "Clothes", "a"],
  ["Lace", "/leɪs/", "鞋带", "Clothes", "a"],
  ["Head", "/hed/", "头", "Body", "a"],
  ["Neck", "/nek/", "脖子", "Body", "a"],
  ["Back", "/bæk/", "背", "Body", "a"],
  ["Cheek", "/tʃiːk/", "脸颊", "Body", "a"],
  ["Chin", "/tʃɪn/", "下巴", "Body", "a"],
  ["Tongue", "/tʌŋ/", "舌头", "Body", "a"],
  ["Cracker", "/ˈkrækər/", "薄脆饼干", "Food", "a"],
  ["Muffin", "/ˈmʌfɪn/", "松饼", "Food", "a"],
  ["Pancake", "/ˈpænkeɪk/", "煎饼", "Food", "a"],
  ["Pizza", "/ˈpiːtsə/", "披萨", "Food", "a"],
  ["Sandwich", "/ˈsændwɪtʃ/", "三明治", "Food", "a"],
  ["Salad", "/ˈsæləd/", "沙拉", "Food", "a"],
  ["Napkin", "/ˈnæpkɪn/", "餐巾", "Kitchen", "a"],
  ["Tray", "/treɪ/", "托盘", "Kitchen", "a"],
  ["High chair", "/ˈhaɪ tʃer/", "儿童餐椅", "Kitchen", "a"],
  ["Washcloth", "/ˈwɑːʃklɔːθ/", "小毛巾", "Bath", "a"],
  ["Lotion", "/ˈloʊʃən/", "润肤露", "Bath", ""],
  ["Cream", "/kriːm/", "面霜", "Bath", ""],
  ["Nail", "/neɪl/", "指甲", "Body", "a"],
  ["Bandage", "/ˈbændɪdʒ/", "创可贴", "Body", "a"],
  ["Medicine", "/ˈmedɪsən/", "药", "Body", ""],
  ["Doctor", "/ˈdɑːktər/", "医生", "People", "a"],
  ["Nurse", "/nɜːrs/", "护士", "People", "a"],
  ["Mask", "/mæsk/", "口罩", "Clothes", "a"],
  ["Hamster", "/ˈhæmstər/", "仓鼠", "Animal", "a"],
  ["Parrot", "/ˈpærət/", "鹦鹉", "Animal", "a"],
  ["Goldfish", "/ˈɡoʊldfɪʃ/", "金鱼", "Animal", "a"],
  ["Donkey", "/ˈdɑːŋki/", "驴", "Animal", "a"],
  ["Camel", "/ˈkæməl/", "骆驼", "Animal", "a"],
  ["Panda", "/ˈpændə/", "熊猫", "Animal", "a"],
  ["Whale", "/weɪl/", "鲸鱼", "Animal", "a"],
  ["Shark", "/ʃɑːrk/", "鲨鱼", "Animal", "a"],
  ["Crab", "/kræb/", "螃蟹", "Animal", "a"],
  ["Shell", "/ʃel/", "贝壳", "Nature", "a"],
  ["Beach", "/biːtʃ/", "海滩", "Nature", "a"],
  ["Wave", "/weɪv/", "海浪", "Nature", "a"],
  ["Bedroom", "/ˈbedruːm/", "卧室", "Home", "a"],
  ["Kitchen", "/ˈkɪtʃən/", "厨房", "Home", "a"],
  ["Bathroom", "/ˈbæθruːm/", "浴室", "Home", "a"],
  ["Garden", "/ˈɡɑːrdən/", "花园", "Outside", "a"],
  ["Garage", "/ɡəˈrɑːʒ/", "车库", "Home", "a"],
  ["Balcony", "/ˈbælkəni/", "阳台", "Home", "a"],
  ["Paper", "/ˈpeɪpər/", "纸", "Toy", ""],
  ["Pencil", "/ˈpensəl/", "铅笔", "Toy", "a"],
  ["Eraser", "/ɪˈreɪsər/", "橡皮", "Toy", "an"],
  ["Paint", "/peɪnt/", "颜料", "Toy", ""],
  ["Glue", "/ɡluː/", "胶水", "Toy", ""],
  ["Scissors", "/ˈsɪzərz/", "剪刀", "Toy", ""],
  ["Music", "/ˈmjuːzɪk/", "音乐", "Toy", ""],
  ["Song", "/sɔːŋ/", "歌", "Toy", "a"],
  ["Bell", "/bel/", "铃铛", "Toy", "a"],
  ["Piano", "/piˈænoʊ/", "钢琴", "Toy", "a"],
  ["Guitar", "/ɡɪˈtɑːr/", "吉他", "Toy", "a"],
  ["Flute", "/fluːt/", "长笛", "Toy", "a"],
  ["Cradle", "/ˈkreɪdəl/", "摇篮", "Room", "a"],
  ["Night-light", "/ˈnaɪt laɪt/", "小夜灯", "Room", "a"],
  ["Storybook", "/ˈstɔːribʊk/", "故事书", "Room", "a"],
  ["Mug", "/mʌɡ/", "马克杯", "Kitchen", "a"],
  ["Toast", "/toʊst/", "吐司", "Food", ""],
  ["Jam", "/dʒæm/", "果酱", "Food", ""],
  ["Broom", "/bruːm/", "扫帚", "Home", "a"],
  ["Mop", "/mɑːp/", "拖把", "Home", "a"],
  ["Dustpan", "/ˈdʌstpæn/", "簸箕", "Home", "a"],
  ["Stairs", "/sterz/", "楼梯", "Home", ""],
  ["Elevator", "/ˈelɪveɪtər/", "电梯", "Home", "an"],
  ["Handle", "/ˈhændəl/", "把手", "Home", "a"]
];

function buildLessonDays(entries) {
  var days = [];
  var dayIndex;
  var lessonIndex;
  var lessons;

  for (dayIndex = 0; dayIndex < entries.length; dayIndex += 3) {
    lessons = [];

    for (lessonIndex = 0; lessonIndex < 3; lessonIndex += 1) {
      lessons.push(buildLesson(entries[dayIndex + lessonIndex]));
    }

    days.push({
      label: "Day " + (days.length + 1),
      title: "Day " + (days.length + 1),
      lessons: lessons
    });
  }

  return days;
}

function buildLesson(entry) {
  var word = entry[0];
  var article = entry[4];
  var spokenWord = word.toLowerCase();
  var sentence = article ? "I see " + article + " " + spokenWord + "." : "I see " + spokenWord + ".";

  return {
    word: word,
    pronunciation: entry[1],
    meaning: entry[2],
    theme: entry[3],
    sentence: sentence,
    art: normalizeArtKey(word)
  };
}

function normalizeArtKey(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

var lessonDays = buildLessonDays(vocabulary);

var artTemplates = {
  cat: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="cat drawing">',
    '<path d="M83 82 L105 37 L132 74 L172 74 L197 37 L217 84" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<ellipse cx="150" cy="119" rx="82" ry="68" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="122" cy="111" r="8" fill="#111"/>',
    '<circle cx="178" cy="111" r="8" fill="#111"/>',
    '<path d="M150 124 L139 139 L161 139 Z" fill="#111"/>',
    '<path d="M120 153 Q150 172 180 153" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M80 132 H28 M82 152 H34 M220 132 H252 M218 152 H246" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  ball: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="ball drawing">',
    '<circle cx="140" cy="110" r="83" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M80 55 C105 92 108 130 78 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M200 55 C175 92 172 130 202 167" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M58 109 H222" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<circle cx="140" cy="110" r="18" fill="#111"/>',
    '</svg>'
  ].join(""),
  moon: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="moon drawing">',
    '<path d="M171 30 C122 45 88 90 88 141 C88 168 101 190 119 202 C70 194 34 153 34 104 C34 49 79 6 135 6 C149 6 161 14 171 30 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="204" cy="58" r="9" fill="#111"/>',
    '<circle cx="228" cy="111" r="6" fill="#111"/>',
    '<circle cx="187" cy="154" r="7" fill="#111"/>',
    '<path d="M205 29 L211 42 L225 44 L214 53 L217 67 L205 60 L193 67 L196 53 L185 44 L199 42 Z" fill="#111"/>',
    '</svg>'
  ].join(""),
  dog: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="dog drawing">',
    '<path d="M72 91 Q91 45 136 54 Q184 43 209 84 Q237 95 232 129 Q225 183 154 187 Q82 188 64 133 Q59 111 72 91 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M83 89 Q49 64 45 113 Q49 142 77 128" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M204 87 Q238 62 242 113 Q236 145 208 128" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="119" cy="117" r="8" fill="#111"/>',
    '<circle cx="173" cy="117" r="8" fill="#111"/>',
    '<path d="M146 130 L133 144 L160 144 Z" fill="#111"/>',
    '<path d="M117 159 Q146 178 177 159" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  cup: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="cup drawing">',
    '<path d="M82 57 H180 L168 180 H94 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M180 83 H211 Q238 83 238 111 Q238 139 211 139 H174" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M93 91 H169" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '<path d="M101 184 H164" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  sun: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="sun drawing">',
    '<circle cx="140" cy="110" r="54" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M140 20 V48 M140 172 V200 M50 110 H78 M202 110 H230 M76 46 L96 66 M184 154 L204 174 M204 46 L184 66 M96 154 L76 174" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<circle cx="121" cy="103" r="7" fill="#111"/>',
    '<circle cx="159" cy="103" r="7" fill="#111"/>',
    '<path d="M119 128 Q140 144 162 128" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  fish: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="fish drawing">',
    '<path d="M51 112 Q110 47 194 111 Q112 176 51 112 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M193 111 L239 73 L238 150 Z" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="101" cy="101" r="8" fill="#111"/>',
    '<path d="M131 75 Q151 111 130 148" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M70 84 Q88 113 70 140" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  book: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="book drawing">',
    '<path d="M42 48 H129 Q147 48 147 66 V181 Q135 166 112 166 H42 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M238 48 H155 Q147 48 147 66 V181 Q160 166 181 166 H238 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M71 83 H113 M71 113 H116 M180 83 H217 M180 113 H213" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '</svg>'
  ].join(""),
  star: [
    '<svg viewBox="0 0 280 220" role="img" aria-label="star drawing">',
    '<path d="M140 24 L166 82 L230 88 L181 130 L196 193 L140 160 L84 193 L99 130 L50 88 L114 82 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="122" cy="112" r="7" fill="#111"/>',
    '<circle cx="158" cy="112" r="7" fill="#111"/>',
    '<path d="M119 135 Q140 149 161 135" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '</svg>'
  ].join("")
};

var lineArtTemplates = {
  person: [
    '<circle cx="140" cy="70" r="30" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M86 183 Q98 122 140 122 Q182 122 194 183 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M105 145 H175 M116 183 V152 M164 183 V152" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  baby: [
    '<circle cx="140" cy="76" r="34" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M84 151 Q113 113 140 150 Q167 113 196 151 Q179 191 140 191 Q101 191 84 151 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M119 82 H121 M159 82 H161 M124 101 Q140 113 157 101" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  fruit: [
    '<path d="M139 61 Q126 39 148 27" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M151 47 Q178 34 197 54 Q174 65 151 47 Z" fill="#ded8c8" stroke="#111" stroke-width="7" stroke-linejoin="round"/>',
    '<circle cx="140" cy="124" r="61" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M115 101 Q140 82 166 101" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  banana: [
    '<path d="M71 74 Q137 152 218 78 Q188 176 93 171 Q62 135 71 74 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M95 93 Q139 137 195 96" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  drink: [
    '<path d="M94 55 H187 L176 188 H105 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M105 92 H177" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M168 30 L196 82" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  bread: [
    '<path d="M65 103 Q66 52 112 52 Q139 23 168 52 Q215 52 215 103 V172 H65 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M101 120 H179 M101 146 H179" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  egg: [
    '<path d="M140 37 Q193 75 193 137 Q193 188 140 188 Q87 188 87 137 Q87 75 140 37 Z" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="140" cy="134" r="27" fill="#ded8c8" stroke="#111" stroke-width="6"/>'
  ].join(""),
  bowl: [
    '<path d="M65 107 H215 Q205 180 140 180 Q75 180 65 107 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M82 105 Q103 74 124 105 M121 105 Q142 73 163 105 M158 105 Q180 75 201 105" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    '<path d="M97 184 H183" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  snack: [
    '<rect x="79" y="68" width="122" height="104" rx="18" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="111" cy="99" r="7" fill="#111"/><circle cx="161" cy="95" r="7" fill="#111"/><circle cx="139" cy="130" r="7" fill="#111"/><circle cx="177" cy="146" r="7" fill="#111"/>'
  ].join(""),
  cake: [
    '<path d="M75 96 H205 V178 H75 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M92 96 Q111 122 130 96 Q149 122 168 96 Q187 122 205 96" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M112 70 V95 M140 62 V95 M168 70 V95" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  utensil: [
    '<path d="M103 39 V188 M82 41 V86 M103 41 V86 M124 41 V86" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M177 40 Q211 70 177 100 V188" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  plate: [
    '<circle cx="140" cy="112" r="77" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="140" cy="112" r="45" fill="none" stroke="#111" stroke-width="6"/>'
  ].join(""),
  chair: [
    '<path d="M91 56 H186 V119 H91 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M76 119 H204 V148 H76 Z M92 148 V190 M188 148 V190" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join(""),
  table: [
    '<path d="M61 91 H219 V122 H61 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M88 122 V190 M192 122 V190" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  bed: [
    '<path d="M55 108 H225 V166 H55 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M55 83 H115 V108 H55 Z M55 166 V190 M225 166 V190" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join(""),
  home: [
    '<path d="M52 108 L140 43 L228 108 V190 H52 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M116 190 V134 H164 V190 M75 121 H107 V153 H75 Z M174 121 H206 V153 H174 Z" fill="#ded8c8" stroke="#111" stroke-width="7" stroke-linejoin="round"/>'
  ].join(""),
  door: [
    '<rect x="91" y="38" width="98" height="154" rx="4" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="168" cy="118" r="7" fill="#111"/>'
  ].join(""),
  window: [
    '<rect x="64" y="50" width="152" height="128" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M140 52 V177 M66 114 H214" fill="none" stroke="#111" stroke-width="7"/>'
  ].join(""),
  light: [
    '<path d="M140 34 V72 M88 58 L112 83 M192 58 L168 83" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<path d="M105 89 H175 L163 150 H117 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M121 172 H159" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  clock: [
    '<circle cx="140" cy="111" r="73" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M140 68 V113 L174 135" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  sofa: [
    '<path d="M72 106 Q73 70 107 70 H173 Q207 70 208 106 H220 Q233 106 233 130 V176 H47 V130 Q47 106 60 106 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M90 107 V145 M190 107 V145" fill="none" stroke="#111" stroke-width="7"/>'
  ].join(""),
  box: [
    '<path d="M69 79 H211 V178 H69 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M69 79 L140 41 L211 79 M140 41 V178" fill="none" stroke="#111" stroke-width="7" stroke-linejoin="round"/>'
  ].join(""),
  bag: [
    '<path d="M84 84 H196 L184 187 H96 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M111 85 Q111 45 140 45 Q169 45 169 85" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  key: [
    '<circle cx="93" cy="110" r="35" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M128 110 H222 M190 110 V138 M209 110 V129" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  clothes: [
    '<path d="M96 58 L121 43 Q140 58 159 43 L184 58 L214 101 L184 121 V185 H96 V121 L66 101 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M120 62 Q140 78 160 62" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  shoe: [
    '<path d="M72 132 Q113 135 139 90 H178 Q184 122 225 137 Q228 166 191 169 H69 Q56 153 72 132 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M119 126 H171" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  hat: [
    '<path d="M91 128 Q94 63 140 63 Q186 63 189 128" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M55 135 H225" fill="none" stroke="#111" stroke-width="10" stroke-linecap="round"/>'
  ].join(""),
  body: [
    '<circle cx="140" cy="107" r="69" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="116" cy="98" r="8" fill="#111"/><circle cx="164" cy="98" r="8" fill="#111"/>',
    '<path d="M119 131 Q140 148 162 131" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  hand: [
    '<path d="M92 117 V70 Q92 55 105 55 Q118 55 118 70 V108 V57 Q118 43 131 43 Q144 43 144 57 V106 V65 Q144 52 157 52 Q170 52 170 65 V115 V83 Q170 69 183 69 Q196 69 196 83 V136 Q196 184 144 184 Q102 184 92 145 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join(""),
  foot: [
    '<path d="M83 132 Q100 87 144 90 Q173 91 189 117 Q206 117 213 134 Q223 161 192 174 H91 Q61 157 83 132 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="111" cy="100" r="7" fill="#111"/><circle cx="131" cy="94" r="7" fill="#111"/><circle cx="153" cy="96" r="7" fill="#111"/>'
  ].join(""),
  eye: [
    '<path d="M50 112 Q140 43 230 112 Q140 181 50 112 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="140" cy="112" r="30" fill="#ded8c8" stroke="#111" stroke-width="7"/><circle cx="140" cy="112" r="10" fill="#111"/>'
  ].join(""),
  bath: [
    '<path d="M61 104 H219 V132 Q219 182 169 182 H111 Q61 182 61 132 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M85 104 V68 Q85 48 107 48 H126 M78 185 H98 M182 185 H202" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  towel: [
    '<rect x="82" y="45" width="116" height="144" rx="12" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M102 86 H178 M102 126 H178 M102 166 H178" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  soap: [
    '<rect x="75" y="99" width="130" height="68" rx="30" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="101" cy="71" r="13" fill="#f7f3e8" stroke="#111" stroke-width="6"/><circle cx="143" cy="61" r="20" fill="#f7f3e8" stroke="#111" stroke-width="6"/><circle cx="183" cy="78" r="12" fill="#f7f3e8" stroke="#111" stroke-width="6"/>'
  ].join(""),
  brush: [
    '<path d="M83 159 L185 57 Q199 43 213 57 Q227 71 213 85 L111 187 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M74 171 L96 193 M93 153 L115 175 M113 133 L135 155" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  toilet: [
    '<path d="M99 55 H183 V113 Q183 146 154 153 V183 H107 V153 Q82 143 82 114 Q82 91 99 82 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M93 82 H183 M96 187 H171" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  vehicle: [
    '<path d="M52 126 L80 83 H181 L220 126 V160 H52 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="91" cy="163" r="18" fill="#ded8c8" stroke="#111" stroke-width="7"/><circle cx="185" cy="163" r="18" fill="#ded8c8" stroke="#111" stroke-width="7"/>',
    '<path d="M96 83 V126 M160 83 V126" fill="none" stroke="#111" stroke-width="6"/>'
  ].join(""),
  bus: [
    '<rect x="52" y="65" width="176" height="102" rx="18" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M73 99 H207 M94 66 V128 M140 66 V128 M186 66 V128" fill="none" stroke="#111" stroke-width="6"/>',
    '<circle cx="93" cy="170" r="16" fill="#ded8c8" stroke="#111" stroke-width="7"/><circle cx="187" cy="170" r="16" fill="#ded8c8" stroke="#111" stroke-width="7"/>'
  ].join(""),
  train: [
    '<rect x="54" y="68" width="172" height="93" rx="14" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M86 68 V128 M140 68 V128 M194 68 V128 M72 187 H208" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<circle cx="97" cy="163" r="13" fill="#111"/><circle cx="183" cy="163" r="13" fill="#111"/>'
  ].join(""),
  bike: [
    '<circle cx="86" cy="154" r="34" fill="#f7f3e8" stroke="#111" stroke-width="8"/><circle cx="194" cy="154" r="34" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M86 154 L126 96 H159 L194 154 H128 L86 154 M159 96 L171 75 H196 M126 96 L117 76 H100" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  boat: [
    '<path d="M55 121 H225 L199 172 H81 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M139 121 V48 L190 121 M139 55 L93 121 M71 190 Q108 177 140 190 Q174 177 209 190" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  plane: [
    '<path d="M38 123 L238 57 L202 119 L239 158 L211 171 L170 142 L93 176 L79 159 L129 125 L66 97 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join(""),
  road: [
    '<path d="M97 194 L126 45 H154 L183 194 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M140 62 V86 M140 111 V136 M140 162 V187" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  tree: [
    '<path d="M129 185 V124 H151 V185" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="140" cy="78" r="44" fill="#f7f3e8" stroke="#111" stroke-width="8"/><circle cx="99" cy="111" r="35" fill="#f7f3e8" stroke="#111" stroke-width="8"/><circle cx="181" cy="111" r="35" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M92 188 H188" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>'
  ].join(""),
  flower: [
    '<path d="M140 118 V190 M112 153 Q140 148 140 177 M168 153 Q140 148 140 177" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<circle cx="140" cy="86" r="18" fill="#ded8c8" stroke="#111" stroke-width="6"/><circle cx="140" cy="50" r="19" fill="#f7f3e8" stroke="#111" stroke-width="6"/><circle cx="105" cy="86" r="19" fill="#f7f3e8" stroke="#111" stroke-width="6"/><circle cx="175" cy="86" r="19" fill="#f7f3e8" stroke="#111" stroke-width="6"/><circle cx="140" cy="122" r="19" fill="#f7f3e8" stroke="#111" stroke-width="6"/>'
  ].join(""),
  nature: [
    '<path d="M53 178 H227" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M68 161 Q91 102 120 162 Q152 71 207 162" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join(""),
  weather: [
    '<path d="M87 110 Q89 70 128 75 Q150 42 183 70 Q222 75 222 113 Q222 149 178 149 H101 Q62 149 62 121 Q62 111 87 110 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M103 169 L92 195 M141 169 L130 195 M179 169 L168 195" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  animal: [
    '<path d="M73 103 Q86 62 130 69 H174 Q216 73 225 116 Q232 157 198 174 H93 Q57 161 64 125 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="123" cy="110" r="7" fill="#111"/><circle cx="171" cy="110" r="7" fill="#111"/>',
    '<path d="M146 124 L135 137 L157 137 Z M93 174 V190 M196 174 V190" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  bird: [
    '<path d="M82 122 Q96 72 149 78 Q199 84 207 129 Q208 171 153 180 Q100 176 82 122 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M205 120 L238 104 L209 142 M105 119 Q139 93 172 125" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
    '<circle cx="163" cy="105" r="7" fill="#111"/>'
  ].join(""),
  bug: [
    '<ellipse cx="140" cy="116" rx="45" ry="58" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M95 104 H50 M95 131 H55 M185 104 H230 M185 131 H225 M140 59 V173" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>',
    '<circle cx="122" cy="91" r="7" fill="#111"/><circle cx="158" cy="91" r="7" fill="#111"/>'
  ].join(""),
  sea: [
    '<path d="M59 115 Q114 66 180 115 Q114 164 59 115 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M180 115 L230 80 V150 Z" fill="#ded8c8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<circle cx="101" cy="105" r="7" fill="#111"/>'
  ].join(""),
  toy: [
    '<rect x="67" y="74" width="65" height="65" rx="10" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<rect x="148" y="55" width="65" height="65" rx="10" fill="#ded8c8" stroke="#111" stroke-width="8"/>',
    '<rect x="111" y="136" width="65" height="65" rx="10" fill="#f7f3e8" stroke="#111" stroke-width="8"/>'
  ].join(""),
  doll: [
    '<circle cx="140" cy="67" r="29" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M101 187 L119 107 H161 L179 187 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M96 128 L65 155 M184 128 L215 155 M115 83 Q140 101 165 83" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  teddy: [
    '<circle cx="94" cy="72" r="24" fill="#ded8c8" stroke="#111" stroke-width="7"/><circle cx="186" cy="72" r="24" fill="#ded8c8" stroke="#111" stroke-width="7"/>',
    '<circle cx="140" cy="105" r="58" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<circle cx="119" cy="99" r="7" fill="#111"/><circle cx="161" cy="99" r="7" fill="#111"/><path d="M140 112 L128 126 H152 Z M113 143 Q140 160 167 143" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  art: [
    '<path d="M82 160 L177 65 Q192 50 207 65 Q222 80 207 95 L112 190 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M72 171 L102 200 M183 70 L202 89" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  music: [
    '<path d="M110 58 V154 Q110 180 83 180 Q60 180 60 160 Q60 139 88 139 Q99 139 110 146 V58 L195 41 V136 Q195 162 168 162 Q145 162 145 142 Q145 121 173 121 Q184 121 195 128" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  screen: [
    '<rect x="58" y="60" width="164" height="106" rx="10" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M112 187 H168 M140 166 V187 M87 94 H193" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  kitchen: [
    '<path d="M89 78 H191 V174 H89 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M111 78 V174 M169 78 V174 M103 110 H121 M159 110 H177" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>'
  ].join(""),
  medical: [
    '<rect x="72" y="77" width="136" height="105" rx="18" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M140 100 V159 M111 130 H169 M111 77 V56 H169 V77" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
  ].join(""),
  outdoor: [
    '<path d="M59 178 H221" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M82 178 V84 H198 V178 M82 119 H198 M110 84 V178 M170 84 V178" fill="#f7f3e8" stroke="#111" stroke-width="7" stroke-linejoin="round"/>'
  ].join(""),
  play: [
    '<path d="M91 65 H189 L143 181 H75 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M102 96 H177" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  safety: [
    '<path d="M75 100 Q83 48 140 48 Q197 48 205 100 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M61 108 H219 M96 101 V82 M140 101 V61 M184 101 V82" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/>'
  ].join(""),
  room: [
    '<path d="M58 183 V58 H222 V183" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>',
    '<path d="M58 118 H222 M112 58 V183 M168 58 V183" fill="none" stroke="#111" stroke-width="6"/>'
  ].join(""),
  cleaning: [
    '<path d="M122 42 L164 186" fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>',
    '<path d="M137 144 H204 L217 187 H120 Z" fill="#f7f3e8" stroke="#111" stroke-width="8" stroke-linejoin="round"/>'
  ].join("")
};

var lineArtDefinitions = {};

function addLineArt(words, type) {
  var list = words.split(" ");
  var index;

  for (index = 0; index < list.length; index += 1) {
    lineArtDefinitions[list[index]] = type;
  }
}

addLineArt("mom dad doctor nurse", "person");
addLineArt("baby", "baby");
addLineArt("apple orange grape pear peach lemon melon strawberry blueberry watermelon carrot potato tomato corn pea bean cheese yogurt cereal tofu honey jam", "fruit");
addLineArt("banana", "banana");
addLineArt("milk water juice bottle wipe shampoo lotion cream", "drink");
addLineArt("bread toast sandwich cracker muffin pancake pizza meat chicken", "bread");
addLineArt("egg", "egg");
addLineArt("rice noodle soup bowl salad", "bowl");
addLineArt("cookie candy", "snack");
addLineArt("cake ice-cream", "cake");
addLineArt("spoon fork straw", "utensil");
addLineArt("plate tray napkin", "plate");
addLineArt("chair high-chair", "chair");
addLineArt("table", "table");
addLineArt("bed pillow blanket crib cradle", "bed");
addLineArt("house roof garage balcony bedroom kitchen bathroom garden", "home");
addLineArt("door doorbell gate handle", "door");
addLineArt("window wall floor curtain mirror picture", "window");
addLineArt("light lamp night-light", "light");
addLineArt("clock watch", "clock");
addLineArt("sofa", "sofa");
addLineArt("box basket bucket mailbox trash-can", "box");
addLineArt("bag pocket", "bag");
addLineArt("key", "key");
addLineArt("shoe sock boot slipper", "shoe");
addLineArt("hat helmet", "hat");
addLineArt("shirt pants coat dress skirt glove scarf pajamas t-shirt sweater shorts raincoat mask bib", "clothes");
addLineArt("ring necklace button zipper lace belt", "clothes");
addLineArt("hand finger arm", "hand");
addLineArt("foot toe leg knee", "foot");
addLineArt("eye", "eye");
addLineArt("ear nose mouth hair face tooth tummy head neck back cheek chin tongue nail", "body");
addLineArt("tub potty diaper", "bath");
addLineArt("towel washcloth tissue", "towel");
addLineArt("soap toothpaste bubbles sponge", "soap");
addLineArt("toothbrush comb brush", "brush");
addLineArt("toilet sink", "toilet");
addLineArt("car taxi police-car ambulance fire-truck seat remote", "vehicle");
addLineArt("bus", "bus");
addLineArt("train", "train");
addLineArt("bike wheel", "bike");
addLineArt("boat", "boat");
addLineArt("plane", "plane");
addLineArt("truck", "vehicle");
addLineArt("road street bridge path", "road");
addLineArt("tree", "tree");
addLineArt("flower", "flower");
addLineArt("grass leaf rock stick sand mud puddle shell beach wave hill", "nature");
addLineArt("rain snow cloud sky wind", "weather");
addLineArt("bird duck hen parrot", "bird");
addLineArt("bee butterfly ant spider", "bug");
addLineArt("whale shark crab goldfish", "sea");
addLineArt("frog cow pig horse sheep goat mouse rabbit bear lion tiger monkey puppy kitten deer elephant giraffe zebra hamster donkey camel panda turtle snail", "animal");
addLineArt("doll", "doll");
addLineArt("block puzzle sticker storybook", "toy");
addLineArt("teddy", "teddy");
addLineArt("crayon pencil eraser paper paint glue scissors", "art");
addLineArt("drum kite balloon shovel robot stroller pacifier", "toy");
addLineArt("music song bell piano guitar flute", "music");
addLineArt("phone tv", "screen");
addLineArt("fridge oven pot pan kettle mug cup", "kitchen");
addLineArt("medicine bandage", "medical");
addLineArt("park store school fence yard sign bench", "outdoor");
addLineArt("slide swing", "play");
addLineArt("safety", "safety");
addLineArt("rug mat drawer shelf closet", "room");
addLineArt("broom mop dustpan", "cleaning");
addLineArt("stairs elevator", "room");

var state = {
  dayIndex: 0,
  index: 0
};

var storageKey = "inklish-guide-seen";

function byId(id) {
  return document.getElementById(id);
}

var elements = {
  guide: byId("guide"),
  startButton: byId("start-button"),
  guideButton: byId("guide-button"),
  title: byId("app-title"),
  dayLabel: byId("day-label"),
  prevDayButton: byId("prev-day-button"),
  nextDayButton: byId("next-day-button"),
  dayPicker: byId("day-picker"),
  counter: byId("lesson-counter"),
  theme: byId("lesson-theme"),
  picture: byId("picture-frame"),
  word: byId("word"),
  pronunciation: byId("pronunciation"),
  meaning: byId("meaning"),
  parentCue: byId("parent-cue"),
  prevButton: byId("prev-button"),
  nextButton: byId("next-button")
};

function on(element, eventName, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, handler, false);
    return;
  }

  if (element.attachEvent) {
    element.attachEvent("on" + eventName, function () {
      handler.call(element, window.event);
    });
  }
}

function hasSeenGuide() {
  try {
    return localStorage.getItem(storageKey) === "true";
  } catch (error) {
    return false;
  }
}

function markGuideSeen() {
  try {
    localStorage.setItem(storageKey, "true");
  } catch (error) {
    // Some e-ink browsers disable storage; closing the guide should still work.
  }
}

function openGuide() {
  elements.guide.removeAttribute("hidden");

  if (typeof elements.guide.showModal === "function") {
    try {
      if (!elements.guide.open) {
        elements.guide.showModal();
      }
    } catch (error) {
      elements.guide.setAttribute("open", "");
    }
    return;
  }

  elements.guide.setAttribute("open", "");
}

function closeGuide() {
  markGuideSeen();

  if (typeof elements.guide.close === "function") {
    try {
      elements.guide.close();
    } catch (error) {
      // Old browsers may expose dialog-like elements without a working close method.
    }
  }

  elements.guide.removeAttribute("open");
  elements.guide.setAttribute("hidden", "hidden");
}

function renderArt(lesson) {
  var lineArtType;

  if (artTemplates[lesson.art]) {
    return artTemplates[lesson.art];
  }

  lineArtType = lineArtDefinitions[lesson.art];

  if (lineArtType && lineArtTemplates[lineArtType]) {
    return wrapLineArt(lineArtTemplates[lineArtType], lesson.word);
  }

  return renderWordCard(lesson);
}

function wrapLineArt(content, label) {
  return [
    '<svg viewBox="0 0 280 220" role="img" aria-label="',
    escapeHtml(label),
    ' drawing">',
    content,
    '</svg>'
  ].join("");
}

function renderWordCard(lesson) {
  return [
    '<svg viewBox="0 0 280 220" role="img" aria-label="word card">',
    '<rect x="38" y="28" width="204" height="164" rx="24" fill="#f7f3e8" stroke="#111" stroke-width="8"/>',
    '<path d="M64 70 H216 M64 150 H216" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>',
    '<circle cx="70" cy="110" r="11" fill="#111"/>',
    '<circle cx="210" cy="110" r="11" fill="#111"/>',
    '<text x="140" y="121" text-anchor="middle" fill="#111" font-family="Georgia, serif" font-size="32" font-weight="900">',
    escapeHtml(lesson.word),
    '</text>',
    '<text x="140" y="171" text-anchor="middle" fill="#111" font-family="Georgia, serif" font-size="17" font-weight="900">',
    escapeHtml(lesson.theme),
    '</text>',
    '</svg>'
  ].join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderLesson() {
  var day = lessonDays[state.dayIndex];
  var lessons = day.lessons;
  var lesson = lessons[state.index];

  elements.title.innerHTML = day.title;
  elements.dayLabel.innerHTML = day.label;
  elements.counter.innerHTML = state.index + 1 + " / " + lessons.length;
  elements.theme.innerHTML = lesson.theme;
  elements.picture.innerHTML = renderArt(lesson);
  elements.word.innerHTML = lesson.word;
  elements.pronunciation.innerHTML = lesson.pronunciation;
  elements.meaning.innerHTML = lesson.meaning;
  elements.parentCue.innerHTML = lesson.sentence;
}

function getVisibleDayIndexes() {
  var maxVisibleDays = 3;
  var visibleCount = Math.min(maxVisibleDays, lessonDays.length);
  var halfWindow = Math.floor(visibleCount / 2);
  var maxStart = lessonDays.length - visibleCount;
  var start = Math.min(Math.max(state.dayIndex - halfWindow, 0), maxStart);
  var indexes = [];
  var index;

  for (index = 0; index < visibleCount; index += 1) {
    indexes.push(start + index);
  }

  return indexes;
}

function renderDayPicker() {
  var indexes = getVisibleDayIndexes();
  var html = [];
  var index;
  var dayIndex;
  var day;
  var isCurrent;
  var marker;

  elements.prevDayButton.disabled = state.dayIndex === 0;
  elements.nextDayButton.disabled = state.dayIndex === lessonDays.length - 1;

  for (index = 0; index < indexes.length; index += 1) {
    dayIndex = indexes[index];
    day = lessonDays[dayIndex];
    isCurrent = dayIndex === state.dayIndex;
    marker = isCurrent ? "●" : "○";
    html.push(
      '<button class="day-button" type="button" data-day-index="' +
        dayIndex +
        '" aria-label="' +
        day.label +
        '" aria-current="' +
        isCurrent +
        '">' +
        marker +
        "</button>"
    );
  }

  elements.dayPicker.innerHTML = html.join("");
}

function selectDay(dayIndex) {
  if (dayIndex < 0 || dayIndex >= lessonDays.length || dayIndex === state.dayIndex) {
    return;
  }

  state.dayIndex = dayIndex;
  state.index = 0;
  renderDayPicker();
  renderLesson();
}

function findDayButton(target) {
  while (target && target !== elements.dayPicker) {
    if (target.getAttribute && target.getAttribute("data-day-index") !== null) {
      return target;
    }

    target = target.parentNode;
  }

  return null;
}

on(elements.startButton, "click", closeGuide);
on(elements.guideButton, "click", openGuide);

on(elements.dayPicker, "click", function (event) {
  var button = findDayButton(event.target || event.srcElement);

  if (!button) {
    return;
  }

  selectDay(parseInt(button.getAttribute("data-day-index"), 10));
});

on(elements.prevDayButton, "click", function () {
  selectDay(state.dayIndex - 1);
});

on(elements.nextDayButton, "click", function () {
  selectDay(state.dayIndex + 1);
});

on(elements.prevButton, "click", function () {
  var lessons = lessonDays[state.dayIndex].lessons;

  state.index = (state.index - 1 + lessons.length) % lessons.length;
  renderLesson();
});

on(elements.nextButton, "click", function () {
  var lessons = lessonDays[state.dayIndex].lessons;

  state.index = (state.index + 1) % lessons.length;
  renderLesson();
});

renderDayPicker();
renderLesson();

if (!hasSeenGuide()) {
  openGuide();
}
