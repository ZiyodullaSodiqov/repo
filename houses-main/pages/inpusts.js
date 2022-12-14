import React, {useRef, useState} from 'react';
import "./inputs.css";
import {useReactToPrint} from "react-to-print";

function Inpusts(props) {

    const [obj, setObj] = useState({});

    const download = () => {
        setObj({
            number: byId("number"),
            investor_passport_seriya: byId("investor_passport_seriya"),
            passport_region: byId("passport_region"),
            passport_date: byId("passport_date"),
            investor_name: byId("investor_name"),
            investor_lastname: byId("investor_lastname"),
            investor_otasini_ismi: byId("investor_otasini_ismi"),
            uy_address: byId("uy_address"),
            qavati: byId("qavati"),
            uy_maydoni: byId("uy_maydoni"),
            xona_soni: byId("xona_soni"),
            kv_raqami: byId("kv_raqami"),
            total_price: byId("total_price"),
            qolgan_price: byId("qolgan_price"),
            investor_address: byId("investor_address"),
            investor_first_phone: byId("investor_first_phone"),
            investor_two_phone: byId("investor_two_phone"),
            birthday: byId("birthday"),
            investor_jshr: byId("investor_jshr"),
            quruchi_shoti_raqami: byId("quruchi_shoti_raqami"),
            data: byId("data")
        });
        x();
    };

    const x = () => {
        let pdf = {
            pdf:
                `Уй-жой қурилишига инвестиция киритиш ҳақида
№ ${obj.number}- сонли ШАРТНОМА

Тошкент шаҳри                             “___” _________ 2022 йил

Паспорт серияси ${obj.investor_passport_seriya}  ${obj.passport_region}  томонидан ${obj.passport_date} берилган Ўзбекистон Республикаси фуқароси Ташназаров Уктам Бахтиёр ўғли (кейинги ўринларда – “Инвестор”) бир томондан ва “Ўзшаҳар қурилиш инвест” инжиниринг компанияси МЧЖ номидан 2022 йил 5 январдаги 01/02-сонли ишончнома асосида фаолият юритувчи директор ўринбосари Ж.Б.Жабборов (кейинги ўринларда  – “Уй-жой қурувчи”) иккинчи томондан, биргаликда “Томонлар” деб номланувчилар мазкур шартномани қуйидагилар ҳақида туздилар:

АСОСИЙ ТУШУНЧАЛАР

Ушбу шартнома матнининг кейинги ўринларида учрайдиган барча атамалар, агар контекстдан бошқача маъно англанмаса, қуйидаги бўлимда баён қилинган тушунчаларни англатади:
“Уй-жой мажмуаси” – Қонун ҳужжатларида белгиланган тартибда замонавий қурилиш материаллари ва технологияларини республика минтақаларининг табиий-иқлим шароитларини ва жойнинг рельефини, ижтимоий-демографик хусусиятларини ҳисобга олган ҳолда ишлаб чиқилган лойиҳа-смета ҳужжатларига асосан маълум бир ҳудудда, барча қурилиш меъёрларига мос равишда, фойдаланишга тайёр ҳолатда, атрофида ободонлаштириш ва муҳандислик- коммуникация тармоқлари билан биргаликда қурилган икки ёки ундан ортиқ кўп қаватли уй-жойлар мажмуаси;
“Инвестор” - “Уй-жой мажмуаси”даги кўп қаватли уй-жойлардан мазкур шартномага асосан унга ажратилган хонадонни “Уй-жой қурувчи” томонидан кейинчалик унга мулк ҳуқуқи асосида топширилиши шарти билан “Уй-жой мажмуаси” қурилишига маълум миқдордаги пул маблағи кўринишида инвестиция киритувчи жисмониий шахс;
“Уй-жой қурувчи” - “Уй-жой мажмуаси” қурилиши учун барча зарур ҳужжатлар, хусусан лойиҳа-смета ҳужжатларини расмийлаштириш, пудратчиларни танлаш, қурилиш ишларининг ўз вақтида ва сифатли бажарилиши юзасидан техник назоратни амалга ошириш, “Уй-жой мажмуаси”ни ўз муддатида фойдаланишга топшириш, шунингдек “Инвестор” маблағларидан мақсадли ва самарали фойдаланилиши функциялари юкланган ҳолда “Ўзшаҳар қурилиш инвест” инжиниринг компанияси МЧЖ;
“Квартира” – “Уй-жой мажмуаси” қурилиши якунланиб, фойдаланишга топширилгандан сўнг ўзига юклатилган барча мажбуриятларни ўз муддатида ва тўлиқ бажарган “Инвестор”га мулк ҳуқуқи асосида топшириладиган кўчмас мулк объекти;
      
МУҲИМ ШАРТЛАР
  
Ушбу шартнома бўйича муносабатлар Ўзбекистон Республикаси Фуқаролик кодекси, Ўзбекистон Республикаси Президентининг 28.11.2019 йилдаги ПФ-5886-сон, 11.03.2021 йилдаги       ПФ-6186-сонли ҳамда 2021 йил 9 декабрдаги ПФ-33-сонли Фармонлари билан ўрнатилган янги тартиб ва бошқа қонун ҳужжатлари асосида тартибга солинади.

ШАРТНОМА ПРЕДМЕТИ

“Инвестор” “Уй-жой қурувчи”нинг розилиги ва мазкур шартнома шартларига мувофиқ, Тошкент шаҳар, Янгиҳаёт тумани, Янгидарҳон МФЙ, Наврўз кўчасида қурилаётган “Уй-жой мажмуаси”даги (кейинги ўринларда “Уй-жой мажмуаси”) кўп қаватли уй-жойлардан унга ажратилган хонадонни “Уй-жой қурувчи” томонидан кейинчалик мулк ҳуқуқи асосида топширилиши шарти билан “Уй-жой мажмуаси” қурилишига маълум миқдордаги пул маблағи кўринишида инвестиция киритади.
“Уй-жой қурувчи” “Инвестор”нинг “Уй-жой мажмуаси” қурилиши учун инвестиция киритишига розилик бериб, “Уй-жой мажмуаси”даги ${obj.investor_name}, ${obj.qavati}-қават, майдони (шартли равишда) ${obj.uy_maydoni} дан иборат, ${obj.xona_soni}-хонали ${obj.kv_raqami}-квартирасини (кейинги ўринларда “Квартира”) киритилган инвестиция маблағи эвазига унга ажратиб, “Уй-жой мажмуаси” белгиланган тартибда фойдаланишга топширилгандан сўнг нотариал шартнома тузиш орқали мулк ҳуқуқи асосида унга топширади.
Квартира майдони лойиҳага асосан шартли бўлиб, кадастр ҳужжатларига мувофиқ квартира майдони ўзгариши квартира қийматига таъсир этмайди

4. ТОМОНЛАРНИНГ ҲУҚУҚ ВА МАЖБУРИЯТЛАРИ4.1.  “Инвестор”нинг мажбуриятлари:
4.1.1. Мазкур шартномада кўрсатилган миқдорда ва шартларда ўз маблағлари ва ёки жалб этилган маблағларни “Уй-жой мажмуаси” қурилишига ушбу шартномада белгиланган тартибда йўналтириш. 
4.1.2. Мазкур шартнома бўйича ўз зиммасига олган мажбуриятлар бажарилишига алоқадор тўлов ва бошқа ҳужжатлар нусхаларини “Буюртмачи”га тақдим этиш.
4.1.3. “Квартира”ни “Уй-жой қурувчи”дан мазкур шартномага мувофиқ топшириш-қабул қилиш далолатномаси бўйича қабул қилиб олиш.
4.1.4. Зарурат туғилганда уй-жой қурувчининг талаби билан инвесторнинг маблағлари, тижорат банкларининг кредит маблағлар ва қонунда тақиқланмаган  бошқа маблағлар ҳисобидан улуш киритиш асосида қурилишга маблағлар йўналтириш
4.1.5 Уй-жой қурувчи масъул  ҳодимлари томонилан уй-жойдаги қурилиш ишлари якунланиб квартира фойдаланишга тайёр ҳолга келтирилганлиги ҳақида хабар берилгандан сўнг 1 ой муддатда квартира олди-сотдиси бўйича нотариал идорада шартномани расмийлаштириш, квартира қийматининг қолган қисмини ўз маблағлари, тижорат банкларининг ипотека кредитлари ва бошқа қонун билан тақиқланмаган манбалар ҳисобидан тўлаш.
4.2. Инвесторнинг ҳуқуқлари:
4.2.1. Қурилишнинг боришини кузатиб бориш, таклифлар киритиш ва «Уй-жой қурувчи» ва пудратчига эътирозлар билдириш.
4.2.2. Инвестор ишларнинг бажарилиши устидан текширув ва назоратни амалга ошираётганда қурилиш пудрати шартномаси шартларидан ишлар сифатини ёмонлаштириши мумкин бўлган даражада чекинишни ёки бошқа камчиликларни аниқласа, бу тўғрида дарҳол “Уй-жой қурувчи”га хабар бериши шарт, “Уй-жой қурувчи” эса бу ҳақда пудратчини дарҳол хабардор қилади. Буни хабар қилмаган Инвестор аниқланган камчиликларни кейинчалик важ қилиб келтириш ҳуқуқини йўқотади.
4.3. Уй-жой қурувчининг мажбуриятлари:
4.3.1. Уй-жой мажмуаси қурилишига рухсат бериш ҳужжатларини расмийлаштириш.
4.3.2. Қурилишни бошқаришни ташкиллаштириш.
4.3.3. Уй-жой мажмуасини қуриш буюртмаларини пудратчилар ўртасида жойлаштириш.
4.3.4. Лойиҳа-смета ҳужжатларини тасдиқлаш, танланган пудратчи билан шартномалар имзолаш.
4.3.5. Уй-жой мажмуасини фойдаланишга қабул қилиш ва ундаги ажратилган квартирани “Инвестор”га тайёр ҳолда (под ключ) фойдаланишга бериш, қабул қилиш-топшириш ҳужжатларини имзолаш.
4.3.6. “Инвестор”нинг талабига мувофиқ унга буюртмаларни жойлаштириш ва ижро этиш ҳақида ва объектни қуриш бўйича ишлар қандай бажарилаётганлиги ҳақида маълумот бериб туриш.
4.3.7. Қурилиш-монтаж ишлари лойиҳа ҳужжатлари ва меъёрий-ҳуқуқий ҳужжатларга мувофиқлигини назорат қилиш.
4.4. Уй-жой қурувчининг ҳуқуқлари:
4.4.1. “Уй-жой мажмуаси”ни қуриш бўйича ишларни бажариш тартибини ўз хоҳишига кўра белгилаш.
4.4.2. “Инвестор” мазкур шартноманинг 5-бўлимида назарда тутилган маблағларни белгиланган муддатларда тўламаганда ҳамда ўзининг шартнома бўйича бошқа мажбуриятларини бажармаган  тақдирда мазкур шартномани бир томонлама “Инвестор”ни ёзма огоҳлантиришсиз бекор қилиш.
4.4.3. Уй-жой қурувчи қурилиш даврида инвестор томонидан уй-жой қурилишини давом эттириш мқсадида Инвестор томонидан ўз маблағлари, тижорат банкларининг кредит маблағлари ва қонунда тақақиқланмаган бошқа маблағлар ҳисобидан қурилишни улуш киритиш асосида олиб борилишини талаб қилишга ҳақли.

ЎЗАРО ҲИСОБ-КИТОБЛАР, ИНВЕСТИЦИЯ МИҚДОРИ ВА ТЎЛОВНИ АМАЛГА ОШИРИШ ТАРТИБИ“Инвестор” томонидан пул кўринишида киритиладиган жами инвестиция маблағи миқдори унга ажратилган ва кейинчалик мулк ҳуқуқи асосида топшириладиган квартира қийматига мос равишда               ${obj.total_price} сўмни ташкил қилади (квартира қиймати
ҚҚС билан).  
Инвестиция киритиш (тўловни амалга ошириш) турлари қуйидагича:
а) Олдиндан 100% тўлов; _________________________ (“Инвестор” имзоси)
б) Бўлиб-бўлиб тўлаш; ___________________________ (“Инвестор” имзоси)
в) Ипотека кредити расмийлаштириш орқали тўлаш. _______________________ (“Инвестор” имзоси)
5.3. “Инвестор” томонидан мазкур шартноманинг 5.2.-бандида кўрсатилган инвестиция киритиш тури танланади ва ёнига “Инвестор”нинг имзоси қўйилади, тўловни амалга ошириш тартиби шартноманинг кейинги бандларида шунга қараб белгиланади.
5.4. “Инвестор” томонидан шартноманинг 5.2. а) бандидаги тўлов тури танланганда инвестиция маблағи инвестор томонидан мазкур шартнома имзолангандан сўнг 10 банк иш куни ичида олдиндан 100 % миқдорда амалга оширилади.
5.5. “Инвестор” томонидан шартноманинг 5.2. б) бандидаги тўлов тури танланганда Дастлабки инвестиция маблағи  жами инвестиция маблағининг 20 фоизи, 85 400 000 сўмни ташкил қилиб, мазкур шартнома имзол      сўнг “Инвестор” томонидан 10 (ўн) банк иш куни ичида ҳамда 341 600 000 сўм инвестиция қолдиқ маблағи мазкур шартноманинг ажралмас қисми ҳисобланган 1-иловасида белгиланган график асосида амалга оширилади.
5.6. “Инвестор” томонидан шартноманинг 5.2. в) бандидаги тўлов тури танланганда Дастлабки инвестиция маблағи  жами инвестиция маблағининг 20 фоизи 85 400 000 сўмни ташкил қилиб, мазкур шартнома имзолангандан сўнг “Инвестор” томонидан 10 (ўн) банк иш куни ичида 341 600 000 сўм қолдиқ инвестиция маблағи кўп қаватли уй-жойларнинг кадастр ҳужжатлари тайёрлангандан сўнг ёки қурилиш даврида уй-жой мажмуаси қурилиши инвестор томонидан улуш киритиш асосида ажратилган кредит маблағлари ҳисобидан амалга оширилиши юзасидан оғзаки хабардор (телефон, телеграм ва бошқа алоқа воситалари орқали) қилинганидан сўнг, 1 ой муддат ичида ўз маблағлари ёки банкнинг ипотека кредити маблағлари ҳисобидан тўлов амалга оширилади. Агар банк ипотека кредити ажратиш шарти сифатида “Инвестор”дан бошланғич тўлов шакллантиришни талаб қилган тақдирда “Уй-жой қурувчи” “Инвестор” томонидан тўланган дастлабки инвестиция маблағини унинг банкда очилган омонат ҳисоб-рақамига ўтказиб беради. Бунда “Уй-жой қурувчи” банкда ипотека кредити расмийлаштирилишини ташкил этиш мажбуриятини ўз зиммасига олмайди.
5.7. “Инвестор” томонидан Мазкур шартноманинг 5-бўлимида ва унинг ажралмас қисми ҳисобланган
1-иловасида белгиланган муддатда ва миқдорда тўловлар амалга оширилмаганда ҳамда “Инвестор” ўзига ажратилган квартирани олишдан воз кечган тақдирда мазкур шартнома ўз кучини йўқотади ва “Уй-жой қурувчи” томонидан томонидан сарфланган маъмурий, банк ва бошқа харажатларини қисман қоплаш мақсадида “Инвестор” томонидан киритилган инвестиция маблағининг  5 фоизи ушлаб қолиниб, қолган қисми “Инвестор” га қайтарилади.
5.8. Уй-жойларнинг қиймати “Уй-жой қурувчи”нинг хоҳиш-иродасига боғлиқ бўлмаган ҳолатларга кўра ўзгарган тақдирда мазкур шартнома бўйича “Инвестор” томонидан киритиладиган инвестиция миқдори ҳам ўзгариши мумкин.

ИШЛАРНИ БАЖАРИШ МУДДАТЛАРИ

6.1. Мазкур шартномада назарда тутилган қурилишнинг давом этиш вақти ва ишларни бажариш муддатлари, пудратчини танлаш натижаларига мувофиқ: 
қурилиш ишлари 2021 йил декабрь ойидан бошланади;
курилиш ишлари 2023 йил 1 март куни тугалланади:
Бунда “Инвестор” 5-бўлимида кўрсатилган мажбуриятларни бажаришдан озод этилмайди.
6.2. “Уй-жой мажмуаси” қурилиши учун “Инвестор”лар тўлиқ шаклланмаганда ёки улар томонидан инвестиция маблағлари етарли миқдорда шакллантирилмаганда “Уй-жой мажмуаси” қурилиши мазкур ишлар тўлиқ шакллангунга қадар бошқа “Инвестор”ларни хабардор қилган ҳолда узайтирилиши мумкин. 

КВАРТИРАНИ “ИНВЕСТОР”ГА ТОПШИРИЛИШИ ВА “ИНВЕСТОР” 
ТОМОНИДАН ҚАБУЛ ҚИЛИБ ОЛИНИШИШартномада келишилган лойиҳа бўйича барча қурилиш-монтаж ишлари ҳажми бажарилгандан кейин “Уй-жой мажмуаси” қонунчиликда белгиланган тартибда фойдаланишга қабул қилиниб, квартира олди-сотдиси бўйича нотариал идорада шартнома расмийлаштирилгандан сўнг “Инвестор”га ажратилган квартира топшириш-қабул қилиш далолатномаси (ҳисоб фактура) билан унга топширилади. Бунда, “Инвестор”нинг инвестиция бўйича “Уй-жой қурувчи” олдида қарзи бўлган  тақдирда  қарздорлик тўлангунга қадар объектни унга топшириш кечиктирилади.
“Инвестор”га квартирани мулк ҳуқуқини белгилаш нотариал шартнома тузиш йўли билан амалга оширилади.
“Инвестор” номига квартирага нисбатан мулк ҳуқуқини белгилаш бўйича барча бож, тўлов ва бошқа йиғимлар “Инвестор”нинг ўз маблағлари ҳисобидан амалга оширилади.

ФОРС-МАЖОР

8.1. Томонлар мазкур шартнома бўйича мажбуриятларни қисман ёки тўлиқ бажармаганлик учун жавобгарликдан, агар ушбу бажармаслик шартнома тузилгандан кейин томонлар олдиндан кўриши, оқилона чора-тадбирлар билан бартараф этиши мумкин бўлмаган табиат ҳодисалари ёки ижтимоий-иқтисодий ҳолатлар натижасида вужудга келган енгиб бўлмайдиган кучлар (форс-мажор) ҳолатлари оқибати бўлса, озод этилади.
8.2. Енгиб бўлмайдиган кучлар ҳолатларини важ қилиб келтирадиган томон, бундай ҳолатлар вужудга келгани тўғрисида бошқа томонни ёзма равишда дарҳол хабардор қилиши шарт, бунда истаган томоннинг талаби бўйича тегишли орган томонидан берилган тасдиқловчи ҳужжат тақдим этилиши керак.
8.3. Мазкур шартнома бўйича мажбуриятларни бажариш муддати енгиб бўлмайдиган куч ҳолатлари амал қилган вақтга мутаносиб равишда узайтирилади.

ТОМОНЛАРНИНГ ЖАВОБГАРЛИГИ

9.1. Томонлар мазкур шартнома билан уларга юклатилган мажбуриятларни бажармаганлиги ёки лозим даражада бажармаганлиги учун Ўзбекистон Республикасининг амалдаги қонун ҳужжатларига мувофиқ жавобгар бўладилар.
9.2. “Инвестор” шартнома мажбуриятларини бузганлик учун  у “Уй-жой қурувчи”га:
мазкур шартноманинг 4.1-бандида кўрсатилган мажбуриятлар бажарилмаганлиги учун – ўтказиб юборилган ҳар бир кун учун бажарилмаган мажбуриятнинг 0,2 фоизи миқдорида, аммо шартнома баҳосининг  бажарилмаган мажбурияти кийматининг 20 фоизидан ортиқ бўлмаган миқдорда пеня тўлайди;
қурилиши тугалланган объектни қабул қилиб олишни “Инвестор” объект топширишга тайёр эканлиги тўғрисида хабар олган кундан бошлаб ўн иш кунидан ортиқ кечиктирганлиги учун – ўтказиб юборилган ҳар бир кун учун кредитдан ташқари тўланган маблағни 0,2 фоизи миқдорида, аммо шартнома баҳосининг 20 фоизидан ортиқ бўлмаган миқдорда пеня тўлайди.
9.3. “Уй-жой қурувчи” шартноманинг 4.3-бандидаги мажбуриятларини шартноманинг 
8-бўлимида мавжуд асослар бўлмасдан бузган тақдирда, “пудратчи” ташкилотини жалб этиш, “Уй-жой мажмуаси” қурилиши учун киртилган инвестиция маблағларини мақсадли ишлатилишини таъминламаслик  натижасида, уй-жой курилиши муддатларини кечиктиришига сабабчи бўлса, у “Инвестор”га, бажарилмаган мажбурият учун – ўтказиб юборилган ҳар бир кун учун факат бажарилмаган мажбуриятнинг 0,2 фоизи миқдорида, аммо шартнома баҳосининг  бажарилмаган ишлар қисмидан 20 фоизидан ортиқ бўлмаган миқдорда пеня тўлайди.
9.4. Пеня(неустойка)ни тўлаш шартнома бўйича олинган мажбуриятларни бажаришдан озод этмайди.
9.5. “Уй-жой қурувчи” томонидан уй-жой қурилиши бошқа уй-жойлар қурилиши билан биргаликда комплекс шаклда амалга оширилиши сабабли улар билан боғлиқ коммуникация ва инфратузилмалар тизимини тайёрлаш ишларининг бошқа пудратчиларнинг ўз муддатида бажармаслиги оқибатида ўз мажбуриятини ўз вақтида бажара олмаса бу ҳолатда у жавобгарликдан озод қилинади. 




                      
НИЗОЛАРНИ ҲАЛ ҚИЛИШ10.1. Мазкур шартномани ижро этиш давомида келиб чиқадиган низоли масалаларни томонлар музокаралар йўли билан ҳал қиладилар.
10.2. Мазкур шартнома бўйича низоларни судгача ҳал этиш (талабнома юбориш) тартибига амал қилиш мажбурийдир. Талабномани кўриб чиқиш муддати талабнома олинган пайтдан бошлаб 10 (ўн) календарь кун.
10.3. Башарти, келишмовчиликлар ва низоларни томонлар 10 (ўн) календарь кун ичида музокара йўли билан ҳал қилишлари мумкин бўлмаса, ушбу низоларни томонлар,суд тартибида умумий асосларда ҳал қиладилар.

АЛОҲИДА ШАРТЛАР

Кўп қаватли уй ва квартира ва унга кирадиган муҳандислик тизимлари, асбоб-ускуналар, материаллардан фойдаланиш ва ишларнинг кафолатли муддати “Уй-жой қурувчи” қурилиши тугалланган объектни қабул қилиб олиш тўғрисидаги далолатномани имзолаган кундан бошлаб 12 ой этиб белгиланади.
Агар объектдан фойдаланишнинг кафолатли даврида аниқланиб, улар бартараф этилгунга қадар фойдаланишни давом эттириш имконини бермайдиган нуқсонлар аниқланса, у ҳолда кафолат муддати нуқсонларни бартараф этиш даврига узайтирилади. Нуқсонлар қурилиш ишларига жалб қилинган пудратчи томонидан унинг ўз ҳисобидан бартараф этилади.
Кўрсатиб ўтилган кафолатлар объект учинчи шахслар томонидан қасддан шикастлантирилишига ҳамда “Уй-жой қурувчи” ва пудратчи қурилиши тугалланган объектни қабул қилиб олиш тўғрисидаги далолатномани имзолаган кундан бошлаб, “Инвестор” квартирага 2 ой давомида кўчиб келиб яшамаган ҳолларига нисбатан тадбиқ этилмайди.
11.2. Мазкур шартномани ўзгартириш ва бекор қилиш Ўзбекистон Республикасининг қонун ҳужжатларига мувофиқ амалга оширилади.
11.3. Томонлар ўртасидаги мазкур шартномада назарда тутилмаган янги мажбуриятлар пайдо бўлишига олиб келадиган ҳар қандай аҳдлашув, агар у томонлар томонидан қўшимча келишув тарзидаги ёзма шаклда тасдиқланган бўлса, ҳақиқий ҳисобланади.
11.4. Мазкур шартнома икки нусхада тузилган бўлиб, барча нусхалар бир хил ва тенг юридик кучга эга
12.  ТОМОНЛАРНИНГ МАНЗИЛЛАРИ, РЕКВИЗИТЛАРИ 
ВА ИМЗОЛАРИ
“Инвестор”:    “Уй-жой қурувчи”:
${obj.investor_name}    “Ўзшаҳар курилиш инвест” ИК МЧЖ
(Ф.И.О. тўлиқ)    (Компания тўлиқ номи)
${obj.investor_address}
 8-қурилиш  28–уй 10-хонадон    Манзил:  Индекс 100 084. Тошкент шахар  Миробод  тумани Амир Темур шох куча 4 уй
    АТИБ  «Ипотека Банк» Шайхонтохур филиали
(манзил, тел.)
Тел: ${obj.investor_first_phone}  ${obj.investor_two_phone}    
х/р: ${obj.quruchi_shoti_raqami}
          10.05.1993 йил    (банк реквизитлари)
                        МФО  00425              СТИР 304 573 795
 (туғилган санаси)
    

ЖШШ ИР: ${obj.investor_jshr}   
Директор
ўринбосари:                                           Ж.Б.Жабборов
        
  Имзо    М.Ў.  Имзо`
        }
    }




    const byId = (id) => document.getElementById(id).value;

    return (
        <div>
            <div className="input-style">
                <input placeholder="number" type="number" id="number"/>
                <input placeholder="investor_passport_seriya" id="investor_passport_seriya"/>
                <input placeholder="passport_region" id="passport_region"/>
                <input placeholder="passport_date" id="passport_date"/>
                <input placeholder="investor_name" id="investor_name"/>
                <input placeholder="investor_lastname" id="investor_lastname"/>
                <input placeholder="investor_otasini_ismi" id="investor_otasini_ismi"/>
                <input placeholder="uy_address" id="uy_address"/>
                <input placeholder="qavati" id="qavati"/>
                <input placeholder="uy_maydoni" id="uy_maydoni"/>
                <input placeholder="xona_soni" type="number" id="xona_soni"/>
                <input placeholder="kv_raqami" type="number" id="kv_raqami"/>
                <input placeholder="total_price" id="total_price"/>
                <input placeholder="qolgan_price" id="qolgan_price"/>
                <input placeholder="investor_address" id="investor_address"/>
                <input placeholder="investor_first_phone" type="number" id="investor_first_phone"/>
                <input placeholder="investor_two_phone" type="number" id="investor_two_phone"/>
                <input placeholder="birthday" id="birthday"/>
                <input placeholder="investor_jshr" id="investor_jshr"/>
                <input placeholder="quruchi_shoti_raqami" id="quruchi_shoti_raqami"/>
                <input type="data" id="date"/>
                <button onClick={download}>Download</button>
            </div>

        </div>
    );
}

const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint( {
        content: () => componentRef.current,
    });
    return (
        <div>
            <Inpusts ref={componentRef} />
            <button onClick={handlePrint}>print</button>
        </div>
    )
}

export default Inpusts;
