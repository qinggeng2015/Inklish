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

var detailedArtDefinitions = {};

function defineDetailedArt(words, type, detail) {
  var list = words.split(" ");
  var index;
  var key;

  for (index = 0; index < list.length; index += 1) {
    key = list[index];
    detailedArtDefinitions[key] = {
      type: type,
      detail: detail || key
    };
  }
}

function wrapDetailedArt(content, label) {
  return [
    '<svg class="toddler-art" viewBox="0 0 320 240" role="img" aria-label="',
    escapeHtml(label),
    ' picture">',
    '<g fill="#f7f3e8" stroke="#111" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">',
    content,
    '</g>',
    '</svg>'
  ].join("");
}

function renderDetailedArt(lesson) {
  var spec = detailedArtDefinitions[lesson.art];
  var maker;

  if (!spec) {
    return "";
  }

  maker = detailedArtMakers[spec.type];

  if (!maker) {
    return "";
  }

  return wrapDetailedArt(maker(spec), lesson.word);
}

var detailedArtMakers = {
  cat: function () {
    return [
      '<ellipse cx="165" cy="146" rx="76" ry="50"/>',
      '<path d="M91 118 Q62 135 69 166 Q79 201 126 188" fill="none" stroke-width="9"/>',
      '<path d="M100 87 L123 43 L151 79 L185 79 L212 43 L232 88" fill="#f7f3e8"/>',
      '<ellipse cx="166" cy="112" rx="70" ry="54"/>',
      '<path d="M120 84 L128 63 L142 86 M193 86 L207 63 L214 84" fill="#ded8c8" stroke-width="5"/>',
      '<circle cx="141" cy="108" r="7" fill="#111" stroke="none"/>',
      '<circle cx="191" cy="108" r="7" fill="#111" stroke="none"/>',
      '<path d="M166 119 L154 132 H178 Z" fill="#111" stroke="none"/>',
      '<path d="M145 146 Q166 159 188 146 M110 127 H66 M112 145 H70 M222 127 H265 M220 145 H260" fill="none" stroke-width="5"/>',
      '<path d="M127 96 L115 86 M205 96 L219 86" fill="none" stroke-width="4"/>',
      '<path d="M143 82 Q150 95 143 105 M188 82 Q181 95 188 105" fill="none" stroke-width="4"/>'
    ].join("");
  },
  dog: function (spec) {
    var puppy = spec.detail === "puppy";

    return [
      '<ellipse cx="165" cy="150" rx="80" ry="47"/>',
      '<path d="M238 142 Q278 124 285 153 Q260 172 236 159" fill="#f7f3e8"/>',
      '<path d="M92 88 Q111 52 158 55 Q204 52 229 88 Q246 116 230 151 Q207 184 159 183 Q107 183 85 151 Q71 118 92 88 Z"/>',
      '<path d="M99 88 Q61 54 54 106 Q53 141 89 136" fill="#ded8c8"/>',
      '<path d="M220 88 Q260 56 266 108 Q264 143 227 136" fill="#ded8c8"/>',
      '<path d="M116 92 Q130 82 146 91 M177 91 Q193 82 207 92" fill="none" stroke-width="5"/>',
      '<circle cx="133" cy="116" r="7" fill="#111" stroke="none"/>',
      '<circle cx="194" cy="116" r="7" fill="#111" stroke="none"/>',
      '<path d="M164 128 L150 142 H178 Z" fill="#111" stroke="none"/>',
      '<path d="M137 158 Q164 175 194 158" fill="none" stroke-width="6"/>',
      puppy ? '<circle cx="205" cy="80" r="9" fill="#111" stroke="none"/>' : '',
      '<path d="M112 189 V204 M215 188 V204" fill="none" stroke-width="8"/>'
    ].join("");
  },
  ball: function () {
    return [
      '<circle cx="160" cy="121" r="84"/>',
      '<path d="M88 76 Q121 116 87 166 M232 76 Q199 116 233 166 M78 121 H242" fill="none" stroke-width="8"/>',
      '<path d="M118 48 Q161 78 202 48 M118 194 Q161 164 202 194" fill="none" stroke-width="6"/>',
      '<circle cx="160" cy="121" r="16" fill="#ded8c8"/>'
    ].join("");
  },
  moon: function () {
    return [
      '<path d="M199 36 C152 49 116 90 116 138 C116 169 132 193 155 207 C95 199 52 153 52 98 C52 40 99 11 148 20 C167 23 185 28 199 36 Z"/>',
      '<circle cx="159" cy="80" r="10" fill="#ded8c8"/>',
      '<circle cx="136" cy="130" r="7" fill="#ded8c8"/>',
      '<circle cx="182" cy="153" r="8" fill="#ded8c8"/>',
      '<path d="M241 49 L248 63 L263 66 L252 77 L255 92 L241 84 L228 92 L231 77 L220 66 L235 63 Z" fill="#111" stroke="none"/>',
      '<path d="M247 139 L252 150 L264 152 L255 160 L257 173 L247 167 L237 173 L239 160 L230 152 L242 150 Z" fill="#111" stroke="none"/>'
    ].join("");
  },
  sun: function () {
    return [
      '<circle cx="160" cy="120" r="58"/>',
      '<path d="M160 24 V58 M160 182 V216 M64 120 H98 M222 120 H256 M91 51 L115 75 M205 165 L229 189 M229 51 L205 75 M115 165 L91 189" fill="none" stroke-width="8"/>',
      '<circle cx="139" cy="112" r="7" fill="#111" stroke="none"/>',
      '<circle cx="181" cy="112" r="7" fill="#111" stroke="none"/>',
      '<path d="M137 139 Q160 155 184 139" fill="none" stroke-width="6"/>',
      '<path d="M126 88 Q140 80 154 88 M166 88 Q181 80 195 88" fill="none" stroke-width="4"/>'
    ].join("");
  },
  fish: function (spec) {
    var shark = spec.detail === "shark";
    var whale = spec.detail === "whale";
    var goldfish = spec.detail === "goldfish";

    if (whale) {
      return [
        '<path d="M54 132 Q87 66 181 74 Q255 83 282 133 Q234 179 137 170 Q76 166 54 132 Z"/>',
        '<path d="M268 132 L302 95 M268 132 L303 169" fill="none" stroke-width="8"/>',
        '<path d="M132 77 Q148 48 178 59" fill="#ded8c8"/>',
        '<circle cx="101" cy="117" r="7" fill="#111" stroke="none"/>',
        '<path d="M72 143 Q116 161 166 157 M158 75 Q176 94 158 119" fill="none" stroke-width="5"/>',
        '<path d="M123 49 Q118 30 101 28 M145 48 Q147 28 164 24" fill="none" stroke-width="5"/>'
      ].join("");
    }

    if (shark) {
      return [
        '<path d="M46 127 Q110 62 218 114 L277 83 L253 131 L278 173 L217 142 Q113 191 46 127 Z"/>',
        '<path d="M153 84 L179 45 L190 103" fill="#ded8c8"/>',
        '<circle cx="104" cy="111" r="6" fill="#111" stroke="none"/>',
        '<path d="M88 135 Q112 148 139 137 M142 118 L154 125 L142 132 L154 139" fill="none" stroke-width="5"/>'
      ].join("");
    }

    return [
      '<path d="M49 123 Q111 58 207 121 Q111 187 49 123 Z"/>',
      '<path d="M207 121 L266 78 V164 Z" fill="#ded8c8"/>',
      '<path d="M134 77 Q156 119 134 166 M84 91 Q105 123 84 153" fill="none" stroke-width="6"/>',
      goldfish ? '<path d="M190 88 Q210 63 230 83 M190 154 Q211 180 230 160" fill="none" stroke-width="5"/>' : '',
      '<circle cx="96" cy="111" r="7" fill="#111" stroke="none"/>',
      '<path d="M111 137 Q126 146 143 137" fill="none" stroke-width="5"/>',
      '<path d="M154 108 H181 M151 128 H188 M145 148 H171" fill="none" stroke-width="4"/>'
    ].join("");
  },
  book: function () {
    return [
      '<path d="M48 54 H142 Q160 54 160 75 V200 Q145 184 116 184 H48 Z"/>',
      '<path d="M272 54 H178 Q160 54 160 75 V200 Q176 184 204 184 H272 Z"/>',
      '<path d="M83 91 H126 M83 119 H132 M83 147 H121 M198 91 H240 M198 119 H232 M198 147 H248" fill="none" stroke-width="5"/>',
      '<path d="M160 75 V199 M224 54 V118 L238 108 L252 118 V54" fill="none" stroke-width="5"/>'
    ].join("");
  },
  star: function () {
    return [
      '<path d="M160 23 L190 89 L263 96 L207 144 L224 214 L160 176 L96 214 L113 144 L57 96 L130 89 Z"/>',
      '<circle cx="138" cy="122" r="7" fill="#111" stroke="none"/>',
      '<circle cx="182" cy="122" r="7" fill="#111" stroke="none"/>',
      '<path d="M136 148 Q160 163 184 148" fill="none" stroke-width="6"/>',
      '<path d="M96 67 L85 54 M236 70 L248 56 M63 166 L47 176 M257 166 L273 176" fill="none" stroke-width="5"/>'
    ].join("");
  },
  person: function (spec) {
    var detail = spec.detail;
    var accessory = "";
    var hair = '<path d="M119 67 Q139 33 180 50 Q201 62 199 94 Q183 78 161 76 Q139 76 119 67 Z" fill="#ded8c8"/>';

    if (detail === "dad") {
      hair = '<path d="M118 64 Q142 42 181 51 Q199 59 202 79 Q159 68 118 80 Z" fill="#ded8c8"/>';
      accessory = '<path d="M145 115 Q160 124 176 115" fill="none" stroke-width="5"/>';
    }

    if (detail === "doctor") {
      accessory = '<path d="M113 136 V190 M207 136 V190 M135 154 H185 M160 132 V196" fill="none" stroke-width="5"/><circle cx="126" cy="150" r="6" fill="#111" stroke="none"/>';
    }

    if (detail === "nurse") {
      hair = '<path d="M119 70 Q130 45 160 45 Q190 45 202 70" fill="#ded8c8"/>';
      accessory = '<path d="M130 43 H190 V67 H130 Z M160 49 V61 M150 55 H170" fill="none" stroke-width="5"/>';
    }

    return [
      '<circle cx="160" cy="84" r="42"/>',
      hair,
      '<circle cx="144" cy="88" r="5" fill="#111" stroke="none"/>',
      '<circle cx="176" cy="88" r="5" fill="#111" stroke="none"/>',
      '<path d="M145 104 Q160 116 176 104" fill="none" stroke-width="5"/>',
      '<path d="M88 211 Q101 139 160 139 Q219 139 232 211 Z"/>',
      '<path d="M113 164 H207 M119 211 V169 M201 211 V169" fill="none" stroke-width="5"/>',
      accessory
    ].join("");
  },
  baby: function () {
    return [
      '<circle cx="160" cy="77" r="44"/>',
      '<path d="M144 39 Q159 22 176 40" fill="none" stroke-width="5"/>',
      '<circle cx="144" cy="81" r="5" fill="#111" stroke="none"/>',
      '<circle cx="176" cy="81" r="5" fill="#111" stroke="none"/>',
      '<path d="M143 101 Q160 115 178 101" fill="none" stroke-width="5"/>',
      '<path d="M80 155 Q118 112 160 154 Q202 112 240 155 Q220 217 160 217 Q100 217 80 155 Z"/>',
      '<path d="M112 164 Q160 194 208 164 M132 185 H188" fill="none" stroke-width="5"/>',
      '<circle cx="116" cy="98" r="8" fill="#ded8c8"/><circle cx="204" cy="98" r="8" fill="#ded8c8"/>'
    ].join("");
  },
  fruit: function (spec) {
    switch (spec.detail) {
      case "grape":
        return [
          '<circle cx="139" cy="87" r="24"/><circle cx="179" cy="87" r="24"/><circle cx="119" cy="124" r="24"/><circle cx="159" cy="124" r="24"/><circle cx="199" cy="124" r="24"/><circle cx="139" cy="162" r="24"/><circle cx="179" cy="162" r="24"/>',
          '<path d="M160 62 Q151 39 172 27 M173 45 Q204 34 221 55 Q196 66 173 45 Z" fill="#ded8c8"/>'
        ].join("");
      case "pear":
        return [
          '<path d="M160 50 Q202 84 205 137 Q208 197 160 204 Q112 197 115 137 Q118 84 160 50 Z"/>',
          '<path d="M160 54 Q147 33 166 22 M171 40 Q200 30 217 50 Q194 62 171 40 Z" fill="#ded8c8"/>',
          '<path d="M138 111 Q160 96 183 111" fill="none" stroke-width="5"/>'
        ].join("");
      case "peach":
        return [
          '<path d="M160 61 Q217 85 210 147 Q202 200 160 203 Q118 200 110 147 Q103 85 160 61 Z"/>',
          '<path d="M160 61 Q172 106 160 197 M165 50 Q196 33 216 55 Q190 70 165 50 Z" fill="#ded8c8"/>'
        ].join("");
      case "lemon":
        return [
          '<path d="M78 126 Q104 64 160 62 Q216 64 242 126 Q216 188 160 190 Q104 188 78 126 Z"/>',
          '<path d="M106 105 Q160 84 214 105 M106 148 Q160 168 214 148" fill="none" stroke-width="5"/>'
        ].join("");
      case "melon":
        return [
          '<ellipse cx="160" cy="127" rx="90" ry="65"/>',
          '<path d="M107 76 Q138 126 107 178 M160 63 Q179 126 160 192 M213 76 Q182 126 213 178" fill="none" stroke-width="5"/>'
        ].join("");
      case "strawberry":
        return [
          '<path d="M160 72 Q231 85 215 148 Q203 196 160 210 Q117 196 105 148 Q89 85 160 72 Z"/>',
          '<path d="M126 75 L141 50 L160 72 L179 50 L194 75" fill="#ded8c8"/>',
          '<circle cx="139" cy="117" r="4" fill="#111" stroke="none"/><circle cx="176" cy="120" r="4" fill="#111" stroke="none"/><circle cx="153" cy="151" r="4" fill="#111" stroke="none"/><circle cx="184" cy="164" r="4" fill="#111" stroke="none"/><circle cx="130" cy="165" r="4" fill="#111" stroke="none"/>'
        ].join("");
      case "blueberry":
        return [
          '<circle cx="134" cy="111" r="35"/><circle cx="180" cy="116" r="35"/><circle cx="156" cy="154" r="35"/>',
          '<path d="M133 93 L140 105 L153 107 L142 116 L145 129 L133 122 L121 129 L124 116 L113 107 L126 105 Z" fill="#ded8c8" stroke-width="4"/>',
          '<path d="M180 98 L187 110 L200 112 L189 121 L192 134 L180 127 L168 134 L171 121 L160 112 L173 110 Z" fill="#ded8c8" stroke-width="4"/>'
        ].join("");
      case "watermelon":
        return [
          '<path d="M62 85 Q160 201 258 85 Z"/>',
          '<path d="M82 104 Q160 180 238 104" fill="none" stroke-width="10"/>',
          '<circle cx="136" cy="122" r="5" fill="#111" stroke="none"/><circle cx="167" cy="140" r="5" fill="#111" stroke="none"/><circle cx="190" cy="115" r="5" fill="#111" stroke="none"/>'
        ].join("");
      case "banana":
        return [
          '<path d="M73 88 Q139 170 250 82 Q215 202 98 190 Q61 149 73 88 Z"/>',
          '<path d="M100 107 Q145 152 216 105 M72 88 L61 73 M250 82 L268 67" fill="none" stroke-width="6"/>'
        ].join("");
      case "orange":
        return [
          '<circle cx="160" cy="130" r="70"/>',
          '<path d="M160 64 Q150 42 171 30 M172 48 Q203 35 221 57 Q195 70 172 48 Z" fill="#ded8c8"/>',
          '<circle cx="130" cy="119" r="4" fill="#111" stroke="none"/><circle cx="156" cy="102" r="4" fill="#111" stroke="none"/><circle cx="185" cy="124" r="4" fill="#111" stroke="none"/><circle cx="149" cy="154" r="4" fill="#111" stroke="none"/><circle cx="190" cy="161" r="4" fill="#111" stroke="none"/>'
        ].join("");
      default:
        return [
          '<path d="M160 58 Q212 74 216 134 Q219 192 160 202 Q101 192 104 134 Q108 74 160 58 Z"/>',
          '<path d="M160 61 Q147 36 169 23 M174 43 Q205 31 222 54 Q196 68 174 43 Z" fill="#ded8c8"/>',
          '<path d="M129 111 Q160 91 191 111" fill="none" stroke-width="5"/>'
        ].join("");
    }
  },
  vegetable: function (spec) {
    switch (spec.detail) {
      case "carrot":
        return [
          '<path d="M157 72 Q204 91 189 155 Q180 194 139 211 Q119 168 125 128 Q130 91 157 72 Z"/>',
          '<path d="M156 72 Q139 37 112 49 M160 73 Q170 34 202 45 M159 73 Q154 36 164 23" fill="none" stroke-width="7"/>',
          '<path d="M133 128 H176 M130 158 H166" fill="none" stroke-width="5"/>'
        ].join("");
      case "corn":
        return [
          '<path d="M160 47 Q207 83 193 163 Q184 205 160 212 Q136 205 127 163 Q113 83 160 47 Z"/>',
          '<path d="M125 107 Q91 128 102 202 Q136 188 160 151 Q184 188 218 202 Q229 128 195 107" fill="#ded8c8"/>',
          '<path d="M139 82 H181 M132 112 H188 M132 142 H188 M140 172 H180 M160 53 V203" fill="none" stroke-width="4"/>'
        ].join("");
      case "pea":
        return [
          '<path d="M68 126 Q128 70 252 111 Q196 184 68 126 Z"/>',
          '<circle cx="129" cy="122" r="17" fill="#ded8c8"/><circle cx="166" cy="119" r="17" fill="#ded8c8"/><circle cx="204" cy="116" r="17" fill="#ded8c8"/>',
          '<path d="M68 126 Q153 137 252 111" fill="none" stroke-width="4"/>'
        ].join("");
      case "bean":
        return [
          '<path d="M98 82 Q164 44 221 104 Q247 131 214 168 Q160 214 100 156 Q70 127 98 82 Z"/>',
          '<path d="M112 94 Q148 129 111 155 M204 101 Q171 126 208 156" fill="none" stroke-width="5"/>'
        ].join("");
      case "potato":
        return [
          '<path d="M104 85 Q139 50 189 68 Q231 84 229 139 Q227 196 169 205 Q102 214 79 158 Q64 119 104 85 Z"/>',
          '<circle cx="129" cy="117" r="5" fill="#111" stroke="none"/><circle cx="181" cy="101" r="5" fill="#111" stroke="none"/><circle cx="177" cy="158" r="5" fill="#111" stroke="none"/><circle cx="119" cy="164" r="5" fill="#111" stroke="none"/>'
        ].join("");
      default:
        return [
          '<circle cx="160" cy="130" r="66"/>',
          '<path d="M126 76 Q139 45 160 75 Q181 45 194 76 M126 130 Q160 113 194 130" fill="none" stroke-width="5"/>'
        ].join("");
    }
  },
  drink: function (spec) {
    switch (spec.detail) {
      case "water":
        return [
          '<path d="M110 54 H210 L194 202 H126 Z"/>',
          '<path d="M119 103 Q140 93 160 103 Q180 113 201 103 M121 137 H199" fill="none" stroke-width="5"/>',
          '<path d="M126 60 H194" fill="none" stroke-width="5"/>'
        ].join("");
      case "juice":
        return [
          '<path d="M96 63 H204 V203 H96 Z"/>',
          '<path d="M174 39 L214 93 M116 86 H184 M116 121 H184" fill="none" stroke-width="6"/>',
          '<circle cx="160" cy="157" r="24" fill="#ded8c8"/><path d="M160 133 V181 M136 157 H184" fill="none" stroke-width="4"/>'
        ].join("");
      case "milk":
        return [
          '<path d="M99 75 L131 41 H203 L220 75 V204 H99 Z"/>',
          '<path d="M99 75 H220 M131 41 V75 M124 116 H194 M124 148 H194" fill="none" stroke-width="5"/>',
          '<path d="M139 181 Q151 164 164 181 Q176 164 190 181" fill="none" stroke-width="5"/>'
        ].join("");
      case "bottle":
        return [
          '<path d="M137 49 H183 V73 L198 91 V199 H122 V91 L137 73 Z"/>',
          '<path d="M140 49 Q144 27 160 27 Q176 27 180 49 M127 117 H193 M127 149 H193" fill="none" stroke-width="5"/>'
        ].join("");
      default:
        return [
          '<path d="M117 58 H203 L194 204 H126 Z"/>',
          '<path d="M126 100 H194 M133 140 H187" fill="none" stroke-width="5"/>',
          '<path d="M175 33 L205 85" fill="none" stroke-width="6"/>'
        ].join("");
    }
  },
  foodBox: function (spec) {
    switch (spec.detail) {
      case "cheese":
        return [
          '<path d="M73 157 L210 78 L248 181 H73 Z"/>',
          '<circle cx="151" cy="147" r="10" fill="#ded8c8"/><circle cx="198" cy="129" r="8" fill="#ded8c8"/><circle cx="211" cy="169" r="7" fill="#ded8c8"/>'
        ].join("");
      case "yogurt":
        return [
          '<path d="M103 79 H217 L201 203 H119 Z"/>',
          '<path d="M95 68 H225 V88 H95 Z M125 123 H195 M136 153 H184" fill="#ded8c8"/>'
        ].join("");
      case "cereal":
        return [
          '<path d="M97 55 H218 V206 H97 Z"/>',
          '<path d="M120 87 H195 M120 116 H195" fill="none" stroke-width="5"/>',
          '<circle cx="139" cy="160" r="10" fill="#ded8c8"/><circle cx="166" cy="164" r="10" fill="#ded8c8"/><circle cx="191" cy="157" r="10" fill="#ded8c8"/>'
        ].join("");
      case "tofu":
        return [
          '<path d="M88 113 H161 V188 H88 Z M161 88 H234 V163 H161 Z"/>',
          '<path d="M88 113 L123 84 H196 L234 88 M161 113 L196 88 M161 188 L234 163" fill="none" stroke-width="5"/>'
        ].join("");
      case "honey":
      case "jam":
        return [
          '<path d="M111 75 H209 V199 H111 Z"/>',
          '<path d="M122 51 H198 V75 H122 Z M125 124 H195 M139 153 H181" fill="#ded8c8"/>',
          spec.detail === "honey" ? '<path d="M218 91 Q246 107 219 128" fill="none" stroke-width="5"/>' : '<circle cx="160" cy="112" r="12" fill="#111" stroke="none"/>'
        ].join("");
      default:
        return [
          '<path d="M103 73 H217 V201 H103 Z"/>',
          '<path d="M124 103 H196 M124 132 H196 M124 161 H196" fill="none" stroke-width="5"/>'
        ].join("");
    }
  },
  breadFood: function (spec) {
    switch (spec.detail) {
      case "toast":
      case "bread":
        return [
          '<path d="M92 108 Q93 58 132 58 Q160 29 188 58 Q227 58 228 108 V198 H92 Z"/>',
          '<path d="M121 128 H199 M121 159 H199" fill="none" stroke-width="5"/>'
        ].join("");
      case "sandwich":
        return [
          '<path d="M67 147 L160 67 L253 147 Z"/>',
          '<path d="M79 148 H241 L216 196 H104 Z"/>',
          '<path d="M91 151 Q120 166 151 151 Q182 166 212 151" fill="none" stroke-width="5"/>'
        ].join("");
      case "cracker":
        return [
          '<rect x="91" y="71" width="138" height="118" rx="16"/>',
          '<circle cx="125" cy="105" r="5" fill="#111" stroke="none"/><circle cx="160" cy="105" r="5" fill="#111" stroke="none"/><circle cx="195" cy="105" r="5" fill="#111" stroke="none"/><circle cx="143" cy="145" r="5" fill="#111" stroke="none"/><circle cx="179" cy="145" r="5" fill="#111" stroke="none"/>'
        ].join("");
      case "muffin":
        return [
          '<path d="M101 105 Q104 56 160 58 Q216 56 219 105 Q205 131 160 129 Q115 131 101 105 Z"/>',
          '<path d="M118 126 H202 L190 204 H130 Z"/>',
          '<path d="M132 154 H188 M137 180 H183" fill="none" stroke-width="5"/>'
        ].join("");
      case "pancake":
        return [
          '<ellipse cx="160" cy="165" rx="84" ry="28"/>',
          '<ellipse cx="160" cy="135" rx="76" ry="25"/>',
          '<ellipse cx="160" cy="106" rx="68" ry="23"/>',
          '<rect x="137" y="71" width="46" height="24" rx="6" fill="#ded8c8"/>',
          '<path d="M162 94 Q176 113 155 128" fill="none" stroke-width="5"/>'
        ].join("");
      case "pizza":
        return [
          '<path d="M83 68 L242 101 L133 206 Z"/>',
          '<path d="M103 82 Q162 112 218 106" fill="none" stroke-width="9"/>',
          '<circle cx="150" cy="126" r="9" fill="#ded8c8"/><circle cx="181" cy="151" r="9" fill="#ded8c8"/><circle cx="136" cy="172" r="8" fill="#ded8c8"/>'
        ].join("");
      case "meat":
      case "chicken":
        return [
          '<path d="M101 114 Q134 63 193 88 Q238 111 217 157 Q194 205 135 184 Q82 165 101 114 Z"/>',
          '<path d="M210 128 L249 91 M239 82 Q262 76 267 96 Q273 119 250 126 M222 143 L264 171 M255 181 Q278 177 281 156 Q284 136 260 132" fill="none" stroke-width="7"/>'
        ].join("");
      default:
        return '<path d="M92 108 Q93 58 132 58 Q160 29 188 58 Q227 58 228 108 V198 H92 Z"/>';
    }
  },
  egg: function () {
    return [
      '<path d="M160 38 Q218 82 218 145 Q218 202 160 202 Q102 202 102 145 Q102 82 160 38 Z"/>',
      '<circle cx="160" cy="145" r="30" fill="#ded8c8"/>'
    ].join("");
  },
  bowlFood: function (spec) {
    var detail = spec.detail;
    var topping = "";

    if (detail === "noodle") {
      topping = '<path d="M98 112 Q119 78 140 112 M136 112 Q158 78 180 112 M176 112 Q198 78 220 112 M96 91 H224" fill="none" stroke-width="5"/>';
    } else if (detail === "rice") {
      topping = '<circle cx="123" cy="101" r="7" fill="#ded8c8"/><circle cx="150" cy="91" r="7" fill="#ded8c8"/><circle cx="178" cy="101" r="7" fill="#ded8c8"/><circle cx="202" cy="94" r="7" fill="#ded8c8"/>';
    } else if (detail === "salad") {
      topping = '<path d="M103 101 Q124 74 145 102 Q164 73 184 101 Q203 78 221 104" fill="#ded8c8"/>';
    } else {
      topping = '<path d="M103 106 Q131 88 160 106 Q190 123 218 106" fill="none" stroke-width="5"/>';
    }

    return [
      topping,
      '<path d="M72 115 H248 Q235 200 160 200 Q85 200 72 115 Z"/>',
      '<path d="M110 205 H210" fill="none" stroke-width="8"/>',
      detail === "soup" ? '<path d="M235 105 Q269 117 242 138" fill="none" stroke-width="5"/>' : ''
    ].join("");
  },
  treat: function (spec) {
    switch (spec.detail) {
      case "cake":
        return [
          '<path d="M86 105 H234 V199 H86 Z"/>',
          '<path d="M104 105 Q124 134 144 105 Q164 134 184 105 Q204 134 234 105" fill="#ded8c8"/>',
          '<path d="M126 76 V104 M160 66 V104 M194 76 V104" fill="none" stroke-width="5"/>',
          '<path d="M118 150 H202" fill="none" stroke-width="5"/>'
        ].join("");
      case "ice-cream":
        return [
          '<path d="M112 112 Q111 69 150 64 Q166 36 197 57 Q231 65 226 109 Q218 142 160 142 Q122 142 112 112 Z"/>',
          '<path d="M109 145 H211 L160 214 Z"/>',
          '<circle cx="185" cy="88" r="5" fill="#111" stroke="none"/><circle cx="143" cy="105" r="5" fill="#111" stroke="none"/>'
        ].join("");
      case "candy":
        return [
          '<path d="M116 96 H204 V160 H116 Z"/>',
          '<path d="M116 96 L62 72 L82 128 L62 184 L116 160 M204 96 L258 72 L238 128 L258 184 L204 160" fill="#ded8c8"/>',
          '<path d="M142 96 V160 M178 96 V160" fill="none" stroke-width="5"/>'
        ].join("");
      default:
        return [
          '<circle cx="160" cy="126" r="70"/>',
          '<circle cx="128" cy="101" r="6" fill="#111" stroke="none"/><circle cx="178" cy="93" r="6" fill="#111" stroke="none"/><circle cx="151" cy="137" r="6" fill="#111" stroke="none"/><circle cx="197" cy="151" r="6" fill="#111" stroke="none"/><circle cx="120" cy="161" r="6" fill="#111" stroke="none"/>',
          '<path d="M98 126 Q160 110 222 126" fill="none" stroke-width="5"/>'
        ].join("");
    }
  },
  kitchenItem: function (spec) {
    switch (spec.detail) {
      case "spoon":
        return '<ellipse cx="126" cy="82" rx="28" ry="42"/><path d="M139 119 L200 204" fill="none" stroke-width="10"/>';
      case "fork":
        return '<path d="M120 42 V105 M145 42 V105 M170 42 V105 M145 105 V204" fill="none" stroke-width="9"/><path d="M120 42 V80 M170 42 V80" fill="none" stroke-width="5"/>';
      case "straw":
        return '<path d="M132 206 V76 L184 42 M132 106 H189" fill="none" stroke-width="10"/>';
      case "plate":
        return '<circle cx="160" cy="125" r="78"/><circle cx="160" cy="125" r="45" fill="none" stroke-width="5"/>';
      case "napkin":
        return '<path d="M94 58 H226 V200 H94 Z"/><path d="M94 58 L226 200 M128 92 H194 M128 124 H194" fill="none" stroke-width="5"/>';
      case "tray":
        return '<path d="M58 106 H262 V181 H58 Z"/><path d="M83 106 Q92 61 129 61 H191 Q228 61 237 106 M93 181 V204 M227 181 V204" fill="none" stroke-width="6"/>';
      case "high-chair":
        return '<path d="M104 68 H202 V124 H104 Z M83 124 H224 V151 H83 Z"/><path d="M109 151 L94 207 M199 151 L214 207 M122 151 H198" fill="none" stroke-width="7"/>';
      case "mug":
      case "cup":
        return '<path d="M98 69 H197 L185 196 H110 Z"/><path d="M197 95 H230 Q257 95 257 124 Q257 153 230 153 H191" fill="none" stroke-width="8"/><path d="M112 104 H184" fill="none" stroke-width="5"/>';
      case "fridge":
        return '<rect x="105" y="40" width="110" height="170" rx="9"/><path d="M105 104 H215 M190 67 V88 M190 130 V158" fill="none" stroke-width="6"/>';
      case "oven":
        return '<rect x="87" y="56" width="146" height="148" rx="10"/><path d="M87 98 H233 M116 76 H127 M151 76 H162 M187 76 H198 M116 128 H204 V181 H116 Z" fill="none" stroke-width="5"/>';
      case "pot":
        return '<path d="M85 102 H235 V177 Q235 199 213 199 H107 Q85 199 85 177 Z"/><path d="M115 102 Q126 68 160 68 Q194 68 205 102 M61 127 H85 M235 127 H259" fill="none" stroke-width="7"/>';
      case "pan":
        return '<ellipse cx="132" cy="137" rx="62" ry="40"/><path d="M193 137 H282" fill="none" stroke-width="10"/><path d="M92 134 Q132 154 173 134" fill="none" stroke-width="5"/>';
      case "kettle":
        return '<path d="M103 100 Q116 62 160 62 Q204 62 217 100 V181 H103 Z"/><path d="M217 113 Q258 119 249 157 Q240 189 215 170 M103 114 L70 92 Q78 132 103 144 M139 62 V40 H181 V62" fill="none" stroke-width="7"/>';
      default:
        return '<path d="M98 69 H197 L185 196 H110 Z"/><path d="M112 104 H184" fill="none" stroke-width="5"/>';
    }
  },
  homeItem: function (spec) {
    switch (spec.detail) {
      case "chair":
        return '<path d="M111 55 H209 V125 H111 Z"/><path d="M87 125 H232 V158 H87 Z M107 158 V211 M212 158 V211" fill="#f7f3e8"/>';
      case "table":
        return '<path d="M65 91 H255 V124 H65 Z"/><path d="M98 124 V210 M222 124 V210 M93 169 H227" fill="none" stroke-width="8"/>';
      case "bed":
      case "crib":
      case "cradle":
        return '<path d="M55 113 H265 V177 H55 Z"/><path d="M55 82 H128 V113 H55 Z M55 177 V207 M265 177 V207" fill="#ded8c8"/><path d="M92 177 V207 M228 177 V207" fill="none" stroke-width="6"/>';
      case "pillow":
        return '<path d="M72 83 Q160 52 248 83 Q221 178 248 205 Q160 177 72 205 Q99 178 72 83 Z"/><path d="M105 106 Q160 91 215 106" fill="none" stroke-width="5"/>';
      case "blanket":
        return '<path d="M71 67 H249 V202 H71 Z"/><path d="M71 107 H249 M116 67 V202 M160 67 V202 M204 67 V202" fill="none" stroke-width="5"/>';
      case "door":
      case "gate":
        return '<rect x="111" y="42" width="99" height="171" rx="5"/><circle cx="186" cy="130" r="7" fill="#111" stroke="none"/><path d="M132 66 H187 M132 94 H187" fill="none" stroke-width="5"/>';
      case "doorbell":
        return '<rect x="114" y="53" width="92" height="150" rx="14"/><circle cx="160" cy="138" r="28" fill="#ded8c8"/><path d="M143 89 H177 M160 110 V166" fill="none" stroke-width="5"/>';
      case "handle":
        return '<rect x="81" y="67" width="158" height="120" rx="12"/><path d="M138 126 H245 Q266 126 266 148 Q266 171 245 171 H197" fill="none" stroke-width="9"/><circle cx="120" cy="127" r="9" fill="#111" stroke="none"/>';
      case "window":
        return '<rect x="70" y="56" width="180" height="135"/><path d="M160 56 V191 M70 124 H250 M94 193 H226" fill="none" stroke-width="6"/><path d="M99 88 L132 88 M188 159 L224 159" fill="none" stroke-width="4"/>';
      case "wall":
        return '<rect x="53" y="58" width="214" height="141"/><path d="M53 100 H267 M53 144 H267 M106 58 V100 M186 58 V100 M146 100 V144 M226 100 V144 M106 144 V199 M186 144 V199" fill="none" stroke-width="5"/>';
      case "floor":
        return '<path d="M50 190 H270 L226 75 H94 Z"/><path d="M91 122 H229 M70 161 H250 M117 75 L101 190 M160 75 V190 M203 75 L219 190" fill="none" stroke-width="5"/>';
      case "roof":
        return '<path d="M51 129 L160 45 L269 129 H234 V202 H86 V129 Z"/><path d="M88 129 H232 M116 106 H204" fill="none" stroke-width="6"/>';
      case "light":
      case "lamp":
      case "night-light":
        return '<path d="M160 31 V71 M105 72 H215 L198 144 H122 Z"/><path d="M136 168 H184 M160 144 V202 M130 202 H190" fill="none" stroke-width="7"/><path d="M91 49 L113 70 M229 49 L207 70" fill="none" stroke-width="5"/>';
      case "clock":
      case "watch":
        return '<circle cx="160" cy="124" r="73"/><path d="M160 77 V127 L196 148" fill="none" stroke-width="8"/><path d="M160 48 V34 M160 214 V200 M86 124 H100 M220 124 H234" fill="none" stroke-width="5"/>';
      case "sofa":
        return '<path d="M74 112 Q75 74 114 74 H206 Q245 74 246 112 H260 Q276 112 276 139 V193 H44 V139 Q44 112 60 112 Z"/><path d="M101 113 V157 M219 113 V157 M71 193 V211 M249 193 V211" fill="none" stroke-width="6"/>';
      case "box":
      case "mailbox":
        return '<path d="M80 91 H240 V194 H80 Z"/><path d="M80 91 L160 48 L240 91 M160 48 V194 M104 118 H148" fill="none" stroke-width="6"/>';
      case "basket":
      case "bucket":
        return '<path d="M87 93 H233 L213 201 H107 Z"/><path d="M112 95 Q112 52 160 52 Q208 52 208 95 M108 128 H216 M104 160 H220" fill="none" stroke-width="6"/>';
      case "trash-can":
        return '<path d="M105 78 H215 L202 204 H118 Z"/><path d="M91 78 H229 M131 50 H189 M137 108 V178 M160 108 V178 M183 108 V178" fill="none" stroke-width="6"/>';
      case "bag":
      case "pocket":
        return '<path d="M96 89 H224 L209 204 H111 Z"/><path d="M128 90 Q128 48 160 48 Q192 48 192 90 M128 131 H192" fill="none" stroke-width="7"/>';
      case "key":
        return '<circle cx="105" cy="127" r="39"/><path d="M144 127 H254 M210 127 V159 M233 127 V149" fill="none" stroke-width="9"/><circle cx="105" cy="127" r="12" fill="#ded8c8"/>';
      case "mirror":
        return '<path d="M110 42 H210 Q228 42 228 60 V170 Q228 188 210 188 H110 Q92 188 92 170 V60 Q92 42 110 42 Z"/><path d="M119 78 L193 78 M128 108 L202 108 M140 188 V213 M115 213 H205" fill="none" stroke-width="5"/>';
      case "picture":
        return '<rect x="70" y="55" width="180" height="135"/><path d="M93 166 L132 121 L160 150 L187 105 L228 166 Z" fill="#ded8c8"/><circle cx="122" cy="89" r="14" fill="#ded8c8"/>';
      case "rug":
      case "mat":
        return '<ellipse cx="160" cy="137" rx="107" ry="61"/><path d="M78 137 H242 M108 102 Q160 125 212 102 M108 172 Q160 149 212 172" fill="none" stroke-width="5"/>';
      case "curtain":
        return '<path d="M73 54 H247 M93 58 Q117 111 93 198 M136 58 Q160 111 136 198 M184 58 Q208 111 184 198 M227 58 Q251 111 227 198" fill="none" stroke-width="8"/>';
      case "drawer":
        return '<rect x="80" y="57" width="160" height="147"/><path d="M80 106 H240 M80 155 H240 M145 82 H175 M145 131 H175 M145 180 H175" fill="none" stroke-width="6"/>';
      case "shelf":
        return '<path d="M74 74 H246 M74 130 H246 M74 186 H246 M90 74 V204 M230 74 V204" fill="none" stroke-width="8"/><path d="M111 93 H147 V130 H111 Z M174 148 H213 V186 H174 Z" fill="#ded8c8"/>';
      case "closet":
        return '<rect x="82" y="43" width="156" height="171"/><path d="M160 43 V214 M137 124 H148 M172 124 H183" fill="none" stroke-width="6"/>';
      case "stairs":
        return '<path d="M80 191 H240 V154 H202 V118 H164 V82 H126 V46 H80 Z"/><path d="M126 46 V82 H164 V118 H202 V154 H240" fill="none" stroke-width="6"/>';
      case "elevator":
        return '<rect x="83" y="47" width="154" height="166"/><path d="M160 77 V213 M112 32 L100 47 L124 47 Z M208 47 L196 32 L220 32 Z" fill="#ded8c8"/><path d="M123 119 H145 M175 119 H197" fill="none" stroke-width="5"/>';
      case "broom":
        return '<path d="M126 36 L182 154" fill="none" stroke-width="8"/><path d="M157 139 H229 L244 207 H126 Z"/><path d="M153 165 H235 M147 186 H239" fill="none" stroke-width="5"/>';
      case "mop":
        return '<path d="M143 34 L160 151" fill="none" stroke-width="8"/><path d="M120 151 H199 M130 151 L104 207 M147 151 L134 210 M164 151 L164 211 M181 151 L195 210 M198 151 L225 207" fill="none" stroke-width="6"/>';
      case "dustpan":
        return '<path d="M96 130 H236 L218 205 H78 Z"/><path d="M236 130 L258 82 M94 154 H222 M86 180 H215" fill="none" stroke-width="7"/>';
      case "house":
      case "bedroom":
      case "kitchen":
      case "bathroom":
      case "garden":
      case "garage":
      case "balcony":
        return '<path d="M57 119 L160 42 L263 119 V207 H57 Z"/><path d="M129 207 V148 H191 V207 M80 130 H116 V166 H80 Z M204 130 H240 V166 H204 Z" fill="#ded8c8"/><path d="M57 119 H263" fill="none" stroke-width="6"/>';
      default:
        return '<rect x="80" y="57" width="160" height="147"/><path d="M107 95 H213 M107 135 H213 M107 175 H213" fill="none" stroke-width="5"/>';
    }
  },
  clothesItem: function (spec) {
    switch (spec.detail) {
      case "shoe":
      case "boot":
      case "slipper":
        return '<path d="M72 141 Q113 139 143 91 H190 Q196 126 245 145 Q250 178 207 181 H73 Q55 164 72 141 Z"/><path d="M116 139 H181 M118 116 H154 M134 100 H169" fill="none" stroke-width="5"/>';
      case "sock":
        return '<path d="M116 44 H190 V139 Q222 145 224 175 Q221 203 186 203 H109 Q88 189 101 164 L116 137 Z"/><path d="M116 78 H190 M110 159 Q142 176 179 166" fill="none" stroke-width="5"/>';
      case "hat":
      case "helmet":
        return '<path d="M103 134 Q106 64 160 64 Q214 64 217 134"/><path d="M62 144 H258" fill="none" stroke-width="11"/><path d="M121 91 Q160 112 199 91" fill="none" stroke-width="5"/>';
      case "pants":
      case "shorts":
      case "pajamas":
        return '<path d="M105 54 H215 L201 207 H164 L160 125 L156 207 H119 Z"/><path d="M105 91 H215 M160 54 V125" fill="none" stroke-width="6"/>';
      case "dress":
      case "skirt":
        return '<path d="M128 57 H192 L228 205 H92 Z"/><path d="M128 57 Q160 83 192 57 M111 148 H209" fill="none" stroke-width="5"/>';
      case "glove":
        return '<path d="M102 122 V78 Q102 63 116 63 Q130 63 130 78 V111 V55 Q130 41 144 41 Q158 41 158 55 V109 V66 Q158 52 172 52 Q186 52 186 66 V117 V91 Q186 77 200 77 Q214 77 214 91 V145 Q214 199 160 199 Q117 199 102 158 Z"/>';
      case "scarf":
        return '<path d="M123 48 Q160 35 197 48 V130 Q160 144 123 130 Z"/><path d="M150 130 V208 H112 V133 M178 130 V197 H215 V128 M123 82 H197" fill="none" stroke-width="6"/>';
      case "ring":
        return '<circle cx="160" cy="133" r="59"/><circle cx="160" cy="133" r="33" fill="#ded8c8"/><path d="M142 74 L160 42 L178 74" fill="none" stroke-width="6"/>';
      case "necklace":
        return '<path d="M92 63 Q160 185 228 63" fill="none" stroke-width="9"/><circle cx="160" cy="165" r="20" fill="#ded8c8"/>';
      case "button":
        return '<circle cx="160" cy="124" r="70"/><circle cx="136" cy="102" r="8" fill="#111" stroke="none"/><circle cx="184" cy="102" r="8" fill="#111" stroke="none"/><circle cx="136" cy="150" r="8" fill="#111" stroke="none"/><circle cx="184" cy="150" r="8" fill="#111" stroke="none"/>';
      case "zipper":
        return '<path d="M160 42 V158" fill="none" stroke-width="9"/><path d="M139 50 L160 66 L181 50 M139 80 L160 96 L181 80 M139 110 L160 126 L181 110 M160 158 L137 203 H183 Z" fill="#ded8c8"/>';
      case "lace":
        return '<path d="M78 130 Q119 86 160 130 Q201 174 242 130 M78 130 Q119 174 160 130 Q201 86 242 130" fill="none" stroke-width="8"/><circle cx="160" cy="130" r="8" fill="#111" stroke="none"/>';
      case "belt":
        return '<path d="M56 105 H264 V153 H56 Z"/><path d="M126 91 H194 V167 H126 Z M146 129 H194" fill="none" stroke-width="6"/>';
      case "watch":
        return '<path d="M138 35 H182 L176 83 H144 Z M144 165 H176 L182 213 H138 Z"/><circle cx="160" cy="124" r="47"/><path d="M160 101 V126 L181 138" fill="none" stroke-width="5"/>';
      case "mask":
        return '<path d="M80 105 Q160 70 240 105 V157 Q160 192 80 157 Z"/><path d="M91 116 Q56 126 77 154 M229 116 Q264 126 243 154 M108 118 H212 M108 145 H212" fill="none" stroke-width="5"/>';
      case "bib":
        return '<path d="M118 56 Q160 88 202 56 Q216 79 198 103 Q228 137 206 199 H114 Q92 137 122 103 Q104 79 118 56 Z"/><path d="M135 124 H185 M144 154 H176" fill="none" stroke-width="5"/>';
      default:
        return '<path d="M105 62 L132 45 Q160 68 188 45 L215 62 L250 111 L215 133 V205 H105 V133 L70 111 Z"/><path d="M132 66 Q160 86 188 66 M124 121 H196" fill="none" stroke-width="5"/>';
    }
  },
  bodyPart: function (spec) {
    switch (spec.detail) {
      case "hand":
      case "finger":
        return '<path d="M103 125 V75 Q103 60 117 60 Q131 60 131 75 V112 V57 Q131 42 146 42 Q161 42 161 57 V110 V67 Q161 52 176 52 Q191 52 191 67 V119 V91 Q191 76 206 76 Q221 76 221 91 V143 Q221 201 163 201 Q116 201 103 159 Z"/><path d="M126 137 H196" fill="none" stroke-width="5"/>';
      case "arm":
        return '<path d="M87 82 Q126 91 148 128 L225 128 Q246 128 246 149 Q246 170 225 170 H134 Q97 159 70 126 Q57 107 66 94 Q73 84 87 82 Z"/><path d="M146 128 Q159 151 145 170" fill="none" stroke-width="5"/>';
      case "foot":
      case "toe":
        return '<path d="M82 144 Q101 88 154 92 Q192 95 207 126 Q235 127 244 150 Q257 186 213 197 H87 Q52 178 82 144 Z"/><circle cx="119" cy="106" r="7" fill="#111" stroke="none"/><circle cx="142" cy="98" r="7" fill="#111" stroke="none"/><circle cx="168" cy="101" r="7" fill="#111" stroke="none"/><circle cx="193" cy="113" r="7" fill="#111" stroke="none"/>';
      case "leg":
      case "knee":
        return '<path d="M125 43 H194 L183 205 H130 Z"/><circle cx="158" cy="128" r="28" fill="#ded8c8"/><path d="M119 91 H199 M128 168 H187" fill="none" stroke-width="5"/>';
      case "eye":
        return '<path d="M51 122 Q160 43 269 122 Q160 201 51 122 Z"/><circle cx="160" cy="122" r="35" fill="#ded8c8"/><circle cx="160" cy="122" r="12" fill="#111" stroke="none"/><path d="M86 94 L72 80 M234 94 L248 80" fill="none" stroke-width="5"/>';
      case "ear":
        return '<path d="M133 45 Q207 59 202 128 Q199 184 154 202 Q110 193 113 145 Q116 113 142 105 Q164 99 168 124 Q172 150 145 157" fill="none" stroke-width="10"/>';
      case "nose":
        return '<path d="M156 49 Q136 111 150 139 Q165 160 196 143" fill="none" stroke-width="10"/><circle cx="143" cy="151" r="7" fill="#111" stroke="none"/><circle cx="181" cy="153" r="7" fill="#111" stroke="none"/>';
      case "mouth":
      case "tongue":
        return '<path d="M92 112 Q160 176 228 112 Q197 205 160 205 Q123 205 92 112 Z"/><path d="M107 114 Q160 139 213 114 M139 158 Q160 184 181 158" fill="none" stroke-width="6"/>';
      case "hair":
      case "head":
      case "face":
      case "cheek":
      case "chin":
        return '<circle cx="160" cy="118" r="74"/><path d="M93 95 Q113 37 160 44 Q213 42 230 98 Q197 75 160 78 Q124 78 93 95 Z" fill="#ded8c8"/><circle cx="136" cy="121" r="6" fill="#111" stroke="none"/><circle cx="184" cy="121" r="6" fill="#111" stroke="none"/><circle cx="118" cy="146" r="9" fill="#ded8c8"/><circle cx="202" cy="146" r="9" fill="#ded8c8"/><path d="M137 156 Q160 171 184 156 M144 188 Q160 197 176 188" fill="none" stroke-width="5"/>';
      case "tooth":
        return '<path d="M99 86 Q124 43 160 75 Q196 43 221 86 Q205 190 181 203 Q166 211 160 167 Q154 211 139 203 Q115 190 99 86 Z"/><path d="M160 75 V167 M124 105 H196" fill="none" stroke-width="5"/>';
      case "tummy":
      case "back":
      case "neck":
        return '<path d="M123 45 H197 V91 Q229 113 232 174 Q202 211 160 211 Q118 211 88 174 Q91 113 123 91 Z"/><circle cx="160" cy="153" r="39" fill="#ded8c8"/><path d="M137 65 H183" fill="none" stroke-width="6"/>';
      case "nail":
        return '<path d="M110 45 Q160 25 210 45 V148 Q210 204 160 204 Q110 204 110 148 Z"/><path d="M127 70 Q160 57 193 70 V130 Q160 146 127 130 Z" fill="#ded8c8"/>';
      case "bandage":
        return '<path d="M82 148 L183 47 Q201 29 220 48 Q239 67 221 85 L120 186 Q102 204 83 185 Q64 166 82 148 Z"/><path d="M134 95 L174 135 M154 75 L194 115 M118 155 L158 195" fill="none" stroke-width="5"/><circle cx="153" cy="115" r="5" fill="#111" stroke="none"/><circle cx="171" cy="97" r="5" fill="#111" stroke="none"/>';
      case "medicine":
        return '<path d="M93 139 L176 56 Q196 36 218 58 Q240 80 220 100 L137 183 Q117 203 95 181 Q73 159 93 139 Z"/><path d="M134 98 L178 142" fill="none" stroke-width="8"/><path d="M118 114 L162 158" fill="none" stroke-width="5"/>';
      default:
        return '<circle cx="160" cy="118" r="74"/><circle cx="136" cy="121" r="6" fill="#111" stroke="none"/><circle cx="184" cy="121" r="6" fill="#111" stroke="none"/><path d="M137 156 Q160 171 184 156" fill="none" stroke-width="5"/>';
    }
  },
  bathItem: function (spec) {
    switch (spec.detail) {
      case "tub":
        return '<path d="M61 113 H259 V146 Q259 203 197 203 H123 Q61 203 61 146 Z"/><path d="M90 113 V75 Q90 51 116 51 H138 M78 207 H103 M217 207 H242" fill="none" stroke-width="7"/><circle cx="132" cy="91" r="12" fill="#ded8c8"/><circle cx="167" cy="76" r="9" fill="#ded8c8"/>';
      case "towel":
      case "washcloth":
      case "tissue":
        return '<rect x="94" y="45" width="132" height="161" rx="12"/><path d="M116 84 H204 M116 121 H204 M116 158 H204 M127 45 Q160 68 193 45" fill="none" stroke-width="5"/>';
      case "soap":
        return '<rect x="78" y="114" width="164" height="73" rx="34"/><circle cx="109" cy="82" r="13"/><circle cx="154" cy="67" r="21"/><circle cx="202" cy="88" r="14"/><path d="M123 150 H197" fill="none" stroke-width="5"/>';
      case "toothbrush":
        return '<path d="M85 179 L198 66 Q214 50 230 66 Q246 82 230 98 L117 211 Z"/><path d="M72 192 L99 219 M98 169 L125 196 M122 145 L149 172" fill="none" stroke-width="5"/>';
      case "toothpaste":
        return '<path d="M91 145 L183 53 L234 104 L142 196 Z"/><path d="M183 53 L207 29 L258 80 L234 104 M125 145 L181 89" fill="none" stroke-width="5"/>';
      case "comb":
        return '<path d="M74 88 H246 V124 H74 Z"/><path d="M94 124 V194 M118 124 V194 M142 124 V194 M166 124 V194 M190 124 V194 M214 124 V194 M238 124 V194" fill="none" stroke-width="5"/>';
      case "brush":
        return '<path d="M92 165 L194 63 Q209 48 224 63 Q239 78 224 93 L122 195 Z"/><path d="M78 179 L104 205 M101 156 L127 182 M124 133 L150 159" fill="none" stroke-width="5"/>';
      case "potty":
        return '<path d="M98 87 H222 V132 Q222 182 183 192 H137 Q98 182 98 132 Z"/><path d="M116 192 H204 M105 87 Q111 50 160 50 Q209 50 215 87" fill="none" stroke-width="7"/>';
      case "diaper":
        return '<path d="M82 73 Q160 117 238 73 V156 Q221 203 160 203 Q99 203 82 156 Z"/><path d="M91 99 H132 M188 99 H229 M116 162 Q160 186 204 162" fill="none" stroke-width="5"/>';
      case "toilet":
        return '<path d="M111 58 H209 V121 Q209 160 176 169 V203 H126 V169 Q93 160 93 121 Q93 83 111 75 Z"/><path d="M103 75 H209 M117 207 H193 M118 121 Q160 138 202 121" fill="none" stroke-width="6"/>';
      case "sink":
        return '<path d="M82 117 H238 V146 Q238 195 160 195 Q82 195 82 146 Z"/><path d="M126 117 V72 Q126 50 160 50 Q194 50 194 72 V92 M137 92 H183" fill="none" stroke-width="7"/>';
      case "sponge":
        return '<rect x="91" y="89" width="138" height="91" rx="18"/><circle cx="125" cy="120" r="6" fill="#111" stroke="none"/><circle cx="160" cy="112" r="6" fill="#111" stroke="none"/><circle cx="196" cy="132" r="6" fill="#111" stroke="none"/><circle cx="148" cy="153" r="6" fill="#111" stroke="none"/>';
      case "bubbles":
        return '<circle cx="112" cy="143" r="28"/><circle cx="161" cy="113" r="36"/><circle cx="213" cy="151" r="30"/><circle cx="207" cy="82" r="17"/><circle cx="112" cy="77" r="15"/>';
      default:
        return '<path d="M117 58 H203 L194 204 H126 Z"/><path d="M126 100 H194 M133 140 H187" fill="none" stroke-width="5"/>';
    }
  },
  vehicle: function (spec) {
    switch (spec.detail) {
      case "bus":
        return '<rect x="54" y="67" width="212" height="112" rx="18"/><path d="M78 103 H242 M103 67 V132 M160 67 V132 M217 67 V132" fill="none" stroke-width="6"/><circle cx="101" cy="181" r="18" fill="#ded8c8"/><circle cx="219" cy="181" r="18" fill="#ded8c8"/>';
      case "train":
        return '<rect x="56" y="70" width="208" height="101" rx="14"/><path d="M92 70 V133 M160 70 V133 M228 70 V133 M78 208 H242" fill="none" stroke-width="7"/><circle cx="104" cy="176" r="14" fill="#111" stroke="none"/><circle cx="160" cy="176" r="14" fill="#111" stroke="none"/><circle cx="216" cy="176" r="14" fill="#111" stroke="none"/>';
      case "bike":
        return '<circle cx="92" cy="166" r="38"/><circle cx="228" cy="166" r="38"/><path d="M92 166 L142 99 H184 L228 166 H146 L92 166 M184 99 L200 75 H231 M142 99 L132 77 H108" fill="none" stroke-width="7"/>';
      case "wheel":
        return '<circle cx="160" cy="123" r="78"/><circle cx="160" cy="123" r="21" fill="#ded8c8"/><path d="M160 45 V201 M82 123 H238 M104 67 L216 179 M216 67 L104 179" fill="none" stroke-width="6"/>';
      case "boat":
        return '<path d="M54 128 H266 L232 190 H88 Z"/><path d="M160 128 V44 L224 128 M160 54 L96 128 M78 211 Q119 194 160 211 Q201 194 242 211" fill="none" stroke-width="7"/>';
      case "plane":
        return '<path d="M40 128 L274 55 L232 126 L276 169 L243 186 L196 151 L107 190 L91 170 L148 131 L74 96 Z"/><path d="M148 131 L232 126" fill="none" stroke-width="5"/>';
      case "truck":
      case "fire-truck":
        return '<path d="M48 111 H184 V171 H48 Z M184 132 H238 L263 171 H184 Z"/><circle cx="92" cy="176" r="19" fill="#ded8c8"/><circle cx="219" cy="176" r="19" fill="#ded8c8"/><path d="M78 86 H156 M78 86 V111 M116 86 V111 M154 86 V111" fill="none" stroke-width="6"/>';
      case "taxi":
      case "police-car":
      case "ambulance":
      case "car":
        return '<path d="M55 134 L88 89 H207 L252 134 V171 H55 Z"/><circle cx="99" cy="174" r="20" fill="#ded8c8"/><circle cx="210" cy="174" r="20" fill="#ded8c8"/><path d="M104 89 V134 M181 89 V134 M126 72 H179" fill="none" stroke-width="6"/><path d="M69 134 H239" fill="none" stroke-width="5"/>';
      case "stroller":
        return '<path d="M98 86 Q178 42 224 105 Q201 156 133 150 Q108 126 98 86 Z"/><path d="M87 151 H229 M121 151 L93 199 M207 151 L235 199 M110 199 H108 M222 199 H224 M88 72 Q72 52 50 60" fill="none" stroke-width="7"/><circle cx="91" cy="199" r="14" fill="#ded8c8"/><circle cx="236" cy="199" r="14" fill="#ded8c8"/>';
      case "road":
      case "street":
      case "path":
        return '<path d="M104 211 L133 45 H187 L216 211 Z"/><path d="M160 62 V91 M160 116 V147 M160 173 V205 M104 211 H216" fill="none" stroke-width="6"/>';
      case "bridge":
        return '<path d="M52 167 H268 M76 167 Q160 70 244 167 M92 167 V205 M160 100 V205 M228 167 V205" fill="none" stroke-width="8"/>';
      case "seat":
        return '<path d="M101 54 H196 V126 H101 Z"/><path d="M85 126 H222 V178 H85 Z M108 178 V210 M199 178 V210" fill="#f7f3e8"/><path d="M129 83 H168" fill="none" stroke-width="5"/>';
      default:
        return '<path d="M55 134 L88 89 H207 L252 134 V171 H55 Z"/><circle cx="99" cy="174" r="20" fill="#ded8c8"/><circle cx="210" cy="174" r="20" fill="#ded8c8"/>';
    }
  },
  nature: function (spec) {
    switch (spec.detail) {
      case "tree":
        return '<path d="M146 205 V137 H174 V205"/><circle cx="160" cy="80" r="46"/><circle cx="118" cy="119" r="37"/><circle cx="202" cy="119" r="37"/><path d="M95 208 H225 M146 165 Q126 151 113 132 M174 165 Q196 149 207 124" fill="none" stroke-width="6"/>';
      case "flower":
        return '<path d="M160 119 V207 M127 163 Q160 152 160 188 M193 163 Q160 152 160 188" fill="none" stroke-width="6"/><circle cx="160" cy="88" r="20" fill="#ded8c8"/><circle cx="160" cy="48" r="22"/><circle cx="120" cy="88" r="22"/><circle cx="200" cy="88" r="22"/><circle cx="160" cy="128" r="22"/>';
      case "grass":
        return '<path d="M54 203 H266 M82 203 Q91 153 113 203 M122 203 Q136 126 159 203 M170 203 Q188 145 205 203 M220 203 Q233 166 247 203" fill="none" stroke-width="8"/>';
      case "leaf":
        return '<path d="M70 152 Q130 40 250 78 Q206 204 70 152 Z"/><path d="M82 150 Q158 129 241 80 M138 132 L126 92 M169 119 L176 84 M198 104 L217 88" fill="none" stroke-width="5"/>';
      case "rock":
        return '<path d="M65 168 Q90 91 146 100 Q181 48 232 95 Q270 127 245 184 H84 Q54 184 65 168 Z"/><path d="M121 116 Q151 135 182 101" fill="none" stroke-width="5"/>';
      case "stick":
        return '<path d="M83 191 L236 45 M154 123 L111 83 M180 99 L221 108" fill="none" stroke-width="10"/>';
      case "sand":
        return '<path d="M57 194 Q111 158 160 194 Q210 158 263 194 Z"/><circle cx="105" cy="170" r="5" fill="#111" stroke="none"/><circle cx="142" cy="158" r="5" fill="#111" stroke="none"/><circle cx="199" cy="170" r="5" fill="#111" stroke="none"/><path d="M119 125 H201 L183 74 H137 Z" fill="none" stroke-width="6"/>';
      case "mud":
        return '<ellipse cx="160" cy="166" rx="103" ry="42"/><circle cx="119" cy="154" r="10" fill="#ded8c8"/><circle cx="177" cy="168" r="12" fill="#ded8c8"/><path d="M101 111 Q130 83 160 111 Q190 139 220 111" fill="none" stroke-width="7"/>';
      case "puddle":
        return '<ellipse cx="160" cy="158" rx="103" ry="42"/><path d="M92 154 Q126 135 160 154 Q194 173 228 154" fill="none" stroke-width="5"/><path d="M151 55 Q118 99 155 112 Q192 99 151 55 Z" fill="#ded8c8"/>';
      case "rain":
        return '<path d="M94 111 Q96 68 137 74 Q160 40 195 70 Q238 75 238 115 Q238 151 192 151 H107 Q65 151 65 123 Q65 113 94 111 Z"/><path d="M111 172 L99 205 M160 172 L148 205 M209 172 L197 205" fill="none" stroke-width="7"/>';
      case "snow":
        return '<path d="M160 48 V193 M97 84 L223 157 M223 84 L97 157 M118 61 L160 89 L202 61 M118 180 L160 152 L202 180" fill="none" stroke-width="7"/>';
      case "cloud":
      case "sky":
        return '<path d="M85 132 Q88 83 135 89 Q160 51 201 84 Q247 90 247 136 Q247 175 194 175 H105 Q57 175 57 145 Q57 134 85 132 Z"/><circle cx="255" cy="61" r="22" fill="#ded8c8"/>';
      case "wind":
        return '<path d="M58 92 H200 Q229 92 229 66 Q229 46 207 46 M74 133 H242 Q273 133 273 103 Q273 80 247 80 M98 174 H198 Q223 174 223 197 Q223 216 203 216" fill="none" stroke-width="8"/>';
      case "hill":
        return '<path d="M50 197 H270"/><path d="M71 197 Q111 104 160 197 Q206 74 251 197 Z"/>';
      case "shell":
        return '<path d="M82 163 Q93 75 160 55 Q227 75 238 163 Q207 202 160 202 Q113 202 82 163 Z"/><path d="M160 55 V202 M121 82 Q145 133 119 192 M199 82 Q175 133 201 192 M95 128 H225" fill="none" stroke-width="5"/>';
      case "beach":
        return '<path d="M52 189 Q113 152 160 189 Q208 152 268 189"/><path d="M58 127 Q104 104 150 127 Q198 151 262 127" fill="none" stroke-width="6"/><circle cx="83" cy="72" r="25"/><path d="M83 24 V45 M83 99 V122 M35 72 H56 M110 72 H132" fill="none" stroke-width="5"/>';
      case "wave":
        return '<path d="M51 154 Q91 99 137 147 Q177 188 217 147 Q241 122 269 142 M52 188 Q94 164 136 188 Q178 212 220 188 Q242 176 268 188" fill="none" stroke-width="9"/>';
      case "park":
      case "yard":
      case "garden":
        return '<path d="M55 205 H265"/><path d="M86 199 V122 H121 V199 M103 122 Q132 74 161 122 Q190 74 219 122 V199" fill="none" stroke-width="7"/><circle cx="226" cy="80" r="28"/>';
      case "store":
      case "school":
        return '<path d="M68 101 H252 V207 H68 Z"/><path d="M53 101 L85 51 H235 L267 101 Z M128 207 V147 H192 V207 M94 124 H124 M196 124 H226" fill="#ded8c8"/>';
      case "fence":
        return '<path d="M61 204 V93 L91 61 L121 93 V204 M121 204 V93 L151 61 L181 93 V204 M181 204 V93 L211 61 L241 93 V204 M48 130 H272 M48 174 H272" fill="none" stroke-width="7"/>';
      case "slide":
        return '<path d="M96 66 H195 V107 H147 L93 205 H49 L105 107 H96 Z"/><path d="M195 107 Q236 143 270 205 H223 Q194 154 147 107" fill="#ded8c8"/>';
      case "swing":
        return '<path d="M69 207 L160 47 L251 207 M106 111 H214 M119 111 V164 M201 111 V164 M110 164 H210" fill="none" stroke-width="8"/>';
      case "bench":
        return '<path d="M67 104 H253 V136 H67 Z M83 146 H237 V174 H83 Z"/><path d="M100 174 V207 M220 174 V207 M93 136 V146 M227 136 V146" fill="none" stroke-width="7"/>';
      case "sign":
        return '<path d="M88 67 H232 V133 H88 Z"/><path d="M160 133 V211 M117 211 H203 M116 100 H204" fill="none" stroke-width="7"/>';
      default:
        return '<path d="M53 197 H267"/><path d="M72 197 Q114 109 160 197 Q207 82 249 197 Z"/>';
    }
  },
  animal: function (spec) {
    switch (spec.detail) {
      case "cow":
        return '<path d="M79 106 Q99 67 151 70 H196 Q236 73 247 116 Q255 163 211 183 H104 Q65 168 71 126 Z"/><path d="M111 76 L92 48 M212 76 L233 48 M118 126 H146 M183 126 H211" fill="none" stroke-width="7"/><circle cx="132" cy="113" r="6" fill="#111" stroke="none"/><circle cx="190" cy="113" r="6" fill="#111" stroke="none"/><path d="M148 146 Q162 156 176 146 M109 183 V207 M209 183 V207" fill="none" stroke-width="6"/><path d="M98 92 Q121 87 132 107 M202 77 Q219 98 205 119" fill="#ded8c8"/>';
      case "pig":
        return '<ellipse cx="160" cy="129" rx="86" ry="61"/><path d="M96 90 L77 61 L116 75 M224 90 L243 61 L204 75" fill="#ded8c8"/><ellipse cx="160" cy="139" rx="31" ry="22" fill="#ded8c8"/><circle cx="146" cy="139" r="5" fill="#111" stroke="none"/><circle cx="174" cy="139" r="5" fill="#111" stroke="none"/><circle cx="130" cy="115" r="6" fill="#111" stroke="none"/><circle cx="190" cy="115" r="6" fill="#111" stroke="none"/><path d="M245 130 Q279 115 275 145 Q271 168 247 153" fill="none" stroke-width="6"/>';
      case "horse":
      case "donkey":
        return '<path d="M82 120 Q94 67 147 73 H211 Q248 80 253 128 Q257 174 216 188 H106 Q68 173 74 132 Z"/><path d="M126 74 Q134 43 160 66 M102 85 L79 48 M219 80 L239 48" fill="#ded8c8"/><path d="M91 188 V213 M221 188 V213 M138 75 V124 M139 88 H113" fill="none" stroke-width="7"/><circle cx="132" cy="116" r="6" fill="#111" stroke="none"/><circle cx="196" cy="116" r="6" fill="#111" stroke="none"/>';
      case "sheep":
        return '<circle cx="93" cy="121" r="27"/><circle cx="124" cy="91" r="30"/><circle cx="165" cy="83" r="31"/><circle cx="207" cy="99" r="30"/><circle cx="228" cy="137" r="28"/><circle cx="186" cy="157" r="35"/><circle cx="132" cy="154" r="35"/><circle cx="96" cy="145" r="26"/><circle cx="143" cy="126" r="6" fill="#111" stroke="none"/><circle cx="184" cy="126" r="6" fill="#111" stroke="none"/><path d="M126 188 V211 M203 188 V211" fill="none" stroke-width="7"/>';
      case "goat":
        return '<path d="M82 118 Q96 72 151 76 H200 Q238 82 242 124 Q246 170 208 186 H105 Q66 171 73 131 Z"/><path d="M123 76 L95 42 M197 76 L225 42 M157 144 L144 171 L171 171 Z" fill="#ded8c8"/><path d="M160 171 Q159 194 141 205 M160 171 Q163 194 181 205 M103 186 V210 M207 186 V210" fill="none" stroke-width="6"/><circle cx="135" cy="119" r="6" fill="#111" stroke="none"/><circle cx="188" cy="119" r="6" fill="#111" stroke="none"/>';
      case "rabbit":
        return '<ellipse cx="160" cy="139" rx="72" ry="52"/><path d="M130 96 Q99 33 128 28 Q159 60 154 100 M183 96 Q203 31 230 41 Q232 89 194 111" fill="#f7f3e8"/><circle cx="138" cy="132" r="6" fill="#111" stroke="none"/><circle cx="183" cy="132" r="6" fill="#111" stroke="none"/><path d="M160 141 L149 154 H171 Z M136 170 Q160 183 185 170" fill="none" stroke-width="6"/>';
      case "mouse":
      case "hamster":
        return '<ellipse cx="160" cy="139" rx="68" ry="51"/><circle cx="105" cy="93" r="30" fill="#ded8c8"/><circle cx="215" cy="93" r="30" fill="#ded8c8"/><path d="M95 160 Q54 171 72 200 Q91 225 128 195" fill="none" stroke-width="6"/><circle cx="138" cy="132" r="6" fill="#111" stroke="none"/><circle cx="183" cy="132" r="6" fill="#111" stroke="none"/><path d="M160 143 L149 155 H171 Z" fill="#111" stroke="none"/>';
      case "bear":
      case "panda":
        return '<circle cx="105" cy="82" r="30" fill="#ded8c8"/><circle cx="215" cy="82" r="30" fill="#ded8c8"/><circle cx="160" cy="125" r="70"/><circle cx="134" cy="117" r="8" fill="#111" stroke="none"/><circle cx="186" cy="117" r="8" fill="#111" stroke="none"/><path d="M160 130 L146 144 H174 Z" fill="#111" stroke="none"/><path d="M135 162 Q160 178 186 162" fill="none" stroke-width="6"/><ellipse cx="134" cy="116" rx="22" ry="27" fill="none" stroke-width="5"/><ellipse cx="186" cy="116" rx="22" ry="27" fill="none" stroke-width="5"/>';
      case "lion":
        return '<circle cx="160" cy="122" r="83" fill="#ded8c8"/><circle cx="160" cy="122" r="56"/><circle cx="139" cy="116" r="6" fill="#111" stroke="none"/><circle cx="181" cy="116" r="6" fill="#111" stroke="none"/><path d="M160 128 L147 142 H173 Z" fill="#111" stroke="none"/><path d="M136 159 Q160 174 184 159 M99 55 L113 91 M221 55 L207 91 M78 128 H105 M215 128 H242" fill="none" stroke-width="6"/>';
      case "tiger":
        return '<circle cx="160" cy="124" r="70"/><path d="M112 72 L87 42 L122 55 M208 72 L233 42 L198 55" fill="#ded8c8"/><path d="M122 72 L139 99 M160 55 V91 M198 72 L181 99 M105 119 L130 126 M215 119 L190 126" fill="none" stroke-width="6"/><circle cx="138" cy="121" r="6" fill="#111" stroke="none"/><circle cx="182" cy="121" r="6" fill="#111" stroke="none"/><path d="M160 132 L148 145 H172 Z M137 162 Q160 176 183 162" fill="none" stroke-width="6"/>';
      case "monkey":
        return '<circle cx="101" cy="118" r="29" fill="#ded8c8"/><circle cx="219" cy="118" r="29" fill="#ded8c8"/><circle cx="160" cy="121" r="64"/><ellipse cx="160" cy="139" rx="47" ry="36" fill="#ded8c8"/><circle cx="140" cy="115" r="6" fill="#111" stroke="none"/><circle cx="180" cy="115" r="6" fill="#111" stroke="none"/><path d="M138 152 Q160 166 183 152 M225 153 Q271 175 250 207 Q232 231 208 203" fill="none" stroke-width="6"/>';
      case "frog":
        return '<ellipse cx="160" cy="137" rx="82" ry="55"/><circle cx="120" cy="83" r="31"/><circle cx="200" cy="83" r="31"/><circle cx="120" cy="83" r="8" fill="#111" stroke="none"/><circle cx="200" cy="83" r="8" fill="#111" stroke="none"/><path d="M120 149 Q160 177 200 149 M87 176 Q58 189 67 213 M233 176 Q262 189 253 213" fill="none" stroke-width="7"/>';
      case "duck":
        return '<path d="M91 130 Q111 74 173 80 Q232 88 238 144 Q235 190 167 198 Q107 196 91 130 Z"/><path d="M227 129 L279 105 L239 151 Z" fill="#ded8c8"/><circle cx="183" cy="111" r="7" fill="#111" stroke="none"/><path d="M98 185 Q149 207 219 185 M120 136 Q160 111 201 139" fill="none" stroke-width="6"/>';
      case "bird":
      case "parrot":
      case "hen":
        return '<path d="M83 128 Q99 70 160 78 Q219 86 228 138 Q226 188 164 198 Q102 192 83 128 Z"/><path d="M227 129 L270 111 L234 153 M113 130 Q160 101 203 135" fill="#ded8c8"/><circle cx="184" cy="112" r="7" fill="#111" stroke="none"/><path d="M136 198 V218 M183 198 V218" fill="none" stroke-width="6"/>';
      case "bee":
        return '<ellipse cx="160" cy="127" rx="58" ry="43"/><path d="M131 87 Q104 42 74 79 Q93 113 131 87 M189 87 Q216 42 246 79 Q227 113 189 87 M130 96 V158 M160 86 V168 M190 96 V158" fill="none" stroke-width="6"/><circle cx="121" cy="122" r="6" fill="#111" stroke="none"/><path d="M102 100 L78 81 M102 116 L74 118" fill="none" stroke-width="5"/>';
      case "butterfly":
        return '<ellipse cx="124" cy="100" rx="43" ry="57"/><ellipse cx="196" cy="100" rx="43" ry="57"/><ellipse cx="132" cy="166" rx="32" ry="40"/><ellipse cx="188" cy="166" rx="32" ry="40"/><path d="M160 67 V207 M145 54 Q160 35 175 54 M160 101 H160" fill="none" stroke-width="7"/>';
      case "ant":
        return '<circle cx="103" cy="131" r="28"/><circle cx="160" cy="131" r="35"/><circle cx="222" cy="131" r="30"/><path d="M94 160 L70 190 M112 160 L101 199 M150 166 L135 204 M170 166 L185 204 M211 160 L200 199 M232 160 L257 190 M78 111 L53 86 M83 104 L70 75" fill="none" stroke-width="5"/>';
      case "spider":
        return '<ellipse cx="160" cy="126" rx="52" ry="45"/><circle cx="160" cy="75" r="28"/><path d="M117 110 L63 80 M116 129 L57 129 M119 148 L67 178 M203 110 L257 80 M204 129 L263 129 M201 148 L253 178" fill="none" stroke-width="6"/><circle cx="149" cy="72" r="5" fill="#111" stroke="none"/><circle cx="171" cy="72" r="5" fill="#111" stroke="none"/>';
      case "turtle":
        return '<ellipse cx="160" cy="136" rx="70" ry="50"/><path d="M229 130 Q258 112 276 134 Q264 160 229 151 M91 130 Q62 112 44 134 Q56 160 91 151" fill="#f7f3e8"/><path d="M118 108 H202 M113 136 H207 M130 174 L160 90 L190 174" fill="none" stroke-width="5"/><circle cx="257" cy="134" r="5" fill="#111" stroke="none"/>';
      case "snail":
        return '<path d="M80 166 H215 Q251 166 258 135 Q247 111 219 120" fill="none" stroke-width="10"/><circle cx="142" cy="126" r="56"/><path d="M142 126 Q174 112 173 143 Q171 174 139 174 Q103 174 102 137 Q101 92 151 82" fill="none" stroke-width="6"/><path d="M217 120 L204 87 M237 122 L246 91" fill="none" stroke-width="5"/>';
      case "deer":
        return '<ellipse cx="160" cy="137" rx="65" ry="48"/><path d="M121 91 L89 56 M121 91 L117 45 M199 91 L231 56 M199 91 L203 45" fill="none" stroke-width="7"/><path d="M107 97 L85 71 M213 97 L235 71" fill="#ded8c8"/><circle cx="139" cy="132" r="6" fill="#111" stroke="none"/><circle cx="181" cy="132" r="6" fill="#111" stroke="none"/><path d="M160 143 L148 155 H172 Z" fill="#111" stroke="none"/>';
      case "elephant":
        return '<ellipse cx="160" cy="121" rx="76" ry="57"/><ellipse cx="96" cy="118" rx="37" ry="49" fill="#ded8c8"/><ellipse cx="224" cy="118" rx="37" ry="49" fill="#ded8c8"/><path d="M158 139 Q147 181 174 198 Q203 214 214 187" fill="none" stroke-width="12"/><circle cx="137" cy="111" r="6" fill="#111" stroke="none"/><circle cx="183" cy="111" r="6" fill="#111" stroke="none"/>';
      case "giraffe":
        return '<path d="M137 199 V78 Q137 44 165 44 Q193 44 193 78 V199 Z"/><path d="M116 77 L94 45 M214 77 L236 45 M145 44 V24 M185 44 V24" fill="none" stroke-width="7"/><circle cx="153" cy="91" r="6" fill="#111" stroke="none"/><circle cx="178" cy="91" r="6" fill="#111" stroke="none"/><circle cx="151" cy="128" r="7" fill="#111" stroke="none"/><circle cx="181" cy="159" r="7" fill="#111" stroke="none"/><circle cx="148" cy="180" r="7" fill="#111" stroke="none"/>';
      case "zebra":
        return '<path d="M74 121 Q93 71 154 74 H218 Q252 82 257 130 Q260 174 218 189 H101 Q65 174 72 133 Z"/><path d="M113 76 L90 45 M206 75 L231 45 M112 88 L139 130 M154 75 L185 138 M199 84 L224 130 M98 144 L132 186 M176 146 L202 188" fill="none" stroke-width="6"/><circle cx="136" cy="116" r="6" fill="#111" stroke="none"/><circle cx="199" cy="116" r="6" fill="#111" stroke="none"/>';
      case "camel":
        return '<path d="M67 137 Q85 79 124 111 Q149 47 188 110 Q223 71 250 126 Q271 174 221 190 H101 Q61 175 67 137 Z"/><path d="M93 190 V213 M214 190 V213 M238 104 Q267 77 283 107" fill="none" stroke-width="7"/><circle cx="246" cy="118" r="6" fill="#111" stroke="none"/>';
      case "crab":
        return '<ellipse cx="160" cy="139" rx="58" ry="42"/><path d="M103 130 L64 101 M217 130 L256 101 M91 103 Q55 72 38 104 Q61 126 91 103 M229 103 Q265 72 282 104 Q259 126 229 103 M116 170 L95 199 M140 177 L129 209 M180 177 L191 209 M204 170 L225 199" fill="none" stroke-width="6"/><circle cx="140" cy="128" r="6" fill="#111" stroke="none"/><circle cx="180" cy="128" r="6" fill="#111" stroke="none"/>';
      default:
        return '<path d="M73 111 Q88 65 139 72 H197 Q238 77 247 124 Q254 170 211 186 H105 Q65 171 72 132 Z"/><circle cx="137" cy="119" r="6" fill="#111" stroke="none"/><circle cx="193" cy="119" r="6" fill="#111" stroke="none"/><path d="M163 132 L151 145 H175 Z M107 186 V209 M211 186 V209" fill="none" stroke-width="6"/>';
    }
  },
  toy: function (spec) {
    switch (spec.detail) {
      case "doll":
        return '<circle cx="160" cy="70" r="32"/><path d="M119 203 L139 111 H181 L201 203 Z"/><path d="M111 134 L75 166 M209 134 L245 166 M134 88 Q160 107 186 88" fill="none" stroke-width="6"/><circle cx="147" cy="72" r="5" fill="#111" stroke="none"/><circle cx="173" cy="72" r="5" fill="#111" stroke="none"/>';
      case "block":
        return '<path d="M76 101 H154 V179 H76 Z M166 61 H244 V139 H166 Z M122 139 H200 V217 H122 Z"/><path d="M76 101 L115 70 H193 L154 101 M166 61 L205 30 H283 L244 61 M122 139 L161 108 H239 L200 139" fill="none" stroke-width="5"/>';
      case "puzzle":
        return '<path d="M75 76 H134 Q128 101 151 101 Q174 101 168 76 H245 V146 Q219 140 219 163 Q219 186 245 180 V203 H75 V144 Q101 150 101 123 Q101 96 75 102 Z"/>';
      case "crayon":
      case "pencil":
        return '<path d="M84 178 L196 66 L226 96 L114 208 Z"/><path d="M196 66 L221 41 L251 71 L226 96 M107 185 L126 204 M117 145 L157 185" fill="none" stroke-width="5"/>';
      case "eraser":
        return '<path d="M87 137 L173 51 L235 113 L149 199 Z"/><path d="M139 85 L201 147 M113 161 L174 100" fill="none" stroke-width="5"/>';
      case "paper":
        return '<path d="M103 44 H194 L229 80 V205 H103 Z"/><path d="M194 44 V80 H229 M126 103 H204 M126 134 H204 M126 165 H183" fill="none" stroke-width="5"/>';
      case "paint":
      case "glue":
        return '<path d="M117 69 H203 V202 H117 Z"/><path d="M134 43 H186 V69 H134 Z M130 115 H190 M142 151 H178" fill="none" stroke-width="5"/><circle cx="222" cy="183" r="16" fill="#ded8c8"/>';
      case "scissors":
        return '<circle cx="111" cy="168" r="28"/><circle cx="194" cy="168" r="28"/><path d="M132 151 L242 53 M173 151 L79 52" fill="none" stroke-width="8"/>';
      case "drum":
        return '<ellipse cx="160" cy="79" rx="74" ry="27"/><path d="M86 79 V175 Q86 203 160 203 Q234 203 234 175 V79"/><ellipse cx="160" cy="175" rx="74" ry="27"/><path d="M103 104 L217 180 M217 104 L103 180 M75 43 L121 79 M245 43 L199 79" fill="none" stroke-width="5"/>';
      case "kite":
        return '<path d="M160 36 L235 109 L160 190 L85 109 Z"/><path d="M160 36 V190 M85 109 H235 M160 190 Q137 215 115 199 Q96 185 78 208" fill="none" stroke-width="5"/>';
      case "balloon":
        return '<path d="M160 42 Q219 51 219 119 Q219 179 160 190 Q101 179 101 119 Q101 51 160 42 Z"/><path d="M143 190 H177 L160 211 Z M160 211 Q139 223 121 207" fill="none" stroke-width="5"/>';
      case "shovel":
        return '<path d="M151 49 L210 108"/><path d="M210 108 Q248 139 221 180 Q180 207 149 169 Z"/><path d="M130 29 Q151 8 172 29 Q151 50 130 29 Z" fill="#ded8c8"/>';
      case "sticker":
        return '<path d="M92 57 H228 V193 H138 L92 147 Z"/><path d="M92 147 H138 V193 M130 101 H190 M130 130 H190" fill="none" stroke-width="5"/>';
      case "robot":
        return '<rect x="101" y="76" width="118" height="106" rx="12"/><path d="M160 76 V45 M132 45 H188 M71 112 H101 M219 112 H249 M120 182 V210 M200 182 V210" fill="none" stroke-width="7"/><circle cx="135" cy="118" r="9" fill="#111" stroke="none"/><circle cx="185" cy="118" r="9" fill="#111" stroke="none"/><path d="M130 151 H190" fill="none" stroke-width="5"/>';
      case "teddy":
        return '<circle cx="111" cy="76" r="28" fill="#ded8c8"/><circle cx="209" cy="76" r="28" fill="#ded8c8"/><circle cx="160" cy="118" r="62"/><circle cx="139" cy="112" r="6" fill="#111" stroke="none"/><circle cx="181" cy="112" r="6" fill="#111" stroke="none"/><path d="M160 124 L148 137 H172 Z M134 155 Q160 171 186 155" fill="none" stroke-width="6"/><path d="M100 186 Q160 213 220 186" fill="none" stroke-width="7"/>';
      case "pacifier":
        return '<circle cx="160" cy="122" r="36"/><path d="M108 121 Q160 72 212 121 Q160 168 108 121 Z"/><path d="M160 158 Q160 203 122 203 Q84 203 84 165 Q122 180 160 158 Q198 180 236 165 Q236 203 198 203 Q160 203 160 158 Z" fill="#ded8c8"/>';
      case "storybook":
        return detailedArtMakers.book ? "" : "";
      default:
        return '<rect x="78" y="75" width="74" height="74" rx="10"/><rect x="168" y="55" width="74" height="74" rx="10"/><rect x="123" y="139" width="74" height="74" rx="10"/><path d="M103 112 H127 M193 92 H217 M148 176 H172" fill="none" stroke-width="5"/>';
    }
  },
  music: function (spec) {
    switch (spec.detail) {
      case "bell":
        return '<path d="M104 147 Q110 71 160 71 Q210 71 216 147 L238 184 H82 Z"/><path d="M137 184 Q160 212 183 184 M143 71 Q143 47 160 47 Q177 47 177 71" fill="none" stroke-width="7"/>';
      case "piano":
        return '<rect x="58" y="75" width="204" height="108" rx="10"/><path d="M58 127 H262 M94 127 V183 M130 127 V183 M166 127 V183 M202 127 V183 M238 127 V183 M78 75 V127 M118 75 V127 M158 75 V127 M198 75 V127 M238 75 V127" fill="none" stroke-width="5"/>';
      case "guitar":
        return '<path d="M105 147 Q75 112 108 83 Q134 58 160 92 Q190 58 216 83 Q249 112 215 147 Q193 181 160 154 Q127 181 105 147 Z"/><path d="M160 91 L240 28 M178 73 L205 100 M127 121 H193 M145 103 L178 136" fill="none" stroke-width="6"/>';
      case "flute":
        return '<path d="M72 152 L236 66" fill="none" stroke-width="12"/><circle cx="123" cy="126" r="5" fill="#111" stroke="none"/><circle cx="154" cy="110" r="5" fill="#111" stroke="none"/><circle cx="185" cy="94" r="5" fill="#111" stroke="none"/><circle cx="216" cy="78" r="5" fill="#111" stroke="none"/>';
      default:
        return '<path d="M122 58 V158 Q122 188 91 188 Q65 188 65 164 Q65 139 97 139 Q110 139 122 148 V58 L220 39 V140 Q220 170 189 170 Q163 170 163 146 Q163 121 195 121 Q208 121 220 130" fill="none" stroke-width="9"/>';
    }
  },
  screen: function (spec) {
    switch (spec.detail) {
      case "phone":
        return '<rect x="120" y="38" width="80" height="174" rx="14"/><path d="M142 62 H178 M148 186 H172" fill="none" stroke-width="5"/><circle cx="160" cy="165" r="7" fill="#111" stroke="none"/>';
      case "remote":
        return '<rect x="112" y="42" width="96" height="171" rx="18"/><circle cx="160" cy="80" r="16" fill="#ded8c8"/><path d="M138 121 H182 M138 151 H182 M138 181 H182" fill="none" stroke-width="6"/>';
      default:
        return '<rect x="58" y="58" width="204" height="126" rx="10"/><path d="M132 211 H188 M160 184 V211 M90 93 H230" fill="none" stroke-width="7"/>';
    }
  }
};

