const allLangs = ["am", "ru", "en"];
let currentLang = localStorage.getItem("language") || "en";
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeText = {
  about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  contacts: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  home_top_title: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "Изысканный стиль в каждом волокне",
    en: "Elevate Style, Embrace Story with Aria textile",
  },
  home_top_text: {
    am: "Aria Textile-ում Մեր առաքելությունն է իրականություն դարձնել ձեր տեսլականը: Մեր նպատակն է ձեր անհատական ոճն ու նախասիրությունները արտացոլող նմուշներ ստեղծելը: Մեր նվիրված թիմը ձգտում է ձեր յուրահատուկ գաղափարները կյանքի կոչել: Բացի այդ, դուք կարող եք վստահ լինել, որ ձեր պատվերը ժամանակին կառաքվի ձեզ, անկախ նրանից, թե որտեղ եք գտնվում:",
    ru: "Мы готовы воплотить ваше видение в жизнь. В Aria Textile мы специализируемся на разработке индивидуального дизайна с учетом ваших предпочтений. От концепции до создания наша команда стремится воплотить ваши уникальные идеи с точностью и тщательностью. Кроме того, рассчитывайте на нашу оперативную доставку, гарантирующую, что ваши индивидуальные проекты будут доставлены вам быстро и удобно, независимо от вашего местоположения.",
    en: "We're here to bring your vision to life. At Aria Textile, we specialize in crafting bespoke designs tailored to your preferences. From concept to creation, our team is dedicated to realizing your unique ideas with precision and care. In addition, count on us for prompt delivery, ensuring your custom designs reach you swiftly and conveniently, regardless of your location.",
  },
  home_top_btn: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About Us",
  },
  trending_title: {
    am: "Հագուստի արտադրություն",
    ru: "Производство одежды",
    en: "Clothes Production",
  },
  trending_subtitle: {
    am: "XXX",
    ru: "Превращение нитей в модные стили",
    en: "Transforming Threads into Trendsetting Styles",
  },
  trending_card_title_1: {
    am: "XXX",
    ru: "Женская Майка",
    en: "Shirt For Woman",
  },
  trending_card_title_2: {
    am: "Շապիկներ տղամարդկանց և կանանց համար",
    ru: "Футболки для мужчин и женщин",
    en: "T-shirts for men and women",
  },
  trending_card_title_3: {
    am: "Ցանկացած չափի համար",
    ru: "На любой размер",
    en: "For any size",
  },
  trending_card_material_1: {
    am: "բամբակ",
    ru: "хлопок",
    en: "cotton",
  },
  trending_card_material_span_1: {
    am: "Նյութ: ",
    ru: "Материал: ",
    en: "Material: ",
  },

  trending_card_material_2: {
    am: "բամբակ",
    ru: "хлопок",
    en: "cotton",
  },
  trending_card_material_span_2: {
    am: "Նյութ: ",
    ru: "Материал: ",
    en: "Material: ",
  },

  trending_card_material_3: {
    am: "բամբակ",
    ru: "хлопок",
    en: "cotton",
  },
  trending_card_material_span_3: {
    am: "Նյութ: ",
    ru: "Материал: ",
    en: "Material: ",
  },
  summer_title: {
    am: "Հագուստի մոդելավորում",
    ru: "Моделирование одежды",
    en: "Clothing Modeling",
  },
  summer_subtitle: {
    am: "Որտեղ որակը զուգորդվում է նրբագեղության հետ",
    ru: "Где Качество сочетается с изысканностью",
    en: "Where Quality Meets Sophistication",
  },
  summer_left_text: {
    am: "Մեր հիմնական նպատակն է մեր հաճախորդներին տրամադրել ավելի բարձր որակի արտադրանք: Մենք փորձում ենք հասկանալ նրանց կարիքները եւ ապահովել նրանց կարճ ժամանակահատվածում:",
    ru: "Наша главная цель - предоставить нашим клиентам продукцию самого высокого качества. Мы стараемся понять их потребности и обеспечить их в течение короткого периода времени.",
    en: "Our main aim is to serve our customers with better quality product. We try to understand their needs and provide them within a shortperiod of time.",
  },
  summer_right_text: {
    am: "Aria Textile-ը հիմնադրվել 2017 թվականին: Այս ընոացքում մենք ձեռք ենք բերել հսկայական փորձ, որը օգտագործում ենք մեր ամեն արտադրանքում:",
    ru: "Основанная в 2017 году, компания Aria Textile привносит многолетний опыт в каждый проект. Доверьте нам обеспечение качества и надежности, отточенных благодаря нашему богатому отраслевому опыту.",
    en: "Established in 2017, Aria Textile brings years of expertise to every project. Trust us to deliver quality and reliability, honed through our rich industry experience.",
  },
  winter_title: {
    am: "Հագուստի դիզայն և տպագրություն",
    ru: "Дизайн одежды и принт",
    en: "Clothing Design and Printing",
  },
  winter_subtitle: {
    am: "Հագուստի անհատական դիզայն և տպագրություն",
    ru: "Индивидуальный дизайн и принт одежды",
    en: "Tailored Clothing Designs and Printing Solutions",
  },
  winter_left_text: {
    am: "Ստեղծեք ձեր սեփական գլուխգործոցը մեզ հետ: Aria Textile-ում Մենք ողջունում ենք անհատական պատվերներ, որոնք թույլ են տալիս ցանկացած դիզայն իրականություն դարձնել:  Ազատություն տվեք ձեր ստեղծագործականությունը և ստեղծեք Ձեր գործվածքներն այսօր:",
    ru: "Создайте свой собственный текстильный шедевр вместе с нами! В Aria Textile мы приветствуем индивидуальные заказы, позволяющие воплотить в реальность любой дизайн.  Дайте волю своему творчеству и персонализируйте свои ткани уже сегодня!",
    en: " Create your own textile masterpiece with us! At Aria Textile, we welcome custom orders, allowing you to bring any design to reality. Unleash your creativity and personalize your fabrics today!",
  },
  winter_right_text: {
    am: "Կատարեք ձեր պատվերները Aria textile-ում շուկայի ամենամատչելի գներով: Մենք առաջարկում ենք պրեմիում նյութեր և բացառիկ վարպետություն լավագույն գներով ՝ ապահովելով մատչելիություն պահպանելով բարձր որակը:",
    ru: "Совершайте покупки с уверенностью в Aria Textile по непревзойденной цене. Мы предлагаем материалы премиум-класса и исключительное мастерство изготовления по лучшим ценам, гарантируя доступность без компромиссов. Совершайте покупки с нами сегодня!",
    en: "Shop confidently at Aria Textile for unbeatable value. We offer premium materials and exceptional craftsmanship at the best prices, ensuring affordability without compromise. Shop with us today!",
  },
  order_title: {
    am: "Ինչպես պատվիրել",
    ru: "Как заказать",
    en: "How to order",
  },
  order_subtitle: {
    am: "Եկեք քայլ առ քայլ նայենք, թե ինչպես պատվիրել ձեր յուրահատուկ հագուստը",
    ru: "Давайте пошагово рассмотрим, как заказать вашу уникальную одежду",
    en: "Let's take a step-by-step look at how to order your unique clothes",
  },
  landscape_text: {
    am: "Ինչպես պատվիրել",
    ru: "Как заказать",
    en: "How to order",
  },
  heading_top_1: {
    am: "Դիմեք մեզ",
    ru: "Свяжитесь с нами",
    en: "Contact us",
  },
  heading_top_2: {
    am: "Դիզայն",
    ru: "Дизайн",
    en: "Designing",
  },
  heading_top_3: {
    am: "Արտադրում",
    ru: "Создание",
    en: "Creation",
  },
  heading_top_4: {
    am: "Վերջ",
    ru: "Финал!",
    en: "Final!",
  },
  heading_top: {
    am: "Կապվեք մեզ հետ ",
    ru: "Свяжитесь с нами ",
    en: "Contact us ",
  },
  heading_bottom_1: {
    am: "Իրականություն դզձրեք ձեր մտքերը",
    ru: "Создавайте свое видение вместе с нами",
    en: "Craft your vision with us",
  },
  paragraph_1: {
    am: "Պարզապես կիսվեք մեզ հետ ձեր տեսլականով, լինի դա էսքիզ, նկարագրություն, և մենք սերտորեն կհամագործակցենք ձեզ հետ՝ ստեղծելու եզակի հագուստ, որը  ճշգրիտ կհամապատասխանի ձեր նպատակներին: Ձեր նախասիրություններին հարմարեցնելու ենք յուրաքանչյուր մանրուք՝ ցանկացած քանակությամբ՝ նվազագույն ժամկետով: Ձեր ցանկացած մոդելի նմուշները պատրաստվում են 2-3 օրվա ընթացքում։ Ընդունվում են նաև անհատական պատվերներ",
    ru: "Просто поделитесь с нами своим видением, будь то эскиз, описание или даже просто доска объявлений, и мы будем тесно сотрудничать с вами, чтобы создать единственную в своем роде одежду, которая точно соответствует вашим украшениям и отделке, мы адаптируем каждую деталь к вашим предпочтениям в любом количестве на минимальный срок. Образцы любой из ваших моделей готовятся в течение 2-3 дней.Мы также принимаем индивидуальные заказы",
    en: "Simply share your vision with us, whether it's a sketch, a description, or even just a mood board, and we'll work closely with you to create a one-of-a-kind garment that fits your exact embellishments and finishes, we'll tailor every detail to your preferences in any quantity for a minimum period. Samples of any  of your models are prepared within 2-3 days.We also accept individual orders",
  },
  heading_bottom_2: {
    am: "Մասնագիտական օգնություն",
    ru: "Помощь экспертов",
    en: "Expert Guidance",
  },
  paragraph_2: {
    am: "Aria Textile-ում մենք հասկանում ենք, որ ձեր նախագծի համար կատարյալ դիզայն ընտրելը կարող է դժվար գործ լինել: Այդ պատճառով մենք պատրաստ ենք առաջնորդելո ձեզ ամեն քայլափոխի: Մեր մասնագետների թիմը պատրաստ է օգնել ձեզ գտնել իդեալական դիզայնը:",
    ru: "В Aria Textile мы понимаем, что выбор идеального дизайна для вашего проекта может оказаться непростой задачей. Именно поэтому мы здесь, чтобы сопровождать вас на каждом этапе. Наша команда профессионалов стремится воплотить ваше видение в жизнь.",
    en: "At Aria Textile, we understand that choosing the perfect design for your project can be a daunting task. That's why we're here to guide you every step of the way. Our team of professionals is dedicated to ensuring that your vision comes to life.",
  },
  heading_bottom_3: {
    am: "Ստացեք ձեր պատվերը",
    ru: "Получите ваш заказ",
    en: "Get your clothes",
  },
  paragraph_3: {
    am: "Մեր թիմը կաշխատի ձեր պատվերի վրա և կառաքի այն ամենակարճ ժամկետներում, և վերջապես դուք կստանաք ձեր հագուստը:",
    ru: "Наша команда обработает ваш заказ и доставит его в кратчайшие сроки, и, наконец, вы получите свою одежду.",
    en: "Our team will work on your order and deliver it in shortest terms and finally you will get your clothes.",
  },
  paragraph_4: {
    am: "Մեր առաքման ծառայության միջոցով դուք կարող եք չանհանգստանալ հագուստը ստանալու համար, մենք կառաքենք ցանկացած վայր:",
    ru: "С нашей службой доставки вам не нужно беспокоиться о получении одежды, мы доставим ее куда угодно.",
    en: "With our delivery service you don't have to worry about receiving the clothes, we will deliver anywhere.",
  },
  test_title: {
    am: "Հաճախորդների կարծիք",
    ru: "Отзывы",
    en: "Testimonials",
  },
  test_subtitle: {
    am: "Մեր հաճախորդների կարծիքը",
    ru: "Отзывы наших уважаемых клиентов",
    en: "Hear What Our Valued Customers Have to Say",
  },
  test_text_1: {
    am: "Որպես հացաբուլկեղենի արտադրամասի գործադիր տնօրեն, ես ընտրեցի Aria Textile-ը մեր անձնակազմի հագուստի համար, և ես չէի կարող ավելի գոհ լինել: Նրանց եզակի հագուստը միաձուլում է հարմարավետությունն ու պրոֆեսիոնալիզմը: Ծառայությունը գերազանց էր, իսկ որակն ինքնին խոսում է։ Aria Textile-ը կատարյալ ընտրություն է ցանկացած բիզնեսի համար, որն իր թիմի համար բարձրակարգ հագուստ է փնտրում:",
    ru: "Как генеральный директор пекарни, я выбрал Aria Textile для одежды наших сотрудников, и они превзошли мои ожидания. В их уникальной одежде органично сочетаются комфорт и профессионализм. Обслуживание было превосходным, а качество говорит само за себя. Aria Textile - идеальный выбор для любого бизнеса, который ищет первоклассную одежду для своей команды.",
    en: "As a bakery CEO, I chose Aria Textile for our staff's attire, and I couldn't be more pleased. Their unique clothes blend comfort and  professionalism seamlessly. The service was outstanding, and the quality speaks for itself. Aria Textile is the perfect choice for any business seeking top-notch attire for their team.",
  },
  test_text_2: {
    am: "Որպես բանկի ներկայացուցիչ՝ ես տպավորված եմ Aria Textile-ի յուրօրինակ և ոճային դիզայնով մեր աշխատակիցների համազգեստի համար: Մանրուքների նկատմամբ նրանց ուշադրությունը ստեղծում է իդեալական դիզայն, որը համապատասխան է մեր պրոֆեսիոնալ ոճին: Իրենց հագուստով մեր աշխատակիցները պրոֆեսիոնալ տեսք ունեն։",
    ru: "Как представитель банка, я впечатлена уникальным и стильным дизайном униформы наших сотрудников от Aria Textile. Их внимание к деталям создает неподвластные времени изделия, которые перекликаются с нашим профессиональным стилем и заслуживают комплиментов всякий раз, когда наша команда их надевает. В их одежде наши сотрудники выглядят профессионально.",
    en: "As a bank representative, I’m impressed by Aria Textile's unique and stylish designs for our employees uniforms. Their attention to detail creates timeless pieces that resonate with our professional  style, earning compliments whenever our team wears them. With  their clothes our employees look professional.",
  },
  test_text_3: {
    am: "Ես հիացած եմ մեր ուսանողների համար մեր ընտրած համազգեստով: Վառ գույներն ու հարմարավետ դիզայնը արտացոլում են մեր դպրոցական ոգին, և տեսնելով, որ մեր երիտասարդ սովորողները հպարտորեն կրում են դրանք, ջերմացնում է իմ սիրտը: Դա փոքր, բայց բովանդակալից միջոց է մեր կրթական համայնքում միասնության զգացումը խթանելու համար",
    ru: "Я в восторге от формы, которую мы выбрали для наших учеников. Яркие цвета и удобный дизайн отражают дух нашей школы, и видеть, как наши юные ученики с гордостью носят ее, согревает мое сердце. Это небольшой, но значимый способ укрепить чувство принадлежности и единства в нашем образовательном сообществе",
    en: "I’m thrilled with the uniforms we’ve chosen for our students. The  bright colors and comfortable designs reflect our school spirit, and seeing our young learners proudly wear them warms my heart. It’s a small but meaningful way to foster a sense of belonging and unity in our educational community",
  },
  test_name_1: {
    am: "Արմեն Սուքիասյան",
    ru: "Армен Сукиасян",
    en: "Armen Suqiasyan",
  },
  test_name_2: {
    am: "Աննա Մարգարյան",
    ru: "Анна Маргарян",
    en: "Anna Margaryan",
  },
  test_name_3: {
    am: "Էլեն Մելքոնյան",
    ru: "Элен Мелконян",
    en: "Elen Melqonyan",
  },
  test_role_1: {
    am: "Հացաբուլկեղենի արտադրամասի տնօրեն",
    ru: "Директор пекарни",
    en: "Bakery shop CEO",
  },
  test_role_2: {
    am: "Բանկի մենեջեր",
    ru: "Менеджер банка",
    en: "Bank manager",
  },
  test_role_3: {
    am: "Դպրոցի ուսուցիչ",
    ru: "Школьный учитель",
    en: "School teacher",
  },
  footer_text: {
    am: "2017 Aria. 7 տարի շուկայում",
    ru: "2017 Aria. 7 лет на рынке",
    en: "2017 Aria. 7 years on the market",
  },
  footer_nav: {
    am: "Էջեր",
    ru: "Навигация по сайту",
    en: "Navigation",
  },
  footer_about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  footer_contact: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  footer_contact_title: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_address: {
    am: "Վաղարշապատ, Թումանյան 2Ա",
    ru: "Вагаршапат, Туманяна 2А",
    en: "Vagharshapat, Tumanyan 2A",
  },
  about__stats_title: {
    am: " ինչի ենք մենք հասել",
    ru: "это то, чего мы достигли",
    en: "this is what we have achieved",
  },
  about__stats_text: {
    am: "Երկար տարիների ընթացքում կուտակված հարուստ փորձի շնորհիվ մենք հնարավորություն ենք ունեցել համագործակցելու հաճախորդների լայն շրջանակի հետ՝ տրամադրելով բարձրորակ ապրանքներ և լուծումներ: Այս երկար ճանապարհորդությունը մեզ զորացրել է գիտելիքներով, որոնք անհրաժեշտ են մեր արդյունաբերության խճճվածությունները նավարկելու համար՝ հնարավորություն տալով մեզ հետևողականորեն մատուցել բացառիկ արդյունքներ՝ միաժամանակ խթանելով հարատև հարաբերությունները մեր թանկարժեք հաճախորդների հետ:",
    ru: "Обладая богатым опытом, накопленным за многие годы, мы имели возможность взаимодействовать с широким кругом клиентов, предоставляя индивидуальные продукты и решения различной сложности. Это обширное путешествие дало нам знания и проницательность, необходимые для того, чтобы ориентироваться в тонкостях нашей отрасли, что позволило нам последовательно добиваться исключительных результатов, укрепляя прочные отношения с нашими уважаемыми клиентами.",
    en: "With a wealth of experience accumulated over many years, we have had the opportunity to engage with a wide range of clients, providing tailored products and solutions that have varied in complexity. This extensive journey has empowered us with the knowledge and insight needed to navigate the intricacies of our industry, enabling us to consistently deliver exceptional results while fostering enduring relationships with our valued clients.",
  },
  about__stats_text_1: {
    am: "Հաճախորդներ և եզակի դիզայններ",
    ru: "Клиенты и уникальные дизайны",
    en: "Clients and unique designs",
  },
  about__stats_text_2: {
    am: "կարված հագուստի քանակը",
    ru: "количество сшитой одежды",
    en: "quantity of sewn clothes",
  },

  about__stats_text_3: {
    am: "մենք այս շուկայում ենք ավելի քան 7 տարի",
    ru: "мы работаем на этом рынке уже более 7 лет",
    en: "we have been in this market for more than 7 years",
  },
  about__stats_num: {
    am: "2017 թվականից",
    ru: "с 2017 года",
    en: "since 2017",
  },
  about_carousel_title: {
    am: "Պրոֆեսիոնալների թիմ",
    ru: "Команда профессионалов",
    en: "Team of professionals",
  },
  about_stats_title: {
    am: "Կապվեք մեզ հետ",
    ru: "Свяжитесь с нами",
    en: "Contact us",
  },
  about_stats_text: {
    am: "Կապվեք մեզ հետ, և մենք անմիջապես կսկսենք աշխատել ձեր նախագծի վրա",
    ru: "Свяжитесь с нами, и мы немедленно приступим к работе над вашим проектом",
    en: "Contact us and we will immediately start working on your project",
  },
  about_stats_num_1: {
    am: "Էլ. հասցե",
    ru: "Эл. почта",
    en: "Email",
  },
  about_stats_num_2: {
    am: "ինստագրամ",
    ru: "инстаграм",
    en: "instagram",
  },
  about_stats_num_3: {
    am: "հեռախոս",
    ru: "телефон",
    en: "phone",
  },
};

