const gTTS = require('gtts');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs')
const pdf = require('pdf-parse');


let c = 0;


// try {
//     var data = fs.readFileSync('./data.txt', 'utf8')
//     //console.log(data.toString())
//     var gtts = new gTTS(data.toString(), 'en');
//     gtts.save('./tmp/hello1.mp3', function (err, result) {
//         if (err) { throw new Error(err) }
//         console.log('Success! Open file /tmp/hello.mp3 to hear result.');
//     });
// } catch (error) {
//     console.log(error)
// }


// async function create(start,end) {
//     let pdfdata = fs.readFileSync('./hellosss.pdf')
//     const pdfDoc = await PDFDocument.load(pdfdata)
//     const pdfDocs = await PDFDocument.create()
//     const [firstDonorPage] = await pdfDocs.copyPages(pdfDoc, [start])
//      const [secondDonorPage] = await pdfDocs.copyPages(pdfDoc,[start+1])
//      const [thirdDonorPage] = await pdfDocs.copyPages(pdfDoc, [start+2])
//      const [fourthDonorPage] = await pdfDocs.copyPages(pdfDoc, [start+3])
//      const [fifthDonorPage] = await pdfDocs.copyPages(pdfDoc, [end])
//     pdfDocs.addPage(firstDonorPage)
//     pdfDocs.insertPage(1,secondDonorPage)
//     pdfDocs.insertPage(2,thirdDonorPage)
//     pdfDocs.insertPage(3,fourthDonorPage)
//     pdfDocs.insertPage(4,fifthDonorPage)
//     const pdfBytesNew = await pdfDocs.save();
//     fs.writeFileSync('extracted_page.pdf', pdfBytesNew);
//     console.log(`Page extracted successfully`);
// }
// create(713,718)
let pdfdata = fs.readFileSync('./extracted_page.pdf')
pdf(pdfdata)
    .then(function (data) {
        fs.writeFileSync('data.txt', data.text, (err) => {
            if (err) {
                console.log(err);
            }
        })
        // let text=data.text.split('\n')
        // console.log(text)
    })