defineDetailedArt("cat kitten", "cat");
defineDetailedArt("dog puppy", "dog");
defineDetailedArt("ball", "ball");
defineDetailedArt("moon", "moon");
defineDetailedArt("sun", "sun");
defineDetailedArt("fish goldfish whale shark", "fish");
defineDetailedArt("book storybook", "book");
defineDetailedArt("star", "star");
defineDetailedArt("mom dad doctor nurse", "person");
defineDetailedArt("baby", "baby");
defineDetailedArt("apple orange grape pear peach lemon melon strawberry blueberry watermelon banana", "fruit");
defineDetailedArt("carrot potato tomato corn pea bean", "vegetable");
defineDetailedArt("milk water juice bottle", "drink");
defineDetailedArt("cheese yogurt cereal tofu honey jam", "foodBox");
defineDetailedArt("bread toast sandwich cracker muffin pancake pizza meat chicken", "breadFood");
defineDetailedArt("egg", "egg");
defineDetailedArt("rice noodle soup bowl salad", "bowlFood");
defineDetailedArt("cookie cake ice-cream candy", "treat");
defineDetailedArt("spoon fork straw plate napkin tray high-chair cup mug fridge oven pot pan kettle", "kitchenItem");
defineDetailedArt("chair table bed pillow blanket door window wall floor roof light lamp night-light clock watch sofa box basket bucket bag pocket key mirror picture rug mat curtain drawer shelf closet stairs elevator broom mop dustpan doorbell mailbox trash-can gate handle house bedroom kitchen bathroom garden garage balcony crib cradle", "homeItem");
defineDetailedArt("shoe sock boot slipper hat helmet shirt t-shirt pants shorts pajamas coat raincoat dress skirt glove scarf ring necklace button zipper lace belt mask bib sweater", "clothesItem");
defineDetailedArt("hand finger arm foot toe leg knee eye ear nose mouth tongue hair head face cheek chin tooth tummy back neck nail bandage medicine", "bodyPart");
defineDetailedArt("tub towel washcloth tissue soap toothbrush toothpaste comb brush potty diaper toilet sink sponge bubbles shampoo lotion cream wipe glue paint", "bathItem");
defineDetailedArt("car taxi police-car ambulance fire-truck bus train bike wheel boat plane truck stroller road street bridge path seat", "vehicle");
defineDetailedArt("tree flower grass leaf rock stick sand mud puddle rain snow cloud sky wind hill shell beach wave park yard store school fence slide swing bench sign", "nature");
defineDetailedArt("cow pig horse sheep goat hen mouse rabbit bear lion tiger monkey frog duck bird parrot bee butterfly ant spider turtle snail deer elephant giraffe zebra hamster donkey camel panda crab animal", "animal");
defineDetailedArt("doll block puzzle crayon pencil eraser paper paint glue scissors drum kite balloon shovel sticker robot teddy pacifier", "toy");
defineDetailedArt("music song bell piano guitar flute", "music");
defineDetailedArt("phone remote tv", "screen");

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

function renderPicture(lesson) {
  var image;

  image = document.createElement("img");
  image.className = "generated-word-image";
  image.alt = lesson.word + " picture";
  image.onerror = function () {
    if (!elements.picture.contains(image)) {
      return;
    }

    elements.picture.innerHTML = renderArt(lesson);
  };
  image.src = "assets/word-images/" + encodeURIComponent(lesson.art) + ".png";

  elements.picture.innerHTML = "";
  elements.picture.appendChild(image);
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
  renderPicture(lesson);
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
