require('cypress-downloadfile/lib/downloadFileCommand')
const pdfLink = `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`

describe('Download Files', () => {

    it('Download a pdf file', () => {
        const dayjs = require('dayjs')
        var currentNow = dayjs().format('YYYYMMDD')

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 
                        'downloadedFiles', 
                        currentNow + " sampleDownload.jpg")
    })

})