const aboutText = {
  about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  contacts: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  about_title: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  about_text: {
    am: "Մենք ներկայացնում ենք Aria Textile կարի ֆաբրիկան, որն իր գործունեությունը սկսել է 2017 թվականին, մենք զբաղվում ենք հագուստի արտադրությամբ, մոդելավորմամբ, դիզայնով և տպագրությամբ.",
    ru: "Мы представляем швейную фабрику Aria Textile, которая начала свою деятельность в 2017 году. Мы занимаемся производством, моделированием, дизайном и печатью одежды",
    en: "We present the Aria sewing factory, which started its activity in 2017. We are engaged in the production, modeling, design and printing of clothes",
  },
  about_section_1_title: {
    am: "Որակյալ հագուստի պատրաստում",
    ru: "Создание качественной одежды",
    en: "Crafting Quality Apparel",
  },
  about_section_1_text: {
    am: "Aria Textile-ում մեզ համար շատ կերևոր է գերազանցությամբ կատարել յուրաքանչյուր քայլը: Մենք անսահման հպարտ ենք ժամանակի փորձությանը դիմացկուն հագուստներ պատրաստելու համար: Ավանդական արհեստագործության և ժամանակակից տեխնիկայի խառնուրդի միջոցով մեր հմուտ մասնագետները յուրաքանչյուր հագւստ առրադրում են նրբագեղությամբ: Այստեղ կարելի է գտնել գործվածքից պատրաստված հագուստներ շուկայականից ցածր գնով, բայց շատ որակյալ։ Ավելին, մենք ուրախ ենք առաջարկել գործվածքների հագուստի տեսականի բացառիկ մրցունակ գներով՝ առանց որակի փոխզիջման:",
    ru: "В Aria Textile наше стремление к совершенству проявляется на каждом этапе процесса изготовления одежды. Мы безмерно гордимся созданием одежды, которая выдерживает испытание временем. Благодаря тщательному сочетанию традиционного мастерства и современных технологий наши квалифицированные мастера придают каждому изделию элегантность и утонченность. Здесь вы можете найти одежду из ткани по более низкой цене, чем на рынке, но очень высокого качества. Более того, мы рады предложить широкий ассортимент одежды из ткани по исключительно конкурентоспособным ценам без ущерба для качества.  Здесь вы найдете одежду, которая не только соответствует высоким стандартам, но и обеспечивает отличное соотношение цены и качества для ваших инвестиций.",
    en: "At Aria Textile, our commitment to excellence shines through every step of the apparel-making process. We take immense pride in crafting garments that endure the test of time. Through a meticulous blend of  traditional craftsmanship and modern techniques, our skilled artisans infuse each piece with elegance and sophistication. Here, you can find clothes made of fabric at a lower price than the market, but very high quality. Moreover, we're pleased to offer a range of fabric clothing at exceptionally competitive prices without compromising on quality.  Here, you'll discover attire that not only meets high standards but also provides excellent value for your investment.",
  },
  about_section_2_title: {
    am: "Ձգտումը իդեալին",
    ru: "Наше стремление к совершенству",
    en: "Our Commitment to Excellence",
  },
  about_section_2_text: {
    am: "Գերազանցության հանդեպ մեր անսասան հանձնառությունը առաջնորդում է մեր գործունեության բոլոր ասպեկտները: Դիզայնի մոդելավորումից մինչև արտադրական գործընթաց՝ մենք պահպանում ենք ամենաբարձր ստանդարտները՝ սպասելիքները գերազանցող հագուստի արտադրանք մատակարարելու համար: Մենք շարունակաբար ձգտում ենք կատարելության՝ ձգտելով կատարելագործել մեր արտադրանքը, որ մեր գործարանից դուրս եկած յուրաքանչյուր հագուստ վկայի գերազանցության մեր ձգտման մասին:",
    ru: "Наше непоколебимое стремление к совершенству определяет каждый аспект нашей деятельности. От разработки концепции дизайна до производственного процесса мы придерживаемся самых высоких стандартов, чтобы выпускать одежду, которая превосходит ожидания. Мы постоянно стремимся к совершенству, внедряя инновации и совершенствуя наши процессы, чтобы гарантировать, что каждая одежда, покидающая нашу фабрику, является свидетельством нашего стремления к совершенству.",
    en: "Our unwavering commitment to excellence drives every aspect of our operations. From design conceptualization to the manufacturing process, we uphold the highest standards to deliver clothing products that exceed expectations. We continuously strive for perfection, seeking to innovate and refine our processes to ensure that each garment leaving our factory is a testament to our pursuit of excellence.",
  },
  about__stats_title: {
    am: " ինչի ենք մենք հասել",
    ru: "это то, чего мы достигли",
    en: "this is what we have achieved",
  },
  about__stats_text: {
    am: "Երկար տարիների ընթացքում կուտակված հարուստ փորձի շնորհիվ մենք հնարավորություն ենք ունեցել համագործակցելու հաճախորդների լայն շրջանակի հետ՝ տրամադրելով բարձրորակ ապրանքներ և լուծումներ: Այս երկար ճանապարհորդությունը մեզ զորացրել է գիտելիքներով, որոնք անհրաժեշտ են մեր արդյունաբերության խճճվածությունները նավարկելու համար՝ հնարավորություն տալով մեզ հետևողականորեն մատուցել բացառիկ արդյունքներ՝ միաժամանակ խթանելով հարատև հարաբերությունները մեր թանկարժեք հաճախորդների հետ:",
    ru: "Обладая богатым опытом, накопленным за многие годы, мы имели возможность взаимодействовать с широким кругом клиентов, предоставляя индивидуальные продукты и решения различной сложности. Это обширное путешествие дало нам знания и проницательность, необходимые для того, чтобы ориентироваться в тонкостях нашей отрасли, что позволило нам последовательно добиваться исключительных результатов, укрепляя прочные отношения с нашими уважаемыми клиентами.",
    en: "With a wealth of experience accumulated over many years, we have had the opportunity to engage with a wide range of clients, providing tailored products and solutions that have varied in complexity. This extensive journey has empowered us with the knowledge and insight needed to navigate the intricacies of our industry, enabling us to consistently deliver exceptional results while fostering enduring relationships with our valued clients.",
  },
  about__stats_text_1: {
    am: "Հաճախորդներ և եզակի դիզայններ",
    ru: "Клиенты и уникальные дизайны",
    en: "Clients and unique designs",
  },
  about__stats_text_2: {
    am: "կարված հագուստի քանակը",
    ru: "количество сшитой одежды",
    en: "quantity of sewn clothes",
  },

  about__stats_text_3: {
    am: "մենք այս շուկայում ենք ավելի քան 7 տարի",
    ru: "мы работаем на этом рынке уже более 7 лет",
    en: "we have been in this market for more than 7 years",
  },
  about__stats_num: {
    am: "2017 թվականից",
    ru: "с 2017 года",
    en: "since 2017",
  },
  about_carousel_title: {
    am: "Պրոֆեսիոնալների թիմ",
    ru: "Команда профессионалов",
    en: "Team of professionals",
  },
  footer_text: {
    am: "2017 Aria. 7 տարի շուկայում",
    ru: "2017 Aria. 7 лет на рынке",
    en: "2017 Aria. 7 years on the market",
  },
  footer_nav: {
    am: "Էջեր",
    ru: "Навигация по сайту",
    en: "Navigation",
  },
  footer_about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  footer_contact: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  footer_contact_title: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_address: {
    am: "Վաղարշապատ, Թումանյան 2Ա",
    ru: "Вагаршапат, Туманяна 2А",
    en: "Vagharshapat, Tumanyan 2A",
  },
};
const contactsText = {
  about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  contacts: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },

  about_stats_title: {
    am: "Կապվեք մեզ հետ",
    ru: "Свяжитесь с нами",
    en: "Contact us",
  },
  about_stats_text: {
    am: "Կապվեք մեզ հետ, և մենք անմիջապես կսկսենք աշխատել ձեր նախագծի վրա",
    ru: "Свяжитесь с нами, и мы немедленно приступим к работе над вашим проектом",
    en: "Contact us and we will immediately start working on your project",
  },
  about_stats_num_1: {
    am: "Էլ. հասցե",
    ru: "Эл. почта",
    en: "Email",
  },
  about_stats_num_2: {
    am: "ինստագրամ",
    ru: "инстаграм",
    en: "instagram",
  },
  about_stats_num_3: {
    am: "հեռախոս",
    ru: "телефон",
    en: "phone",
  },

  footer_text: {
    am: "2017 Aria. 7 տարի շուկայում",
    ru: "2017 Aria. 7 лет на рынке",
    en: "2017 Aria. 7 years on the market",
  },
  footer_nav: {
    am: "Էջեր",
    ru: "Навигация по сайту",
    en: "Navigation",
  },
  footer_about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  footer_contact: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  footer_contact_title: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_address: {
    am: "Վաղարշապատ, Թումանյան 2Ա",
    ru: "Вагаршапат, Туманяна 2А",
    en: "Vagharshapat, Tumanyan 2A",
  },
};

