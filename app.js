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
  if (artTemplates[lesson.art]) {
    return artTemplates[lesson.art];
  }

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
  elements.parentCue.innerHTML = "家长慢读：" + lesson.sentence;
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