const faqText = {
  about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  contacts: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },

  footer_text: {
    am: "2017 Aria. 7 տարի շուկայում",
    ru: "2017 Aria. 7 лет на рынке",
    en: "2017 Aria. 7 years on the market",
  },
  footer_nav: {
    am: "Էջեր",
    ru: "Навигация по сайту",
    en: "Navigation",
  },
  footer_about: {
    am: "Մեր մասին",
    ru: "О нас",
    en: "About us",
  },
  footer_contact: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_faq: {
    am: "Հաճախակի Տրվող Հարցեր",
    ru: "часто задаваемые вопросы",
    en: "FAQ",
  },
  footer_contact_title: {
    am: "Կապ",
    ru: "Контакты",
    en: "Contacts",
  },
  footer_address: {
    am: "Վաղարշապատ, Թումանյան 2Ա",
    ru: "Вагаршапат, Туманяна 2А",
    en: "Vagharshapat, Tumanyan 2A",
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentText = homeText;
      break;
    case "/aboutus.html":
      currentText = aboutText;
      break;
    case "/contacts.html":
      currentText = contactsText;
      break;
    case "/faq.html":
      currentText = faqText;
      break;
    default:
      currentText = homeText;
      break;
  }
}

checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);

    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}

changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem("language", event.target.dataset.btn);
    resetActiveClass(langButtons, "header__active");
    btn.classList.add("header__active");
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "en":
      document.querySelector('[data-btn="en"]').classList.add("header__active");
      break;
    case "ru":
      document.querySelector('[data-btn="ru"]').classList.add("header__active");
      break;
    case "am":
      document.querySelector('[data-btn="am"]').classList.add("header__active");
      break;
    default:
      document.querySelector('[data-btn="en"]').classList.add("header__active");
      break;
  }
}
checkActiveLangButton();
